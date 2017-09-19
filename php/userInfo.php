
<?php
$name = $_POST["name"];
$qq = $_POST["qq"];
$phone = $_POST["phone"];
include 'config.php';
$sql = "insert into userInfo(username,qq,phone) values ('$name','$qq','$phone')";
mysql_query($sql);
mysql_close($myconn);
header("Location: http://www.geektesting.com");
?>
