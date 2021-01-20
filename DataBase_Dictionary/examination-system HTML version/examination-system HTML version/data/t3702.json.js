window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3702","name":"Instructor (Table of Instructors)","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t\t.cs20F235EC{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">This table will have all the details of the </span><span class=\"cs20F235EC\">Instructor </span><span class=\"cs416E45A4\">entity.</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Examination System","id":"d4"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Instructor"},{"field":"Type","value":"Table"},{"field":"Title","value":"Table of Instructors"},{"field":"Status","value":{"value":"Active","type":"LIST_CLOSED","_type":"custom_field"}}],"columns":[{"id":"column-33664","object_id":"column-33664","name":"InstID","name_without_path":"InstID","description":"Instructor ID ","is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33665","object_id":"column-33665","name":"fname","name_without_path":"fname","description":"Instructor’s first name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33666","object_id":"column-33666","name":"lname","name_without_path":"lname","description":"Instructor’s last name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33667","object_id":"column-33667","name":"age","name_without_path":"age","description":"Instructor’s age","is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33668","object_id":"column-33668","name":"address","name_without_path":"address","description":"Instructor’s address","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_Course_Instructor","title":null,"description":null,"is_user_defined":false,"foreign_table":"Course","foreign_table_show_schema":"dbo.Course","foreign_table_verbose":"Course (Table of Courses)","foreign_table_verbose_show_schema":"dbo.Course (Table of Courses)","foreign_table_object_id":"t3695","primary_table":"Instructor","primary_table_show_schema":"dbo.Instructor","primary_table_verbose":"Instructor (Table of Instructors)","primary_table_verbose_show_schema":"dbo.Instructor (Table of Instructors)","primary_table_object_id":"t3702","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"InstID","foreign_column_path":null,"foreign_column":"InstID"}],"custom_fields":{}},{"name":"Regis_Inst_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"Regis_Inst","foreign_table_show_schema":"dbo.Regis_Inst","foreign_table_verbose":"Regis_Inst (Registrar & Instructor)","foreign_table_verbose_show_schema":"dbo.Regis_Inst (Registrar & Instructor)","foreign_table_object_id":"t3704","primary_table":"Instructor","primary_table_show_schema":"dbo.Instructor","primary_table_verbose":"Instructor (Table of Instructors)","primary_table_verbose_show_schema":"dbo.Instructor (Table of Instructors)","primary_table_object_id":"t3702","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"InstID","foreign_column_path":null,"foreign_column":"InstID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Instructor","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"InstID","name":"InstID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"Instructor (Table of Instructors)","object_name_show_schema":"dbo.Instructor (Table of Instructors)","object_type":"TABLE","object_id":"t3702","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"deleteInstructor (Delete an instructor)","object_name_show_schema":"dbo.deleteInstructor (Delete an instructor)","object_type":"PROCEDURE","object_id":"p140","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"getAllInstructors (Retrieve all instructors)","object_name_show_schema":"dbo.getAllInstructors (Retrieve all instructors)","object_type":"PROCEDURE","object_id":"p159","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"insertInstructor (Insert an instructor)","object_name_show_schema":"dbo.insertInstructor (Insert an instructor)","object_type":"PROCEDURE","object_id":"p177","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"updateInstructor (Update Instructor)","object_name_show_schema":"dbo.updateInstructor (Update Instructor)","object_type":"PROCEDURE","object_id":"p195","type":"NORMAL","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"Course (Table of Courses)","object_name_show_schema":"dbo.Course (Table of Courses)","object_type":"TABLE","object_id":"t3695","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Regis_Inst (Registrar & Instructor)","object_name_show_schema":"dbo.Regis_Inst (Registrar & Instructor)","object_type":"TABLE","object_id":"t3704","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2021-01-19 18:45"};