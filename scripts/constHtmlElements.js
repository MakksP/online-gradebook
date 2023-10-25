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

function get_login_form_content() {
    return `<label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email..." required>
         <span class="required_field">*</span>

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło..." required>
         <span class="required_field">*</span>

        <div class="button_container">
            <input type="submit" id="login_button" class="form_button" value="Zaloguj">
        </div>`;
}

function get_registration_form_content() {
    return `
        <label for="name" class="login_label">Imię:</label>
        <input type="text" name="name" class="login_input" placeholder="podaj imię..." required>
        <span class="required_field">*</span>
        
        <label for="surname" class="login_label">Nazwisko:</label>
        <input type="text" name="surname" class="login_input" placeholder="podaj nazwisko..." required>
         <span class="required_field">*</span>

        <label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email..." required>
         <span class="required_field">*</span>

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło..." required>
         <span class="required_field">*</span>
        
        <label for="password" class="login_label">Potwierdź hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="potwierdź hasło..." required>
         <span class="required_field">*</span>
        
        <label for="teacher_password" class="login_label">Hasło nauczyciela:</label>
        <input type="password" name="teacher_password" class="login_input" id="teacher_password" placeholder="podaj hasło nauczyciela...">

        <div class="button_container">
            <input type="submit" id="register_button" class="form_button" value="Zarejestruj się">
        </div>`;
}
