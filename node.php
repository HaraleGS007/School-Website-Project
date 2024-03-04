<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Process the data (you can do validation, database operations, etc. here)
    
    // For this example, we'll simply print the submitted data
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";
} else {
    // If the form is not submitted, redirect back to the form page
    header("Location: form.html");
    exit;
}
?>
