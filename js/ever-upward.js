$(document).ready(function() {

    //patch to stop video play when close button is clicked
    $('.close-button').on('click', function(e) {
        let vidContainer = $(this).parent().attr('id');
        let vidElement = $('#' + vidContainer).find('iframe');
        let video = vidElement.attr('src');
        vidElement.attr('src', '');
        vidElement.attr('src', video);
        $(this).foundation('reveal', 'close');
        return false;
    });

    var timer = 0;
    function recheck() {
        var window_top = $(this).scrollTop();
        var window_height = $(this).height();
        var view_port_s = window_top;
        var view_port_e = window_top + window_height;

        if ( timer ) {
            clearTimeout( timer );
        }
        $('.fly-3').each(function(){
            var block = $(this);
            var block_top = block.offset().top;
            var block_height = block.height();

            if ( block_top < view_port_e ) {
                timer = setTimeout(function(){
                    block.addClass('show-block');
                },100);
                console.log('fly triggered');
            } else {
                timer = setTimeout(function(){
                    block.removeClass('hide-block');
                },100);
            }
        });
        $('.fade-only').each(function(){
            var block = $(this);
            var block_top = block.offset().top;
            var block_height = block.height();

            if ( block_top < view_port_e ) {
                timer = setTimeout(function(){
                    block.addClass('show-fade');
                },50);
                console.log('Im triggered!');
            } else {
                timer = setTimeout(function(){
                    block.removeClass('hide-fade');
                },50);
                console.log('Im untriggered!');
            }
        });
    }

    $(window).scroll(function(){
        recheck();
    });

    $(window).resize(function(){
        recheck();
    });

    recheck();

});