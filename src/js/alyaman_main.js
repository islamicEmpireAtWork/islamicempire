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
	var popup = L.popup(popupOptions, layer).setContent("<h3>" + feature.properties.standardised_transliterated_name + "</h3><h3>" + feature.properties.standardized_arabic_name + "<h5><b>Sub-district: </b>" + feature.properties.kura_subregion_name + "</h5>");
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
});


var alYaqNoKuraLayer = L.geoJson(alYaqNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - Qudama

var qudSanLayer = L.geoJson(qudSan, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sanStyle);
    },
	onEachFeature: onEachFeature
});

var qudNoKuraLayer = L.geoJson(qudNoKura, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, noKuraStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al Muqaddasi

var alMuqTihLayer = L.geoJson(alMuqTih, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tihStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqAbyLayer = L.geoJson(alMuqAby, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, abyStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqAthrLayer = L.geoJson(alMuqAthr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, athrStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqalSarLayer = L.geoJson(alMuqalSar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alSarStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqalAhqLayer = L.geoJson(alMuqalAhq, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAhqStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqMahLayer = L.geoJson(alMuqMah, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, mahStyle);
    },
	onEachFeature: onEachFeature
});

var alMuqSabLayer = L.geoJson(alMuqSab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sabStyle);
    },
	onEachFeature: onEachFeature
});

// Data - al Hamdani

var alHamSadLayer = L.geoJson(alHamSad, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, sadStyle);
    },
	onEachFeature: onEachFeature
});

var alHamHamLayer = L.geoJson(alHamHam, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, hamStyle);
    },
	onEachFeature: onEachFeature
});

var alHamKhawLayer = L.geoJson(alHamKhaw, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, khawStyle);
    },
	onEachFeature: onEachFeature
});

var alHamDhuLayer = L.geoJson(alHamDhu, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dhuStyle);
    },
	onEachFeature: onEachFeature
});

var alHamAqyLayer = L.geoJson(alHamAqy, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, aqyStyle);
    },
	onEachFeature: onEachFeature
});

var alHamHadurLayer = L.geoJson(alHamHadur, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, hadurStyle);
    },
	onEachFeature: onEachFeature
});

var alHamHazLayer = L.geoJson(alHamHaz, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, hazStyle);
    },
	onEachFeature: onEachFeature
});

var alHamAlhLayer = L.geoJson(alHamAlh, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alhStyle);
    },
	onEachFeature: onEachFeature
});

var alHamAnsLayer = L.geoJson(alHamAns, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, ansStyle);
    },
	onEachFeature: onEachFeature
});

var alHamDhamLayer = L.geoJson(alHamDham, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dhamStyle);
    },
	onEachFeature: onEachFeature
});

var alHamJubLayer = L.geoJson(alHamJub, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, jubStyle);
    },
	onEachFeature: onEachFeature
});

var alHamHaysLayer = L.geoJson(alHamHays, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, haysStyle);
    },
	onEachFeature: onEachFeature
});

var alHamMarLayer = L.geoJson(alHamMar, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, marStyle);
    },
	onEachFeature: onEachFeature
});

var alHamRadLayer = L.geoJson(alHamRad, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, radStyle);
    },
	onEachFeature: onEachFeature
});

var alHamJayshLayer = L.geoJson(alHamJaysh, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, jayshStyle);
    },
	onEachFeature: onEachFeature
});

var alHamMayLayer = L.geoJson(alHamMay, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, mayStyle);
    },
	onEachFeature: onEachFeature
});

var alHamDhuRuLayer = L.geoJson(alHamDhuRu, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, dhuRuStyle);
    },
	onEachFeature: onEachFeature
});

var alHamalAudLayer = L.geoJson(alHamalAud, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alAudStyle);
    },
	onEachFeature: onEachFeature
});

var alHamYahLayer = L.geoJson(alHamYah, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, yahStyle);
    },
	onEachFeature: onEachFeature
});

var alHamalSahLayer = L.geoJson(alHamalSah, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, alSahStyle);
    },
	onEachFeature: onEachFeature
});

var alHamMaaLayer = L.geoJson(alHamMaa, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, maaStyle);
    },
	onEachFeature: onEachFeature
});

var alHamShabLayer = L.geoJson(alHamShab, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, shabStyle);
    },
	onEachFeature: onEachFeature
});

var alHamAthrLayer = L.geoJson(alHamAthr, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, athrStyle);
    },
	onEachFeature: onEachFeature
});

var alHamHaliLayer = L.geoJson(alHamHali, {
	pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, haliStyle);
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

var allData = [ibnKhurralJan, ibnKhurrSan, ibnKhurrHad, ibnKhurrNoKura, alYaqSan, alYaqNoKura, qudSan, qudNoKura, alMuqTih, alMuqAby, alMuqAthr, alMuqalSar, alMuqalAhq, alMuqSab, alHamSad, alHamHam, alHamKhaw, alHamDhu, alHamAqy, alHamHadur, alHamHaz, alHamAlh, alHamAns, alHamDham, alHamJub, alHamHays, alHamMar, alHamRad, alHamJaysh, alHamMay, alHamDhuRu, alHamalAud, alHamYah, alHamalSah, alHamMaa, alHamShab, alHamAthr, alHamHali];

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
				" al-Janad": ibnKhurralJanLayer,
				" Sanʿāʾ": ibnKhurrSanLayer,
				" Hadramaut": ibnKhurrHadLayer,
				" No district identified": ibnKhurrNoKuraLayer,
		  },
      "<span class='controlHeading'> al-Yaʿqūbī</span>": {
				" Sanʿāʾ": alYaqSanLayer,
				" No district identified": alYaqNoKuraLayer,
		  },
			"<span class='controlHeading'> Qudāma</span>": {
        " Sanʿāʾ": qudSanLayer,
				" No district identified": qudNoKuraLayer,
		  },
			"<span class='controlHeading'> al-Muqaddasī</span>": {
        " Tihāma": alMuqTihLayer,
				" ʾAbyan": alMuqAbyLayer,
				" ʿAthr": alMuqAthrLayer,
				" al-Sarāt": alMuqalSarLayer,
				" al-Aḥqāf": alMuqalAhqLayer,
				" Sabʾā": alMuqSabLayer,
		  },
			"<span class='controlHeading'> al-Hamdānī</span>": {
        " Saʿada": alHamSadLayer,
				" Balad Hamdān": alHamHamLayer,
				" Mikhlāf Khawlān": alHamKhawLayer,
				" Mikhlāf Dhu Jura": alHamDhuLayer,
				" Mikhlāf ʾAqyān": alHamAqyLayer,
				" Mikhlāf Ḥaḍūr": alHamHadurLayer,
				" Mikhlāf Ḥarāz": alHamHazLayer,
				" Mikhlāf Alhān": alHamAlhLayer,
				" Mikhlāf ʿAns": alHamAnsLayer,
				" Mikhlāf Dhamār": alHamDhamLayer,
				" Mikhlāf Jublān": alHamJubLayer,
				" Mikhlāf Hays": alHamHaysLayer,
				" Mikhlāf Maʾrib": alHamMarLayer,
				" Mikhlāf Radāʿ": alHamRadLayer,
				" Mikhlāf Jayshān": alHamJayshLayer,
				" Mikhlāf Maytam": alHamMayLayer,
				" Mikhlāf Dhū Ruʿayn": alHamDhuRuLayer,
				" Mikhlāf al-ʿAud": alHamalAudLayer,
				" Yaḥḍibān": alHamYahLayer,
				" Mikhlāf al-Saḥūl": alHamalSahLayer,
				" Mikhlāf Maʿāfir": alHamMaaLayer,
				" Mikhlāf Shabwa": alHamShabLayer,
				" Mikhlāf Athr": alHamAthrLayer,
				" Mikhlāf Ḥalī": alHamHaliLayer,
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
