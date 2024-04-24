var btn = $('#myBtn');
var home = $('#home');
var skipToMainLink = $(".skip");

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    }
    else {
        btn.removeClass('show');
    }
});

// Function to scroll to the top
function scrollToTop() {
    $('html, body').animate({scrollTop: 0}, 1750);
}

// Function to handle scrolling to a specific section
function scrollToSection(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - 30
    }, 1750);
}

// Click event handler for buttons to scroll to top
btn.on('click', function(e) {
    e.preventDefault();
    scrollToTop();
});

home.on('click', function(e) {
    e.preventDefault();
    scrollToTop();
    $(this).css("color","white");
});

// Click event handler for links to scroll to a section
skipToMainLink.on('click', function(e) {
    e.preventDefault();
    scrollToSection($(this).attr("href"));
});

$("li a").click(function(e) {
    e.preventDefault();
    if ($(this).text() === "External") {
        $(this).css("color","white");
        return false;
    } else {
        scrollToSection($(this).attr("href"));
    }
});
