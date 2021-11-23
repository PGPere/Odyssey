'use strict';
$(function() {
    var target = $('.bottom-content');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});