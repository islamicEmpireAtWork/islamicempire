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
	center: [33, 8],
	zoom: 6,
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
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.standardised_transliterated_name + "</h3><h3>" + feature.properties.standardized_arabic_name + "</h3><h5><b>Sub-region: </b>" + feature.properties.kura_subregion_name + "</h5>");
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
});

var alYaqnonAgLayer = L.geoJson(alYaqnonAg, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, nonAgStyle);
    },
	onEachFeature: onEachFeature
});

var alYaqNoKuraLayer = L.geoJson(alYaqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn Hawqal

var ibnHawNoKuraLayer = L.geoJson(ibnHawNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al-Muqaddasi

var alMuqNoKuraLayer = L.geoJson(alMuqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Ibn Idhani

var ibnIdUqbaLayer = L.geoJson(ibnIdUqba, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
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

var allData = [alMuqNoKura, ibnHawNoKura, ibnKhurrNoKura, ibnKhurrSuf, ibnKhurrIdris, ibnKhurrIbad, ibnIdUqba, alYaqAg, alYaqnonAg, alYaqNoKura];

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
            name.innerHTML = props.standardised_transliterated_name + " (" + props.standardized_arabic_name + ")";

            container.appendChild(L.DomUtil.create('br', null, container));

            var cat = props.kura_subregion_name,
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

			var props = ['standardised_transliterated_name', 'standardized_arabic_name', 'kura_subregion_name'];
			fuseSearchCtrl.indexFeatures(allSearchableFeatures.features, props);

map.on("overlayadd", function (event) {
	cornuRoutesLayer.bringToBack();
});

// Layer controls

		var groupedOverlays = {
		  "<span class='controlHeading'> Ibn Khurradādhbih</span>": {
				" Under Sufrid control": ibnKhurrSufLayer,
				" Under Idrisid control": ibnKhurrIdrisLayer,
				" Under Ibadi control": ibnKhurrIbadLayer,
				" No sub-region mentioned": ibnKhurrNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Yaʿqūbī</span>": {
				" Under Aghlabid control": alYaqAgLayer,
				" Rejects Aghlabid control": alYaqnonAgLayer,
				" No sub-region mentioned": alYaqNoKuraLayer,
		  },
		  "<span class='controlHeading'> Ibn Hawqal</span>": {
				" No sub-region mentioned": ibnHawNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Muqaddasī</span>": {
				" No sub-region mentioned": alMuqNoKuraLayer,
		  },
			"<span class='controlHeading'> Ibn ʿIdhārī</span>": {
				" Sites visited by Uqba b. Nafi": ibnIdUqbaLayer,
		  },
			"<span class='controlHeadingRoutes'> Routes</span>": {
				" Routes": cornuRoutesLayer,
		  },
		};

		window.addEventListener('load', function () {
		var routesDropdown = document.getElementsByClassName("trigger")[5];
		routesDropdown.style.display = "none";
		var routesControl = document.getElementsByClassName("leaflet-control-layers-group-selector")[5];
		routesControl.checked = true;
		var routesStylingDiv = document.getElementById("leaflet-control-layers-group-5");
		routesStylingDiv.style.borderTop = "3px solid white";
		routesStylingDiv.style.borderRadius = "1.5px";
		routesStylingDiv.style.marginTop = "20px";
		routesStylingDiv.style.paddingTop = "10px";

		var ibnKhurrControl = document.getElementsByClassName("leaflet-control-layers-group-selector")[0];
		ibnKhurrControl.checked = true;
		var ibnKhurrDropdown = document.getElementsByClassName("leaflet-control-layers-group-label")[0];
		ibnKhurrDropdown.previousElementSibling.control.checked = true;
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
