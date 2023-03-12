const db = require('../../db');

// get all instructors
const getAllInstructors = async () => {
    const allInstructors = await db.any('SELECT * FROM instructors');
    return allInstructors;
  };

// get all students by instructor_id
const getAllStudentsByInstructorId = async (id) => {
  const classmates = await db.any('SELECT * FROM students WHERE instructor_id = $1', [id]);
  return classmates;
};

// get all instructors with students
const getAllInstructorsWithStudents = async () => {
    // get all instructors
    const instructors = await getAllInstructors();
    // for each instructor...
    for (const instructor of instructors) {
      // get the instructor's id
      const { id } = instructor;
      // call getAllStudentsByInstructorId to get that instructor's students
      const students = await getAllStudentsByInstructorId(id);
      // add student to instructor
      instructor.students = students;
    }
  
    // return results
    return instructors;
  };

module.exports = {
    getAllInstructors,
    getAllStudentsByInstructorId,
    getAllInstructorsWithStudents
};
