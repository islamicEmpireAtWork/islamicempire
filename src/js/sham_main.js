// Baselayer - Ancient World Mapping Centre tiles

/*var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlaWRlbWFubiIsImEiOiJja2F2ZDZnZzEwb3R5MnhwZ3B6ZWl0bDB2In0.tbCib63m2Q87ieIg0ABS0g', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1Ijoic2hlaWRlbWFubiIsImEiOiJja2F2ZDZnZzEwb3R5MnhwZ3B6ZWl0bDB2In0.tbCib63m2Q87ieIg0ABS0g'
});*/

var esriImageryTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var esriPhysicalTiles = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Map data &copy; 2014 Esri',
maxZoom: 20,
maxNativeZoom: 8,
});

var nyuTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/isawnyu.map-knmctlkh/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3NtYWtvdiIsImEiOiJjanV2MWI0Y3Awb3NmM3lxaHI2NWNyYjM0In0.st2ucaGF132oehhrpHfYOw', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 20,
maxNativeZoom: 7,
//id: 'isawnyu.map-knmctlkh',
//accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [35, 36],
	zoom: 7,
	maxZoom: 20,
	layers: [esriImageryTiles, 
		 //esriPhysicalTiles, nyuTiles
		],
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
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.transliterated_name + "</h3><h3>" + feature.properties.Name + "</h3><h5><b>Kura: </b>" + feature.properties.kura_name + "</h5>");
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

// Data - al Ya'qubi

var alYaqalShamLayer = L.geoJson(alYaqalSham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alShamStyle);
    },
	onEachFeature: onEachFeature
});

var alYaqalUrdLayer = L.geoJson(alYaqalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
});

var alYaqDimLayer = L.geoJson(alYaqDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
});

var alYaqFilLayer = L.geoJson(alYaqFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
});

var alYaqHimsLayer = L.geoJson(alYaqHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn al-Faqih

var ibnalFaqalAwLayer = L.geoJson(ibnalFaqalAw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAwStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqalUrdLayer = L.geoJson(ibnalFaqalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqDimLayer = L.geoJson(ibnalFaqDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqFilLayer = L.geoJson(ibnalFaqFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn Hawqal

var ibnHawalJazLayer = L.geoJson(ibnHawalJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawalShamLayer = L.geoJson(ibnHawalSham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alShamStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawalUrdLayer = L.geoJson(ibnHawalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawDimLayer = L.geoJson(ibnHawDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawFilLayer = L.geoJson(ibnHawFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawHimsLayer = L.geoJson(ibnHawHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawQinnLayer = L.geoJson(ibnHawQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Muqadassi

var alMuqalSharLayer = L.geoJson(alMuqalShar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alSharStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqalUrdLayer = L.geoJson(alMuqalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqDimLayer = L.geoJson(alMuqDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqFilLayer = L.geoJson(alMuqFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqHimsLayer = L.geoJson(alMuqHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqQinnLayer = L.geoJson(alMuqQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Istakhri

var alIstalAwLayer = L.geoJson(alIstalAw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAwStyle);
    },
	onEachFeature: onEachFeature
});

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
});

var alIstalUrdLayer = L.geoJson(alIstalUrd, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alUrdStyle);
    },
	onEachFeature: onEachFeature
});

var alIstDimLayer = L.geoJson(alIstDim, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dimStyle);
    },
	onEachFeature: onEachFeature
});

var alIstFilLayer = L.geoJson(alIstFil, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, filStyle);
    },
	onEachFeature: onEachFeature
});

var alIstHimsLayer = L.geoJson(alIstHims, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, himsStyle);
    },
	onEachFeature: onEachFeature
});

var alIstQinnLayer = L.geoJson(alIstQinn, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, qinnStyle);
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

var allData = [ibnKhurralAw, ibnKhurralJaz, ibnKhurralSham, ibnKhurralUrd, ibnKhurrDim, ibnKhurrFil, ibnKhurrHims, ibnKhurrQinn, ibnHawalJaz, ibnHawalSham, ibnHawalUrd, ibnHawDim, ibnHawFil, ibnHawHims, ibnHawQinn, ibnalFaqalAw, ibnalFaqalUrd, ibnalFaqDim, ibnalFaqFil, alYaqalSham, alYaqalUrd, alYaqDim, alYaqFil, alYaqHims, alMuqalShar, alMuqalUrd, alMuqDim, alMuqFil, alMuqHims, alMuqQinn, alIstalAw, alIstalJaz, alIstalSham, alIstalUrd, alIstDim, alIstFil, alIstHims, alIstQinn];

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
            name.innerHTML = props.transliterated_name + " (" + props.Name + ")";

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

			var props = ['transliterated_name', 'Name', 'kura_name'];
			fuseSearchCtrl.indexFeatures(allSearchableFeatures.features, props);

map.on("overlayadd", function (event) {
	cornuRoutesLayer.bringToBack();
});

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradādhbih</span>": {
				" al-ʿAwāṣim": ibnKhurralAwLayer,
				" al-Thughūr al-Jazariyya": ibnKhurralJazLayer,
				" al-Thughūr al-Shāmiyya": ibnKhurralShamLayer,
				" al-Urdunn": ibnKhurralUrdLayer,
				" Dimashq": ibnKhurrDimLayer,
        " Falasṭīn": ibnKhurrFilLayer,
        " Ḥimṣ": ibnKhurrHimsLayer,
        " Qinnasrīn": ibnKhurrQinnLayer,
		  },
			"<span class='controlHeading'> al-Yaʿqūbī</span>": {
				" al-Thughūr al-Shāmiyya": alYaqalShamLayer,
				" al-Urdunn": alYaqalUrdLayer,
				" Dimashq": alYaqDimLayer,
				" Falasṭīn": alYaqFilLayer,
				" Ḥimṣ": alYaqHimsLayer
		  },
			"<span class='controlHeading'> Ibn al-Faqīh</span>": {
				" al-ʿAwāṣim": ibnalFaqalAwLayer,
				" al-Urdunn": ibnalFaqalUrdLayer,
				" Dimashq": ibnalFaqDimLayer,
				" Falasṭīn": ibnalFaqFilLayer
		  },
			"<span class='controlHeading'> al-Iṣṭakhrī</span>": {
				" al-ʿAwāṣim": alIstalAwLayer,
				" al-Thughūr al-Jazariyya": alIstalJazLayer,
				" al-Thughūr al-Shāmiyya": alIstalShamLayer,
				" al-Urdunn": alIstalUrdLayer,
				" Dimashq": alIstDimLayer,
				" Falasṭīn": alIstFilLayer,
        " Ḥimṣ": alIstHimsLayer,
        " Qinnasrīn": alIstQinnLayer,
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
			"<span class='controlHeading'> al-Muqaddasī</span>": {
				" al-Sharāt": alMuqalSharLayer,
				" al-Urdunn": alMuqalUrdLayer,
				" Dimashq": alMuqDimLayer,
				" Falasṭīn": alMuqFilLayer,
				" Ḥimṣ": alMuqHimsLayer,
				" Qinnasrīn": alMuqQinnLayer
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
