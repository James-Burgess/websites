$(window).on('load', function(){
    //loading particles
    console.log("Checking to see if I can do something cool")
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome){
        console.log("chrome detected, that means I can do something cool");

        particlesJS.load('particles-js', 'scripts/assets/particles.json', function() {
        console.log('particles.js loading...');
        }); 
    }else{
        console.log("nope, sorry. chrome is home");
        $('#particles-js').addClass('fallback');
    }
});

$(function () {
    
    //smooth scrollto eventlistener method
    var hello_nav = $('#hello_nav');
    var who_nav = $('#who_nav');
    var what_nav = $('#what_nav');
    var work_nav = $('#work_nav');
    var contact_nav = $('#contact_nav');
    var $window = $(window);

    function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
    };

    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    };

    function smoothScroll(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 75);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        return false;
    };

    //eventlisteners to scroll
    hello_nav.click(function() {
        smoothScroll('hello');      
    });
    who_nav.click(function() {
        smoothScroll('who');
    });
    what_nav.click(function() {
       smoothScroll('what');
    });
    work_nav.click(function() {
        smoothScroll('work');
    });
    contact_nav.click(function() {
        smoothScroll('contact');
    });

    //scrollevents pretty stuff
    var $Hello = $('#hello');
    var pageHeight = $Hello.height();
    var $link = $('.link');
    var $work = $('#workaround');
    var particles = $('#particles-js');
    var particleOpacity = 1;

    $window.scroll(function () {
        var currentScrollTop = $window.scrollTop();

         //fading loophole logo
         var currentJumboAlpha = Math.max(1 - ((currentScrollTop * 100 / pageHeight) / 100), 0);
         $('svg').css('opacity', (currentJumboAlpha));

        //changing navbar color
        if (currentScrollTop > (pageHeight/2)){
            $('#nav').css('color', 'black');
        }else{
            $('#nav').css('color', 'white');
        };

        //working out which page we are on and applying styles
        var multiScollTop = currentScrollTop *1.21; //dont ask me how I got that number but it works

        if (multiScollTop < pageHeight){                                               //hello
            particles.css('opacity','0');

            who_nav.removeClass('active');
            what_nav.removeClass('active');
            work_nav.removeClass('active');
            contact_nav.removeClass('active_white');
        }
        else if (multiScollTop >= pageHeight && multiScollTop <= (pageHeight*2)){       //who
            particles.css('opacity','.5');

            who_nav.addClass('active');
            what_nav.removeClass('active');
            work_nav.removeClass('active');
            contact_nav.removeClass('active_white');
        }
        else if (multiScollTop >= (pageHeight*2) && multiScollTop <= (pageHeight*3)){   //what
            particles.css('opacity','.5');
            
            what_nav.addClass('active');

            who_nav.removeClass('active');
            work_nav.removeClass('active');
            contact_nav.removeClass('active_white');           
        }
        else if (multiScollTop >= (pageHeight*3) && multiScollTop <= (pageHeight*4.5)){ //work
            particles.css('opacity', '0');

            work_nav.addClass('active');

            what_nav.removeClass('active');
            who_nav.removeClass('active');
            contact_nav.removeClass('active_white');
        }
        else{                                                                          //contact
            contact_nav.addClass('active_white');

            what_nav.removeClass('active');
            who_nav.removeClass('active');            
            work_nav.removeClass('active');
        }

    });
});
