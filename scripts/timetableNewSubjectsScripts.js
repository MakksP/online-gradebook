function get_subjects_from_database_and_add_to_pane() {
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherTimetablesActions/getAllSubjects.php",
        dataType: "json",
        success: function (response) {
            add_existing_subjects_to_pane(response);
            create_delete_subject_button_onclick_action();
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function serve_add_subject_action(new_subject_name, new_subject_ects_points, new_subject_semester) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/addNewSubject.php",
        data: {
            subject_name: new_subject_name,
            ects_points: new_subject_ects_points,
            semester: new_subject_semester
        },
        success: function (response) {
            document.getElementById("edit_subject_pane").remove();
            add_new_appearing_pane_to_main_container(get_edit_subject_pane, create_confirm_new_subject_button_onclick_action,
                "add_new_subject_close_button", "edit_subject_pane");
            get_subjects_from_database_and_add_to_pane();

        },
        error: function (response) {
            console.log(response);
        }
    });
}


function get_subject_to_delete_name(delete_button) {
    return delete_button.closest("div").querySelector(".existing_subject_label #subject_name_span").innerHTML;
}

function delete_subject_from_database_action(subject_to_delete) {
    console.log(subject_to_delete)
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherTimetablesActions/deleteSubject.php",
        data: {
            subject_name: subject_to_delete,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}