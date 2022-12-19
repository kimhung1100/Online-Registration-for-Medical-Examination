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
            case "login":
                $username = $product -> username;
                $passwordd = $product -> password;
                $sql = "SELECT * FROM admins WHERE username = '$username' and password='$passwordd'";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $nums = $stmt -> rowCount();
                $result = $stmt -> fetch();
                $outp ="";
              
                if($nums >= 1){
                    $outp .= '{"Status":"200",'.'"Id":"'.$result["id"].'","name":"'.$result["name"].'","department":"'.$result["department"].'","role":"'.$result["role"].'"}'; 
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
                break;
                
        }
        if($stmt->execute()) {
            $response = ['Status' => '200'];
        } else {
            $response = ['message' => 'Failed to update record.'];
        }
    }
        
?>
