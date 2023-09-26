jQuery(function($){


    // Add body class
    var url = location.href;
    var className = url.replace('https://6senseev.com/','').replace(/\//g, '').toLowerCase()
    $('body').addClass(className);


});