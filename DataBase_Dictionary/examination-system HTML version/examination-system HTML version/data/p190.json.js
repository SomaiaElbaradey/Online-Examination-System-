window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p190","name":"updateDepartment (Update Department)","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Examination System","id":"d4"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"updateDepartment"},{"field":"Type","value":"Procedure"},{"field":"Title","value":"Update Department"},{"field":"Status","value":{"value":"Active","type":"LIST_CLOSED","_type":"custom_field"}}],"script":null,"parameters":[{"name":"ALiasColumnName","description":"Desired Column Name to Update its value in a specific row","mode":"IN","data_type":"varchar(30)","custom_fields":{}},{"name":"ColumnNewValue","description":"The new value assigned to the edited column ","mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"ConditionValue","description":"The simple Primary key related to the desired edited row (Department ID)","mode":"IN","data_type":"varchar(30)","custom_fields":{}}],"dependencies":{"uses":[{"object_name":"updateDepartment (Update Department)","object_name_show_schema":"dbo.updateDepartment (Update Department)","object_type":"PROCEDURE","object_id":"p190","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Department (Table of departments)","object_name_show_schema":"dbo.Department (Table of departments)","object_type":"TABLE","object_id":"t3697","type":"NORMAL","object_user_defined":false,"user_defined":true,"children":[]}]}],"used_by":[]},"imported_at":"2021-01-19 18:45"};