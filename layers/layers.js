var wms_layers = [];

var lyr_WANGLIUKANAR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "WANG LIU KANAR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WANGLIUKANAR_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13054627.842521, -955666.734648, 13062551.185355, -943196.452718]
                            })
                        });
var lyr_STRAHKERORDERKANAR_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "STRAHKER ORDER KANAR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/STRAHKERORDERKANAR_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13054627.842521, -955666.734648, 13062551.185355, -943196.452718]
                            })
                        });
var format_Vectorized_2 = new ol.format.GeoJSON();
var features_Vectorized_2 = format_Vectorized_2.readFeatures(json_Vectorized_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vectorized_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vectorized_2.addFeatures(features_Vectorized_2);
var lyr_Vectorized_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vectorized_2, 
                style: style_Vectorized_2,
                interactive: true,
    title: 'Vectorized<br />\
    <img src="styles/legend/Vectorized_2_0.png" /> 1<br />\
    <img src="styles/legend/Vectorized_2_1.png" /> 2<br />\
    <img src="styles/legend/Vectorized_2_2.png" /> 3<br />\
    <img src="styles/legend/Vectorized_2_3.png" /> 4<br />\
    <img src="styles/legend/Vectorized_2_4.png" /> 5<br />\
    <img src="styles/legend/Vectorized_2_5.png" /> <br />'
        });

lyr_WANGLIUKANAR_0.setVisible(true);lyr_STRAHKERORDERKANAR_1.setVisible(true);lyr_Vectorized_2.setVisible(true);
var layersList = [lyr_WANGLIUKANAR_0,lyr_STRAHKERORDERKANAR_1,lyr_Vectorized_2];
lyr_Vectorized_2.set('fieldAliases', {});
lyr_Vectorized_2.set('fieldImages', {});
lyr_Vectorized_2.set('fieldLabels', {});
lyr_Vectorized_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});