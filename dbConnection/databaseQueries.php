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
        return "SELECT DISTINCT name, surname, email
        FROM users JOIN lessonplanssubjects
        ON users.lessonPlanId = lessonplanssubjects.lessonPlanId
        JOIN subjects ON subjects.subjectId = lessonplanssubjects.subjectId
        WHERE subjects.subjectName = ?";
    }

    function get_not_teaching_subjects(){
        return "
                    SELECT subjects.subjectName 
                    FROM subjects
                    LEFT JOIN teachers_with_subjects ON subjects.subjectId = teachers_with_subjects.subjectid
                    WHERE 
                      (teachers_with_subjects.userId != ? OR teachers_with_subjects.userId IS NULL)
                      AND subjects.subjectId NOT IN (
                        SELECT subjectid
                        FROM teachers_with_subjects
                        WHERE userId = ?
                      );";
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

function get_student_email_and_attendance(){
    return "
                SELECT email, wasPresent, attendanceId FROM attendances
                JOIN users ON attendances.userId
                = users.userId JOIN subjects ON
                attendances.subjectId = subjects.subjectId
                WHERE subjectName = ?
                ORDER BY email";
}

    function get_all_students_belonging_to_subject(){
        return "SELECT DISTINCT email from users
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

    function get_attendance_data(){
        return "
                SELECT name, surname, wasPresent, date
                FROM attendances JOIN users ON attendances.userId = users.userId
                WHERE attendanceId = ?";
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

    function get_yours_timetables_id(){
        return "
                SELECT lessonPlanId FROM users
                WHERE userId = ?";
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

    function delete_all_students_from_timetable(){
        return "UPDATE users SET lessonPlanId = null
                WHERE users.lessonPlanId = ?";
    }

    function delete_all_subjects_from_timetable(){
        return "DELETE FROM lessonplanssubjects
                WHERE lessonPlanId = ?";
    }
    function get_not_assigned_to_timetable_students(){
        return "
            SELECT name, surname, email FROM
            users WHERE role = 'student'
            AND lessonPlanId IS NULL";
    }

    function add_student_to_timetable(){
        return "
                UPDATE users SET lessonPlanId = ?
                WHERE email = ?";
    }

    function add_new_timetable(){
        return "INSERT INTO lessonplans () VALUES ()";
    }

    function delete_timetable_from_database(){
        return "DELETE FROM lessonplans WHERE lessonPlanId = ?";
    }

    function add_attendance(){
        return "
            INSERT INTO attendances (date, subjectId, userId, wasPresent)
            VALUES (?, ?, ?, ?)";
    }

    function update_attendance(){
        return "UPDATE attendances SET date = ?,
                wasPresent = ? WHERE attendanceId = ?;";
    }

    function delete_attendance(){
        return "DELETE FROM attendances WHERE attendanceId = ?";
    }

    function add_favourite_element(){
        return "INSERT INTO favourites (elementName, userId)
                VALUES (?, ?)";
    }

    function get_all_favourite_elements(){
        return "SELECT elementName FROM favourites
                WHERE userId = ?";
    }

    function delete_favourite_element(){
        return "DELETE FROM favourites WHERE
                elementName = ?
                AND userId = ?";
    }

    function add_element_to_archive(){
        return "INSERT INTO archives (email, grade, name, surname, subjectName)
                VALUE (?, ?, ?, ?, ?)";
    }

    function get_student_data_by_id(){
        return "SELECT name, surname, email FROM users
                WHERE userId = ?";
    }

    function get_subject_name_by_id(){
        return "SELECT subjectName FROM subjects
                WHERE subjectId = ?";
    }

    function delete_all_grades_from_subject(){
        return "
                DELETE FROM grades WHERE gradeId IN
                (SELECT gradeId FROM grades
                JOIN subjects ON grades.subjectId 
                = subjects.subjectId WHERE subjectName = ?)";
    }

    function delete_all_teachers_subjects(){
        return "
                DELETE FROM teachers_with_subjects
                WHERE subjectId =
                (SELECT subjectid FROM subjects
                WHERE subjectName = ?)";
    }

    function delete_subject_from_all_timetables(){
        return "
                DELETE FROM lessonplanssubjects
                WHERE subjectId =
                (SELECT subjectId FROM subjects
                WHERE subjectName = ?)";
    }

    function get_archive_student_data(){
        return "
                SELECT subjectName, grade FROM archives
                WHERE email = ?";
    }

    function delete_grade_from_archive(){
        return "DELETE FROM archives WHERE
                grade =
                (SELECT grade FROM grades
                WHERE gradeId = ?)
                LIMIT 1";
    }

    function update_grade_in_archive(){
        return "Update archives SET grade = ?
                WHERE grade =
                (SELECT grade FROM grades
                WHERE gradeId = ?)
                LIMIT 1";
    }

    function get_learning_subjects(){
        return "
                SELECT DISTINCT subjectName, subjects.subjectId FROM subjects
                JOIN lessonplanssubjects ON
                lessonplanssubjects.subjectId
                = subjects.subjectId JOIN
                users ON users.lessonPlanId
                = lessonplanssubjects.lessonPlanId
                WHERE userId = ?";
    }

    function get_all_your_grades(){
        return "SELECT dateOfAssessment, description, grade, gradeId
                FROM grades JOIN users ON 
                users.userId = grades.userId
                JOIN subjects ON grades.subjectId
                = subjects.subjectId
                WHERE grades.userId = ? AND subjectName = ?";
    }

    function get_all_your_attendances(){
        return "
                SELECT wasPresent, attendanceId date FROM attendances
                JOIN subjects ON subjects.subjectId = attendances.subjectId
                JOIN users ON users.userId = attendances.userId
                WHERE subjectName = ? AND attendances.userId = ?";
    }
?>
