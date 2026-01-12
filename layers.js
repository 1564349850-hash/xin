ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([16126589.504494, -4561549.330683, 16149365.318593, -4547494.789171]);
var wms_layers = [];


        var lyr_E_0 = new ol.layer.Tile({
            'title': 'E',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Melbourne_City_Boundary_1 = new ol.format.GeoJSON();
var features_Melbourne_City_Boundary_1 = format_Melbourne_City_Boundary_1.readFeatures(json_Melbourne_City_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Melbourne_City_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Melbourne_City_Boundary_1.addFeatures(features_Melbourne_City_Boundary_1);
var lyr_Melbourne_City_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Melbourne_City_Boundary_1, 
                style: style_Melbourne_City_Boundary_1,
                popuplayertitle: 'Melbourne_City_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Melbourne_City_Boundary_1.png" /> Melbourne_City_Boundary'
            });
var format_Melbourne_City_LST_2 = new ol.format.GeoJSON();
var features_Melbourne_City_LST_2 = format_Melbourne_City_LST_2.readFeatures(json_Melbourne_City_LST_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Melbourne_City_LST_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Melbourne_City_LST_2.addFeatures(features_Melbourne_City_LST_2);
var lyr_Melbourne_City_LST_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Melbourne_City_LST_2, 
                style: style_Melbourne_City_LST_2,
                popuplayertitle: 'Melbourne_City_LST',
                interactive: true,
    title: 'Melbourne_City_LST<br />\
    <img src="styles/legend/Melbourne_City_LST_2_0.png" /> 17.69 - 18<br />\
    <img src="styles/legend/Melbourne_City_LST_2_1.png" /> 18 - 20<br />\
    <img src="styles/legend/Melbourne_City_LST_2_2.png" /> 20 - 22<br />\
    <img src="styles/legend/Melbourne_City_LST_2_3.png" /> 22 - 24<br />\
    <img src="styles/legend/Melbourne_City_LST_2_4.png" /> 24 - 26<br />\
    <img src="styles/legend/Melbourne_City_LST_2_5.png" /> 26 - 27.18<br />' });

lyr_E_0.setVisible(true);lyr_Melbourne_City_Boundary_1.setVisible(true);lyr_Melbourne_City_LST_2.setVisible(true);
var layersList = [lyr_E_0,lyr_Melbourne_City_Boundary_1,lyr_Melbourne_City_LST_2];
lyr_Melbourne_City_Boundary_1.set('fieldAliases', {'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Melbourne_City_LST_2.set('fieldAliases', {'SA1_CODE21': 'SA1_CODE21', 'CHG_LBL21': 'CHG_LBL21', 'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AREASQKM21': 'AREASQKM21', 'Landsat8_9': 'Landsat8_9', });
lyr_Melbourne_City_Boundary_1.set('fieldImages', {'SA3_CODE21': 'TextEdit', 'SA3_NAME21': 'TextEdit', 'CHG_FLAG21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'SA4_CODE21': 'TextEdit', 'SA4_NAME21': 'TextEdit', 'GCC_CODE21': 'TextEdit', 'GCC_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Melbourne_City_LST_2.set('fieldImages', {'SA1_CODE21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'SA2_CODE21': 'TextEdit', 'SA2_NAME21': 'TextEdit', 'SA3_CODE21': 'TextEdit', 'SA3_NAME21': 'TextEdit', 'SA4_CODE21': 'TextEdit', 'SA4_NAME21': 'TextEdit', 'GCC_CODE21': 'TextEdit', 'GCC_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'Landsat8_9': 'TextEdit', });
lyr_Melbourne_City_Boundary_1.set('fieldLabels', {'SA3_CODE21': 'no label', 'SA3_NAME21': 'inline label - visible with data', 'CHG_FLAG21': 'no label', 'CHG_LBL21': 'no label', 'SA4_CODE21': 'no label', 'SA4_NAME21': 'no label', 'GCC_CODE21': 'no label', 'GCC_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', });
lyr_Melbourne_City_LST_2.set('fieldLabels', {'SA1_CODE21': 'no label', 'CHG_LBL21': 'no label', 'SA2_CODE21': 'inline label - visible with data', 'SA2_NAME21': 'no label', 'SA3_CODE21': 'no label', 'SA3_NAME21': 'no label', 'SA4_CODE21': 'no label', 'SA4_NAME21': 'no label', 'GCC_CODE21': 'no label', 'GCC_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AREASQKM21': 'no label', 'Landsat8_9': 'no label', });
lyr_Melbourne_City_LST_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});