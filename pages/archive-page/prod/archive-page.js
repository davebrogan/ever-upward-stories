$(document).ready(function() {
    //hide buttons on live page
    var test666 = document.getElementById('DHTMLArea8_pnlContainer');
    if( test666 !== null && test666 !== false) {
        console.log('hi');
        $(".edit-button-wrapper").css('display', 'flex');
    } else {
        $(".edit-button-wrapper").css('display', 'none');
        console.log('bye');
    }

    //prevent card from flipping on hover - edit front
    //never pulled off button functionality. Something about CKEditor was creating unexpected behavior
    $('#edit-button--front').click(function(e) {
        console.log('what');
        $('.story-flip-card:hover .story-flip-card__inner').toggleClass('freeze-flip');
        //e.preventDefault();
    });
/*    var freezeFlip = function() {
        console.log('what');
        $('.story-flip-card:hover .story-flip-card__inner').toggleClass('freeze-flip');
        e.preventDefault();
    }*/
    //flip card once then prevent it from flipping - edit back

    //reset flips

    //reset flip on page reload
});
