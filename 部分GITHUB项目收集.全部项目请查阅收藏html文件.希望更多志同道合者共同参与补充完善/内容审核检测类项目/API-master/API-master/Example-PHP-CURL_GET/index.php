<?php
if (!function_exists('curl_version')){
    echo 'Please ensure curl is enabled on php|web<br />';
    echo ' -- http://curl.haxx.se/libcurl/php/install.html<br />';
    echo ' -- http://php.net/manual/en/curl.installation.php<br />';
    die();
}

function moderate_url($image_url){
    $ajax_url = "https://www.moderatecontent.com/api/?url=" . $image_url;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $ajax_url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $curl_result = curl_exec($ch);
    curl_close($ch);
    
    if ($curl_result === false){
        $curl_result = (object)array();
        $curl_result->error_code = 9999;
        $curl_result->error = "Curl could not reach url.";
    }
    return json_encode($curl_result);
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
    <h1>Example: PHP - Curl && GET</h1>
    
    <div id="this_is_where_we_put_the_results"><?php echo moderate_url("http://www.moderatecontent.com/img/logo.png"); ?></div>
</body>
</html>
<?php
die();