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
        FROM users JOIN lessonplanssubjects
        ON users.lessonPlanId = lessonplanssubjects.lessonPlanId
        JOIN subjects ON subjects.subjectId = lessonplanssubjects.subjectId
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
                SELECT email, grade, gradeId FROM grades
                JOIN users ON grades.userId
                = users.userId JOIN subjects ON
                grades.subjectId = subjects.subjectId
                WHERE subjectName = ?
                ORDER BY email";
    }

    function get_all_students_belonging_to_subject(){
        return "SELECT email from users
                JOIN lessonplanssubjects ON users.lessonPlanId
                = lessonplanssubjects.lessonPlanId JOIN subjects ON
                lessonplanssubjects.subjectId = subjects.subjectId
                WHERE subjectName = ?";
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
                FROM users JOIN lessonplanssubjects ON
                users.lessonPlanId = lessonplanssubjects.lessonPlanId
                JOIN subjects ON subjects.subjectId = lessonplanssubjects.subjectId
                WHERE email = ? AND
                subjectName = ?";
    }

    function insert_new_grade_to_database(){
        return "
                INSERT INTO grades (grade, description, dateOfAssessment,
                subjectId, userId) VALUES (?, ?, ?, ?, ?)";
    }

    function delete_grade(){
        return "DELETE FROM grades WHERE
                gradeId = ?";
    }

    function get_all_timetables_id(){
        return "
                SELECT DISTINCT lessonPlanId FROM lessonplans
                ";
    }

    function get_timetable_details(){
        return "
                SELECT dayOfWeek, startTime, endTime, subjectName
                FROM lessonplanssubjects JOIN subjects ON subjects.subjectId
                = lessonplanssubjects.subjectId WHERE lessonPlanId = ?
        ";
    }

    function get_all_subjects(){
        return "SELECT subjectName FROM subjects";
    }

    function insert_new_subject(){
        return "INSERT INTO subjects (ectsPoints, semester, subjectName)
                VALUES (?, ?, ?)";
    }

    function delete_subject_from_database(){
        return "DELETE FROM subjects WHERE subjectName = ?";
    }

    function get_subject_by_id(){
        return "SELECT subjectId FROM subjects
                WHERE subjectName = ?";
    }

    function update_timetable_cell(){
        return "
                 UPDATE lessonplanssubjects SET subjectId = ?
                 WHERE startTime = ? AND dayOfWeek = ?
                 AND lessonPlanId = ?";
    }

    function insert_timetable_cell(){
        return "INSERT INTO lessonplanssubjects (dayOfWeek, startTime, lessonPlanId, subjectId)
                VALUES (?, ?, ?, ?)";
    }

    function delete_subject_from_timetable_cell(){
        return "
                DELETE FROM lessonplanssubjects WHERE
                lessonPlanId = ? AND dayOfWeek = ?
                AND startTime = ?";
    }

    function get_students_in_timetable(){
        return "SELECT name, surname, email FROM users
                WHERE lessonPlanId = ?";
    }

    function delete_student_from_timetable(){
        return "
                UPDATE users SET lessonPlanId = null
                WHERE email = ?";
    }

    function get_not_assigned_to_timetable_students(){
        return "
            SELECT name, surname, email FROM
            users WHERE role = 'student'
            AND lessonPlanId IS NULL";
    }

?>
