// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [30, 52],
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
}

function onEachFeature(feature, layer) {
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.standardized_name + "</h3><h5><b>" + feature.properties.kura_name + "</b></h5>");
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

var ibnKhurrArdLayer = L.geoJson(ibnKhurrArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrArrLayer = L.geoJson(ibnKhurrArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrDarLayer = L.geoJson(ibnKhurrDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrIstLayer = L.geoJson(ibnKhurrIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrSubLayer = L.geoJson(ibnKhurrSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn Hawqal

var ibnHawArdLayer = L.geoJson(ibnHawArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawArrLayer = L.geoJson(ibnHawArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawDarLayer = L.geoJson(ibnHawDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawIstLayer = L.geoJson(ibnHawIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawQubLayer = L.geoJson(ibnHawQub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qubStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawSubLayer = L.geoJson(ibnHawSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn al-Faqih

var ibnAlFaqArdLayer = L.geoJson(ibnAlFaqArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlFaqArrLayer = L.geoJson(ibnAlFaqArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlFaqDarLayer = L.geoJson(ibnAlFaqDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlFaqIstLayer = L.geoJson(ibnAlFaqIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlFaqSubLayer = L.geoJson(ibnAlFaqSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn al-Balkhi

var ibnAlBalArdLayer = L.geoJson(ibnAlBalArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlBalDarLayer = L.geoJson(ibnAlBalDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlBalIstLayer = L.geoJson(ibnAlBalIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlBalQubLayer = L.geoJson(ibnAlBalQub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qubStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnAlBalSubLayer = L.geoJson(ibnAlBalSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Muqadassi

var alMuqArdLayer = L.geoJson(alMuqArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqArrLayer = L.geoJson(alMuqArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqDarLayer = L.geoJson(alMuqDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqIstLayer = L.geoJson(alMuqIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqShiLayer = L.geoJson(alMuqShi, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, shiStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqSubLayer = L.geoJson(alMuqSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Istakhri

var alIstArdLayer = L.geoJson(alIstArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstArdAreasLayer = L.geoJson(alIstArdAreas, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardAreasStyle);
    },
	onEachFeature: onEachFeature
});

var alIstArrLayer = L.geoJson(alIstArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstDarLayer = L.geoJson(alIstDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstIstLayer = L.geoJson(alIstIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstQubLayer = L.geoJson(alIstQub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qubStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstSubLayer = L.geoJson(alIstSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Search control - searches H_loc geoJSON for layer that is currently open

var searchLayer = L.layerGroup([ibnKhurrSubLayer, ibnKhurrIstLayer, ibnKhurrDarLayer, ibnKhurrArrLayer, ibnKhurrArdLayer, ibnHawArdLayer, ibnHawArrLayer, ibnHawDarLayer, ibnHawSubLayer, ibnHawIstLayer, ibnHawQubLayer, ibnAlFaqSubLayer, ibnAlFaqIstLayer, ibnAlFaqDarLayer, ibnAlFaqArrLayer, ibnAlFaqArdLayer, ibnAlBalArdLayer, ibnAlBalDarLayer, ibnAlBalIstLayer, ibnAlBalQubLayer, ibnAlBalSubLayer, alMuqArdLayer, alMuqArrLayer, alMuqDarLayer, alMuqIstLayer, alMuqShiLayer, alMuqSubLayer, alIstArdLayer, alIstArrLayer, alIstDarLayer, alIstIstLayer, alIstQubLayer, alIstSubLayer]);

L.control.search({
layer: searchLayer,
initial: false,
propertyName: 'standardized_name',
buildTip: function(text, val) {
	var type = val.layer.feature.properties.standardized_name;
	return '<a href="#" class="'+type+'">'+text+'<b>'+type+'</b></a>';
}
})
.addTo(map);

map.eachLayer(function(layer) {
	map.removeLayer(layer);
});

map.addLayer(mapboxTiles);
map.addLayer(ibnKhurrSubLayer);
map.addLayer(ibnKhurrIstLayer);
map.addLayer(ibnKhurrDarLayer);
map.addLayer(ibnKhurrArrLayer);
map.addLayer(ibnKhurrArdLayer);

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradadhbih</span>": {
				" Ardashir Khurra": ibnKhurrArdLayer,
				" Arrajan": ibnKhurrArrLayer,
				" Darabjird": ibnKhurrDarLayer,
				" Istakhr": ibnKhurrIstLayer,
				" Sabur": ibnKhurrSubLayer
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" Ardashir Khurra": ibnHawArdLayer,
				" Arrajan": ibnHawArrLayer,
				" Darabjird": ibnHawDarLayer,
				" Istakhr": ibnHawIstLayer,
				" Qubadh Khwarra": ibnHawQubLayer,
				" Sabur": ibnHawSubLayer
		  },
			"<span class='controlHeading'> Ibn al-Faqih</span>": {
				" Ardashir Khurra": ibnAlFaqArdLayer,
				" Arrajan": ibnAlFaqArrLayer,
				" Darabjird": ibnAlFaqDarLayer,
				" Istakhr": ibnAlFaqIstLayer,
				" Sabur": ibnAlFaqSubLayer
		  },
			"<span class='controlHeading'> Ibn al-Balkhi</span>": {
				" Ardashir Khurra": ibnAlBalArdLayer,
				" Darabjird": ibnAlBalDarLayer,
				" Istakhr": ibnAlBalIstLayer,
				" Qubadh Khwarra": ibnAlBalQubLayer,
				" Sabur": ibnAlBalSubLayer
		  },
			"<span class='controlHeading'> al-Muqaddasi</span>": {
				" Ardashir Khurra": alMuqArdLayer,
				" Arrajan": alMuqArrLayer,
				" Darabjird": alMuqDarLayer,
				" Istakhr": alMuqIstLayer,
				" Shiraz": alMuqShiLayer,
				" Sabur": alMuqSubLayer
		  },
			"<span class='controlHeading'> al-Istakhri</span>": {
				" Ardashir Khurra": alIstArdLayer,
				" Arrajan": alIstArrLayer,
				" Darabjird": alIstDarLayer,
				" Istakhr": alIstIstLayer,
				" Qubadh Khwarra": alIstQubLayer,
				" Sabur": alIstSubLayer,
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
