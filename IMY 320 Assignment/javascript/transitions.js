$(document).ready(function() {
  console.log("hey");
  $('#replace').hide();
  $('.aniTxt').textillate({
    out: {
      effect: 'fadeOutDown',
      synch: true
    }
  });


  $("#NavHome").click(function() {
    console.log("hey");
    $('#replace').show();
    /* $("body").css("background-image", "url(fronPageBackgroundOne.jpg)");
        	setTimeout(function(){ $("body").css("background-image", "url(fronPageBackground.jpg)"); },5000);*/

    /**$("body").animate({ "background-image", "url(fronPageBackground.jpg)", 2000);**/


    $('body').fadeOut('slow', function() {

      $('body').css({
        'background-image': 'url(images/fronPageBackgroundOne.jpg)'
      });

      $('body').fadeIn(3000);
    });

  });


  $("#NavAbout").click(function() {
    if ($('.aniTxt')) {
      $('.aniTxt').textillate('out');
      $('.aniTxt').removeClass('aniTxt');
    }
    $('body').fadeOut('slow', function() {

      $('body').css({
        'background-image': 'url(images/missile2.jpg)'
      });

      $('body').fadeIn(3000);
    });

    /**$("body").animate({ "background-image", "url(fronPageBackground.jpg)", 2000);**/
  });


  $("#NavTeam").click(function() {
    console.log("hey");

    if ($('.aniTxt')) {
      $('.aniTxt').textillate('out');
      $('.aniTxt').removeClass('aniTxt');
    }

    /**$("body").animate({ "background-image", "url(fronPageBackground.jpg)", 2000);**/


    $('body').fadeOut('slow', function() {

      $('body').css({
        'background-image': 'url(images/smallBoy2.jpg)'
      });

      $('body').fadeIn(3000);
    });
  });

  $("#NavReviews").click(function() {
    console.log("hey");


    if ($('.aniTxt')) {
      $('.aniTxt').textillate('out');
      $('.aniTxt').removeClass('aniTxt');
    }



    $('body').fadeOut('slow', function() {

      $('body').css({
        'background-image': 'url(images/micro2.jpg)'
      });

      $('body').fadeIn(3000);
    });
  });


  $("#NavGallery").click(function() {
    console.log("hey");
    if ($('.aniTxt')) {
      $('.aniTxt').textillate('out');
      $('.aniTxt').removeClass('aniTxt');
    }

    $('.aniTxt').textillate('out');

    $('body').fadeOut('slow', function() {

      $('body').css({
        'background-image': 'url(images/koreanCOld2.jpg)'
      });

      $('body').fadeIn(3000);
    });
  });
});


var unselectedColor = '#848484';

function showTeam() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'visible';
  document.getElementById('NavTeam').style.color = '#ffffff';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('Reviews').style.visibility = 'hidden';
  document.getElementById('NavReviews').style.color = unselectedColor;
}

function showHome() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('Home').style.visibility = 'visible';
  document.getElementById('NavHome').style.color = '#ffffff';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('Reviews').style.visibility = 'hidden';
  document.getElementById('NavReviews').style.color = unselectedColor;
}

function showAbout() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('About').style.visibility = 'visible';
  document.getElementById('NavAbout').style.color = '#ffffff';
  document.getElementById('Reviews').style.visibility = 'hidden';
  document.getElementById('NavReviews').style.color = unselectedColor;
}

function showGallery() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('Gallery').style.visibility = 'visible';
  document.getElementById('NavGallery').style.color = '#ffffff';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('Reviews').style.visibility = 'hidden';
  document.getElementById('NavReviews').style.color = unselectedColor;
}

function showReviews() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('Reviews').style.visibility = 'visible';
  document.getElementById('NavReviews').style.color = '#ffffff';
}
