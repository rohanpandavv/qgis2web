var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Districts_1 = new ol.format.GeoJSON();
var features_Districts_1 = format_Districts_1.readFeatures(json_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_1.addFeatures(features_Districts_1);
var lyr_Districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districts_1, 
                style: style_Districts_1,
                popuplayertitle: 'Districts',
                interactive: true,
                title: '<img src="styles/legend/Districts_1.png" /> Districts'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Districts_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Districts_1];
lyr_Districts_1.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'district': 'district', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Districts_1.set('fieldImages', {'id': '', 'objectid': '', 'district': '', 'shape_leng': '', 'shape_area': '', });
lyr_Districts_1.set('fieldLabels', {'id': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'district': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', });
lyr_Districts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});