<?php
    function get_logging_in_user_data(){
        return "SELECT password, userId, name, surname, role FROM users WHERE email = ?";
    }

    function get_insert_user_query(){
        return "INSERT INTO users (name, surname, email, password, role) VALUES (?, ?, ?, ?, ?)";
    }

    function get_teaching_subjects(){
        return "SELECT subjectName, subjects.subjectId FROM teachers_with_subjects
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

    function get_student_email_and_grade(){
        return "
                SELECT email, grade, gradeId FROM users
                LEFT JOIN grades ON grades.userId
                = users.userId JOIN lessonplans ON
                users.lessonPlanId = lessonplans.lessonPlanId
                JOIN subjects ON lessonplans.subjectId = subjects.subjectId
                WHERE subjectName = ?
                ORDER BY email";
    }

    function get_grade_data(){
        return "SELECT name, surname, grade, description, dateOfAssessment
                FROM grades JOIN users ON grades.userId = users.userId
                WHERE gradeId = ?";
    }

    function update_grade(){
        return "
            UPDATE grades SET grade = ?,
            description = ?,
            dateOfAssessment = ?
            WHERE gradeId = ?
            ";
    }

    function delete_subject(){
        return "
                DELETE FROM teachers_with_subjects
                WHERE userId = ? AND subjectId = ?
        ";
    }

    function get_subject_and_user_ids(){
        return "SELECT subjects.subjectId, users.userId, name, surname 
                FROM users JOIN lessonplans ON
                users.lessonPlanId = lessonplans.lessonPlanId
                JOIN subjects ON subjects.subjectId = lessonplans.subjectId
                WHERE email = ? AND
                subjectName = ?";
    }

    function insert_new_grade_to_database(){
        return "
                INSERT INTO grades (grade, description, dateOfAssessment,
                subjectId, userId) VALUES (?, ?, ?, ?, ?)";
    }

?>
