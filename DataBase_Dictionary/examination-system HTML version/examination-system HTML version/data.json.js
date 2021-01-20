window.repository = {"title": "Examination System","license": "trial","license_expires_at": "2021-02-02","exported_at": "2021-01-20 11:43","structure": [{"id": "d4","object_id": "d4","type": "documentation","name": "Examination System","subtype": null,"is_user_defined": false,"children": [{"id": "d4t","object_id": "d4t","type": "tables","name": "Tables","subtype": null,"is_user_defined": false,"children": [{"id": "t3694","object_id": "t3694","type": "table","name": "Answer (Table of Answers)","subtype": "TABLE","is_user_defined": false,"columns": ["AnsId","AnsText","QID"],},{"id": "t3695","object_id": "t3695","type": "table","name": "Course (Table of Courses)","subtype": "TABLE","is_user_defined": false,"columns": ["CrsID","CrsName","InstID"],},{"id": "t3696","object_id": "t3696","type": "table","name": "Course_Topics (Course & Topic)","subtype": "TABLE","is_user_defined": false,"columns": ["TopicID","CourseID"],},{"id": "t3697","object_id": "t3697","type": "table","name": "Department (Table of departments)","subtype": "TABLE","is_user_defined": false,"columns": ["DeptId","DeptName"],},{"id": "t3698","object_id": "t3698","type": "table","name": "Dept_Course (Department & Course)","subtype": "TABLE","is_user_defined": false,"columns": ["CourseID","DeptID","Date_Of_Insertion"],},{"id": "t3699","object_id": "t3699","type": "table","name": "Dept_Stud (Departments & Students)","subtype": "TABLE","is_user_defined": false,"columns": ["StudID","DeptID","Date_Of_Insertion"],},{"id": "t3700","object_id": "t3700","type": "table","name": "Exam (Table of Exams)","subtype": "TABLE","is_user_defined": false,"columns": ["ExamID","ExamTitle","Duration","date"],},{"id": "t3701","object_id": "t3701","type": "table","name": "Exam_Ques (Exam & Question)","subtype": "TABLE","is_user_defined": false,"columns": ["QuesID","ExamID"],},{"id": "t3702","object_id": "t3702","type": "table","name": "Instructor (Table of Instructors)","subtype": "TABLE","is_user_defined": false,"columns": ["InstID","fname","lname","age","address"],},{"id": "t3703","object_id": "t3703","type": "table","name": "Question (Table of Questions)","subtype": "TABLE","is_user_defined": false,"columns": ["QID","QuesText","Type","ModelAns","CrsID","advLevel"],},{"id": "t3704","object_id": "t3704","type": "table","name": "Regis_Inst (Registrar & Instructor)","subtype": "TABLE","is_user_defined": false,"columns": ["InstID","RegisID","Date_Of_Insertion"],},{"id": "t3705","object_id": "t3705","type": "table","name": "Regis_Stud (Registrar & Student)","subtype": "TABLE","is_user_defined": false,"columns": ["StudId","RegisID","Date_Of_Insertion"],},{"id": "t3706","object_id": "t3706","type": "table","name": "Registrar (Table of users information (Registeration))","subtype": "TABLE","is_user_defined": false,"columns": ["RegID","Email","username","password","usertype"],},{"id": "t3707","object_id": "t3707","type": "table","name": "St_exam_Q_A (Student & Exam & Question)","subtype": "TABLE","is_user_defined": false,"columns": ["StudID","ExamID","QuesID","Grade","Answer"],},{"id": "t3708","object_id": "t3708","type": "table","name": "Stud_Course (Student & Course)","subtype": "TABLE","is_user_defined": false,"columns": ["StudID","CourseID","FullGrade","Progress"],},{"id": "t3709","object_id": "t3709","type": "table","name": "Stud_Exam (Student & Exam)","subtype": "TABLE","is_user_defined": false,"columns": ["StudID","ExamID","Grade","Date_Of_Insertion"],},{"id": "t3710","object_id": "t3710","type": "table","name": "Student (Table of Students)","subtype": "TABLE","is_user_defined": false,"columns": ["SID","fname","lname","age","address"],},{"id": "t3711","object_id": "t3711","type": "table","name": "Topic (Table of Topics)","subtype": "TABLE","is_user_defined": false,"columns": ["TID","TopName"],},]},{"id": "d4p","object_id": "d4p","type": "procedures","name": "Procedures","subtype": null,"is_user_defined": false,"children": [{"id": "p132","object_id": "p132","type": "procedure","name": "deleteAnswer (Delete an answer)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p133","object_id": "p133","type": "procedure","name": "deleteCourse (Delete a course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p134","object_id": "p134","type": "procedure","name": "deleteCourseTopic (Delete a topic in a course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p135","object_id": "p135","type": "procedure","name": "deleteDepartment (Delete a department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p136","object_id": "p136","type": "procedure","name": "deletedepartmentCourse (Delete a course in a department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p137","object_id": "p137","type": "procedure","name": "deleteDepartmentStudent (Delete a student in a department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p138","object_id": "p138","type": "procedure","name": "deleteExam (Delete an exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p139","object_id": "p139","type": "procedure","name": "deleteExamQuestion (Delete a question in an exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p140","object_id": "p140","type": "procedure","name": "deleteInstructor (Delete an instructor)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p141","object_id": "p141","type": "procedure","name": "deleteQuestion (Delete a question)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p142","object_id": "p142","type": "procedure","name": "deleteRegisterInstructor (delete an instructor user)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p143","object_id": "p143","type": "procedure","name": "deleteRegisterStudent (Delete a student user)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p144","object_id": "p144","type": "procedure","name": "deleteRigstrar (delete user information)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p145","object_id": "p145","type": "procedure","name": "deleteStudent (Delete a student)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p146","object_id": "p146","type": "procedure","name": "deleteStudentExamQuestionGradeAnswer (Delete a row in St_exam_Q_A table )","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p147","object_id": "p147","type": "procedure","name": "deleteStudentperCourse (Delete student per course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p148","object_id": "p148","type": "procedure","name": "deleteStudentperExam (Delete student per exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p149","object_id": "p149","type": "procedure","name": "deleteTopic (Delete a topic)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p205","object_id": "p205","type": "procedure","name": "examAnswer (Student' Answers of the exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p206","object_id": "p206","type": "procedure","name": "examCorrection (Exam Correction)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p150","object_id": "p150","type": "procedure","name": "examGeneration (Exam Generation)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p151","object_id": "p151","type": "procedure","name": "getAllAnswers (Retrieve all answers)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p152","object_id": "p152","type": "procedure","name": "getAllCourses (Retrieve all Courses)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p153","object_id": "p153","type": "procedure","name": "getAllCoursesTopics (Retrieve all topics of a course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p154","object_id": "p154","type": "procedure","name": "getAllDepartments (Retrieve all departments)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p155","object_id": "p155","type": "procedure","name": "getAllDepartmentscourse (Retrieve all courses per department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p156","object_id": "p156","type": "procedure","name": "getAllDepartmentsStudents (Retrieve all students per department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p157","object_id": "p157","type": "procedure","name": "getAllExams (Retrieve all exams)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p158","object_id": "p158","type": "procedure","name": "getAllExamsQuestions (Retrieve all questions per exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p159","object_id": "p159","type": "procedure","name": "getAllInstructors (Retrieve all instructors)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p160","object_id": "p160","type": "procedure","name": "getAllQuestions (Retrieve all questions)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p161","object_id": "p161","type": "procedure","name": "getAllRegisterInstructors (Retrieve all instructors and their the user ids)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p162","object_id": "p162","type": "procedure","name": "getAllRegisterStudents (Retrieve all students and their the user ids)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p163","object_id": "p163","type": "procedure","name": "getAllRegistrars (Retrieve all user's info)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p164","object_id": "p164","type": "procedure","name": "getAllStudents (Retrieve all students)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p165","object_id": "p165","type": "procedure","name": "getAllStudentsExamsQuestionsGradesAnswers (Retrieve all exams' answers for students)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p166","object_id": "p166","type": "procedure","name": "getAllStudentsperCourses (Retrieve all students per courses)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p167","object_id": "p167","type": "procedure","name": "getAllStudentsperExams (Retrieve all students per exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p168","object_id": "p168","type": "procedure","name": "getAllTopics (Retreive all Topics)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p169","object_id": "p169","type": "procedure","name": "insertAnswer (Insert an answer)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p170","object_id": "p170","type": "procedure","name": "insertCourse (Insert a course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p171","object_id": "p171","type": "procedure","name": "insertCourseTopic (Insert a topic in a course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p172","object_id": "p172","type": "procedure","name": "insertDepartment (Insert a department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p173","object_id": "p173","type": "procedure","name": "insertDepartmentCourse (Insert a course in a department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p174","object_id": "p174","type": "procedure","name": "insertDepartmentStudent (insert a student in a student)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p175","object_id": "p175","type": "procedure","name": "insertExam (Insert an exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p176","object_id": "p176","type": "procedure","name": "insertExamQuestion (Insert a question in an exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p177","object_id": "p177","type": "procedure","name": "insertInstructor (Insert an instructor)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p178","object_id": "p178","type": "procedure","name": "insertQuestion (Insert a question)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p179","object_id": "p179","type": "procedure","name": "insertRegisterInstructor (Insert an Instructor user)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p180","object_id": "p180","type": "procedure","name": "insertRegisterStudent (Insert a student user)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p181","object_id": "p181","type": "procedure","name": "insertRegistrar (Insert a user's  info)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p182","object_id": "p182","type": "procedure","name": "insertStudent (Insert a student)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p183","object_id": "p183","type": "procedure","name": "insertStudentExamQuestionGradeAnswer (Insert a student's answer in an Exam's Question)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p184","object_id": "p184","type": "procedure","name": "insertStudentperCourse (Insert a student per course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p185","object_id": "p185","type": "procedure","name": "insertStudentperExam (Insert Student per Exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p186","object_id": "p186","type": "procedure","name": "insertTopic (Insert topic)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p207","object_id": "p207","type": "procedure","name": "NCourse_NumStud","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p208","object_id": "p208","type": "procedure","name": "questions","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p209","object_id": "p209","type": "procedure","name": "questions_studAnswer","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p210","object_id": "p210","type": "procedure","name": "stud_grade","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p211","object_id": "p211","type": "procedure","name": "stud_info","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p212","object_id": "p212","type": "procedure","name": "topics","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p187","object_id": "p187","type": "procedure","name": "updateAnswer (Update Answer)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p188","object_id": "p188","type": "procedure","name": "updateCourse (Update Course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p189","object_id": "p189","type": "procedure","name": "updateCourseTopic (Update Course Topic)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p190","object_id": "p190","type": "procedure","name": "updateDepartment (Update Department)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p191","object_id": "p191","type": "procedure","name": "updateDepartmentCourse (Update Department Course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p192","object_id": "p192","type": "procedure","name": "updateDepartmentStudent (Update Department Student)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p193","object_id": "p193","type": "procedure","name": "updateExam (Update Exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p194","object_id": "p194","type": "procedure","name": "updateExamQuestion (Update Exam Question)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p195","object_id": "p195","type": "procedure","name": "updateInstructor (Update Instructor)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p196","object_id": "p196","type": "procedure","name": "updateQuestion (Update Question)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p197","object_id": "p197","type": "procedure","name": "updateRegisterInstructor (Update Registered Instructor)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p198","object_id": "p198","type": "procedure","name": "updateRegisterStudent (Update Registered Student)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p199","object_id": "p199","type": "procedure","name": "updateRegistrar (Update Registration)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p200","object_id": "p200","type": "procedure","name": "updateStudent (Update Student)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p201","object_id": "p201","type": "procedure","name": "updateStudentExamQuestionGradeAnswer (Update Student Exam Question Grade Answer)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p202","object_id": "p202","type": "procedure","name": "updateStudentperCourse (Update Student per Course)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p203","object_id": "p203","type": "procedure","name": "updateStudentperExam (Update Student per Exam)","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p204","object_id": "p204","type": "procedure","name": "updateTopic (Update Topic)","subtype": "PROCEDURE","is_user_defined": false,},]},]},],"objects": {"d4": { _ref: "data/d4.json.js" },"d4t": { _ref: "data/d4t.json.js" },"d4p": { _ref: "data/d4p.json.js" },"p157": { _ref: "data/p157.json.js" },"p181": { _ref: "data/p181.json.js" },"p147": { _ref: "data/p147.json.js" },"p169": { _ref: "data/p169.json.js" },"p135": { _ref: "data/p135.json.js" },"p187": { _ref: "data/p187.json.js" },"p158": { _ref: "data/p158.json.js" },"p148": { _ref: "data/p148.json.js" },"p136": { _ref: "data/p136.json.js" },"p170": { _ref: "data/p170.json.js" },"p182": { _ref: "data/p182.json.js" },"p188": { _ref: "data/p188.json.js" },"p159": { _ref: "data/p159.json.js" },"p149": { _ref: "data/p149.json.js" },"p137": { _ref: "data/p137.json.js" },"p189": { _ref: "data/p189.json.js" },"p183": { _ref: "data/p183.json.js" },"p171": { _ref: "data/p171.json.js" },"p160": { _ref: "data/p160.json.js" },"p184": { _ref: "data/p184.json.js" },"p205": { _ref: "data/p205.json.js" },"p138": { _ref: "data/p138.json.js" },"t3694": { _ref: "data/t3694.json.js" },"p190": { _ref: "data/p190.json.js" },"t3703": { _ref: "data/t3703.json.js" },"p161": { _ref: "data/p161.json.js" },"p172": { _ref: "data/p172.json.js" },"p185": { _ref: "data/p185.json.js" },"p191": { _ref: "data/p191.json.js" },"p162": { _ref: "data/p162.json.js" },"p173": { _ref: "data/p173.json.js" },"p139": { _ref: "data/p139.json.js" },"p186": { _ref: "data/p186.json.js" },"p206": { _ref: "data/p206.json.js" },"p174": { _ref: "data/p174.json.js" },"p140": { _ref: "data/p140.json.js" },"p163": { _ref: "data/p163.json.js" },"p192": { _ref: "data/p192.json.js" },"p207": { _ref: "data/p207.json.js" },"p150": { _ref: "data/p150.json.js" },"p193": { _ref: "data/p193.json.js" },"t3704": { _ref: "data/t3704.json.js" },"p175": { _ref: "data/p175.json.js" },"p164": { _ref: "data/p164.json.js" },"p141": { _ref: "data/p141.json.js" },"p208": { _ref: "data/p208.json.js" },"p176": { _ref: "data/p176.json.js" },"p194": { _ref: "data/p194.json.js" },"p142": { _ref: "data/p142.json.js" },"p151": { _ref: "data/p151.json.js" },"p165": { _ref: "data/p165.json.js" },"p177": { _ref: "data/p177.json.js" },"t3695": { _ref: "data/t3695.json.js" },"p143": { _ref: "data/p143.json.js" },"p209": { _ref: "data/p209.json.js" },"p195": { _ref: "data/p195.json.js" },"p152": { _ref: "data/p152.json.js" },"p166": { _ref: "data/p166.json.js" },"p178": { _ref: "data/p178.json.js" },"p196": { _ref: "data/p196.json.js" },"t3705": { _ref: "data/t3705.json.js" },"p144": { _ref: "data/p144.json.js" },"p167": { _ref: "data/p167.json.js" },"p153": { _ref: "data/p153.json.js" },"p210": { _ref: "data/p210.json.js" },"p179": { _ref: "data/p179.json.js" },"p197": { _ref: "data/p197.json.js" },"p154": { _ref: "data/p154.json.js" },"p168": { _ref: "data/p168.json.js" },"p145": { _ref: "data/p145.json.js" },"p180": { _ref: "data/p180.json.js" },"p199": { _ref: "data/p199.json.js" },"p211": { _ref: "data/p211.json.js" },"p155": { _ref: "data/p155.json.js" },"t3696": { _ref: "data/t3696.json.js" },"p198": { _ref: "data/p198.json.js" },"p146": { _ref: "data/p146.json.js" },"t3706": { _ref: "data/t3706.json.js" },"p200": { _ref: "data/p200.json.js" },"p156": { _ref: "data/p156.json.js" },"p212": { _ref: "data/p212.json.js" },"p201": { _ref: "data/p201.json.js" },"p202": { _ref: "data/p202.json.js" },"t3698": { _ref: "data/t3698.json.js" },"t3710": { _ref: "data/t3710.json.js" },"t3697": { _ref: "data/t3697.json.js" },"p203": { _ref: "data/p203.json.js" },"p204": { _ref: "data/p204.json.js" },"t3707": { _ref: "data/t3707.json.js" },"t3711": { _ref: "data/t3711.json.js" },"t3699": { _ref: "data/t3699.json.js" },"p132": { _ref: "data/p132.json.js" },"p133": { _ref: "data/p133.json.js" },"t3708": { _ref: "data/t3708.json.js" },"p134": { _ref: "data/p134.json.js" },"t3700": { _ref: "data/t3700.json.js" },"t3709": { _ref: "data/t3709.json.js" },"t3701": { _ref: "data/t3701.json.js" },"t3702": { _ref: "data/t3702.json.js" },}};