$( document ).ready(function() {
  
  var nextImage = function(event) {
    event.preventDefault();

    var $selected_img = $('.artist-work.selected img.selected');
    var img_id = $selected_img.data("position");

    // hide current image, show next
    $selected_img.removeClass('selected');
    var next_img_id = (img_id + 1) % 3;
    var $next_img = $(".artist-work.selected img[data-position='" + next_img_id + "'");
    $next_img.addClass('selected');
  };

  $('.next').click(function(event) {
    nextImage(event);
  });

  $('.artist-work img').click(function(event) {
    nextImage(event);
  });

  $('.prev').click(function(event) {
    event.preventDefault();

    var $selected_img = $('.artist-work.selected img.selected');
    var img_id = $selected_img.data("position");

    // hide current image, show next
    $selected_img.removeClass('selected');
    var next_img_id = img_id - 1;
    if ( next_img_id < 0 ) next_img_id = 2;
    var $next_img = $(".artist-work.selected img[data-position='" + next_img_id + "'");
    $next_img.addClass('selected');
  });

  $('.artist-name').click(function(event) {
    event.preventDefault();

    var $selected_artist_work = $('.artist-work.selected');
    var $selected_artist_name = $('.artist-name.selected');
    var artist_id = $(this).data('position');

    // unselect selected artist, select clicked
    $selected_artist_name.removeClass('selected');
    var $artist = $(".artist-name[data-position='" + artist_id + "'");
    $artist.addClass('selected');

    // hide selected artist-work, show clicked
    $selected_artist_work.removeClass('selected');
    var $artist_work = $(".artist-work[data-position='" + artist_id + "'");
    $artist_work.addClass('selected');
    $artist_work.find("img").removeClass('selected');
    $artist_work.find("img[data-position='0']").addClass('selected');

    // replace href of site link
    $('.image-nav .more').attr('href', $artist.attr('href') );

    // scroll to images
    $("html, body").animate({ scrollTop: $("#images").offset().top }, "slow");
  });

});

