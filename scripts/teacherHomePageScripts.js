const subjects_buttons = document.getElementsByClassName("subject_button");
const add_subject_button = document.getElementById("new_subject_button");
const ADD_SUBJECT_BUTTON = 1;

add_subject_button.onclick = function (){
    $.ajax({
       type: "GET",
       url: "../serverActions/getNotTeachingSubjects.php",
       success: function (response){
           const main_container = document.getElementById("main_container");
           main_container.innerHTML += `
                                    <div id='subjects_to_add_pane'>
                                        <label id="subjects_to_add_pane_header">Możliwe przedmioty do dodania:</label>
                                        <button id="close_pane_button"><i class="icon-cancel-circled"></i></button>
                                        ${response}
                                    </div>
                                    `
           document.getElementById("close_pane_button").onclick = function (){
               document.getElementById("subjects_to_add_pane").remove();
           }
       },
       error: function (response){

       }
    });
}

function draw_students_labels_in_subject(button_text, button_index) {
    $.ajax({
        type: "GET",
        url: "../serverActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            let student_labels = response;
            document.getElementById("header_text").innerHTML = subjects_buttons[button_index].innerHTML;
            document.getElementById("subjects_table").innerHTML =
                `<div class="gradebook_grid_element" id="student_names">
                    <label class="gradebook_grid_header">Studenci:</label>
                    ${student_labels}
                </div>`;

        },
        error: function (response) {
        }
    });
}

for (let button_index = 0; button_index < subjects_buttons.length - ADD_SUBJECT_BUTTON; button_index+=1){
    subjects_buttons[button_index].onclick = function () {
        const button_text = subjects_buttons[button_index].innerHTML;
        draw_students_labels_in_subject(button_text, button_index);
    }
}

