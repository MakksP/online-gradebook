<?php
    function get_logging_in_user_data(){
        return "SELECT password, userId, name, surname, role FROM users WHERE email = ?";
    }

    function get_insert_user_query(){
        return "INSERT INTO users (name, surname, email, password, role) VALUES (?, ?, ?, ?, ?)";
    }

    function get_teaching_subjects(){
        return "SELECT subjectName FROM teachers_with_subjects
                JOIN subjects ON teachers_with_subjects.subjectid 
                                     = subjects.subjectId WHERE userId = ?";
    }
?>
