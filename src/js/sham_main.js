// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [35, 36],
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
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.Name + "</h3><h5><b>" + feature.properties.kura_name + "</b></h5>");
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

var ibnKhurralAwLayer = L.geoJson(ibnKhurralAw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAwStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurralJazLayer = L.geoJson(ibnKhurralJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurralShamLayer = L.geoJson(ibnKhurralSham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alShamStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurralUrdLayer = L.geoJson(ibnKhurralUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrDimLayer = L.geoJson(ibnKhurrDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrFilLayer = L.geoJson(ibnKhurrFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrHimsLayer = L.geoJson(ibnKhurrHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrQinnLayer = L.geoJson(ibnKhurrQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn Hawqal

var ibnHawalJazLayer = L.geoJson(ibnHawalJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawalShamLayer = L.geoJson(ibnHawalSham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alShamStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawalUrdLayer = L.geoJson(ibnHawalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawDimLayer = L.geoJson(ibnHawDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawFilLayer = L.geoJson(ibnHawFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawHimsLayer = L.geoJson(ibnHawHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawQinnLayer = L.geoJson(ibnHawQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn al-Faqih

var ibnalFaqalAwLayer = L.geoJson(ibnalFaqalAw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAwStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqalUrdLayer = L.geoJson(ibnalFaqalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqDimLayer = L.geoJson(ibnalFaqDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqFilLayer = L.geoJson(ibnalFaqFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al Ya'qubi

var alYaqalShamLayer = L.geoJson(alYaqalSham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alShamStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alYaqalUrdLayer = L.geoJson(alYaqalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alYaqDimLayer = L.geoJson(alYaqDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alYaqFilLayer = L.geoJson(alYaqFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alYaqHimsLayer = L.geoJson(alYaqHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Muqadassi

var alMuqalSharLayer = L.geoJson(alMuqalShar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alSharStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqalUrdLayer = L.geoJson(alMuqalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqDimLayer = L.geoJson(alMuqDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqFilLayer = L.geoJson(alMuqFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqHimsLayer = L.geoJson(alMuqHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqQinnLayer = L.geoJson(alMuqQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Istakhri

var alIstalAwLayer = L.geoJson(alIstalAw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAwStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstalJazLayer = L.geoJson(alIstalJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
});

var alIstalShamLayer = L.geoJson(alIstalSham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alShamStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstalUrdLayer = L.geoJson(alIstalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstDimLayer = L.geoJson(alIstDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstFilLayer = L.geoJson(alIstFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstHimsLayer = L.geoJson(alIstHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstQinnLayer = L.geoJson(alIstQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Search control - searches H_loc geoJSON for layer that is currently open

var searchLayer = L.layerGroup([ibnKhurralAwLayer, ibnKhurralJazLayer, ibnKhurralShamLayer, ibnKhurralUrdLayer, ibnKhurrDimLayer, ibnKhurrFilLayer, ibnKhurrHimsLayer, ibnKhurrQinnLayer, ibnHawalJazLayer, ibnHawalShamLayer, ibnHawalUrdLayer, ibnHawDimLayer, ibnHawFilLayer, ibnHawHimsLayer, ibnHawQinnLayer, ibnalFaqalAwLayer, ibnalFaqalUrdLayer, ibnalFaqDimLayer, ibnalFaqFilLayer, alYaqalShamLayer, alYaqalUrdLayer, alYaqDimLayer, alYaqFilLayer, alYaqHimsLayer, alMuqalSharLayer, alMuqalUrdLayer, alMuqDimLayer, alMuqFilLayer, alMuqHimsLayer, alMuqQinnLayer, alIstalAwLayer, alIstalJazLayer, alIstalShamLayer, alIstalUrdLayer, alIstDimLayer, alIstFilLayer, alIstHimsLayer, alIstQinnLayer]);

L.control.search({
layer: searchLayer,
initial: false,
propertyName: 'Name',
buildTip: function(text, val) {
	var type = val.layer.feature.properties.Name;
	return '<a href="#" class="'+type+'">'+text+'<b>'+type+'</b></a>';
}
})
.addTo(map);

map.eachLayer(function(layer) {
	map.removeLayer(layer);
});

map.addLayer(mapboxTiles);
map.addLayer(ibnKhurralAwLayer);
map.addLayer(ibnKhurralJazLayer);
map.addLayer(ibnKhurralShamLayer);
map.addLayer(ibnKhurralUrdLayer);
map.addLayer(ibnKhurrDimLayer);
map.addLayer(ibnKhurrFilLayer);
map.addLayer(ibnKhurrHimsLayer);
map.addLayer(ibnKhurrQinnLayer);

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradadhbih</span>": {
				" al-ʿAwāṣim": ibnKhurralAwLayer,
				" al-Thughūr al-Jazariyya": ibnKhurralJazLayer,
				" al-Thughūr al-Shāmiyya": ibnKhurralShamLayer,
				" al-Urdunn": ibnKhurralUrdLayer,
				" Dimashq": ibnKhurrDimLayer,
        " Falasṭīn": ibnKhurrFilLayer,
        " Ḥimṣ": ibnKhurrHimsLayer,
        " Qinnasrīn": ibnKhurrQinnLayer,
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" al-Thughūr al-Jazariyya": ibnHawalJazLayer,
				" al-Thughūr al-Shāmiyya": ibnHawalShamLayer,
				" al-Urdunn": ibnHawalUrdLayer,
				" Dimashq": ibnHawDimLayer,
				" Falasṭīn": ibnHawFilLayer,
				" Ḥimṣ": ibnHawHimsLayer,
        " Qinnasrīn": ibnHawQinnLayer
		  },
			"<span class='controlHeading'> Ibn al-Faqih</span>": {
				" al-ʿAwāṣim": ibnalFaqalAwLayer,
				" al-Urdunn": ibnalFaqalUrdLayer,
				" Dimashq": ibnalFaqDimLayer,
				" Falasṭīn": ibnalFaqFilLayer
		  },
			"<span class='controlHeading'> al-Ya'qubi</span>": {
				" al-Thughūr al-Shāmiyya": alYaqalShamLayer,
				" al-Urdunn": alYaqalUrdLayer,
				" Dimashq": alYaqDimLayer,
				" Falasṭīn": alYaqFilLayer,
				" Ḥimṣ": alYaqHimsLayer
		  },
			"<span class='controlHeading'> al-Muqaddasi</span>": {
				" al-Sharāt": alMuqalSharLayer,
				" al-Urdunn": alMuqalUrdLayer,
				" Dimashq": alMuqDimLayer,
				" Falasṭīn": alMuqFilLayer,
				" Ḥimṣ": alMuqHimsLayer,
				" Qinnasrīn": alMuqQinnLayer
		  },
			"<span class='controlHeading'> al-Istakhri</span>": {
				" al-ʿAwāṣim": alIstalAwLayer,
				" al-Thughūr al-Jazariyya": alIstalJazLayer,
				" al-Thughūr al-Shāmiyya": alIstalShamLayer,
				" al-Urdunn": alIstalUrdLayer,
				" Dimashq": alIstDimLayer,
				" Falasṭīn": alIstFilLayer,
        " Ḥimṣ": alIstHimsLayer,
        " Qinnasrīn": alIstQinnLayer,
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
}
