<!-- config.php用于连接指定数据库
该页面不涉及到seesion应用
-->
<?php
$myconn = mysql_connect("localhost","guestinfo","Best0728");
mysql_query("set names 'UTF-8'");
mysql_select_db("geektesting",$myconn);
?>
