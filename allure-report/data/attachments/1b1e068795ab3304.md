# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: database\deTest.spec.ts >> Database Tests >> Create a new student in database
- Location: src\database\deTest.spec.ts:58:9

# Error details

```
Error: Duplicate entry '109' for key 'student.PRIMARY'
```

# Test source

```ts
  1  | import { connection } from './dbConnection';
  2  | 
  3  | export class SQLQUERIES {
  4  |     // Get user by name from database
  5  |     async getUserByName(name: string) {
  6  | 
  7  |         const [rows] = await connection.execute(
  8  |             'SELECT * FROM student WHERE name = ?',
  9  |             [name]
  10 |         );
  11 |         return rows;
  12 |     }
  13 | 
  14 |     // Get students by city from database
  15 |     async getStudentsByCity(city: string) {
  16 |         const [rows] = await connection.execute(
  17 |             'select * from student where city = ?',
  18 |             [city]
  19 |         );
  20 |         return rows;
  21 |     }
  22 | 
  23 |     // Get students by grade from database
  24 |     async getstudentsGrade(grade: string) {
  25 |         const [rows] = await connection.execute(
  26 |             'select * from student where grade = ?',
  27 |             [grade]
  28 |         );
  29 |         return rows;
  30 |     }
  31 | 
  32 |     // Create a new student in database
  33 |     async createStudent(
  34 |         rollno: number,
  35 |         name: string,
  36 |         marks: number,
  37 |         grade: string,
  38 |         city: string
  39 |     ) {
> 40 |         const [result] = await connection.execute(
     |                                           ^ Error: Duplicate entry '109' for key 'student.PRIMARY'
  41 |             'INSERT INTO student (rollno, name, marks, grade, city) Values(?,?,?,?,?)',
  42 |             [rollno, name, marks, grade, city]
  43 |         );
  44 |         return result;
  45 |     }
  46 | 
  47 |     // Update a student's data in the database
  48 |     async updateStudentMarks(rollno: number, marks: number) {
  49 |         const [result] = await connection.execute(
  50 |             'UPDATE student SET marks = ? WHERE rollno = ?',
  51 |             [marks, rollno]
  52 |         );
  53 |         return result;
  54 |     }
  55 | 
  56 |     // Before Delete a student from database add it once again to maintain the data integrity
  57 |     async addStudent(rollno: number, name: string) {
  58 |         const [result] = await connection.execute(
  59 |             'INSERT INTO student (rollno, name) VALUES (?, ?)',
  60 |             [rollno, name]
  61 |         );
  62 |         return result;
  63 |     }
  64 | 
  65 |     async deleteStudent(rollno: number) {
  66 |         try {
  67 |             const [result] = await connection.execute(
  68 |                 'DELETE FROM student WHERE rollno = ?',
  69 |                 [rollno]
  70 |             );
  71 |             return result;
  72 |         } catch (error) {
  73 |             console.error("DB Delete Error:", error);
  74 |             throw error;
  75 |         }
  76 |     }
  77 | 
  78 | 
  79 | 
  80 |     async verifyDbConnection(): Promise<boolean> {
  81 |         try {
  82 |             const [rows] = await connection.query('SELECT 1');
  83 |             console.log('Database Connected Successfully');
  84 |             console.log(rows);
  85 |             return true;
  86 |         } catch (error) {
  87 |             console.error('Database Connection Failed:', error);
  88 |             return false;
  89 |         }
  90 |     }
  91 | 
  92 | 
  93 | }
  94 | 
  95 | 
  96 | 
```