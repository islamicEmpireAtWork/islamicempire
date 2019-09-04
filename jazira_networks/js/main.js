var legendOpen = false;

// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [35.5, 41],
	zoom: 7,
	layers: [mapboxTiles],
});

// Change layer function

function removeAllOverlays(label) {
		map.eachLayer(function(layer) {
			if (layer == marwanidLayer || layer == marwanIILayer || layer == mansurHarunLayer || layer == harunIILayer || layer == alMamunLayer || layer == samarraLayer || layer == alMutadidLayer) {
					map.removeLayer(layer);
				switch(label) {
		    case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
					map.addLayer(marwanidLayer);
		      break;
				case "<b>Marwān II <br> (127-132/744-750)</b>":
					map.addLayer(marwanIILayer);
		      break;
		    case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
					map.addLayer(mansurHarunLayer);
		      break;
				case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
					map.addLayer(harunIILayer);
		      break;
		    case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
					map.addLayer(alMamunLayer);
		      break;
				case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
					map.addLayer(samarraLayer);
		      break;
		    case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
					map.addLayer(alMutadidLayer);
		      break;
			  }
			} else if (layer == marwanidEdioLayer || layer == marwanIIEdioLayer || layer == mansurHarunEdioLayer || layer == harunIIEdioLayer || layer == alMamunEdioLayer || layer == samarraEdioLayer || layer == alMutadidEdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidEdioLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIEdioLayer);
			      break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunEdioLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIEdioLayer);
			      break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunEdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraEdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidEdioLayer);
						break;
				}
			} else if (layer == marwanidEarchdioLayer || layer == marwanIIEarchdioLayer || layer == mansurHarunEarchdioLayer || layer == harunIIEarchdioLayer || layer == alMamunEarchdioLayer || layer == samarraEarchdioLayer || layer == alMutadidEarchdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidEarchdioLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIEarchdioLayer);
			      break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunEarchdioLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIEarchdioLayer);
			      break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunEarchdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraEarchdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidEarchdioLayer);
						break;
				}
			} else if (layer == marwanidWdioLayer || layer == marwanIIWdioLayer || layer == mansurHarunWdioLayer || layer == harunIIWdioLayer || layer == alMamunWdioLayer || layer == samarraWdioLayer || layer == alMutadidWdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidWdioLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIWdioLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunWdioLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIWdioLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunWdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraWdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidWdioLayer);
						break;
				}
			} else if (layer == marwanidWarchdioLayer || layer == marwanIIWarchdioLayer || layer == mansurHarunWarchdioLayer || layer == harunIIWarchdioLayer || layer == alMamunWarchdioLayer || layer == samarraWarchdioLayer || layer == alMutadidWarchdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidWarchdioLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIWarchdioLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunWarchdioLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIWarchdioLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunWarchdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraWarchdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidWarchdioLayer);
						break;
				}
			} else if (layer == marwanidMintsLayer || layer == marwanIIMintsLayer || layer == mansurHarunMintsLayer || layer == harunIIMintsLayer || layer == alMamunMintsLayer || layer == alMutadidMintsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidMintsLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIMintsLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunMintsLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIMintsLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunMintsLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(alMamunMintsLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidMintsLayer);
						break;
				}
			} else if (layer == marwanidCopperMintsLayer || layer == marwanIICopperMintsLayer || layer == mansurHarunCopperMintsLayer || layer == harunIICopperMintsLayer || layer == alMamunCopperMintsLayer || layer == samarraCopperMintsLayer || layer == alMutadidCopperMintsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidCopperMintsLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIICopperMintsLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunCopperMintsLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIICopperMintsLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunCopperMintsLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraCopperMintsLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidCopperMintsLayer);
						break;
				}
			} else if (layer == marwanidQadiLayer || layer == marwanIIQadiLayer || layer == mansurHarunQadiLayer || layer == harunIIQadiLayer || layer == alMamunQadiLayer || layer == samarraQadiLayer || layer == alMutadidQadiLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidQadiLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIQadiLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunQadiLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIQadiLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunQadiLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraQadiLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidQadiLayer);
						break;
				}
			} else if (layer == marwanidGarrisonLayer || layer == marwanIIGarrisonLayer || layer == mansurHarunGarrisonLayer || layer == harunIIGarrisonLayer || layer == alMamunGarrisonLayer || layer == samarraGarrisonLayer || layer == alMutadidGarrisonLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidGarrisonLayer);
						break;
					case "<b>Marwān II <br> (127-132/744-750)</b>":
						map.addLayer(marwanIIGarrisonLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunGarrisonLayer);
						break;
					case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
						map.addLayer(harunIIGarrisonLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunGarrisonLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraGarrisonLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidGarrisonLayer);
						break;
				}
			}
	});
};

function removeAllControls(label) {
	var allControls = [marwanidLinesControl, marwanIILinesControl, mansurHarunLinesControl, harunIILinesControl, alMamunLinesControl, samarraLinesControl, alMutadidLinesControl];
	for (var i = 0; i < allControls.length; i++) {
		map.removeControl(allControls[i]);
	};
};

function changeMap(label) {
  switch(label) {
    case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
			map.addLayer(backgroundSitesLayer);
      map.addLayer(marwanidLayer);
			map.addControl(marwanidLinesControl);
      break;
		case "<b>Marwān II <br> (127-132/744-750)</b>":
			map.addLayer(backgroundSitesLayer);
			map.addLayer(marwanIILayer);
			map.addControl(marwanIILinesControl);
			break;
    case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
			map.addLayer(backgroundSitesLayer);
      map.addLayer(mansurHarunLayer);
			map.addControl(mansurHarunLinesControl);
      break;
		case "<b>Hārūn, second period <br> (180-193/796-809)</b>":
			map.addLayer(backgroundSitesLayer);
      map.addLayer(harunIILayer);
			map.addControl(harunIILinesControl);
      break;
    case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
			map.addLayer(backgroundSitesLayer);
      map.addLayer(alMamunLayer);
			map.addControl(alMamunLinesControl);
      break;
		case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
			map.addLayer(backgroundSitesLayer);
      map.addLayer(samarraLayer);
			map.addControl(samarraLinesControl);
      break;
    case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
			map.addLayer(backgroundSitesLayer);
      map.addLayer(alMutadidLayer);
			map.addControl(alMutadidLinesControl);
      break;
    default:
      map.addLayer(marwanidLayer);
  }
}

/* Popup content */

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
	var popup = L.popup(popupOptions, layer).setContent('<h3>' + feature.properties.transliterated_name + '</h3>' + feature.properties.comment + '<h3>' + feature.properties.Name + '</h3><h5><b> Sub-division:</b> ' + feature.properties.kura_name + '</h5>');
	layer.bindPopup(popup);
    layer.on({
        click: zoomToFeature,
    });
		layer.on('mouseover', function(event) {
			layer.openPopup();
		});
		/*layer.on('click', function(event) {
			popup.openOn(map);
		});*/
    setIconSize();
};

/* Add data */

var backgroundSitesStyle = {
	radius: 3,
	fillColor: "#777",
	fillOpacity: 1,
	color: "#777",
	opacity: 0,
	weight: 20
}

var backgroundSitesLayer = L.geoJson(sites, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, backgroundSitesStyle)
  }
});

function setIconSize() {
  for (i = 0; i < marwanid.length; i++) {
    if (marwanid[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || marwanid[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        marwanid[i].properties.radius = 20;
				marwanid[i].properties.shape = "diamond";
    } else if (marwanid[i].properties.imperial_capital == "x") {
        marwanid[i].properties.radius = 24;
				marwanid[i].properties.shape = "square";
    } else if (marwanid[i].properties.provincial_capital == "x") {
        marwanid[i].properties.radius = 18;
				marwanid[i].properties.shape = "square";
    } else if (marwanid[i].properties.kura_subregion_capital == "x") {
        marwanid[i].properties.radius = 14;
				marwanid[i].properties.shape = "square";
    } else {
        marwanid[i].properties.radius = 10;
				marwanid[i].properties.shape = "square";
    }
  }
	for (i = 0; i < marwanII.length; i++) {
    if (marwanII[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || marwanII[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        marwanII[i].properties.radius = 20;
				marwanII[i].properties.shape = "diamond";
    } else if (marwanII[i].properties.imperial_capital == "x") {
        marwanII[i].properties.radius = 24;
				marwanII[i].properties.shape = "square";
    } else if (marwanII[i].properties.provincial_capital == "x") {
        marwanII[i].properties.radius = 18;
				marwanII[i].properties.shape = "square";
    } else if (marwanII[i].properties.kura_subregion_capital == "x") {
        marwanII[i].properties.radius = 14;
				marwanII[i].properties.shape = "square";
    } else {
        marwanII[i].properties.radius = 10;
				marwanII[i].properties.shape = "square";
    }
  }
  for (i = 0; i < mansurHarun.length; i++) {
		if (mansurHarun[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || mansurHarun[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        mansurHarun[i].properties.radius = 20;
				mansurHarun[i].properties.shape = "diamond";
    } else if (mansurHarun[i].properties.imperial_capital == "x") {
        mansurHarun[i].properties.radius = 24;
				mansurHarun[i].properties.shape = "square";
    } else if (mansurHarun[i].properties.provincial_capital == "x") {
        mansurHarun[i].properties.radius = 18;
				mansurHarun[i].properties.shape = "square";
    } else if (mansurHarun[i].properties.kura_subregion_capital == "x") {
        mansurHarun[i].properties.radius = 14;
				mansurHarun[i].properties.shape = "square";
    } else {
        mansurHarun[i].properties.radius = 10;
				mansurHarun[i].properties.shape = "square";
    }
  }
	for (i = 0; i < harunII.length; i++) {
		if (harunII[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || harunII[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        harunII[i].properties.radius = 20;
				harunII[i].properties.shape = "diamond";
    } else if (harunII[i].properties.imperial_capital == "x") {
        harunII[i].properties.radius = 24;
				harunII[i].properties.shape = "square";
    } else if (harunII[i].properties.provincial_capital == "x") {
        harunII[i].properties.radius = 18;
				harunII[i].properties.shape = "square";
    } else if (harunII[i].properties.kura_subregion_capital == "x") {
        harunII[i].properties.radius = 14;
				harunII[i].properties.shape = "square";
    } else {
        harunII[i].properties.radius = 10;
				harunII[i].properties.shape = "square";
    }
  }
  for (i = 0; i < alMamun.length; i++) {
		if (alMamun[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || alMamun[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        alMamun[i].properties.radius = 20;
				alMamun[i].properties.shape = "diamond";
    } else if (alMamun[i].properties.imperial_capital == "x") {
        alMamun[i].properties.radius = 24;
				alMamun[i].properties.shape = "square";
    } else if (alMamun[i].properties.provincial_capital == "x") {
        alMamun[i].properties.radius = 18;
				alMamun[i].properties.shape = "square";
    } else if (alMamun[i].properties.kura_subregion_capital == "x") {
        alMamun[i].properties.radius = 14;
				alMamun[i].properties.shape = "square";
    } else {
        alMamun[i].properties.radius = 10;
				alMamun[i].properties.shape = "square";
    }
  }
	for (i = 0; i < samarra.length; i++) {
		if (samarra[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || samarra[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        samarra[i].properties.radius = 20;
				samarra[i].properties.shape = "diamond";
    } else if (samarra[i].properties.imperial_capital == "x") {
        samarra[i].properties.radius = 24;
				samarra[i].properties.shape = "square";
    } else if (samarra[i].properties.provincial_capital == "x") {
        samarra[i].properties.radius = 18;
				samarra[i].properties.shape = "square";
    } else if (samarra[i].properties.kura_subregion_capital == "x") {
        samarra[i].properties.radius = 14;
				samarra[i].properties.shape = "square";
    } else {
        samarra[i].properties.radius = 10;
				samarra[i].properties.shape = "square";
    }
  }
  for (i = 0; i < alMutadid.length; i++) {
		if (alMutadid[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || alMutadid[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        alMutadid[i].properties.radius = 20;
				alMutadid[i].properties.shape = "diamond";
    } else if (alMutadid[i].properties.imperial_capital == "x") {
        alMutadid[i].properties.radius = 24;
				alMutadid[i].properties.shape = "square";
    } else if (alMutadid[i].properties.provincial_capital == "x") {
        alMutadid[i].properties.radius = 18;
				alMutadid[i].properties.shape = "square";
    } else if (alMutadid[i].properties.kura_subregion_capital == "x") {
        alMutadid[i].properties.radius = 14;
				alMutadid[i].properties.shape = "square";
    } else {
        alMutadid[i].properties.radius = 10;
				alMutadid[i].properties.shape = "square";
    }
  }
};


var marwanidLayer = L.geoJson(marwanid, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5,
          }
      )
  }
});

var marwanIILayer = L.geoJson(marwanII, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5,
          }
      )
  }
});

var alMamunLayer = L.geoJson(alMamun, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var samarraLayer = L.geoJson(samarra, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var alMutadidLayer = L.geoJson(alMutadid, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var mansurHarunLayer = L.geoJson(mansurHarun, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var harunIILayer = L.geoJson(harunII, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: feature.properties.shape,
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

// Eastern Diocese

var edioIcon = L.icon({
	iconUrl: './img/e_bish.svg',
	iconSize: [30, 30],
	iconAnchor: [2, 28]
});

var marwanidEdioLayer = L.geoJson(marwanidEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var marwanIIEdioLayer = L.geoJson(marwanIIEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var mansurHarunEdioLayer = L.geoJson(mansurHarunEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var harunIIEdioLayer = L.geoJson(harunIIEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var alMamunEdioLayer = L.geoJson(alMamunEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var samarraEdioLayer = L.geoJson(samarraEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var alMutadidEdioLayer = L.geoJson(alMutadidEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

// Eastern Archdiocese

var earchdioIcon = L.icon({
	iconUrl: './img/e_metBish.svg',
	iconSize: [30, 30],
	iconAnchor: [2, 28]
});

var marwanidEarchdioLayer = L.geoJson(marwanidEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var marwanIIEarchdioLayer = L.geoJson(marwanIIEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var mansurHarunEarchdioLayer = L.geoJson(mansurHarunEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var harunIIEarchdioLayer = L.geoJson(harunIIEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var alMamunEarchdioLayer = L.geoJson(alMamunEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var samarraEarchdioLayer = L.geoJson(samarraEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var alMutadidEarchdioLayer = L.geoJson(alMutadidEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

// Western Diocese

var wdioIcon = L.icon({
	iconUrl: './img/w_bish.svg',
	iconSize: [30, 30],
	iconAnchor: [28, 28],
});

var marwanidWdioLayer = L.geoJson(marwanidWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var marwanIIWdioLayer = L.geoJson(marwanIIWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var mansurHarunWdioLayer = L.geoJson(mansurHarunWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var harunIIWdioLayer = L.geoJson(harunIIWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var alMamunWdioLayer = L.geoJson(alMamunWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var samarraWdioLayer = L.geoJson(samarraWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var alMutadidWdioLayer = L.geoJson(alMutadidWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

// Western Archdiocese

var warchdioIcon = L.icon({
	iconUrl: './img/w_metBish.svg',
	iconSize: [30, 30],
	iconAnchor: [28, 28]
});

var marwanidWarchdioLayer = L.geoJson(marwanidWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var marwanIIWarchdioLayer = L.geoJson(marwanIIWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var mansurHarunWarchdioLayer = L.geoJson(mansurHarunWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var harunIIWarchdioLayer = L.geoJson(harunIIWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var alMamunWarchdioLayer = L.geoJson(alMamunWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var samarraWarchdioLayer = L.geoJson(samarraWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var alMutadidWarchdioLayer = L.geoJson(alMutadidWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

// Precious metal mints

var mintStyle = {
	radius: 8,
	fillColor: "#000000",
	color: "#000",
	weight: 4,
	opacity: 1,
	fillOpacity: 0
}

var marwanidMintsLayer = L.geoJson(marwanidMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var marwanIIMintsLayer = L.geoJson(marwanIIMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var mansurHarunMintsLayer = L.geoJson(mansurHarunMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var harunIIMintsLayer = L.geoJson(harunIIMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var alMamunMintsLayer = L.geoJson(alMamunMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var samarraMintsLayer = L.geoJson(samarraMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var alMutadidMintsLayer = L.geoJson(alMutadidMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

// Copper mints

var copperMintStyle = {
	radius: 5,
	fillColor: "#000000",
	color: "#000",
	weight: 4,
	opacity: 0,
	fillOpacity: 1,
}

var marwanidCopperMintsLayer = L.geoJson(marwanidCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var marwanIICopperMintsLayer = L.geoJson(marwanIICopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var mansurHarunCopperMintsLayer = L.geoJson(mansurHarunCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var harunIICopperMintsLayer = L.geoJson(harunIICopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var alMamunCopperMintsLayer = L.geoJson(alMamunCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var samarraCopperMintsLayer = L.geoJson(samarraCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var alMutadidCopperMintsLayer = L.geoJson(alMutadidCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

// Qadiship

var qadiIcon = L.icon({
	iconUrl: './img/qadi.png',
	iconSize: [30, 30],
	iconAnchor: [15, -3]
});

var marwanidQadiLayer = L.geoJson(marwanidQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

var marwanIIQadiLayer = L.geoJson(marwanIIQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

var mansurHarunQadiLayer = L.geoJson(mansurHarunQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

var harunIIQadiLayer = L.geoJson(harunIIQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

var alMamunQadiLayer = L.geoJson(alMamunQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

var samarraQadiLayer = L.geoJson(samarraQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

var alMutadidQadiLayer = L.geoJson(alMutadidQadi, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: qadiIcon }
      )
  }
});

// Qadiship

var garrisonIcon = L.icon({
	iconUrl: './img/sword.png',
	iconSize: [20, 60],
	iconAnchor: [10, 60]
});

var marwanidGarrisonLayer = L.geoJson(marwanidGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

var marwanIIGarrisonLayer = L.geoJson(marwanIIGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

var mansurHarunGarrisonLayer = L.geoJson(mansurHarunGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

var harunIIGarrisonLayer = L.geoJson(harunIIGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

var alMamunGarrisonLayer = L.geoJson(alMamunGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

var samarraGarrisonLayer = L.geoJson(samarraGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

var alMutadidGarrisonLayer = L.geoJson(alMutadidGarrison, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: garrisonIcon }
      )
  }
});

// Routes

var cornuRoutesLayer = L.geoJson(cornuRoutes, {
	style: function (feature) {
		return {
			weight: 2,
			color: "black",
			opacity: 0.5,
		};
	}
});

/* Timeline slider */

L.control.timelineSlider({
                timelineItems: ["<b>Marwānid period <br> (c.73-132/692-750)</b>", "<b>Marwān II <br> (127-132/744-750)</b>", "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>", "<b>Hārūn, second period <br> (180-193/796-809)</b>", "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>", "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>", "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>"],
                backgroundColor: "#000",
                backgroundOpacity: 0,
                labelWidth: "130px",
                labelFontSize: "12px",
                inactiveColor: "#555",
                activeColor: "#581845",
                thumbHeight: "6px",
                changeMap: function({label, value, map}) { removeAllOverlays(label); removeAllControls(); changeMap(label); }
              })
            .addTo(map);

	// layer Control

	var options = {
		collapsed:false,
	}

	var marwanidOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: marwanidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: marwanidEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: marwanidEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: marwanidWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: marwanidWarchdioLayer },
					{ label: ' Precious metal mints', layer: marwanidMintsLayer },
					{ label: ' Copper mints', layer: marwanidCopperMintsLayer },
					{ label: ' Qadiship', layer: marwanidQadiLayer },
					{ label: ' Garrison', layer: marwanidGarrisonLayer },
				]
			}
		]};

	var marwanidLinesControl = L.control.layers.tree(null, marwanidOverlayMaps, options);

	var marwanIIOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: marwanidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: marwanIIEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: marwanIIEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: marwanIIWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: marwanIIWarchdioLayer },
					{ label: ' Precious metal mints', layer: marwanIIMintsLayer },
					{ label: ' Copper mints', layer: marwanIICopperMintsLayer },
					{ label: ' Qadiship', layer: marwanIIQadiLayer },
					{ label: ' Garrison', layer: marwanIIGarrisonLayer },
				]
			}
		]};

	var marwanIILinesControl = L.control.layers.tree(null, marwanIIOverlayMaps, options);

	var mansurHarunOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: mansurHarunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: mansurHarunEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: mansurHarunEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: mansurHarunWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: mansurHarunWarchdioLayer },
					{ label: ' Precious metal mints', layer: mansurHarunMintsLayer },
					{ label: ' Copper mints', layer: mansurHarunCopperMintsLayer },
					{ label: ' Qadiship', layer: mansurHarunQadiLayer },
					{ label: ' Garrison', layer: mansurHarunGarrisonLayer },
				]
			}
		]};

	var mansurHarunLinesControl = L.control.layers.tree(null, mansurHarunOverlayMaps, options);

	var harunIIOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: mansurHarunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: harunIIEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: harunIIEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: harunIIWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: harunIIWarchdioLayer },
					{ label: ' Precious metal mints', layer: harunIIMintsLayer },
					{ label: ' Copper mints', layer: harunIICopperMintsLayer },
					{ label: ' Qadiship', layer: harunIIQadiLayer },
					{ label: ' Garrison', layer: harunIIGarrisonLayer },
				]
			}
		]};

	var harunIILinesControl = L.control.layers.tree(null, harunIIOverlayMaps, options);

	var alMamunOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: alMamunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: alMamunEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: alMamunEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: alMamunWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: alMamunWarchdioLayer },
					{ label: ' Precious metal mints', layer: alMamunMintsLayer },
					{ label: ' Copper mints', layer: alMamunCopperMintsLayer },
					{ label: ' Qadiship', layer: alMamunQadiLayer },
					{ label: ' Garrison', layer: alMamunGarrisonLayer },
				]
			}
		]};

	var alMamunLinesControl = L.control.layers.tree(null, alMamunOverlayMaps, options);

	var samarraOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: samarraLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: samarraEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: samarraEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: samarraWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: samarraWarchdioLayer },
					{ label: ' Precious metal mints', layer: samarraMintsLayer },
					{ label: ' Copper mints', layer: samarraCopperMintsLayer },
					{ label: ' Qadiship', layer: samarraQadiLayer },
					{ label: ' Garrison', layer: samarraGarrisonLayer },
				]
			}
		]};

	var samarraLinesControl = L.control.layers.tree(null, samarraOverlayMaps, options);

	var alMutadidOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: alMutadidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: alMutadidEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: alMutadidEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: alMutadidWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: alMutadidWarchdioLayer },
					{ label: ' Precious metal mints', layer: alMutadidMintsLayer },
					{ label: ' Copper mints', layer: alMutadidCopperMintsLayer },
					{ label: ' Qadiship', layer: alMutadidQadiLayer },
					{ label: ' Garrison', layer: alMutadidGarrisonLayer },
				]
			}
		]};

	var alMutadidLinesControl = L.control.layers.tree(null, alMutadidOverlayMaps, options);

	map.on("overlayadd", function (event) {
		var allOverlaysWithoutLines = [marwanidLayer, mansurHarunLayer, marwanidEdioLayer, marwanidEarchdioLayer, marwanidWdioLayer, marwanidWarchdioLayer, marwanidMintsLayer, marwanidCopperMintsLayer, marwanidQadiLayer, marwanidGarrisonLayer, marwanIILayer, marwanIIEdioLayer, marwanIIEarchdioLayer, marwanIIWdioLayer, marwanIIWarchdioLayer, marwanIIMintsLayer, marwanIICopperMintsLayer, marwanIIQadiLayer, marwanIIGarrisonLayer, mansurHarunEdioLayer, mansurHarunEarchdioLayer, mansurHarunWdioLayer, mansurHarunWarchdioLayer, mansurHarunMintsLayer, mansurHarunCopperMintsLayer, mansurHarunQadiLayer, mansurHarunGarrisonLayer, alMamunLayer, samarraLayer, alMamunEdioLayer, alMamunEarchdioLayer, alMamunWdioLayer, alMamunWarchdioLayer, alMamunMintsLayer, alMamunCopperMintsLayer, alMamunQadiLayer, alMamunGarrisonLayer, samarraEdioLayer, samarraEarchdioLayer, samarraWdioLayer, samarraWarchdioLayer, samarraMintsLayer, samarraCopperMintsLayer, samarraQadiLayer, samarraGarrisonLayer, alMutadidLayer, alMutadidEdioLayer, alMutadidEarchdioLayer, alMutadidWdioLayer, alMutadidWarchdioLayer, alMutadidMintsLayer, alMutadidCopperMintsLayer, alMutadidQadiLayer, alMutadidGarrisonLayer];
		for (var i = 0; i < allOverlaysWithoutLines.length; i++) {
			allOverlaysWithoutLines[i].bringToFront();
		};
	});

	map.addLayer(backgroundSitesLayer);
	//map.addLayer(marwanidLinesLayer);
	map.addLayer(marwanidLayer);
	map.addControl(marwanidLinesControl);

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

function toggleLegend() {

  if (legendOpen) {
    document.getElementById("legendClosed").style.display="block";
    document.getElementById("legendOpened").style.display="none";
    legendOpen = false;
  } else {
    document.getElementById("legendClosed").style.display="none";
    document.getElementById("legendOpened").style.display="block";
    legendOpen = true;
  }
}
