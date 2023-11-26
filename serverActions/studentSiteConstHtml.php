<?php
session_start();
function get_nav_bar_after_login(){
    echo '<nav id="nav_panel">
    <ul id="nav_list">
        <li>
            <button id="logo_button"><img src="/images/gradebook_logo.png" alt="gradebook_logo.png" id="logo_image"></button>
        </li>
        <li>
            <button class="nav_pane_button" id="additional_info_button"><label class="nav_pane_label">Informacje dodatkowe</label></button>
        </li>
        <li>
            <button class="nav_pane_button"><label class="nav_pane_label">O dzienniku</label></button>
        </li>
        <li>
            <div id="icons_div">
                <div id="user_label">
                    <div id="user_data">
                        <i class="icon-user"></i> ' . $_SESSION["name"] . " " . $_SESSION["surname"] . " (" . $_SESSION["role"] . ")" . '
                    </div>
                    <button id="logout_button">Wyloguj się <i class="icon-logout"></i></button>
                </div>
            </div>
        </li>
    </ul>
</nav>';
}