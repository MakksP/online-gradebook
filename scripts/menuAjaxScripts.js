const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
const name_surname_pattern = /^[A-Z][a-z]+$/

$(document).ready(function (){
    $("#registration_form").on('submit', function (e){
        e.preventDefault();

        const user_email = $(this).find('input[name="email"]').val();
        if (email_pattern.test(user_email) === false){
            document.getElementById("incorrect_email_password").innerText
                = "Email nie spełnia wzorca text@text.text"
            return;
        }
        const user_name = $(this).find('input[name="name"]').val();
        if (name_surname_pattern.test(user_name) === false){
            document.getElementById("incorrect_email_password").innerText
                = "Imię nie zaczyna się z wielkiej litery\nlub zawiera niedozwolone znaki"
            return;
        }

        const user_surname = $(this).find('input[name="surname"]').val();
        if (name_surname_pattern.test(user_surname) === false){
            document.getElementById("incorrect_email_password").innerText
                = "Nazwisko nie zaczyna się z wielkiej litery\nlub zawiera niedozwolone znaki"
            return;
        }

        $.ajax({
            type: "POST",
            url: "./serverActions/registerActions.php",
            data: $(this).serialize(),
            success:function (response) {
                $("#registration_form").text("Pomyślnie utworzono konto!\nteraz możesz sie zalogować")
                    .css("color", "green").css("font-size", "30px")
                    .css("text-shadow", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000");

            },
            error: function (response){
                $("#incorrect_email_password").text("Niepoprawne hasło nauczyciela").css("color", "red")
                    .css("text-shadow", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000");

            }
        })
    })
});


$(document).ready(function (){
    $("#login_form").on('submit', function (e){
        e.preventDefault();
        const user_email = $(this).find('input[name="email"]').val();
        if (email_pattern.test(user_email) === false){
            document.getElementById("incorrect_email_password").innerText
                = "Email nie spełnia wzorca text@text.text"
            return;
        }
        $.ajax({
            type: "POST",
            url: "./serverActions/loginActions.php",
            data: $(this).serialize(),
            dataType: "json",
            success: function (response){
                window.location.href = response["redirect"];
            },
            error: function (response){
                $("#incorrect_email_password").text("Nieprawidłowy email lub hasło")
            }
        })
    })
})