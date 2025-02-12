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
var format_Trail_2 = new ol.format.GeoJSON();
var features_Trail_2 = format_Trail_2.readFeatures(json_Trail_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trail_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trail_2.addFeatures(features_Trail_2);
var lyr_Trail_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trail_2, 
                style: style_Trail_2,
                popuplayertitle: "Trail",
                interactive: true,
                title: '<img src="styles/legend/Trail_2.png" /> Trail'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_Trail_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Positronlabelsonly_1,lyr_Trail_2];
lyr_Trail_2.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'City/Neighborhood Name': 'City/Neighborhood Name', 'Zipcode': 'Zipcode', 'State': 'State', 'Country': 'Country', 'Level': 'Level', 'Legnth': 'Legnth', 'Transit Station': 'Transit Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City': 'City', 'State_1': 'State_1', 'County': 'County', 'Zip': 'Zip', 'Country_1': 'Country_1', 'Source': 'Source', });
lyr_Trail_2.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'City/Neighborhood Name': 'TextEdit', 'Zipcode': 'Range', 'State': 'TextEdit', 'Country': 'TextEdit', 'Level': 'TextEdit', 'Legnth': 'TextEdit', 'Transit Station': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'TextEdit', 'Accuracy Type': 'TextEdit', 'Number': 'Range', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Range', 'Country_1': 'TextEdit', 'Source': 'TextEdit', });
lyr_Trail_2.set('fieldLabels', {'Name': 'no label', 'Address': 'inline label - always visible', 'City/Neighborhood Name': 'inline label - always visible', 'Zipcode': 'hidden field', 'State': 'hidden field', 'Country': 'hidden field', 'Level': 'inline label - always visible', 'Legnth': 'inline label - always visible', 'Transit Station': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Accuracy Score': 'hidden field', 'Accuracy Type': 'hidden field', 'Number': 'hidden field', 'Street': 'hidden field', 'Unit Type': 'hidden field', 'Unit Number': 'hidden field', 'City': 'hidden field', 'State_1': 'hidden field', 'County': 'hidden field', 'Zip': 'hidden field', 'Country_1': 'hidden field', 'Source': 'hidden field', });
lyr_Trail_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});