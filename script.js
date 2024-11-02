   // This function waits for the page to be com
$(document).ready(function() {
    $('.filter-btn').click(function() {
        const value = $(this).attr('data');
        $('.filter-btn').removeClass('filter-btn-active');
        $(this).addClass('filter-btn-active');


        if (value==='all') {
            $('.gallery-item').fadeIn();
            
        } else {
            $ ('.gallery-item').hide(); // this function hides gallery items
            $(`.gallery-item[data="${value}"]`).fadeIn(); // this function shows gallery items
        }
    }

)
}

)

$('.gallery-item img').click(function() {
    const imgSrc = $(this).attr('src');
    $('.lightbox-img').attr('src', imgSrc);
    $('.lightbox').fadeIn();
}
)

$('.lightbox, .close').click(function(event) {
    if (!$(event.target).hasClass('lightbox-img')) {
        $('.lightbox').fadeOut();
    }
}
)
  