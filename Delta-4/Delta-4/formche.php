<?php
require "connect.php";
echo "Hello";

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$roll = $_POST["Roll"];
$name = $_POST["Name"];
$dept = $_POST["dept"];
$year = $_POST["year"];
$email = $_POST["email"];
$pass = $_POST["pass"];
$keyi = 123456789;
//$pict = $_POST[""];

//if(isset($_POST['submit'])){
if($_SERVER['REQUEST_METHOD']=== 'POST'){
	mkdir($roll,0777,false);
	$target_dir = $roll . '/';
	$target_file = $target_dir . basename($_FILES["imageUpload"]["name"]);
	$uploadOk = 1;
	$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
	
	if(move_uploaded_file($_FILES["imageUpload"]["tmp_name"],$target_file)){
		echo "The file ". basename($_FILES["imageUpload"]["name"]). " has been uploaded.";
	} else {
		echo "Sorry, there was an error uploading your file.";
	}
	
	$image = basename($_FILES["imageUpload"]["name"],".jpg");
	
	 $mysql_qry = "insert into delta_2015_4(Roll,Name,Dept,Year,Email,Pass,Photo,Chek) values('$roll','$name','$dept','$year','$email','$pass','$image','$keyi')";
		if (mysqli_query($conn, $mysql_qry)) {
		echo "New record created successfully";
		
		$myFile = "./".$roll."/index.php";
		$fh = fopen($myFile, 'w') or die("error");
		$stringData = "<?php
		echo '<img src = \'$image \' width=\'300px\' height=\'300px\' alt= \'Sorry No Image was found \' />';
		?>";	
		
		fwrite($fh,$stringData);
		} else {
			echo "Error: " . $mysql_qry . "<br>" . mysqli_error($conn);
		}
//}
}

/*
//if(isset($_POST['submit'])) {

    //Process the image that is uploaded by the user
	
    $target_dir = "images/";
    $target_file = $target_dir . basename($_FILES["imageUpload"]["name"]);
	//$target_dir = basename($_FILES['imageUpload']['name']);
	//$target_dir = str_replace(' ','|',$target_dir);
	//$target_file = "/" . $target_dir;
    $uploadOk = 1;
    $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

    if (move_uploaded_file($_FILES["imageUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["imageUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }

    $image=basename( $_FILES["imageUpload"]["name"],".jpg"); // used to store the filename in a variable

    //storind the data in your database
	
	$image = basename($_FILES["imageUpload"]["name"],".jpg");
	//$image = "Hi";
	 $mysql_qry = "insert into delta_2015_4(Roll,Name,Dept,Year,Email,Pass,Photo,Chek) values('$roll','$name','$dept','$year','$email','$pass','$image','$keyi')";
		if (mysqli_query($conn, $mysql_qry)) {
		echo "New record created successfully";
		} else {
			echo "Error: " . $mysql_qry . "<br>" . mysqli_error($conn);
		}
//}

*/
?>