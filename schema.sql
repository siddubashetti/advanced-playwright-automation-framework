CREATE TABLE IF NOT EXISTS student (
    rollno INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    marks INT,
    grade VARCHAR(10)
);

INSERT INTO student (name, city, marks, grade)
VALUES
('Siddu', 'Bangalore', 95, 'A'),
('Ramesh', 'Hyderabad', 85, 'B'),
('Suresh', 'Mysore', 75, 'C');