<?php
    $names = array("John", "Jane", "Brad", "Olga");


    // counter loop
    // $count = 1;
    // while($count < 101) {
    //     echo "<li>$count</li>";
    //     $count++;
    //}
    $count = 0;

    while($count < count($names)) {
        echo "<li>Hi, my name is $names[$count]. </li>";
        $count++;
    }
?>



