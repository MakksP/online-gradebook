const login_button = document.getElementById("login_button_nav");
const registration_button = document.getElementById("registration_button_nav");
const home_page_button = document.getElementById("logo_button");
const logout_button = document.getElementById("logout_button");
const subjects_button = document.getElementById("subjects_button");
const observed_button = document.getElementById("observed_button")
const observed_button_student = document.getElementById("observed_button_student");
const lesson_plans_button = document.getElementById("lesson_plans_button");
const subjects_table = document.getElementById("subjects_table");
let student_grade_buttons;
const ADD_SUBJECT_BUTTON = 1;
const PANE_WITHOUT_ADD_BUTTON = 0;



if (login_button != null){
    login_button.onclick = function (){
        window.location.href = './loginPage.php';
    }
}

if (registration_button != null){
    registration_button.onclick = function (){
        window.location.href = './registrationPage.php';
    }
}

if (home_page_button != null){
    home_page_button.onclick = function (){
        window.location.href = './startPage.php';
    }
}

if (logout_button != null){
    logout_button.onclick = function (){
        logout();
    }
}

if (subjects_button != null){
    subjects_button.onclick = function (){
        let user_role = document.getElementById("user_data").innerHTML;
        user_role = user_role.substring(user_role.indexOf("(") + 1, user_role.indexOf(")"))
        if (user_role === 'teacher'){
            window.location.href = "./teacherSubjectsPage.php";
        } else if (user_role === 'student'){
            window.location.href = "./studentSubjectsPage.php";
        }

    }
}

if (lesson_plans_button != null){
    lesson_plans_button.onclick = function (){
        window.location.href = "./teacherLessonPlansPage.php";
    }
}

if (observed_button !== null){
    observed_button.onclick = function (){
        window.location.href = "./favouritePage.php";
    }
}

if (observed_button_student !== null){
    observed_button_student.onclick = function (){
        window.location.href = "./studentFavouritePage.php";
    }
}

function appearing_pane_close_button_onclick(button_id, element_to_remove_id) {
    document.getElementById(button_id).onclick = function () {
        document.getElementById(element_to_remove_id).remove();
    }
}


