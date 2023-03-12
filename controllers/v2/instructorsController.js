const express = require('express');
const { 
    getAllInstructors,
    getAllInstructorsWithStudents
} = require('../../queries/v2/instructorsQueriesV2');

const instructorsController = express.Router();

// get all instructors with students
// Example: http://localhost:8888/v2/instructors?include=students
instructorsController.get('/', async (request, response) => {
    try {
      const { include } = request.query;
      if (include === 'students') {
        // embed the students
        const students = await getAllInstructorsWithStudents();
        return response.status(200).json({ data: students });
      } else {
        const students = await getAllInstructors();
        return response.status(200).json({ data: students });
      }
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  });

module.exports = instructorsController;