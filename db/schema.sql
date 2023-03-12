DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS instructors;
DROP TABLE IF EXISTS students;
DROP INDEX IF EXISTS grades_student_id;
DROP INDEX IF EXISTS students_in_classroom;

CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    instructor_name VARCHAR(255)
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    city VARCHAR(255),
    company VARCHAR(255),
    email VARCHAR(255),
    pic TEXT,
    skill VARCHAR(255),
    instructor_id INTEGER REFERENCES instructors(id) ON DELETE CASCADE
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    score INTEGER DEFAULT 0,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE
);

-- SELECT * FROM grades WHERE student_id = $1;
-- SELECT * FROM grades WHERE student_id = 2; // => shows all grades for students with student_id `2`
CREATE INDEX grades_student_id ON grades(student_id);

-- SELECT * FROM students WHERE instructor_id = $1;
-- SELECT * FROM students WHERE instructor_id = 2; // => shows all students in classroom `2`
CREATE INDEX students_in_classroom ON students(instructor_id);