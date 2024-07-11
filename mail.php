<?php
if(($_SERVER["REQUEST_METHOD"] == "POST")){
  // echo "hello";
  $email=$_POST['email'];
  $subject=$_POST['subject'];
  $msg=$_POST['msg'];
  $to="gaurizarekar14@gmail.com";
  $headers="From: $email";
  // echo $email.$msg.$subject;
  if(mail($to,$subject,$msg,$headers))
  {
      $str="form submitted succesfully";
      echo "<p style='color:green;'>$str</p>";
  }
  else{
    $str="form not submitted succesfully";
    echo "<p style='color:red;'>$str</p>";
  }
}
else{
  $str="form not submitted succesfully";
  echo "<p style='color:red;'>$str</p>";
}
?>