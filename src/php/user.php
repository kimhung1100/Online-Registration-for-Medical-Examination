<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $product = json_decode( file_get_contents('php://input') );     
        
        switch($path[6]) {
            case "login":
                $phone = $product -> phone;
                $passwordd = $product -> password;
                $sql = "SELECT * FROM users WHERE phone = '$phone' and password='$passwordd'";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $nums = $stmt -> rowCount();
                $result = $stmt -> fetch();
                $outp ="";
              
                if($nums >= 1){
                    $outp .= '{"Status":"200",'.'"Id":"'.$result["id"].'","userName":"'.$result["username"].'","gender":"'.$result["gender"].'"}'; 
                }
                echo $outp;
                break;
            case "save":
                $userName = $product->userName;
                $phone=$product->phone;
                $password=$product->password;
                $gender = $product->gender;
                $role = $product->role;
                $sql = "INSERT INTO users (userName,phone,password,gender,role) VALUES ('$userName', '$phone', '$password', '$gender', '$role')";
                $stmt = $conn->prepare($sql);
                //$created_at = date('Y-m-d');
                //$stmt->bindParam(':created_at', $created_at);
                //$stmt->execute();
                break;
            }
            if($stmt->execute()) {
                $response = ['Status' => '200'];
            } else {
                $response = ['message' => 'Failed to update record.'];
            }
?>
