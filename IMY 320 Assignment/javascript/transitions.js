$(function(){
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
      showTeam()
      $("#transition-block").animate({height: "toggle"}, 500);
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
