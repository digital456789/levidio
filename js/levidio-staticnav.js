$(document).ready(function () {

    if($(window).width() < 575){
        // $('video').removeClass('zoom');
        $('.video-control').attr('controls', true);
        
        $('.xs--reset--padding').removeClass(function (index, className) {
            return (className.match(/\bpr-\S+/g) || []).join(' ');
        });
        $('.xs--reset--padding').removeClass(function (index, className) {
            return (className.match(/\bpl-\S+/g) || []).join(' ');
        });
    } else{
        // $('video').addClass('zoom');
        $('.video-control').removeAttr('controls');
    }
});

$(window).resize(function() {
    if($(window).width() < 575){
        // $('video').removeClass('zoom');
        $('.video-control').attr('controls', true);
    } else{
        // $('video').addClass('zoom');
        $('.video-control').removeAttr('controls');
    }
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if($(this).hasClass('self')){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                    return false;
                }
            }
        }
        else{
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                    return false;
                }
            }
        }
    });
});


$('.collapse').on('show.bs.collapse', function () {
    $(this).prev().addClass('opened');
});
$('.collapse').on('hide.bs.collapse', function () {
    $(this).prev().removeClass('opened');
});

$('.collapse--module').on('show.bs.collapse', function(){
    var btn = $(this).next();
    btn.addClass('opened');
    btn.text('Show less');
});
$('.collapse--module').on('shown.bs.collapse', function(){
    $(this).parent().addClass('expanded');
});

$('.collapse--module').on('hide.bs.collapse', function(){
    var btn = $(this).next();
    btn.removeClass('opened');
    btn.text('Show more');
});
$('.collapse--module').on('hidden.bs.collapse', function(){
    $(this).parent().removeClass('expanded');
});


// Youtube Popup
jQuery(function(){
	jQuery("a.youtube").YouTubePopUp();
});

// Show Fullpage Website on Modal
$('#modal-web').on('show.bs.modal', function (e) {
    var src = $(e.relatedTarget).data('name');
    var full = "../assets/img/module/9/full-sm/"+src+".jpg";
    $(this).find('.modal-body > img').attr('src', full);
});

$('.custom--thumb').click(function(){
    thumb = $(this).find('img');
    video = '<iframe src="'+ thumb.attr('data-video') +'" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
    thumb.replaceWith(video);
    $(this).addClass('played');
});