<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "GET"){
    session_destroy();
    $_SESSION = array();
    header("Location: ../startPage.php");
    exit;
}
