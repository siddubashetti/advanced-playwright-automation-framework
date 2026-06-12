import { test, expect } from '@playwright/test';
import { SQLQUERIES } from './userQueries';

const sqlQueries = new SQLQUERIES();

test.describe('Database Tests', () => {
    // Get user by name from database and validating the response
    test('Get user by name from database', async () => {
        const student: any = await sqlQueries.getUserByName('anil');
        console.log(student);

        expect(student.length).toBeGreaterThan(0);
        expect(student[0].name).toBe('anil');
        expect(student[0]).toHaveProperty('rollno', 101);
        expect(student[0]).toHaveProperty('city', 'Pune');
    })

    // Get students by city from database and validating the response
    test('Get students by city from database', async () => {
        const student: any = await sqlQueries.getStudentsByCity('Mumbai');
        console.log(student);

        expect(student[0].name).toBe('bhumika')
        expect(student[0].city).toBe('Mumbai')
        expect(student[0]).toHaveProperty('rollno', 102)

        expect(student[1].name).toBe('chetan')
        expect(student[1].city).toBe('Mumbai')
        expect(student[1]).toHaveProperty('rollno', 103)

    })

    // Get students by grade from database and validating the response
    test("Get students by grade from database", async () => {
        const students: any = await sqlQueries.getstudentsGrade('A');
        console.log(students);

        expect(students[0].name).toBe('bhumika')
        expect(students[0].marks).toBe(93)
        expect(students[0].rollno).toBe(102)

        expect(students[1]).toHaveProperty('name', 'dhruv')
        expect(students[1]).toHaveProperty('rollno', 104)
        expect(students[1]).toHaveProperty('city', 'Delhi')

    })

    // Create a new student in database and validating the response
    test("Create a new student in database", async () => {
        const result: any = await sqlQueries.createStudent(109, 'siddu', 88, 'A', 'Bangalore');
        console.log(result);
        expect(result.affectedRows).toBe(1);

    })

    // Update a student's data in the database and validating the response
    test("updating a student data", async () => {
        const student: any = await sqlQueries.updateStudentMarks(108, 10);
        console.log(student);

    })

    // Delete a student from database and validating the response
    test("delete a student from database", async () => {
        const result: any = await sqlQueries.deleteStudent(109);
        console.log(result);
        expect(result.affectedRows).toBe(1);
    })
})