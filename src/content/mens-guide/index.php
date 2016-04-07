<?php 


$mydir = $_SERVER["REQUEST_URI"];

include("../../FRAMEWORK/lib.php");
$project = unserialize(base64_decode(file_get_contents("project_desc.txt")));

$project[folder] = "..".$_SERVER[REQUEST_URI];

chdir("../../FRAMEWORK");
deploy($project);
chdir("..".$mydir);

include("ipad.html");