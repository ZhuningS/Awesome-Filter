![alt text](https://www.moderatecontent.com/img/moderate_content_com_logo.png "ModerateContent.com")

### ModerateContent.com - The FREE Content Moderation API (https://www.moderatecontent.com)

Our free API provides a content rating for any image. Detect inappropriate content from adult to violent and more subtle ratings including smoking, alcohol and suggestive.

#####Url

```
https://www.moderatecontent.com/api/?url=http://www.moderatecontent.com/img/logo.png

```

#####jQuery
```javascript
$.ajax('https://www.moderatecontent.com/api/', {
    method: "GET",
    dataType: 'json',
    data: {url: 'http://www.moderatecontent.com/img/logo.png'},
    success: function (response) {
        console.log(response);
    }
});

```

#####Example's of how to use the API
* [Javascript - jQuery && AJAX && GET](../master/Example-JS-JQUERY_AJAX_GET/)
* [Javascript - jQuery && AJAX && POST](../master/Example-JS-JQUERY_AJAX_POST/)
* [Javascript - jQuery && AJAX && JSONP && POST](../master/Example-JS-JQUERY_AJAX_JSONP_GET/)
* [Javascript - AJAX && GET](../master/Example-JS-AJAX_GET/)
* [Javascript - AJAX && POST](../master/Example-JS-AJAX_POST/)
* [Javascript - AJAX && JSONP && POST](../master/Example-JS-AJAX_JSONP_GET/)
* [PHP - CURL && GET](../master/Example-PHP-CURL_GET/)
* [PHP - file_get_contents](../master/Example-PHP-FILE_GET_CONTENTS/)
* [CURL - GET](../master/Example-CURL/)

