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

    function get_students_by_subject(){
        return "SELECT name, surname, email
        FROM users JOIN lessonplans
        ON users.lessonPlanId = lessonplans.lessonPlanId
        JOIN subjects ON subjects.subjectId = lessonplans.subjectId
        WHERE subjects.subjectName = ?";
    }

    function get_not_teaching_subjects(){
        return "
                SELECT subjectName FROM subjects
                LEFT JOIN teachers_with_subjects ON
                subjects.subjectId = teachers_with_subjects.subjectid
                WHERE userId != ? OR userId IS NULL";
    }

    function assign_subject_to_you(){
        return"
                INSERT INTO teachers_with_subjects
                (subjectId, userid) VALUES ((SELECT subjectId FROM subjects
                WHERE subjectName = ?), ?)";


    }

?>
