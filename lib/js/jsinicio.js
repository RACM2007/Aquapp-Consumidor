window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

window.fn.load2 = function(page) {
  var content = document.getElementById('content');
  content.load(page);
};

var showDialog = function(id) {
  document
    .getElementById(id)
    .show();
	
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};

function nuevo() 
{ 
	window.location = ("index.html"); 
}

function realizarpedido() 
{ 
	window.location = ("realizarpedido.html"); 
}

function editarpedido() 
{ 
	window.location = ("editarpedido.html"); 
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();