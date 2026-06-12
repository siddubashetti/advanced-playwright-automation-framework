import { connection } from './dbConnection';

export class SQLQUERIES {
    // Get user by name from database
    async getUserByName(name: string) {

        const [rows] = await connection.execute(
            'SELECT * FROM student WHERE name = ?',
            [name]
        );
        return rows;
    }

    // Get students by city from database
    async getStudentsByCity(city: string) {
        const [rows] = await connection.execute(
            'select * from student where city = ?',
            [city]
        );
        return rows;
    }

    // Get students by grade from database
    async getstudentsGrade(grade: string) {
        const [rows] = await connection.execute(
            'select * from student where grade = ?',
            [grade]
        );
        return rows;
    }

    // Create a new student in database
    async createStudent(
        rollno: number,
        name: string,
        marks: number,
        grade: string,
        city: string
    ) {
        const [result] = await connection.execute(
            'INSERT INTO student (rollno, name, marks, grade, city) Values(?,?,?,?,?)',
            [rollno, name, marks, grade, city]
        );
        return result;
    }

    // Update a student's data in the database
    async updateStudentMarks(rollno: number, marks: number) {
        const [result] = await connection.execute(
            'UPDATE student SET marks = ? WHERE rollno = ?',
            [marks, rollno]
        );
        return result;
    }

    // Delete a student from database
    async deleteStudent(rollno: number) {
        const [result] = await connection.execute(
            'DELETE FROM student WHERE rollno = ?',
            [rollno]
        );
        return result;
    }
}


