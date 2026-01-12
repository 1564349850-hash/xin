ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([72.538895, 33.898779, 96.539317, 50.311246]);
var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '天地图-影像地图',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=1cc5137e49d64743ac72edaaf346a1da'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '天地图-影像注记',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t1.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=3057e579a8df19febc8c6c16d04d8cf8'
            })
        });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: '乌鲁木齐市_市',
                interactive: true,
                title: '<img src="styles/legend/__2.png" /> 乌鲁木齐市_市'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: '五家渠市_市',
                interactive: true,
                title: '<img src="styles/legend/__3.png" /> 五家渠市_市'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: '克孜勒苏柯尔克孜自治州_市',
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> 克孜勒苏柯尔克孜自治州_市'
            });
var format___5 = new ol.format.GeoJSON();
var features___5 = format___5.readFeatures(json___5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___5.addFeatures(features___5);
var lyr___5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___5, 
                style: style___5,
                popuplayertitle: '克拉玛依市_市',
                interactive: true,
                title: '<img src="styles/legend/__5.png" /> 克拉玛依市_市'
            });
var format___6 = new ol.format.GeoJSON();
var features___6 = format___6.readFeatures(json___6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___6.addFeatures(features___6);
var lyr___6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___6, 
                style: style___6,
                popuplayertitle: '北屯市_市',
                interactive: true,
                title: '<img src="styles/legend/__6.png" /> 北屯市_市'
            });
var format___7 = new ol.format.GeoJSON();
var features___7 = format___7.readFeatures(json___7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___7.addFeatures(features___7);
var lyr___7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___7, 
                style: style___7,
                popuplayertitle: '博尔塔拉蒙古自治州_市',
                interactive: true,
                title: '<img src="styles/legend/__7.png" /> 博尔塔拉蒙古自治州_市'
            });
var format___8 = new ol.format.GeoJSON();
var features___8 = format___8.readFeatures(json___8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___8.addFeatures(features___8);
var lyr___8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___8, 
                style: style___8,
                popuplayertitle: '双河市_市',
                interactive: true,
                title: '<img src="styles/legend/__8.png" /> 双河市_市'
            });
var format___9 = new ol.format.GeoJSON();
var features___9 = format___9.readFeatures(json___9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___9.addFeatures(features___9);
var lyr___9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___9, 
                style: style___9,
                popuplayertitle: '可克达拉市_市',
                interactive: true,
                title: '<img src="styles/legend/__9.png" /> 可克达拉市_市'
            });
var format___10 = new ol.format.GeoJSON();
var features___10 = format___10.readFeatures(json___10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___10.addFeatures(features___10);
var lyr___10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___10, 
                style: style___10,
                popuplayertitle: '吐鲁番市_市',
                interactive: true,
                title: '<img src="styles/legend/__10.png" /> 吐鲁番市_市'
            });
var format___11 = new ol.format.GeoJSON();
var features___11 = format___11.readFeatures(json___11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___11.addFeatures(features___11);
var lyr___11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___11, 
                style: style___11,
                popuplayertitle: '和田地区_市',
                interactive: true,
                title: '<img src="styles/legend/__11.png" /> 和田地区_市'
            });
var format___12 = new ol.format.GeoJSON();
var features___12 = format___12.readFeatures(json___12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___12.addFeatures(features___12);
var lyr___12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___12, 
                style: style___12,
                popuplayertitle: '哈密市_市',
                interactive: true,
                title: '<img src="styles/legend/__12.png" /> 哈密市_市'
            });
var format___13 = new ol.format.GeoJSON();
var features___13 = format___13.readFeatures(json___13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___13.addFeatures(features___13);
var lyr___13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___13, 
                style: style___13,
                popuplayertitle: '喀什地区_市',
                interactive: true,
                title: '<img src="styles/legend/__13.png" /> 喀什地区_市'
            });
var format___14 = new ol.format.GeoJSON();
var features___14 = format___14.readFeatures(json___14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___14.addFeatures(features___14);
var lyr___14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___14, 
                style: style___14,
                popuplayertitle: '图木舒克市_市',
                interactive: true,
                title: '<img src="styles/legend/__14.png" /> 图木舒克市_市'
            });
var format___15 = new ol.format.GeoJSON();
var features___15 = format___15.readFeatures(json___15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___15.addFeatures(features___15);
var lyr___15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___15, 
                style: style___15,
                popuplayertitle: '塔城地区_市',
                interactive: true,
                title: '<img src="styles/legend/__15.png" /> 塔城地区_市'
            });
var format___16 = new ol.format.GeoJSON();
var features___16 = format___16.readFeatures(json___16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___16.addFeatures(features___16);
var lyr___16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___16, 
                style: style___16,
                popuplayertitle: '巴音郭楞蒙古自治州_市',
                interactive: true,
                title: '<img src="styles/legend/__16.png" /> 巴音郭楞蒙古自治州_市'
            });
var format___17 = new ol.format.GeoJSON();
var features___17 = format___17.readFeatures(json___17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___17.addFeatures(features___17);
var lyr___17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___17, 
                style: style___17,
                popuplayertitle: '昆玉市_市',
                interactive: true,
                title: '<img src="styles/legend/__17.png" /> 昆玉市_市'
            });
var format___18 = new ol.format.GeoJSON();
var features___18 = format___18.readFeatures(json___18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___18.addFeatures(features___18);
var lyr___18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___18, 
                style: style___18,
                popuplayertitle: '昌吉回族自治州_市',
                interactive: true,
                title: '<img src="styles/legend/__18.png" /> 昌吉回族自治州_市'
            });
var format___19 = new ol.format.GeoJSON();
var features___19 = format___19.readFeatures(json___19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___19.addFeatures(features___19);
var lyr___19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___19, 
                style: style___19,
                popuplayertitle: '白杨市_市',
                interactive: true,
                title: '<img src="styles/legend/__19.png" /> 白杨市_市'
            });
var format___20 = new ol.format.GeoJSON();
var features___20 = format___20.readFeatures(json___20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___20.addFeatures(features___20);
var lyr___20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___20, 
                style: style___20,
                popuplayertitle: '石河子市_市',
                interactive: true,
                title: '<img src="styles/legend/__20.png" /> 石河子市_市'
            });
var format___21 = new ol.format.GeoJSON();
var features___21 = format___21.readFeatures(json___21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___21.addFeatures(features___21);
var lyr___21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___21, 
                style: style___21,
                popuplayertitle: '胡杨河市_市',
                interactive: true,
                title: '<img src="styles/legend/__21.png" /> 胡杨河市_市'
            });
var format___22 = new ol.format.GeoJSON();
var features___22 = format___22.readFeatures(json___22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___22.addFeatures(features___22);
var lyr___22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___22, 
                style: style___22,
                popuplayertitle: '铁门关市_市',
                interactive: true,
                title: '<img src="styles/legend/__22.png" /> 铁门关市_市'
            });
var format___23 = new ol.format.GeoJSON();
var features___23 = format___23.readFeatures(json___23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___23.addFeatures(features___23);
var lyr___23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___23, 
                style: style___23,
                popuplayertitle: '阿克苏地区_市',
                interactive: true,
                title: '<img src="styles/legend/__23.png" /> 阿克苏地区_市'
            });
var format___24 = new ol.format.GeoJSON();
var features___24 = format___24.readFeatures(json___24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___24.addFeatures(features___24);
var lyr___24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___24, 
                style: style___24,
                popuplayertitle: '阿勒泰地区_市',
                interactive: true,
                title: '<img src="styles/legend/__24.png" /> 阿勒泰地区_市'
            });
var format___25 = new ol.format.GeoJSON();
var features___25 = format___25.readFeatures(json___25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___25.addFeatures(features___25);
var lyr___25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___25, 
                style: style___25,
                popuplayertitle: '阿拉尔市_市',
                interactive: true,
                title: '<img src="styles/legend/__25.png" /> 阿拉尔市_市'
            });
var format___26 = new ol.format.GeoJSON();
var features___26 = format___26.readFeatures(json___26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___26.addFeatures(features___26);
var lyr___26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___26, 
                style: style___26,
                popuplayertitle: '伊犁哈萨克自治州_市',
                interactive: true,
                title: '<img src="styles/legend/__26.png" /> 伊犁哈萨克自治州_市'
            });
var format___27 = new ol.format.GeoJSON();
var features___27 = format___27.readFeatures(json___27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___27.addFeatures(features___27);
var lyr___27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___27, 
                style: style___27,
                popuplayertitle: '新疆维吾尔自治区_县',
                interactive: true,
                title: '<img src="styles/legend/__27.png" /> 新疆维吾尔自治区_县'
            });
var format__28 = new ol.format.GeoJSON();
var features__28 = format__28.readFeatures(json__28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__28.addFeatures(features__28);
var lyr__28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__28, 
                style: style__28,
                popuplayertitle: '村镇',
                interactive: true,
                title: '<img src="styles/legend/_28.png" /> 村镇'
            });
var format__29 = new ol.format.GeoJSON();
var features__29 = format__29.readFeatures(json__29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__29.addFeatures(features__29);
var lyr__29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__29, 
                style: style__29,
                popuplayertitle: '铁路专线',
                interactive: true,
                title: '<img src="styles/legend/_29.png" /> 铁路专线'
            });
var format__30 = new ol.format.GeoJSON();
var features__30 = format__30.readFeatures(json__30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__30.addFeatures(features__30);
var lyr__30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__30, 
                style: style__30,
                popuplayertitle: '高速公路',
                interactive: true,
                title: '<img src="styles/legend/_30.png" /> 高速公路'
            });
var format__31 = new ol.format.GeoJSON();
var features__31 = format__31.readFeatures(json__31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__31.addFeatures(features__31);
var lyr__31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__31, 
                style: style__31,
                popuplayertitle: '水库',
                interactive: true,
                title: '<img src="styles/legend/_31.png" /> 水库'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr___2.setVisible(true);lyr___3.setVisible(true);lyr___4.setVisible(true);lyr___5.setVisible(true);lyr___6.setVisible(true);lyr___7.setVisible(true);lyr___8.setVisible(true);lyr___9.setVisible(true);lyr___10.setVisible(true);lyr___11.setVisible(true);lyr___12.setVisible(true);lyr___13.setVisible(true);lyr___14.setVisible(true);lyr___15.setVisible(true);lyr___16.setVisible(true);lyr___17.setVisible(true);lyr___18.setVisible(true);lyr___19.setVisible(true);lyr___20.setVisible(true);lyr___21.setVisible(true);lyr___22.setVisible(true);lyr___23.setVisible(true);lyr___24.setVisible(true);lyr___25.setVisible(true);lyr___26.setVisible(true);lyr___27.setVisible(true);lyr__28.setVisible(true);lyr__29.setVisible(true);lyr__30.setVisible(true);lyr__31.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr___2,lyr___3,lyr___4,lyr___5,lyr___6,lyr___7,lyr___8,lyr___9,lyr___10,lyr___11,lyr___12,lyr___13,lyr___14,lyr___15,lyr___16,lyr___17,lyr___18,lyr___19,lyr___20,lyr___21,lyr___22,lyr___23,lyr___24,lyr___25,lyr___26,lyr___27,lyr__28,lyr__29,lyr__30,lyr__31];
lyr___2.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___3.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___4.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___5.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___6.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___7.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___8.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___9.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___10.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___11.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___12.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___13.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___14.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___15.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___16.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___17.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___18.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___19.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___20.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___21.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___22.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___23.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___24.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___25.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___26.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___27.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr__28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'ANGLE': 'ANGLE', });
lyr__29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'RN': 'RN', 'NAME': 'NAME', 'TYPE': 'TYPE', 'Shape_Leng': 'Shape_Leng', });
lyr__30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'RN': 'RN', 'NAME': 'NAME', 'RTEG': 'RTEG', 'TYPE': 'TYPE', 'Shape_Leng': 'Shape_Leng', });
lyr__31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GB': 'GB', 'HYDC': 'HYDC', 'NAME': 'NAME', 'PERIOD': 'PERIOD', 'VOL': 'VOL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr___2.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___3.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___4.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___5.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___6.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___7.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___8.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___9.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___10.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___11.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___12.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___13.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___14.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___15.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___16.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___17.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___18.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___19.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___20.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___21.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___22.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___23.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___24.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___25.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___26.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr___27.set('fieldImages', {'name': '', 'gb': '', });
lyr__28.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'ANGLE': 'TextEdit', });
lyr__29.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'RN': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr__30.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'RN': 'TextEdit', 'NAME': 'TextEdit', 'RTEG': 'TextEdit', 'TYPE': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr__31.set('fieldImages', {'OBJECTID': 'TextEdit', 'GB': 'TextEdit', 'HYDC': 'TextEdit', 'NAME': 'TextEdit', 'PERIOD': 'TextEdit', 'VOL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr___2.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___3.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___4.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___5.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___6.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___7.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___8.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___9.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___10.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___11.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___12.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___13.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___14.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___15.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___16.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___17.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___18.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___19.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___20.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___21.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___22.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___23.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___24.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___25.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___26.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___27.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr__28.set('fieldLabels', {'OBJECTID': 'no label', 'GB': 'no label', 'ANGLE': 'no label', });
lyr__29.set('fieldLabels', {'OBJECTID': 'no label', 'GB': 'no label', 'RN': 'no label', 'NAME': 'inline label - visible with data', 'TYPE': 'no label', 'Shape_Leng': 'no label', });
lyr__30.set('fieldLabels', {'OBJECTID': 'no label', 'GB': 'no label', 'RN': 'no label', 'NAME': 'inline label - visible with data', 'RTEG': 'no label', 'TYPE': 'no label', 'Shape_Leng': 'no label', });
lyr__31.set('fieldLabels', {'OBJECTID': 'no label', 'GB': 'no label', 'HYDC': 'no label', 'NAME': 'no label', 'PERIOD': 'no label', 'VOL': 'no label', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr__31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});