<?php
  if ($_GET["name"]){
    echo "Welcome ". $_GET['name']. "<br />";
    echo "You are ". $_GET['age']. " years old.<br />";
    echo "You did send this data via GET.";
  } else if ($_POST["name"]) {
    echo "Welcome ". $_POST['name']. "<br />";
    echo "You are ". $_POST['age']. " years old.<br />";
    echo "You did send this data via POST.";
  }
  exit();
?>