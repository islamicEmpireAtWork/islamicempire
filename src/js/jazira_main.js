// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [36, 40],
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

var ibnKhurralKhabLayer = L.geoJson(ibnKhurralKhab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alKhabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurralJazLayer = L.geoJson(ibnKhurralJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurralMawLayer = L.geoJson(ibnKhurralMaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alMawStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrDiyMudLayer = L.geoJson(ibnKhurrDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrDiyRabLayer = L.geoJson(ibnKhurrDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrTariqLayer = L.geoJson(ibnKhurrTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnKhurrNoKuraLayer = L.geoJson(ibnKhurrNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn Hawqal

var ibnHawalMawLayer = L.geoJson(ibnHawalMaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alMawStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawDiyMudLayer = L.geoJson(ibnHawDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawDiyMudLayer = L.geoJson(ibnHawDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnHawNoKuraLayer = L.geoJson(ibnHawNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Ibn al-Faqih

var ibnalFaqalKhabLayer = L.geoJson(ibnalFaqalKhab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alKhabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqalMawLayer = L.geoJson(ibnalFaqalMaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alMawStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqDiyMudLayer = L.geoJson(ibnalFaqDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqDiyRabLayer = L.geoJson(ibnalFaqDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqTariqLayer = L.geoJson(ibnalFaqTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var ibnalFaqNoKuraLayer = L.geoJson(ibnalFaqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Muqadassi

var alMuqalKhabLayer = L.geoJson(alMuqalKhab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alKhabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqDiyBakLayer = L.geoJson(alMuqDiyBak, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyBakStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqDiyMudLayer = L.geoJson(alMuqDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqDiyRabLayer = L.geoJson(alMuqDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alMuqTariqLayer = L.geoJson(alMuqTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - al-Istakhri

var alIstDiyMudLayer = L.geoJson(alIstDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstalJazLayer = L.geoJson(alIstalJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
});

var alIstDiyRabLayer = L.geoJson(alIstDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var alIstNoKuraLayer = L.geoJson(alIstNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

// Data - Qudama

var qudalJazLayer = L.geoJson(qudalJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var qudalMawLayer = L.geoJson(qudalMaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alMawStyle);
    },
	onEachFeature: onEachFeature
});

var qudDiyMudLayer = L.geoJson(qudDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var qudDiyRabLayer = L.geoJson(qudDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
}).addTo(map);

var qudTariqLayer = L.geoJson(qudTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
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

var searchLayer = L.layerGroup([qudalJazLayer, qudalMawLayer, qudDiyMudLayer, qudDiyRabLayer, qudTariqLayer, qudNoKuraLayer, ibnKhurralJazLayer, ibnKhurralKhabLayer, ibnKhurralMawLayer, ibnKhurrDiyMudLayer, ibnKhurrDiyRabLayer, ibnKhurrTariqLayer, ibnKhurrNoKuraLayer, ibnHawalMawLayer, ibnHawDiyMudLayer, ibnHawNoKuraLayer, ibnalFaqalKhabLayer, ibnalFaqalMawLayer, ibnalFaqDiyMudLayer, ibnalFaqDiyRabLayer, ibnalFaqTariqLayer, ibnalFaqNoKuraLayer, alMuqalKhabLayer, alMuqDiyBakLayer, alMuqDiyMudLayer, alMuqDiyRabLayer, alMuqTariqLayer, alIstalJazLayer, alIstDiyMudLayer, alIstDiyRabLayer, alIstNoKuraLayer]);

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
map.addLayer(ibnKhurralKhabLayer);
map.addLayer(ibnKhurralJazLayer);
map.addLayer(ibnKhurralMawLayer);
map.addLayer(ibnKhurrDiyMudLayer);
map.addLayer(ibnKhurrDiyRabLayer);
map.addLayer(ibnKhurrTariqLayer);
map.addLayer(ibnKhurrNoKuraLayer);

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradadhbih</span>": {
				" al-Thughūr al-Jazariyya": ibnKhurralJazLayer,
				" al-Khābūr": ibnKhurralKhabLayer,
				" al-Mawṣil": ibnKhurralMawLayer,
				" Diyār Muḍar": ibnKhurrDiyMudLayer,
				" Diyār Rabīʿa": ibnKhurrDiyRabLayer,
        " ʿAmal/Ṭarīq al-Furāt": ibnKhurrTariqLayer,
        " No Kura Mentioned": ibnKhurrNoKuraLayer,
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" al-Mawṣil": ibnHawalMawLayer,
				" Diyār Muḍar": ibnHawDiyMudLayer,
				" No Kura Mentioned": ibnHawNoKuraLayer,
		  },
			"<span class='controlHeading'> Ibn al-Faqih</span>": {
				" al-Khābūr": ibnalFaqalKhabLayer,
				" al-Mawṣil": ibnalFaqalMawLayer,
				" Diyār Muḍar": ibnalFaqDiyMudLayer,
				" Diyār Rabīʿa": ibnalFaqDiyRabLayer,
        " ʿAmal/Ṭarīq al-Furāt": ibnalFaqTariqLayer,
        " No Kura Mentioned": ibnalFaqNoKuraLayer,
		  },
			"<span class='controlHeading'> Qudama</span>": {
				" al-Thughūr al-Jazariyya": qudalJazLayer,
				" al-Mawṣil": qudalMawLayer,
				" Diyār Muḍar": qudDiyMudLayer,
				" Diyār Rabīʿa": qudDiyRabLayer,
				" ʿAmal/Ṭarīq al-Furāt": qudTariqLayer,
        " No Kura Mentioned": qudNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Muqaddasi</span>": {
				" al-Khābūr": alMuqalKhabLayer,
				" Diyār Bakr": alMuqDiyBakLayer,
				" Diyār Muḍar": alMuqDiyMudLayer,
				" Diyār Rabīʿa": alMuqDiyRabLayer,
				" ʿAmal/Ṭarīq al-Furāt": alMuqTariqLayer
		  },
			"<span class='controlHeading'> al-Istakhri</span>": {
				" al-Thughūr al-Jazariyya": alIstalJazLayer,
				" Diyār Muḍar": alIstDiyMudLayer,
				" Diyār Rabīʿa": alIstDiyRabLayer,
        " No Kura Mentioned": alIstNoKuraLayer
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
