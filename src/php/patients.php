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
            case "lookupone":
                $userID = $product -> userID;
                $id = $product -> id;
                $sql = "SELECT * FROM patients WHERE userID = '$userID' AND id = '$id'";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $order = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode($order);
                break;
            case "update":
                $id = $product->id;
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
                echo $id;
                $sql = "UPDATE patients SET name = '$name' AND gender = '$gender' AND birthday='$birthday' AND email='$email' AND phone='$phone' AND cmnd='$cmnd' AND job='$job' AND  ethnicity=
                $ethnicity' AND address='$address' WHERE id='$id'";
                echo $sql;
                $stmt = $conn->prepare($sql);                
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
                break;   
        }
        // if($stmt->execute()) {
        //     $response = ['Status' => '200'];
        // } else {
        //     $response = ['message' => 'Failed to update record.'];
        // }
        
    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "DELETE FROM patients WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[7]);
        if($stmt->execute()) {
            $response = ['Status' => '200'];
        } else {
            $response = ['message' => 'Failed to update record.'];
        }
        break;

    case "PUT":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $product = json_decode( file_get_contents('php://input') );  
        $id = $product->id;
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
        echo $id;
        $sql = "UPDATE patients SET name = '$name', gender = '$gender', birthday='$birthday', email='$email', phone='$phone',cmnd='$cmnd', job='$job', ethnicity=
        '$ethnicity' , address='$address' WHERE id='$id'";
        echo $sql;
        $stmt = $conn->prepare($sql);
        if($stmt->execute()) {
            $response = ['Status' => '200'];
        } else {
            $response = ['message' => 'Failed to update record.'];
        }
        break;
        
}
        
?>