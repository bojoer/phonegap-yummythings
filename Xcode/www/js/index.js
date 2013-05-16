/*
YummyThings app
index.js

PhoneGap example application
Created by Saul Zukauskas // @sauliuz
PopularOwl Labs // www.popularowl.com
@16.04.2013
*/


// We have to add event listeners to capture main events
// Cordova framework sends us.
document.addEventListener("deviceready", onDeviceReady, false);
window.addEventListener("resize", orientationChange, false);


//////////////////////////////////////////////////////////
// Functions                                            //
//////////////////////////////////////////////////////////
//
function orientationChange() {
    tabBar.resize();
}

function onDeviceReady() {
    // Log
    //
    console.log('Received Event: deviceready');

    // Will set the timer to hide
    // splashscreen after specific time
    //
    setTimeout(function() {
               navigator.splashscreen.hide();
               }, 1500);

    
    // Navigation management
    //
    var activePage = window.sessionStorage.getItem("page");
    
    // Log
    //
    console.log('Current page: ' + activePage);
    
    
    // We have to load custom Cordova iOS plugin
    // for native controls. Will be used to get custom navigation bar
    //    
    var navBar = cordova.require("cordova/plugin/iOSNavigationBar");

    navBar.init();
    
    // Create Navigation Bar with style
    //
    navBar.create("BlackOpaque");
    
    switch(activePage) {
        case "index":
        navBar.setTitle("Yummy Things");
        break;
        case "about":
        navBar.setTitle("Yummy Things");
        break;
        default:
        navBar.setTitle("Yummy Things");
    }
    
    // Another timer to delay bringing
    // up navigation controls.
    // Has to match splash screen timer
    //
    setTimeout(function() {
               navBar.show();
               }, 1500);
    
    
    // Creating and managing
    // navigation buttons
    // Create right navigation button with a title
    //
    switch(activePage) {
        case "index":
        navBar.setupRightButton("About","",onRightNavButtonClick);
        navBar.hideLeftButton();
        navBar.showRightButton();
        break;
        case "about":
        navBar.hideRightButton();
        navBar.setupLeftButton("Back","",onLeftNavButtonClick);
        navBar.showLeftButton();
        break;
        default:
        navBar.setupRightButton("About","",onRightNavButtonClick);
        navBar.hideLeftButton();
        navBar.showRightButton();
    }
 
    
    // Navigation button actions
    // Right button
    //
    function onRightNavButtonClick() {
        // navigation management
        window.sessionStorage.clear();
        window.sessionStorage.setItem("page", "about");
        window.location = "about.html";
        console.log('Performed onRightNavButtonClick' + activePage);
        

    }
    
    // Left button
    //
    function onLeftNavButtonClick() {
        window.sessionStorage.clear();
        window.sessionStorage.setItem("page", "index");
        window.location = "index.html";
        // navigation management
        console.log('Performed onLeftNavButtonClick');

    }


    // To retrieve current city name
    // based on current device location we 
    // will use PhoneGap Geolocation API
    // and some Google Map API's magic

    // Handeling 2 possible outcomes - success and failature
    //
    navigator.geolocation.getCurrentPosition(onSuccess, onError);


    function onSuccess(position) {

        // Capturing values for latitude + longitude
        //
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log('Received current location: ' + latitude + ',' + longitude);

        // Asking maps.googleapis for name of the city
        //
        var url = 'your server url/?latitude='+latitude+'&longitude='+longitude;
        
        $.get(url, function(data) {

                  // Add results to HTML
                  $("#locationplaceholder").html("<div id='location'>Your current location is:<br /><strong>"+data+"</strong><br />Choose food wisely!</div>");

                  // Log received content
                  console.log("Location = " + data);
                          
        });

    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        console.log('Received geolocation error. code:' + error.code);
        console.log('Received geolocation error. code:' + error.message);
    }
    
}