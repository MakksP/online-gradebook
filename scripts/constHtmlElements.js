function get_subjects_to_add_pane(response) {
    return `<div id='subjects_to_add_pane'>
               <label id="subjects_to_add_pane_header">Możliwe przedmioty do dodania:</label>
               <button id="close_pane_button"><i class="icon-cancel-circled"></i></button>
               ${response}
           </div>`;
}

function get_students_list_div(student_labels) {
    return `<div class="gradebook_grid_element" id="student_names">
                    <label class="gradebook_grid_header">Studenci:</label>
                    ${student_labels}
                </div>`;
}
