var unselectedColor = '#848484';

function showTeam() {
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