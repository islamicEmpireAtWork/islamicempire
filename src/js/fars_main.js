// Baselayer - Ancient World Mapping Centre tiles

/*var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlaWRlbWFubiIsImEiOiJja2F2ZDZnZzEwb3R5MnhwZ3B6ZWl0bDB2In0.tbCib63m2Q87ieIg0ABS0g', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1Ijoic2hlaWRlbWFubiIsImEiOiJja2F2ZDZnZzEwb3R5MnhwZ3B6ZWl0bDB2In0.tbCib63m2Q87ieIg0ABS0g'
});*/

/*var mapboxTiles = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Map data &copy; 2014 Esri',
maxZoom: 10,
});*/

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/isawnyu.map-knmctlkh/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3NtYWtvdiIsImEiOiJjanV2MWI0Y3Awb3NmM3lxaHI2NWNyYjM0In0.st2ucaGF132oehhrpHfYOw', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
//id: 'isawnyu.map-knmctlkh',
//accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
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
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.kml_input_name + "</h3><h3>" + feature.properties.standardized_name + "</h3><h5><b>Kura: </b>" + feature.properties.kura_name + "</h5>");
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
		feature.layer = layer;
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

// Data - Ibn al-Faqih

var ibnAlFaqArdLayer = L.geoJson(ibnAlFaqArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlFaqArrLayer = L.geoJson(ibnAlFaqArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlFaqDarLayer = L.geoJson(ibnAlFaqDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlFaqIstLayer = L.geoJson(ibnAlFaqIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlFaqSubLayer = L.geoJson(ibnAlFaqSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Istakhri

var alIstArdLayer = L.geoJson(alIstArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
});

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
});

var alIstDarLayer = L.geoJson(alIstDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
});

var alIstIstLayer = L.geoJson(alIstIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
});

var alIstQubLayer = L.geoJson(alIstQub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qubStyle);
    },
	onEachFeature: onEachFeature
});

var alIstSubLayer = L.geoJson(alIstSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn Hawqal

var ibnHawArdLayer = L.geoJson(ibnHawArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawArrLayer = L.geoJson(ibnHawArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawDarLayer = L.geoJson(ibnHawDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawIstLayer = L.geoJson(ibnHawIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawQubLayer = L.geoJson(ibnHawQub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qubStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawSubLayer = L.geoJson(ibnHawSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Muqadassi

var alMuqArdLayer = L.geoJson(alMuqArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqArrLayer = L.geoJson(alMuqArr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, arrStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqDarLayer = L.geoJson(alMuqDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqIstLayer = L.geoJson(alMuqIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqShiLayer = L.geoJson(alMuqShi, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, shiStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqSubLayer = L.geoJson(alMuqSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn al-Balkhi

var ibnAlBalArdLayer = L.geoJson(ibnAlBalArd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ardStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlBalDarLayer = L.geoJson(ibnAlBalDar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, darStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlBalIstLayer = L.geoJson(ibnAlBalIst, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, istStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlBalQubLayer = L.geoJson(ibnAlBalQub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qubStyle);
    },
	onEachFeature: onEachFeature
});

var ibnAlBalSubLayer = L.geoJson(ibnAlBalSub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Cornu Routes

var cornuRoutesLayer = L.geoJson(cornuRoutes, {
	style: function (feature) {
		return {
			weight: 2,
			color: "black",
			opacity: 0.5,
		};
	}
}).addTo(map).bringToBack();

// Search control - searches H_loc geoJSON for layer that is currently open

var allData = [ibnKhurrSub, ibnKhurrIst, ibnKhurrDar, ibnKhurrArr, ibnKhurrArd, ibnHawArd, ibnHawArr, ibnHawDar, ibnHawSub, ibnHawIst, ibnHawQub, ibnAlFaqSub, ibnAlFaqIst, ibnAlFaqDar, ibnAlFaqArr, ibnAlFaqArd, ibnAlBalArd, ibnAlBalDar, ibnAlBalIst, ibnAlBalQub, ibnAlBalSub, alMuqArd, alMuqArr, alMuqDar, alMuqIst, alMuqShi, alMuqSub, alIstArd, alIstArr, alIstDar, alIstIst, alIstQub, alIstSub];

// Add fuse search control
    var options = {
        position: 'topleft',
        title: 'Search',
        placeholder: 'Search for place...',
        maxResultLength: 15,
        threshold: 0.5,
        showInvisibleFeatures: true,
        showResultFct: function(feature, container) {
            props = feature.properties;
            var name = L.DomUtil.create('b', null, container);
            name.innerHTML = props.kml_input_name + " (" + props.standardized_name + ")";

            container.appendChild(L.DomUtil.create('br', null, container));

            var cat = props.kura_name,
                info = '' + cat + ', ' + props.author;
            container.appendChild(document.createTextNode(info));
        }
    };
    var fuseSearchCtrl = L.control.fuseSearch(options);
    map.addControl(fuseSearchCtrl);

    // Load the data
			var allSearchableFeatures = {
				type: "FeatureCollection",
				features: []
			};
			for (var i = 0; i < allData.length; i++) {
				for (var j = 0; j < allData[i].features.length; j++) {
				allSearchableFeatures.features.push(allData[i].features[j]);
				}
			}

			var props = ['kml_input_name', 'standardized_name', 'kura_name'];
			fuseSearchCtrl.indexFeatures(allSearchableFeatures.features, props);

map.on("overlayadd", function (event) {
	cornuRoutesLayer.bringToBack();
});

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradādhbih</span>": {
				" Ardashir Khurra": ibnKhurrArdLayer,
				" Arrajan": ibnKhurrArrLayer,
				" Darabjird": ibnKhurrDarLayer,
				" Istakhr": ibnKhurrIstLayer,
				" Sabur": ibnKhurrSubLayer
		  },
			"<span class='controlHeading'> Ibn al-Faqīh</span>": {
				" Ardashir Khurra": ibnAlFaqArdLayer,
				" Arrajan": ibnAlFaqArrLayer,
				" Darabjird": ibnAlFaqDarLayer,
				" Istakhr": ibnAlFaqIstLayer,
				" Sabur": ibnAlFaqSubLayer
		  },
			"<span class='controlHeading'> al-Iṣṭakhrī</span>": {
				" Ardashir Khurra": alIstArdLayer,
				" Arrajan": alIstArrLayer,
				" Darabjird": alIstDarLayer,
				" Istakhr": alIstIstLayer,
				" Qubadh Khwarra": alIstQubLayer,
				" Sabur": alIstSubLayer,
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" Ardashir Khurra": ibnHawArdLayer,
				" Arrajan": ibnHawArrLayer,
				" Darabjird": ibnHawDarLayer,
				" Istakhr": ibnHawIstLayer,
				" Qubadh Khwarra": ibnHawQubLayer,
				" Sabur": ibnHawSubLayer
		  },
			"<span class='controlHeading'> al-Muqaddasī</span>": {
				" Ardashir Khurra": alMuqArdLayer,
				" Arrajan": alMuqArrLayer,
				" Darabjird": alMuqDarLayer,
				" Istakhr": alMuqIstLayer,
				" Shiraz": alMuqShiLayer,
				" Sabur": alMuqSubLayer
		  },
			"<span class='controlHeading'> Ibn al-Balkhī</span>": {
				" Ardashir Khurra": ibnAlBalArdLayer,
				" Darabjird": ibnAlBalDarLayer,
				" Istakhr": ibnAlBalIstLayer,
				" Qubadh Khwarra": ibnAlBalQubLayer,
				" Sabur": ibnAlBalSubLayer
		  },
			"<span class='controlHeadingRoutes'> Routes</span>": {
				" Routes": cornuRoutesLayer,
		  },
		};

		window.addEventListener('load', function () {
		var routesDropdown = document.getElementsByClassName("trigger")[6];
		routesDropdown.style.display = "none";
		var routesControl = document.getElementsByClassName("leaflet-control-layers-group-selector")[6];
		routesControl.checked = true;
		var routesStylingDiv = document.getElementById("leaflet-control-layers-group-6");
		routesStylingDiv.style.borderTop = "3px solid white";
		routesStylingDiv.style.borderRadius = "1.5px";
		routesStylingDiv.style.marginTop = "20px";
		routesStylingDiv.style.paddingTop = "10px";

		var firstControl = document.getElementsByClassName("leaflet-control-layers-group-selector")[0];
		firstControl.checked = true;
		var firstControlDropdown = document.getElementsByClassName("leaflet-control-layers-group-label")[0];
		firstControlDropdown.previousElementSibling.control.checked = true;
		});

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
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "auto";
}

function closeMMDiv() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function openAMDiv() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "auto";
}

function closeAMDiv() {
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function closeMenuDivs() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}
