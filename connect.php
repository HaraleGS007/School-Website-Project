<?php


$Name = $_POST['name'];
$Email = $_POST['email'];
$Number = $_POST['number'];
$Subject = $_POST['subject'];


$conn = new mysqli('localhost', 'root','test');

if($conn->connect_error){
    die('Connection Failed : ' .conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registation(name, email, number, subject)

    values(?,?,?,?,)");

    $stmt->bind_param("sssssi", $Name, $Email, $Number, $Subject);
   $stmt->execute();
    echo "Registration Sucessfull..";
  
    $stmt->close();
    $conn->close();

}

?>