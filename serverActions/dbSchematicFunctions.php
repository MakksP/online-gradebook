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


/**
 * @return void
 */
function select_php_query_core($query, $type_of_params, ...$params)
{
    $db_connection = connect_to_database();
    $sql_query = $query();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)) {
        $prepared_sql_query->bind_param($type_of_params, ...$params);
        if ($prepared_sql_query->execute()) {
            $results = bind_dynamic_results($prepared_sql_query);
            $prepared_sql_query->bind_result(...$results);
            $response = array();
            while ($prepared_sql_query->fetch()) {
                foreach ($results as $result) {
                    $response[] = $result;
                }
            }
            echo json_encode($response);
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connection->close();
            http_response_code(400);
        }
    } else {
        echo "Nie udało się przygotować zapytania";
        $db_connection->close();
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connection->close();
}

function bind_dynamic_results($prepared_sql_query): array
{
    $sql_query_metadata = $prepared_sql_query->result_metadata();
    $result = array();
    while ($column_name = $sql_query_metadata->fetch_field()){
        $result[] = $column_name->name;
    }

    return $result;
}