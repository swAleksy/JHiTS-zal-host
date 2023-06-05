<?php 

function setComments($conn){
    if(isset($_POST['commentSubmit'])){
        $uid = $_POST['uid'];
        if ($uid == ''){
            $uid = 'Anonymouse';
        }
        $date = $_POST['date'];
        $message = $_POST['message'];
        if (!empty($message)){
            $sql = "INSERT INTO comments (uid, date, message) VALUES ('$uid', '$date', '$message')";
            $result = $conn -> query($sql);
        }
    }
}

function getComments($conn){
    $sql = "SELECT * FROM comments";
    $result = $conn -> query($sql);
    
    while ($row = $result -> fetch_assoc()){
        echo "<div class='comment-box'>";
        echo $row['uid']."  /  ";
        echo $row['date']."<br><br>";
        echo $row['message']."<br>";
        echo "</div>";
    }
}

?>