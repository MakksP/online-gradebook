

function clear_subjects_to_add_pane() {
    const subjects_to_add_pane = document.getElementById("subjects_table");
    if (subjects_to_add_pane != null) {
        subjects_to_add_pane.remove();
    }
}


function repaint_subjects_table() {
    $.ajax({
        type: "GET",
        url: "../serverActions/getAndDrawSubjectsForRequest.php",
        success: function (response) {
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function send_add_subject_to_teacher_request(subject_name) {
    $.ajax({
        type: "POST",
        url: "../serverActions/addSubjectToTeacher.php",
        data: {subject_tag: subject_name},
        success: function (response) {
            document.getElementById(subject_name).remove();
            repaint_subjects_table();

            assign_not_teaching_buttons_action();
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function get_not_teaching_subjects_pane() {
    $.ajax({
        type: "GET",
        url: "../serverActions/getNotTeachingSubjects.php",
        success: function (response) {
            clear_subjects_to_add_pane();
            const main_container = document.getElementById("main_container");
            main_container.insertAdjacentHTML("beforeend", get_subjects_to_add_pane(response))

            document.getElementById("close_pane_button").onclick = function () {
                clear_subjects_to_add_pane();
            }
            assign_not_teaching_buttons_action();
        },
        error: function (response) {
            console.log(response);
        }
    });
}


function logout(){

    $.ajax({
        type: "GET",
        url: "../serverActions/logoutAction.php",
        success: function (response){
            window.location.href = "./startPage.php";
        },
        error: function (response){
            console.log(response);
        }
    });

}

