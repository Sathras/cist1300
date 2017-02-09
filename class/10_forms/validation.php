<?php
  if (!$_GET["name"] || !$_GET["age"]) echo "Your Form Data is incomplete!";

  else if (!is_numeric ($_GET["age"])) echo "Your Age is not a valid number!";

  else {
    echo "Welcome ". $_GET['name']. "<br />";
    echo "You are ". $_GET['age']. " years old.<br />";
  }
  exit();
?>