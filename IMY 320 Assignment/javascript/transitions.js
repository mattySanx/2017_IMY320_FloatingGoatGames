$(function() {

  //********** page transitions ***********
  $("#NavHome").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showHome();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  $("#NavAbout").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showAbout();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  $("#NavGallery").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showGallery();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  $("#NavTeam").click(function() {
    $("#transition-block").animate({
      height: "toggle"
    }, 500, function() {
      showTeam();
      $("#transition-block").animate({
        height: "toggle"
      }, 500);
    });
  });

  //************** easter eggs ****************
  $(".egg").mouseenter(function() {
    $("body").css('background-image', 'url(../images/missile2.jpg)');
  }).mouseleave(function() {
    $("body").css('background-image', 'url(../images/missile.jpg)');
  });

  $(".egg").lettering();
  //render2();

  arrayFonts = ["\'serif\'", "\'san-serif\'", "\'256_bytesregular\'"];
  setInterval(function() {
    console.log("change font");
    $(".egg>span").each(function() {
      //console.log("render2");
      $(this).css('font-family', arrayFonts[Math.floor(Math.random() * (3 - 0 + 1)) + 0]);
    });
  }, 500);

  //***************** team page *********************
  aSelect = false;
  mSelect = false;
  rSelect = false;
  dSelect = false;

  $("#anneta").hover(function() {
    $("body").css('background-image', 'url(../images/imy320pic1.jpg)');
    if(!aSelect) {
      $(this).text(function(i, origText) {
        return "<" + origText + ">";
      });
    }
  }, function() {
    if(!aSelect) {
      $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
      $(this).text(function(i, origText) {
        return origText.substring(1, origText.length - 1);
      });
    }
  });

  $("#matthew").hover(function() {
    $(this).text(function(i, origText) {
      return "<" + origText + ">";
    });
  }, function() {
    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
  });

  $("#rish").hover(function() {
    $("body").css('background-image', 'url(../images/rish.jpg)');
    if(!rSelect) {
      $(this).text(function(i, origText) {
        return "<" + origText + ">";
      });
    }
  }, function() {
    if(!rSelect) {
      $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
      $(this).text(function(i, origText) {
        return origText.substring(1, origText.length - 1);
      });
    }
  });

  $("#dave").hover(function() {
    $(this).text(function(i, origText) {
      return "<" + origText + ">";
    });
  }, function() {
    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
  });

  $("#anneta").click(function() {
    $("body").css('background-image', 'url(../images/imy320pic1.jpg)');
    mSelect = false;
    dSelect = false;
    rSelect = false;
    aSelect = true;
    $(this).text(function(i, origText) {
      return origText.substring(1, origText.length - 1);
    });
    $("#matthew").animate({"left": "-=500"}, 500);
    $("#rish").delay(250).animate({"left": "-=500"}, 500);
    $("#dave").delay(500).animate({"left": "-=500"}, 500);
    $(this).next().delay(750).fadeIn("slow");
    triggerBack();
  });

  $("#hBack").click(function() {
    $("body").css('background-image', 'url(../images/koreanCOld.jpg)');
    if(aSelect) {
      $("#matthew").delay(1000).animate({"left": "+=500"}, 500);
      $("#rish").delay(750).animate({"left": "+=500"}, 500);
      $("#dave").delay(500).animate({"left": "+=500"}, 500);
      $("#anneta").next().fadeOut("slow");
      triggerBack();
      aSelect = false;
    }
  });

});

function triggerBack(){
  $("#hTeam").slideToggle(250);
  $("#hBack").delay(250).slideToggle();
}

var unselectedColor = '#848484';

function showTeam() {
  document.body.style.backgroundImage = "url('images/koreanCOld.jpg')";
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  // document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  // document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  // document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Team').style.visibility = 'visible';
  document.getElementById('NavTeam').style.color = '#ffffff';
  // document.getElementById('NavTeam').style.fontSize = '36px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showHome() {
  document.body.style.backgroundImage = "url('images/fronPageBackground.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  // document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'visible';
  document.getElementById('NavHome').style.color = '#ffffff';
  // document.getElementById('NavHome').style.fontSize = '36px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  // document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  // document.getElementById('NavAbout').style.fontSize = '30px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showAbout() {
  document.body.style.backgroundImage = "url('images/missile.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  // document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  // document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'hidden';
  document.getElementById('NavGallery').style.color = unselectedColor;
  // document.getElementById('NavGallery').style.fontSize = '30px';
  document.getElementById('About').style.visibility = 'visible';
  document.getElementById('NavAbout').style.color = '#ffffff';
  // document.getElementById('NavAbout').style.fontSize = '36px';
  document.getElementById('Reviews').style.visibility = 'hidden';
}

function showGallery() {
  document.body.style.backgroundImage = "url('images/smallBoy.jpg')";
  document.getElementById('Team').style.visibility = 'hidden';
  document.getElementById('NavTeam').style.color = unselectedColor;
  // document.getElementById('NavTeam').style.fontSize = '30px';
  document.getElementById('Home').style.visibility = 'hidden';
  document.getElementById('NavHome').style.color = unselectedColor;
  // document.getElementById('NavHome').style.fontSize = '30px';
  document.getElementById('Gallery').style.visibility = 'visible';
  document.getElementById('NavGallery').style.color = '#ffffff';
  // document.getElementById('NavGallery').style.fontSize = '36px';
  document.getElementById('About').style.visibility = 'hidden';
  document.getElementById('NavAbout').style.color = unselectedColor;
  // document.getElementById('NavAbout').style.fontSize = '30px';
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
