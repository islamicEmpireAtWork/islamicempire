// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [18, 48],
	zoom: 7,
	layers: [mapboxTiles],
});

// Animation on click

function zoomToFeature(e) {
  map.flyTo(e.latlng, 10, {
		duration: 0.5,
	});
};

var popupOptions = {
	className: 'custom',
	closeButton: false
};

function onEachFeature(feature, layer) {
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.standardised_transliterated_name + "</h3><h5><b>" + feature.properties.kura_subregion_name + "</b></h5>");
	layer.bindPopup(popup);
    layer.on({
        click: zoomToFeature,
    });
		layer.on('mouseover', function(event) {
			layer.openPopup();
		});
		layer.on('mouseout', function(event) {
			layer.closePopup();
		});
};

// Data - Ibn Khurradadhbih

var ibnKhurralJanLayer = L.geoJson(ibnKhurralJan, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJanStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrSanLayer = L.geoJson(ibnKhurrSan, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sanStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrHadLayer = L.geoJson(ibnKhurrHad, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, hadStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrNoKuraLayer = L.geoJson(ibnKhurrNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Ya'qubi

var alYaqSanLayer = L.geoJson(alYaqSan, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sanStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);


var alYaqNoKuraLayer = L.geoJson(alYaqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Qudama

var qudSanLayer = L.geoJson(qudSan, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sanStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var qudNoKuraLayer = L.geoJson(qudNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Search control - searches H_loc geoJSON for layer that is currently open

var searchLayer = L.layerGroup([ibnKhurralJanLayer, ibnKhurrSanLayer, ibnKhurrHadLayer, ibnKhurrNoKuraLayer, alYaqSanLayer, alYaqNoKuraLayer, qudSanLayer, qudNoKuraLayer]);

L.control.search({
layer: searchLayer,
initial: false,
propertyName: 'standardised_transliterated_name',
buildTip: function(text, val) {
	var type = val.layer.feature.properties.standardised_transliterated_name;
	return '<a href="#" class="'+type+'">'+text+'<b>'+type+'</b></a>';
}
})
.addTo(map);

map.eachLayer(function(layer) {
	map.removeLayer(layer);
});

map.addLayer(mapboxTiles);
map.addLayer(ibnKhurrNoKuraLayer);
map.addLayer(ibnKhurralJanLayer);
map.addLayer(ibnKhurrSanLayer);
map.addLayer(ibnKhurrHadLayer);

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradadhbih</span>": {
				" al-Janad": ibnKhurralJanLayer,
				" Sanʿāʾ": ibnKhurrSanLayer,
				" Hadramaut": ibnKhurrHadLayer,
				" No district identified": ibnKhurrNoKuraLayer,
		  },
      "<span class='controlHeading'> al-Ya'qubi</span>": {
				" Sanʿāʾ": alYaqSanLayer,
				" No district identified": alYaqNoKuraLayer,
		  },
			"<span class='controlHeading'> Qudama</span>": {
        " Sanʿāʾ": qudSanLayer,
				" No district identified": qudNoKuraLayer,
		  },
		};

		var options = {
		  groupCheckboxes: true,
		  collapsed: false,
		};

		L.control.groupedLayers(null, groupedOverlays, options).addTo(map);

	$('.leaflet-control-layers-group-label').each(function(index){
			var self = $(this),
		  		trigger = $('<label>', {
		      	html: '<h1>&#9662</h1>',
		        class:'trigger',
		        for: 'dropdown-trigger-' + index
		      }).insertBefore(self),
		      radio = $('<input>', {
		      	type : 'checkbox',
		        class: 'trigger-checkbox',
						name : 'dropdown-control',
		       	id: 'dropdown-trigger-' + index
		      }).insertBefore(trigger);
		});

		// Menu

		/* Open */
function openNav() {
  document.getElementById("myNav").style.width = "20%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
	closeMenuDivs();
}

/* Open Mental Maps div */
function openMMDiv() {
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "150px";
}

function closeMMDiv() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function openAMDiv() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "150px";
}

function closeAMDiv() {
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function closeMenuDivs() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}
