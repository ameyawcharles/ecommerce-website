<?php
    include("config.php");
     
    extract($_POST);
    $query = "INSERT INTO asu (`name`, `email`, `message`) VALUES ('".$name."','".$email."','".$message."')";
    $result = $mysqli->query($query);  

    if(!$result){
        die("Couldn't enter data: ".$mysqli->error);
    }
    echo "Thank You For Contacting Us ";
    $mysqli->close(); 
?>