$(document).ready(function (){
    $("#registration_form").on('submit', function (e){
        e.preventDefault();
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
        $.ajax({
            type: "POST",
            url: "./serverActions/loginActions.php",
            data: $(this).serialize(),
            dataType: "json",
            success: function (response){
                window.location.href = response["redirect"];
            },
            error: function (response){
                $("#incorrect_email_password").text("Nieprawidłowy email lub hasło").css("color", "red")
                    .css("text-shadow", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000");
            }
        })
    })
})