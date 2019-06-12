// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [33, 8],
	zoom: 6,
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
}

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

var ibnKhurrSufLayer = L.geoJson(ibnKhurrSuf, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sufStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrIdrisLayer = L.geoJson(ibnKhurrIdris, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, idrisStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrIbadLayer = L.geoJson(ibnKhurrIbad, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ibadStyle);
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

var alYaqAgLayer = L.geoJson(alYaqAg, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, agStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alYaqnonAgLayer = L.geoJson(alYaqnonAg, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, nonAgStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alYaqNoKuraLayer = L.geoJson(alYaqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Muqaddasi

var alMuqNoKuraLayer = L.geoJson(alMuqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn Hawqal

var ibnHawNoKuraLayer = L.geoJson(ibnHawNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn Idhani

var ibnIdUqbaLayer = L.geoJson(ibnIdUqba, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Search control - searches H_loc geoJSON for layer that is currently open

var searchLayer = L.layerGroup([alMuqNoKuraLayer, ibnHawNoKuraLayer, ibnKhurrNoKuraLayer, ibnKhurrSufLayer, ibnKhurrIdrisLayer, ibnKhurrIbadLayer, ibnIdUqbaLayer, alYaqAgLayer, alYaqnonAgLayer, alYaqNoKuraLayer]);

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
map.addLayer(ibnKhurrSufLayer);
map.addLayer(ibnKhurrIdrisLayer);
map.addLayer(ibnKhurrIbadLayer);

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradadhbih</span>": {
				" Under Sufrid control": ibnKhurrSufLayer,
				" Under Idrisid control": ibnKhurrIdrisLayer,
				" Under Ibadi control": ibnKhurrIbadLayer,
				" No sub-region mentioned": ibnKhurrNoKuraLayer,
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" No sub-region mentioned": ibnHawNoKuraLayer,
		  },
      "<span class='controlHeading'> al-Ya'qubi</span>": {
				" Under Aghlabid control": alYaqAgLayer,
				" Rejects Aghlabid control": alYaqnonAgLayer,
				" No sub-region mentioned": alYaqNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Muqaddasi</span>": {
				" No sub-region mentioned": alMuqNoKuraLayer,
		  },
			"<span class='controlHeading'> ibn Idhari</span>": {
				" Sites visited by Uqba b. Nafi": ibnIdUqbaLayer,
		  }
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
