$(function(){

  // page transitions
  $("#NavHome").click(function(){
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function(){
      showHome();
      $("#transition-block").animate({height: "toggle"}, 500);
    });
  });

  $("#NavAbout").click(function(){
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function(){
      showAbout();
      $("#transition-block").animate({height: "toggle"}, 500);
    });
  });

  $("#NavGallery").click(function(){
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function(){
      showGallery();
      $("#transition-block").animate({height: "toggle"}, 500);
    });
  });

  $("#NavTeam").click(function(){
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function(){
      showTeam();
      $("#transition-block").animate({height: "toggle"}, 500);
    });
  });

  // easter eggs
  $(".egg").mouseenter(function(){
    $("body").css('background-image', 'url(../images/fronPageBackgroundOne.jpg)');
  }).mouseleave(function(){
    $("body").css('background-image', 'url(../images/fronPageBackground.jpg)');
  });

  $(".egg").lettering();
  render2();
});

var arrayFonts = ["serif", "san-serif", "256_bytesregular"];

function render2() {
  requestAnimationFrame(render2);
  $(".egg>span").each(function(){
    console.log("render2");
    $(this).css('font-family', arrayFonts[Math.floor(Math.random() * (3 - 0 + 1)) + 0]);
  });
}

var unselectedColor = '#848484';
// var home = document.getElementById('Home');
// var homeNav = document.getElementById('NavHome');
// var gallery = document.getElementById('Gallery');
// var galleryNav = document.getElementById('NavGallery');
// var about = document.getElementById('About');
// var aboutNav = document.getElementById('NavAbout');
// var team = document.getElementById('Team');
// var teamNav = document.getElementById('NavTeam');

function showTeam() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Team').style.visibility = 'visible';
  document.getElementById('NavTeam').style.color = '#ffffff';
  document.getElementById('NavTeam').style.fontSize = '36px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showHome() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'visible';
  document.getElementById('NavHome').style.color = '#ffffff';
  document.getElementById('NavHome').style.fontSize = '36px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showAbout() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'visible';
  document.getElementById('NavAbout').style.color = '#ffffff';
  document.getElementById('NavAbout').style.fontSize = '36px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showGallery() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'visible';
  document.getElementById('NavGallery').style.color = '#ffffff';
  document.getElementById('NavGallery').style.fontSize = '36px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Reviews').style.visibility = 'hidden';
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
}
