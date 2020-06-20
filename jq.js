var btn = $('#myBtn');
var home = $('#home')

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    }
    else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
});

home.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
    $(this).css("color","white");
});

$("li a").click(function() {
    if ($(this).text() === "External") {
        $(this).css("color","white");
        return false;
    }
    else {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 30
        }, 1750);
    }
});