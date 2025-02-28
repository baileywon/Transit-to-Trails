var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_MetroRailLines_2 = new ol.format.GeoJSON();
var features_MetroRailLines_2 = format_MetroRailLines_2.readFeatures(json_MetroRailLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroRailLines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetroRailLines_2.addFeatures(features_MetroRailLines_2);
var lyr_MetroRailLines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetroRailLines_2, 
                style: style_MetroRailLines_2,
                popuplayertitle: "Metro Rail Lines",
                interactive: false,
                title: '<img src="styles/legend/MetroRailLines_2.png" /> Metro Rail Lines'
            });
var format_LADOTDASHRoutes_3 = new ol.format.GeoJSON();
var features_LADOTDASHRoutes_3 = format_LADOTDASHRoutes_3.readFeatures(json_LADOTDASHRoutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LADOTDASHRoutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LADOTDASHRoutes_3.addFeatures(features_LADOTDASHRoutes_3);
var lyr_LADOTDASHRoutes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LADOTDASHRoutes_3, 
                style: style_LADOTDASHRoutes_3,
                popuplayertitle: "LADOT DASH Routes",
                interactive: false,
                title: '<img src="styles/legend/LADOTDASHRoutes_3.png" /> LADOT DASH Routes'
            });
var format_MetrolinkAntelopeValleyLine_4 = new ol.format.GeoJSON();
var features_MetrolinkAntelopeValleyLine_4 = format_MetrolinkAntelopeValleyLine_4.readFeatures(json_MetrolinkAntelopeValleyLine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetrolinkAntelopeValleyLine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetrolinkAntelopeValleyLine_4.addFeatures(features_MetrolinkAntelopeValleyLine_4);
var lyr_MetrolinkAntelopeValleyLine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetrolinkAntelopeValleyLine_4, 
                style: style_MetrolinkAntelopeValleyLine_4,
                popuplayertitle: "Metrolink Antelope Valley Line",
                interactive: false,
                title: '<img src="styles/legend/MetrolinkAntelopeValleyLine_4.png" /> Metrolink Antelope Valley Line'
            });
var format_235236_5 = new ol.format.GeoJSON();
var features_235236_5 = format_235236_5.readFeatures(json_235236_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_235236_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_235236_5.addFeatures(features_235236_5);
var lyr_235236_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_235236_5, 
                style: style_235236_5,
                popuplayertitle: "235/236",
                interactive: false,
                title: '<img src="styles/legend/235236_5.png" /> 235/236'
            });
var format_169_6 = new ol.format.GeoJSON();
var features_169_6 = format_169_6.readFeatures(json_169_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_169_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_169_6.addFeatures(features_169_6);
var lyr_169_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_169_6, 
                style: style_169_6,
                popuplayertitle: "169",
                interactive: false,
                title: '<img src="styles/legend/169_6.png" /> 169'
            });
var format_212_7 = new ol.format.GeoJSON();
var features_212_7 = format_212_7.readFeatures(json_212_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_212_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_212_7.addFeatures(features_212_7);
var lyr_212_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_212_7, 
                style: style_212_7,
                popuplayertitle: "212",
                interactive: false,
                title: '<img src="styles/legend/212_7.png" /> 212'
            });
var format_004_8 = new ol.format.GeoJSON();
var features_004_8 = format_004_8.readFeatures(json_004_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_004_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_004_8.addFeatures(features_004_8);
var lyr_004_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_004_8, 
                style: style_004_8,
                popuplayertitle: "004",
                interactive: false,
                title: '<img src="styles/legend/004_8.png" /> 004'
            });
var format_Trail_9 = new ol.format.GeoJSON();
var features_Trail_9 = format_Trail_9.readFeatures(json_Trail_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trail_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trail_9.addFeatures(features_Trail_9);
var lyr_Trail_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trail_9, 
                style: style_Trail_9,
                popuplayertitle: "Trail",
                interactive: true,
                title: '<img src="styles/legend/Trail_9.png" /> Trail'
            });
var group_MetroBusLines = new ol.layer.Group({
                                layers: [lyr_235236_5,lyr_169_6,lyr_212_7,lyr_004_8,],
                                fold: "open",
                                title: "Metro Bus Lines"});

lyr_ESRIGraylight_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_MetroRailLines_2.setVisible(true);lyr_LADOTDASHRoutes_3.setVisible(true);lyr_MetrolinkAntelopeValleyLine_4.setVisible(true);lyr_235236_5.setVisible(true);lyr_169_6.setVisible(true);lyr_212_7.setVisible(true);lyr_004_8.setVisible(true);lyr_Trail_9.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Positronlabelsonly_1,lyr_MetroRailLines_2,lyr_LADOTDASHRoutes_3,lyr_MetrolinkAntelopeValleyLine_4,group_MetroBusLines,lyr_Trail_9];
lyr_MetroRailLines_2.set('fieldAliases', {'NAME': 'NAME', 'STATUS': 'STATUS', 'TYPE': 'TYPE', 'LABEL': 'LABEL', });
lyr_LADOTDASHRoutes_3.set('fieldAliases', {'ID': 'ID', 'RouteID': 'RouteID', 'RouteName': 'RouteName', 'RouteNameS': 'RouteNameS', 'Region': 'Region', 'RegionType': 'RegionType', 'TOOLTIP': 'TOOLTIP', 'NLA_URL': 'NLA_URL', });
lyr_MetrolinkAntelopeValleyLine_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ELEVATION': 'ELEVATION', 'FID_': 'FID_', 'LAYER': 'LAYER', 'LAYER_1': 'LAYER_1', 'LAYER_2': 'LAYER_2', 'TRK_CODE': 'TRK_CODE', 'UID': 'UID', 'MP_DIR': 'MP_DIR', 'TRK_TYPE': 'TRK_TYPE', 'TRK_NAME': 'TRK_NAME', 'RR_NAME': 'RR_NAME', 'RR_CODE': 'RR_CODE', 'SBDV_NAME': 'SBDV_NAME', 'LAYER1': 'LAYER1', 'LAYER_12': 'LAYER_12', 'SBDV_CODE': 'SBDV_CODE', 'LAYER_123': 'LAYER_123', 'YEAR': 'YEAR', 'DataWareho': 'DataWareho', 'Shapelen': 'Shapelen', 'Name': 'Name', });
lyr_235236_5.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_169_6.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_212_7.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_004_8.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_Trail_9.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'City/Neighborhood Name': 'City/Neighborhood Name', 'Zipcode': 'Zipcode', 'State': 'State', 'Country': 'Country', 'Level': 'Level', 'Legnth': 'Legnth', 'Transit Station': 'Transit Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City': 'City', 'State_1': 'State_1', 'County': 'County', 'Zip': 'Zip', 'Country_1': 'Country_1', 'Source': 'Source', });
lyr_MetroRailLines_2.set('fieldImages', {'NAME': 'TextEdit', 'STATUS': 'TextEdit', 'TYPE': 'TextEdit', 'LABEL': 'TextEdit', });
lyr_LADOTDASHRoutes_3.set('fieldImages', {'ID': 'Range', 'RouteID': 'Range', 'RouteName': 'TextEdit', 'RouteNameS': 'TextEdit', 'Region': 'Range', 'RegionType': 'TextEdit', 'TOOLTIP': 'TextEdit', 'NLA_URL': 'TextEdit', });
lyr_MetrolinkAntelopeValleyLine_4.set('fieldImages', {'OBJECTID': 'Range', 'ELEVATION': 'Range', 'FID_': 'Range', 'LAYER': 'TextEdit', 'LAYER_1': 'TextEdit', 'LAYER_2': 'TextEdit', 'TRK_CODE': 'Range', 'UID': 'TextEdit', 'MP_DIR': 'TextEdit', 'TRK_TYPE': 'TextEdit', 'TRK_NAME': 'TextEdit', 'RR_NAME': 'TextEdit', 'RR_CODE': 'Range', 'SBDV_NAME': 'TextEdit', 'LAYER1': 'TextEdit', 'LAYER_12': 'TextEdit', 'SBDV_CODE': 'TextEdit', 'LAYER_123': 'TextEdit', 'YEAR': 'Range', 'DataWareho': 'TextEdit', 'Shapelen': 'TextEdit', 'Name': 'TextEdit', });
lyr_235236_5.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_169_6.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_212_7.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_004_8.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_Trail_9.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'City/Neighborhood Name': 'TextEdit', 'Zipcode': 'Range', 'State': 'TextEdit', 'Country': 'TextEdit', 'Level': 'TextEdit', 'Legnth': 'TextEdit', 'Transit Station': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'TextEdit', 'Accuracy Type': 'TextEdit', 'Number': 'Range', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Range', 'Country_1': 'TextEdit', 'Source': 'TextEdit', });
lyr_MetroRailLines_2.set('fieldLabels', {'NAME': 'no label', 'STATUS': 'no label', 'TYPE': 'no label', 'LABEL': 'no label', });
lyr_LADOTDASHRoutes_3.set('fieldLabels', {'ID': 'header label - visible with data', 'RouteID': 'no label', 'RouteName': 'no label', 'RouteNameS': 'no label', 'Region': 'no label', 'RegionType': 'no label', 'TOOLTIP': 'no label', 'NLA_URL': 'no label', });
lyr_MetrolinkAntelopeValleyLine_4.set('fieldLabels', {'OBJECTID': 'no label', 'ELEVATION': 'no label', 'FID_': 'no label', 'LAYER': 'no label', 'LAYER_1': 'no label', 'LAYER_2': 'no label', 'TRK_CODE': 'no label', 'UID': 'no label', 'MP_DIR': 'no label', 'TRK_TYPE': 'no label', 'TRK_NAME': 'no label', 'RR_NAME': 'no label', 'RR_CODE': 'no label', 'SBDV_NAME': 'no label', 'LAYER1': 'no label', 'LAYER_12': 'no label', 'SBDV_CODE': 'no label', 'LAYER_123': 'no label', 'YEAR': 'no label', 'DataWareho': 'no label', 'Shapelen': 'no label', 'Name': 'no label', });
lyr_235236_5.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_169_6.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_212_7.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_004_8.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_Trail_9.set('fieldLabels', {'Name': 'no label', 'Address': 'inline label - always visible', 'City/Neighborhood Name': 'inline label - always visible', 'Zipcode': 'hidden field', 'State': 'hidden field', 'Country': 'hidden field', 'Level': 'inline label - always visible', 'Legnth': 'inline label - always visible', 'Transit Station': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Accuracy Score': 'hidden field', 'Accuracy Type': 'hidden field', 'Number': 'hidden field', 'Street': 'hidden field', 'Unit Type': 'hidden field', 'Unit Number': 'hidden field', 'City': 'hidden field', 'State_1': 'hidden field', 'County': 'hidden field', 'Zip': 'hidden field', 'Country_1': 'hidden field', 'Source': 'hidden field', });
lyr_Trail_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});