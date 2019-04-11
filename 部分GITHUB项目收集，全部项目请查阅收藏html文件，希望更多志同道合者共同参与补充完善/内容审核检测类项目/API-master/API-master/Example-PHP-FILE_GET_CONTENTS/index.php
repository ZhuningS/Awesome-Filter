<?php
function moderate_url($image_url){
    $url = "https://www.moderatecontent.com/api/?url=" . $image_url;
    $file_get_contents_result = file_get_contents($url);
    
    if ($file_get_contents_result === false){
        $file_get_contents_result = (object)array();
        $file_get_contents_result->error_code = 9999;
        $file_get_contents_result->error = "file_get_contents could not reach url.";
    }
    return json_encode($file_get_contents_result);
}

?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ModerateContent.com - The FREE Content Moderation API</title>
</head>
<body style="font-family: verdana;">
    <a href="https://www.moderatecontent.com" target="_blank"><img src="http://www.moderatecontent.com/img/logo.png" alt="ModerateContent.com" /></a><hr />
    <h1>Example: PHP - file_get_contents && GET</h1>
    
    <div id="this_is_where_we_put_the_results"><?php echo moderate_url("http://www.moderatecontent.com/img/logo.png"); ?></div>
</body>
</html>
<?php
die();