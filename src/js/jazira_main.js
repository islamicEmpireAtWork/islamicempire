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
	center: [36, 40],
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
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.Name + "</h3><h5><b>Kura: </b>" + feature.properties.kura_name + "</h5>");
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

// Data - Ibn al-Faqih

var ibnalFaqalKhabLayer = L.geoJson(ibnalFaqalKhab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alKhabStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqalMawLayer = L.geoJson(ibnalFaqalMaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alMawStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqDiyMudLayer = L.geoJson(ibnalFaqDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqDiyRabLayer = L.geoJson(ibnalFaqDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqTariqLayer = L.geoJson(ibnalFaqTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
    },
	onEachFeature: onEachFeature
});

var ibnalFaqNoKuraLayer = L.geoJson(ibnalFaqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Qudama

var qudalJazLayer = L.geoJson(qudalJaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alJazStyle);
    },
	onEachFeature: onEachFeature
});

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
});

var qudDiyRabLayer = L.geoJson(qudDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
});

var qudTariqLayer = L.geoJson(qudTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
    },
	onEachFeature: onEachFeature
});

var qudNoKuraLayer = L.geoJson(qudNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Istakhri

var alIstDiyMudLayer = L.geoJson(alIstDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
});

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
});

var alIstNoKuraLayer = L.geoJson(alIstNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn Hawqal

var ibnHawalMawLayer = L.geoJson(ibnHawalMaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alMawStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawDiyMudLayer = L.geoJson(ibnHawDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawDiyMudLayer = L.geoJson(ibnHawDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
});

var ibnHawNoKuraLayer = L.geoJson(ibnHawNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Muqadassi

var alMuqalKhabLayer = L.geoJson(alMuqalKhab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alKhabStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqDiyBakLayer = L.geoJson(alMuqDiyBak, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyBakStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqDiyMudLayer = L.geoJson(alMuqDiyMud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyMudStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqDiyRabLayer = L.geoJson(alMuqDiyRab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, diyRabStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqTariqLayer = L.geoJson(alMuqTariq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tariqStyle);
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

var allData = [qudalJaz, qudalMaw, qudDiyMud, qudDiyRab, qudTariq, qudNoKura, ibnKhurralJaz, ibnKhurralKhab, ibnKhurralMaw, ibnKhurrDiyMud, ibnKhurrDiyRab, ibnKhurrTariq, ibnKhurrNoKura, ibnHawalMaw, ibnHawDiyMud, ibnHawNoKura, ibnalFaqalKhab, ibnalFaqalMaw, ibnalFaqDiyMud, ibnalFaqDiyRab, ibnalFaqTariq, ibnalFaqNoKura, alMuqalKhab, alMuqDiyBak, alMuqDiyMud, alMuqDiyRab, alMuqTariq, alIstalJaz, alIstDiyMud, alIstDiyRab, alIstNoKura];

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
				" al-Thughūr al-Jazariyya": ibnKhurralJazLayer,
				" al-Khābūr": ibnKhurralKhabLayer,
				" al-Mawṣil": ibnKhurralMawLayer,
				" Diyār Muḍar": ibnKhurrDiyMudLayer,
				" Diyār Rabīʿa": ibnKhurrDiyRabLayer,
        " ʿAmal/Ṭarīq al-Furāt": ibnKhurrTariqLayer,
        " No Kura Mentioned": ibnKhurrNoKuraLayer,
		  },
			"<span class='controlHeading'> Ibn al-Faqīh</span>": {
				" al-Khābūr": ibnalFaqalKhabLayer,
				" al-Mawṣil": ibnalFaqalMawLayer,
				" Diyār Muḍar": ibnalFaqDiyMudLayer,
				" Diyār Rabīʿa": ibnalFaqDiyRabLayer,
        " ʿAmal/Ṭarīq al-Furāt": ibnalFaqTariqLayer,
        " No Kura Mentioned": ibnalFaqNoKuraLayer,
		  },
			"<span class='controlHeading'> Qudāma</span>": {
				" al-Thughūr al-Jazariyya": qudalJazLayer,
				" al-Mawṣil": qudalMawLayer,
				" Diyār Muḍar": qudDiyMudLayer,
				" Diyār Rabīʿa": qudDiyRabLayer,
				" ʿAmal/Ṭarīq al-Furāt": qudTariqLayer,
        " No Kura Mentioned": qudNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Iṣṭakhrī</span>": {
				" al-Thughūr al-Jazariyya": alIstalJazLayer,
				" Diyār Muḍar": alIstDiyMudLayer,
				" Diyār Rabīʿa": alIstDiyRabLayer,
        " No Kura Mentioned": alIstNoKuraLayer
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" al-Mawṣil": ibnHawalMawLayer,
				" Diyār Muḍar": ibnHawDiyMudLayer,
				" No Kura Mentioned": ibnHawNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Muqaddasī</span>": {
				" al-Khābūr": alMuqalKhabLayer,
				" Diyār Bakr": alMuqDiyBakLayer,
				" Diyār Muḍar": alMuqDiyMudLayer,
				" Diyār Rabīʿa": alMuqDiyRabLayer,
				" ʿAmal/Ṭarīq al-Furāt": alMuqTariqLayer
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
