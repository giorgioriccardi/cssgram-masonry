<?php
    // this works only for folders on the same server
    $imageFiles = glob("images/*.*");

    // glob() per definition finds pathnames matching a pattern.
    // This means that the function will not work on remote files
    // as the directory / files to be examined must be accessible via the server's filesystem.

    // this won't work !
    // $imageFiles = glob("http://griccardi.com/temp/BCIT-JS-2016/_images/*.*");

    $singleImage = array_rand($imageFiles);
    echo $imageFiles[$singleImage];
?>
