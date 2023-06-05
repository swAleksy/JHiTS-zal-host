<?php

$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "root";
$dbName = "sliderphotosdata";

$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($db -> connect_error){
    die("connection failed: ".$db->connect_error);
}

$idx = isset($_GET['idx']) ? $_GET['idx'] : 1;

// Prepare the query and bind the index value
$stmt = $db->prepare("SELECT * FROM images WHERE id = ?");
$stmt->bind_param("i", $idx);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if there is a row with the provided index
if ($result->num_rows > 0) {
    // Fetch the row as an associative array
    $row = $result->fetch_assoc();

    // Create an array with the required data
    $response = array(
        "file_path" => $row["file_path"],
        "descrip" => $row["descrip"],
        "name" => $row["name"],
        "display" => "flex" // Set the display status according to your needs
    );

    // Send the response as JSON

    echo json_encode($response);

} else {
    // If no row is found, send an empty response
    echo json_encode(array());
}

?>