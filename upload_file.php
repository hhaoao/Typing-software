<?php
//if ($_FILES["file"]["error"] > 0)
//{
//echo "Error: " . $_FILES["file"]["error"] . "<br>";
//}
//else
//{
//echo "Upload: " . $_FILES["file"]["name"] . "<br>";
//echo "Type: " . $_FILES["file"]["type"] . "<br>";
//echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
//echo "Stored in: " . $_FILES["file"]["tmp_name"];
//}

//$temp = explode(".", $_FILES["file"]["name"]);
//$extension = end($temp);
if ($_FILES["file"]["type"] == "text/plain")
{
if ($_FILES["file"]["error"] > 0)
echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
else
{
echo "Upload: " . $_FILES["file"]["name"] . "<br>";
echo "Type: " . $_FILES["file"]["type"] . "<br>";
echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";

if (file_exists("upload1/" . $_FILES["file"]["name"]))
echo $_FILES["file"]["name"] . " already exists. ";
else
{
move_uploaded_file($_FILES["file"]["tmp_name"],"upload1/" . $_FILES["file"]["name"]);
echo "Stored in: " . "upload1/" . $_FILES["file"]["name"];
}
}
}
else
echo "Invalid file";
?>
