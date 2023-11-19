const login_button = document.getElementById("login_button_nav");
const registration_button = document.getElementById("registration_button_nav");
const home_page_button = document.getElementById("logo_button");
const logout_button = document.getElementById("logout_button");
const subjects_button = document.getElementById("subjects_button");
const lesson_plans_button = document.getElementById("lesson_plans_button");
const subjects_table = document.getElementById("subjects_table");
const favourite_button = document.getElementsByClassName("favourite_button")
let student_grade_buttons;
const ADD_SUBJECT_BUTTON = 1;



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
        window.location.href = './startPage.php'
    }
}

if (logout_button != null){
    logout_button.onclick = function (){
        logout();
    }
}

if (subjects_button != null){
    subjects_button.onclick = function (){
        window.location.href = "./teacherSubjectsPage.php"
    }
}

if (lesson_plans_button != null){
    lesson_plans_button.onclick = function (){
        window.location.href = "./teacherLessonPlansPage.php"
    }
}


function appearing_pane_close_button_onclick(button_id, element_to_remove_id) {
    document.getElementById(button_id).onclick = function () {
        document.getElementById(element_to_remove_id).remove();
    }
}


