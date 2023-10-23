const buttons = document.getElementsByClassName("subject_button");

const ADD_SUBJECT_BUTTON = 1;
for (let button_index = 0; button_index < buttons.length - ADD_SUBJECT_BUTTON; button_index+=1){
    buttons[button_index].onclick = function (){
        document.getElementById("header_text").innerHTML = buttons[button_index].innerHTML;
        document.getElementById("subjects_table").innerHTML =
            `<div class="gradebook_grid_element" id="student_names">
                <label class="gradebook_grid_header">Studenci:</label>
            </div>`;
    }
}

