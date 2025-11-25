var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_boliviadepartamentos_geo_1 = new ol.format.GeoJSON();
var features_Departamentos_boliviadepartamentos_geo_1 = format_Departamentos_boliviadepartamentos_geo_1.readFeatures(json_Departamentos_boliviadepartamentos_geo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_boliviadepartamentos_geo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_boliviadepartamentos_geo_1.addFeatures(features_Departamentos_boliviadepartamentos_geo_1);
var lyr_Departamentos_boliviadepartamentos_geo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_boliviadepartamentos_geo_1, 
                style: style_Departamentos_boliviadepartamentos_geo_1,
                popuplayertitle: 'Departamentos_bolivia — departamentos_geo',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_boliviadepartamentos_geo_1.png" /> Departamentos_bolivia — departamentos_geo'
            });
var format_AtractivosTuristicosTCOs_2 = new ol.format.GeoJSON();
var features_AtractivosTuristicosTCOs_2 = format_AtractivosTuristicosTCOs_2.readFeatures(json_AtractivosTuristicosTCOs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtractivosTuristicosTCOs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtractivosTuristicosTCOs_2.addFeatures(features_AtractivosTuristicosTCOs_2);
cluster_AtractivosTuristicosTCOs_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AtractivosTuristicosTCOs_2
});
var lyr_AtractivosTuristicosTCOs_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AtractivosTuristicosTCOs_2, 
                style: style_AtractivosTuristicosTCOs_2,
                popuplayertitle: 'Atractivos Turisticos TCOs',
                interactive: true,
                title: '<img src="styles/legend/AtractivosTuristicosTCOs_2.png" /> Atractivos Turisticos TCOs'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Departamentos_boliviadepartamentos_geo_1.setVisible(true);lyr_AtractivosTuristicosTCOs_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Departamentos_boliviadepartamentos_geo_1,lyr_AtractivosTuristicosTCOs_2];
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'c_ut': 'c_ut', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_AtractivosTuristicosTCOs_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'jerarquÍa': 'jerarquÍa', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'comunidad': 'comunidad', 'nombre de': 'nombre de', 'categoria': 'categoria', 'vocaciÓn': 'vocaciÓn', 'sitios_tur': 'sitios_tur', 'temporalid': 'temporalid', 'limitacion': 'limitacion', 'alojamient': 'alojamient', 'alimentaci': 'alimentaci', 'transporte': 'transporte', 'comunicaci': 'comunicaci', 'actividade': 'actividade', 'descripcio': 'descripcio', 'responsabl': 'responsabl', 'otras enti': 'otras enti', 'pertenenci': 'pertenenci', 'fuente': 'fuente', 'este': 'este', 'norte': 'norte', });
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldImages', {'fid': '', 'id': '', 'c_ut': '', 'DEPARTAMEN': '', });
lyr_AtractivosTuristicosTCOs_2.set('fieldImages', {'ogc_fid': '', 'jerarquÍa': '', 'departamen': '', 'provincia': '', 'municipio': '', 'comunidad': '', 'nombre de': '', 'categoria': '', 'vocaciÓn': '', 'sitios_tur': '', 'temporalid': '', 'limitacion': '', 'alojamient': '', 'alimentaci': '', 'transporte': '', 'comunicaci': '', 'actividade': '', 'descripcio': '', 'responsabl': '', 'otras enti': '', 'pertenenci': '', 'fuente': '', 'este': '', 'norte': '', });
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'c_ut': 'no label', 'DEPARTAMEN': 'no label', });
lyr_AtractivosTuristicosTCOs_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'jerarquÍa': 'hidden field', 'departamen': 'inline label - visible with data', 'provincia': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'comunidad': 'hidden field', 'nombre de': 'inline label - visible with data', 'categoria': 'hidden field', 'vocaciÓn': 'inline label - visible with data', 'sitios_tur': 'inline label - visible with data', 'temporalid': 'inline label - visible with data', 'limitacion': 'inline label - visible with data', 'alojamient': 'inline label - visible with data', 'alimentaci': 'inline label - visible with data', 'transporte': 'inline label - visible with data', 'comunicaci': 'hidden field', 'actividade': 'inline label - visible with data', 'descripcio': 'inline label - visible with data', 'responsabl': 'hidden field', 'otras enti': 'hidden field', 'pertenenci': 'hidden field', 'fuente': 'hidden field', 'este': 'hidden field', 'norte': 'hidden field', });
lyr_AtractivosTuristicosTCOs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});