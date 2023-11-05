<?php
/**
 * @return void
 */
function insert_php_query_core($query, $type_of_params, $success_info, ...$params)
{
    $db_connect = connect_to_database();
    $sql_query = $query();
    if ($prepared_sql_query = $db_connect->prepare($sql_query)) {
        $prepared_sql_query->bind_param($type_of_params, ...$params);
        if ($prepared_sql_query->execute()) {
            echo $success_info;
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connect->close();
            http_response_code(400);
        }
    } else {
        echo "Nie udało się przygotować zapytania";
        $db_connect->close();
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connect->close();
}