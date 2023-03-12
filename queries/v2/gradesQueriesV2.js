// const gradesDataV2 = require('../../data/v2/gradesDataV2.json');
// import db
const db = require('../../db');

const getGradesByStudentIdV2 = async (id) => {
  const grades = await db.any('SELECT * FROM grades WHERE student_id = $1', [id]);
  return grades;
};

module.exports = {
  getGradesByStudentIdV2,
};
