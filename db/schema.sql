DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    city VARCHAR(255),
    company VARCHAR(255),
    email VARCHAR(255),
    pic TEXT,
    skill VARCHAR(255)
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    score INTEGER DEFAULT 0,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE
);

-- SELECT * FROM grades WHERE student_id = $1;
CREATE INDEX grades_student_id ON grades(student_id);