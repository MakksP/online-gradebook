const add_new_grade_buttons = document.getElementsByClassName("new_grade_button");



function create_add_new_grade_button_onclick_action(){
    Array.from(add_new_grade_buttons).forEach(button => button.onclick = function (){
        const student_email = get_student_email_from_student_label_div(button);
        const subject_name = get_current_subject_name()
        serve_add_grade_action(student_email, subject_name);
    });
}

function init_student_grade_on_click_action(student_grade_buttons) {
    student_grade_buttons = document.getElementsByClassName("grade_button");

    for (let student_grade_button_index = 0; student_grade_button_index < student_grade_buttons.length; student_grade_button_index += 1) {

        if (student_grade_buttons[student_grade_button_index] != null) {
            student_grade_buttons[student_grade_button_index].onclick = function () {
                create_grade_edit_pane(student_grade_buttons[student_grade_button_index].id)

            }
        }
    }
    return student_grade_buttons;
}


function create_change_grade_button_onclick_action(available_grades_buttons, grade, name, surname, grade_id) {
    available_grades_buttons.forEach(button => button.onclick = function () {
        const description_and_date = get_current_grade_description_and_date();
        document.getElementById("grade_edit_pane").remove();
        grade = get_grade_value_of_pressed_button(button);
        repaint_grade_edit_pane(name, surname, grade, description_and_date.description, description_and_date.date, grade_id);
    });
    return {available_grades_buttons, grade};
}


function create_save_button_onclick_action(grade, grade_id) {
    document.getElementById("save_changes_button").onclick = function () {
        const description_and_date = get_current_grade_description_and_date();
        update_grade(grade_id, grade, description_and_date);
        repaint_subject_table_dynamic_content();
    }
}


function available_grade_button_onclick_action() {
    Array.from(document.getElementsByClassName("available_grade_button")).forEach(button => {
        button.onclick = function () {
            let grade = button.getElementsByTagName("label")[0].innerHTML;
            change_chosen_grade_value_in_label(grade);
        }
    });
}

function create_save_grade_button_onclick_action(response) {
    document.getElementById("save_grade_button").onclick = function () {
        let grade = document.getElementById("chosen_grade_label").innerHTML;
        let description = document.getElementById("add_grade_pane_description_input").value;
        let date = document.getElementById("add_grade_pane_date_input").value;
        add_grade_to_database(grade, description, date, response);
        repaint_subject_table_dynamic_content();
        document.getElementById("add_grade_pane").remove();
    }
}

function create_delete_grade_button_onclick_action(grade_id) {
    document.getElementById("delete_grade_button").onclick = function () {
        $.ajax({
            type: "POST",
            url: "../serverActions/teacherGradesActions/deleteGrade.php",
            data: {grade_id: grade_id},
            success: function (response){
                console.log(response);
                repaint_subject_table_dynamic_content();
                document.getElementById("grade_edit_pane").remove();
            },
            error: function (response){
                console.log(response);
            }
        });
    }
}