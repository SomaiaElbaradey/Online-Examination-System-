window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3709","name":"Stud_Exam (Student & Exam)","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t\t.cs20F235EC{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">This table will have all the details of the &ldquo;</span><span class=\"cs20F235EC\">Student </span><span class=\"cs416E45A4\">&amp; </span><span class=\"cs20F235EC\">Exam</span><span class=\"cs416E45A4\">&rdquo; relationship.</span></p><p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Many (</span><span class=\"cs20F235EC\">Student</span><span class=\"cs416E45A4\">) to many (</span><span class=\"cs20F235EC\">Exam</span><span class=\"cs416E45A4\">)</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Examination System","id":"d4"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Stud_Exam"},{"field":"Type","value":"Table"},{"field":"Title","value":"Student & Exam"},{"field":"Status","value":{"value":"Active","type":"LIST_CLOSED","_type":"custom_field"}}],"columns":[{"id":"column-33695","object_id":"column-33695","name":"StudID","name_without_path":"StudID","description":"Student ID","is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3710","name":"Student (Table of Students)","name_show_schema":"dbo.Student (Table of Students)"}]},{"id":"column-33696","object_id":"column-33696","name":"ExamID","name_without_path":"ExamID","description":"Exam ID","is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3700","name":"Exam (Table of Exams)","name_show_schema":"dbo.Exam (Table of Exams)"}]},{"id":"column-33697","object_id":"column-33697","name":"Grade","name_without_path":"Grade","description":"Student(StudID)’s grade in exam (ExamID)","is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33698","object_id":"column-33698","name":"Date_Of_Insertion","name_without_path":"Date_Of_Insertion","description":"Define the date when the student (StudID) took/ will take the exam(ExamID)","is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"Stud_Exam_FK2","title":null,"description":null,"is_user_defined":false,"foreign_table":"Stud_Exam","foreign_table_show_schema":"dbo.Stud_Exam","foreign_table_verbose":"Stud_Exam (Student & Exam)","foreign_table_verbose_show_schema":"dbo.Stud_Exam (Student & Exam)","foreign_table_object_id":"t3709","primary_table":"Exam","primary_table_show_schema":"dbo.Exam","primary_table_verbose":"Exam (Table of Exams)","primary_table_verbose_show_schema":"dbo.Exam (Table of Exams)","primary_table_object_id":"t3700","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ExamID","foreign_column_path":null,"foreign_column":"ExamID"}],"custom_fields":{}},{"name":"Stud_Exam_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"Stud_Exam","foreign_table_show_schema":"dbo.Stud_Exam","foreign_table_verbose":"Stud_Exam (Student & Exam)","foreign_table_verbose_show_schema":"dbo.Stud_Exam (Student & Exam)","foreign_table_object_id":"t3709","primary_table":"Student","primary_table_show_schema":"dbo.Student","primary_table_verbose":"Student (Table of Students)","primary_table_verbose_show_schema":"dbo.Student (Table of Students)","primary_table_object_id":"t3710","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SID","foreign_column_path":null,"foreign_column":"StudID"}],"custom_fields":{}}],"unique_keys":[{"name":"Stud_Exam_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"StudID","name":"StudID"},{"path":null,"name_without_path":"ExamID","name":"ExamID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"Stud_Exam (Student & Exam)","object_name_show_schema":"dbo.Stud_Exam (Student & Exam)","object_type":"TABLE","object_id":"t3709","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Exam (Table of Exams)","object_name_show_schema":"dbo.Exam (Table of Exams)","object_type":"TABLE","object_id":"t3700","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Student (Table of Students)","object_name_show_schema":"dbo.Student (Table of Students)","object_type":"TABLE","object_id":"t3710","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"Stud_Exam (Student & Exam)","object_name_show_schema":"dbo.Stud_Exam (Student & Exam)","object_type":"TABLE","object_id":"t3709","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"deleteStudentperExam (Delete student per exam)","object_name_show_schema":"dbo.deleteStudentperExam (Delete student per exam)","object_type":"PROCEDURE","object_id":"p148","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"getAllStudentsperExams (Retrieve all students per exam)","object_name_show_schema":"dbo.getAllStudentsperExams (Retrieve all students per exam)","object_type":"PROCEDURE","object_id":"p167","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"insertStudentperExam (Insert Student per Exam)","object_name_show_schema":"dbo.insertStudentperExam (Insert Student per Exam)","object_type":"PROCEDURE","object_id":"p185","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"updateStudentperExam (Update Student per Exam)","object_name_show_schema":"dbo.updateStudentperExam (Update Student per Exam)","object_type":"PROCEDURE","object_id":"p203","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2021-01-19 18:45"};