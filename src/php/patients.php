<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DBconnect.php';
$objDb = new DBconnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $product = json_decode( file_get_contents('php://input') );     
        switch($path[6]) {
            case "lookup":
                $userID = $product -> userID;
                $sql = "SELECT * FROM patients WHERE userID = '$userID'";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $order = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($order);
                // if($stmt->execute()) {
                //     $response = ['Status' => '200'];
                // } else {
                //     $response = ['message' => 'Failed to update record.'];
                // }
                break;
            case "save":
                $name = $product->name;
                $gender=$product->gender;
                $birthday = $product->birthday;
                $email = $product->email;
                $phone = $product->phone;
                $cmnd = $product->cmnd;
                $job = $product->job;
                $ethnicity = $product->ethnicity;
                $address = $product->address;
                $userID = $product->userID;
                $sql = "INSERT INTO patients (name,gender,birthday,email,phone,cmnd,job,ethnicity,address,userID) VALUES ('$name', '$gender', '$birthday', '$email', '$phone','$cmnd','$job','$ethnicity','$address','$userID')";
                $stmt = $conn->prepare($sql);
                echo "123";
                if($stmt->execute()) {
                    $response = ['Status' => '200'];
                } else {
                    $response = ['message' => 'Failed to update record.'];
                }
                break;
                
        }
        
        
    }
        
?>