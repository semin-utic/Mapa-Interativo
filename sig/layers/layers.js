var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UnidadedeConservao_1 = new ol.format.GeoJSON();
var features_UnidadedeConservao_1 = format_UnidadedeConservao_1.readFeatures(json_UnidadedeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadedeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeConservao_1.addFeatures(features_UnidadedeConservao_1);
var lyr_UnidadedeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeConservao_1, 
                style: style_UnidadedeConservao_1,
                popuplayertitle: "Unidade de Conservação",
                interactive: true,
    title: 'Unidade de Conservação<br />\
    <img src="styles/legend/UnidadedeConservao_1_0.png" /> Proteção Integral<br />\
    <img src="styles/legend/UnidadedeConservao_1_1.png" /> Uso Sustentável<br />'
        });
var format_Flota_2 = new ol.format.GeoJSON();
var features_Flota_2 = format_Flota_2.readFeatures(json_Flota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flota_2.addFeatures(features_Flota_2);
var lyr_Flota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flota_2, 
                style: style_Flota_2,
                popuplayertitle: "Flota",
                interactive: false,
                title: '<img src="styles/legend/Flota_2.png" /> Flota'
            });
var format_GlebasemTransferncia_3 = new ol.format.GeoJSON();
var features_GlebasemTransferncia_3 = format_GlebasemTransferncia_3.readFeatures(json_GlebasemTransferncia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebasemTransferncia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebasemTransferncia_3.addFeatures(features_GlebasemTransferncia_3);
var lyr_GlebasemTransferncia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebasemTransferncia_3, 
                style: style_GlebasemTransferncia_3,
                popuplayertitle: "Glebas em Transferência",
                interactive: true,
                title: '<img src="styles/legend/GlebasemTransferncia_3.png" /> Glebas em Transferência'
            });
var format_LimitesMunicipais_4 = new ol.format.GeoJSON();
var features_LimitesMunicipais_4 = format_LimitesMunicipais_4.readFeatures(json_LimitesMunicipais_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipais_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais_4.addFeatures(features_LimitesMunicipais_4);
var lyr_LimitesMunicipais_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais_4, 
                style: style_LimitesMunicipais_4,
                popuplayertitle: "Limites Municipais",
                interactive: false,
                title: '<img src="styles/legend/LimitesMunicipais_4.png" /> Limites Municipais'
            });
var format_GlebasEstaduais_5 = new ol.format.GeoJSON();
var features_GlebasEstaduais_5 = format_GlebasEstaduais_5.readFeatures(json_GlebasEstaduais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebasEstaduais_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebasEstaduais_5.addFeatures(features_GlebasEstaduais_5);
var lyr_GlebasEstaduais_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebasEstaduais_5, 
                style: style_GlebasEstaduais_5,
                popuplayertitle: "Glebas Estaduais",
                interactive: true,
                title: '<img src="styles/legend/GlebasEstaduais_5.png" /> Glebas Estaduais'
            });
var format_TerraIndgena_6 = new ol.format.GeoJSON();
var features_TerraIndgena_6 = format_TerraIndgena_6.readFeatures(json_TerraIndgena_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerraIndgena_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraIndgena_6.addFeatures(features_TerraIndgena_6);
var lyr_TerraIndgena_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraIndgena_6, 
                style: style_TerraIndgena_6,
                popuplayertitle: "Terra Indígena",
                interactive: true,
                title: '<img src="styles/legend/TerraIndgena_6.png" /> Terra Indígena'
            });
var format_TtulosMinerrios_7 = new ol.format.GeoJSON();
var features_TtulosMinerrios_7 = format_TtulosMinerrios_7.readFeatures(json_TtulosMinerrios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TtulosMinerrios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TtulosMinerrios_7.addFeatures(features_TtulosMinerrios_7);
var lyr_TtulosMinerrios_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TtulosMinerrios_7, 
                style: style_TtulosMinerrios_7,
                popuplayertitle: "Títulos Minerários",
                interactive: true,
                title: '<img src="styles/legend/TtulosMinerrios_7.png" /> Títulos Minerários'
            });
var format_Hidrografia_8 = new ol.format.GeoJSON();
var features_Hidrografia_8 = format_Hidrografia_8.readFeatures(json_Hidrografia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_8.addFeatures(features_Hidrografia_8);
var lyr_Hidrografia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_8, 
                style: style_Hidrografia_8,
                popuplayertitle: "Hidrografia",
                interactive: false,
                title: '<img src="styles/legend/Hidrografia_8.png" /> Hidrografia'
            });
var format_Linhadetransmisso_9 = new ol.format.GeoJSON();
var features_Linhadetransmisso_9 = format_Linhadetransmisso_9.readFeatures(json_Linhadetransmisso_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linhadetransmisso_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linhadetransmisso_9.addFeatures(features_Linhadetransmisso_9);
var lyr_Linhadetransmisso_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linhadetransmisso_9, 
                style: style_Linhadetransmisso_9,
                popuplayertitle: "Linha de transmissão",
                interactive: false,
                title: '<img src="styles/legend/Linhadetransmisso_9.png" /> Linha de transmissão'
            });
var format_Rodovias_10 = new ol.format.GeoJSON();
var features_Rodovias_10 = format_Rodovias_10.readFeatures(json_Rodovias_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodovias_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovias_10.addFeatures(features_Rodovias_10);
var lyr_Rodovias_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodovias_10, 
                style: style_Rodovias_10,
                popuplayertitle: "Rodovias",
                interactive: false,
    title: 'Rodovias<br />\
    <img src="styles/legend/Rodovias_10_0.png" /> Estrada Pavimentada<br />\
    <img src="styles/legend/Rodovias_10_1.png" /> Não Pavimentada<br />'
        });
var format_Portos_11 = new ol.format.GeoJSON();
var features_Portos_11 = format_Portos_11.readFeatures(json_Portos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portos_11.addFeatures(features_Portos_11);
var lyr_Portos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Portos_11, 
                style: style_Portos_11,
                popuplayertitle: "Portos",
                interactive: false,
                title: '<img src="styles/legend/Portos_11.png" /> Portos'
            });
var format_SedeMunicipal_12 = new ol.format.GeoJSON();
var features_SedeMunicipal_12 = format_SedeMunicipal_12.readFeatures(json_SedeMunicipal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SedeMunicipal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SedeMunicipal_12.addFeatures(features_SedeMunicipal_12);
var lyr_SedeMunicipal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SedeMunicipal_12, 
                style: style_SedeMunicipal_12,
                popuplayertitle: "Sede Municipal",
                interactive: true,
                title: '<img src="styles/legend/SedeMunicipal_12.png" /> Sede Municipal'
            });
var format_Aerdromo_13 = new ol.format.GeoJSON();
var features_Aerdromo_13 = format_Aerdromo_13.readFeatures(json_Aerdromo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aerdromo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aerdromo_13.addFeatures(features_Aerdromo_13);
var lyr_Aerdromo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aerdromo_13, 
                style: style_Aerdromo_13,
                popuplayertitle: "Aeródromo",
                interactive: false,
                title: '<img src="styles/legend/Aerdromo_13.png" /> Aeródromo'
            });

lyr_Basemap_0.setVisible(false);lyr_UnidadedeConservao_1.setVisible(false);lyr_Flota_2.setVisible(false);lyr_GlebasemTransferncia_3.setVisible(false);lyr_LimitesMunicipais_4.setVisible(true);lyr_GlebasEstaduais_5.setVisible(false);lyr_TerraIndgena_6.setVisible(false);lyr_TtulosMinerrios_7.setVisible(true);lyr_Hidrografia_8.setVisible(false);lyr_Linhadetransmisso_9.setVisible(false);lyr_Rodovias_10.setVisible(true);lyr_Portos_11.setVisible(false);lyr_SedeMunicipal_12.setVisible(true);lyr_Aerdromo_13.setVisible(false);
var layersList = [lyr_Basemap_0,lyr_UnidadedeConservao_1,lyr_Flota_2,lyr_GlebasemTransferncia_3,lyr_LimitesMunicipais_4,lyr_GlebasEstaduais_5,lyr_TerraIndgena_6,lyr_TtulosMinerrios_7,lyr_Hidrografia_8,lyr_Linhadetransmisso_9,lyr_Rodovias_10,lyr_Portos_11,lyr_SedeMunicipal_12,lyr_Aerdromo_13];
lyr_UnidadedeConservao_1.set('fieldAliases', {'NOME_UC1': 'NOME_UC1', 'CATEGORI3': 'CATEGORI3', 'ESFERA5': 'ESFERA5', 'NOME_ORG12': 'NOME_ORG12', 'Nome': 'Nome', 'Categoria': 'Categoria', });
lyr_Flota_2.set('fieldAliases', {'AREA_HA0': 'AREA_HA0', 'ZONEAMEN1': 'ZONEAMEN1', 'HECTARES2': 'HECTARES2', });
lyr_GlebasemTransferncia_3.set('fieldAliases', {'status': 'status', 'Nome': 'Nome', });
lyr_LimitesMunicipais_4.set('fieldAliases', {'NM_MUN': 'NM_MUN', });
lyr_GlebasEstaduais_5.set('fieldAliases', {'Nome': 'Nome', });
lyr_TerraIndgena_6.set('fieldAliases', {'terrai_nom': 'terrai_nom', 'municipio_': 'municipio_', });
lyr_TtulosMinerrios_7.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_Hidrografia_8.set('fieldAliases', {'nome': 'nome', 'coincideco': 'coincideco', 'regime': 'regime', });
lyr_Linhadetransmisso_9.set('fieldAliases', {'Name': 'Name', 'Nome': 'Nome', 'Concession': 'Concession', });
lyr_Rodovias_10.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', 'LABEL': 'LABEL', 'quilometro': 'quilometro', 'layer': 'layer', 'path': 'path', });
lyr_Portos_11.set('fieldAliases', {'POR_NM': 'POR_NM', });
lyr_SedeMunicipal_12.set('fieldAliases', {'CID_NM': 'CID_NM', });
lyr_Aerdromo_13.set('fieldAliases', {'AER_NM': 'AER_NM', });
lyr_UnidadedeConservao_1.set('fieldImages', {'NOME_UC1': 'TextEdit', 'CATEGORI3': 'TextEdit', 'ESFERA5': 'TextEdit', 'NOME_ORG12': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Flota_2.set('fieldImages', {'AREA_HA0': '', 'ZONEAMEN1': '', 'HECTARES2': '', });
lyr_GlebasemTransferncia_3.set('fieldImages', {'status': 'TextEdit', 'Nome': 'TextEdit', });
lyr_LimitesMunicipais_4.set('fieldImages', {'NM_MUN': 'TextEdit', });
lyr_GlebasEstaduais_5.set('fieldImages', {'Nome': 'TextEdit', });
lyr_TerraIndgena_6.set('fieldImages', {'terrai_nom': 'TextEdit', 'municipio_': 'TextEdit', });
lyr_TtulosMinerrios_7.set('fieldImages', {'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_Hidrografia_8.set('fieldImages', {'nome': 'TextEdit', 'coincideco': 'TextEdit', 'regime': 'TextEdit', });
lyr_Linhadetransmisso_9.set('fieldImages', {'Name': '', 'Nome': '', 'Concession': '', });
lyr_Rodovias_10.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'LABEL': 'TextEdit', 'quilometro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Portos_11.set('fieldImages', {'POR_NM': 'TextEdit', });
lyr_SedeMunicipal_12.set('fieldImages', {'CID_NM': 'TextEdit', });
lyr_Aerdromo_13.set('fieldImages', {'AER_NM': 'TextEdit', });
lyr_UnidadedeConservao_1.set('fieldLabels', {'NOME_UC1': 'header label - visible with data', 'CATEGORI3': 'header label - visible with data', 'ESFERA5': 'header label - visible with data', 'NOME_ORG12': 'header label - visible with data', 'Nome': 'header label - visible with data', 'Categoria': 'header label - visible with data', });
lyr_Flota_2.set('fieldLabels', {'AREA_HA0': 'no label', 'ZONEAMEN1': 'no label', 'HECTARES2': 'no label', });
lyr_GlebasemTransferncia_3.set('fieldLabels', {'status': 'header label - visible with data', 'Nome': 'header label - visible with data', });
lyr_LimitesMunicipais_4.set('fieldLabels', {'NM_MUN': 'no label', });
lyr_GlebasEstaduais_5.set('fieldLabels', {'Nome': 'header label - visible with data', });
lyr_TerraIndgena_6.set('fieldLabels', {'terrai_nom': 'header label - visible with data', 'municipio_': 'header label - visible with data', });
lyr_TtulosMinerrios_7.set('fieldLabels', {'PROCESSO': 'header label - visible with data', 'NUMERO': 'header label - visible with data', 'ANO': 'header label - visible with data', 'AREA_HA': 'header label - visible with data', 'ID': 'header label - visible with data', 'FASE': 'header label - visible with data', 'ULT_EVENTO': 'header label - visible with data', 'NOME': 'header label - visible with data', 'SUBS': 'header label - visible with data', 'USO': 'header label - visible with data', 'UF': 'header label - visible with data', 'DSProcesso': 'header label - visible with data', });
lyr_Hidrografia_8.set('fieldLabels', {'nome': 'no label', 'coincideco': 'no label', 'regime': 'no label', });
lyr_Linhadetransmisso_9.set('fieldLabels', {'Name': 'no label', 'Nome': 'no label', 'Concession': 'no label', });
lyr_Rodovias_10.set('fieldLabels', {'TIPO': 'no label', 'NOME': 'no label', 'LABEL': 'no label', 'quilometro': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Portos_11.set('fieldLabels', {'POR_NM': 'no label', });
lyr_SedeMunicipal_12.set('fieldLabels', {'CID_NM': 'header label - visible with data', });
lyr_Aerdromo_13.set('fieldLabels', {'AER_NM': 'no label', });
lyr_Aerdromo_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});