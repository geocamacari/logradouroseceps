var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTrafficonline_3 = new ol.layer.Tile({
            'title': 'Google Traffic online',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.28004466152261964,

            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.14002233076130982,

            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_5 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RiosPerenesSEIBa25k_6 = new ol.format.GeoJSON();
var features_RiosPerenesSEIBa25k_6 = format_RiosPerenesSEIBa25k_6.readFeatures(json_RiosPerenesSEIBa25k_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPerenesSEIBa25k_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPerenesSEIBa25k_6.addFeatures(features_RiosPerenesSEIBa25k_6);
var lyr_RiosPerenesSEIBa25k_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPerenesSEIBa25k_6,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_RiosPerenesSEIBa25k_6,
                popuplayertitle: "Rios Perenes (SEI-Ba, 25k)",
                interactive: true,
                title: '<img src="styles/legend/RiosPerenesSEIBa25k_6.png" /> Rios Perenes (SEI-Ba, 25k)'
            });
var format_Trecho_Massa_DaguaConder2010_7 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_7 = format_Trecho_Massa_DaguaConder2010_7.readFeatures(json_Trecho_Massa_DaguaConder2010_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_7.addFeatures(features_Trecho_Massa_DaguaConder2010_7);
var lyr_Trecho_Massa_DaguaConder2010_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_7,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_Trecho_Massa_DaguaConder2010_7,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_7.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_8 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_8 = format_Massa_DaguaConder2010_8.readFeatures(json_Massa_DaguaConder2010_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_8.addFeatures(features_Massa_DaguaConder2010_8);
var lyr_Massa_DaguaConder2010_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_8,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_Massa_DaguaConder2010_8,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_8.png" /> Massa_Dagua (Conder 2010)'
            });
var format_EquipPubEsportejan23_9 = new ol.format.GeoJSON();
var features_EquipPubEsportejan23_9 = format_EquipPubEsportejan23_9.readFeatures(json_EquipPubEsportejan23_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubEsportejan23_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubEsportejan23_9.addFeatures(features_EquipPubEsportejan23_9);
var lyr_EquipPubEsportejan23_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubEsportejan23_9,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubEsportejan23_9,
                popuplayertitle: "Equip. Pub. Esporte (jan/23)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubEsportejan23_9.png" /> Equip. Pub. Esporte (jan/23)'
            });
var format_EquipPubPraasParquesoutrosjan23_10 = new ol.format.GeoJSON();
var features_EquipPubPraasParquesoutrosjan23_10 = format_EquipPubPraasParquesoutrosjan23_10.readFeatures(json_EquipPubPraasParquesoutrosjan23_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubPraasParquesoutrosjan23_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubPraasParquesoutrosjan23_10.addFeatures(features_EquipPubPraasParquesoutrosjan23_10);
var lyr_EquipPubPraasParquesoutrosjan23_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubPraasParquesoutrosjan23_10,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubPraasParquesoutrosjan23_10,
                popuplayertitle: "Equip. Pub. Praças/Parques/outros (jan/23)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubPraasParquesoutrosjan23_10.png" /> Equip. Pub. Praças/Parques/outros (jan/23)'
            });
var format_EquipPubCulturaisout21_11 = new ol.format.GeoJSON();
var features_EquipPubCulturaisout21_11 = format_EquipPubCulturaisout21_11.readFeatures(json_EquipPubCulturaisout21_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubCulturaisout21_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubCulturaisout21_11.addFeatures(features_EquipPubCulturaisout21_11);
var lyr_EquipPubCulturaisout21_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubCulturaisout21_11,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubCulturaisout21_11,
                popuplayertitle: "Equip. Pub. Culturais (out/21)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubCulturaisout21_11.png" /> Equip. Pub. Culturais (out/21)'
            });
var format_EquipEducaoout22_12 = new ol.format.GeoJSON();
var features_EquipEducaoout22_12 = format_EquipEducaoout22_12.readFeatures(json_EquipEducaoout22_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipEducaoout22_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipEducaoout22_12.addFeatures(features_EquipEducaoout22_12);
var lyr_EquipEducaoout22_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipEducaoout22_12,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_EquipEducaoout22_12,
                popuplayertitle: "Equip. Educação (out/22)",
                interactive: true,
                title: '<img src="styles/legend/EquipEducaoout22_12.png" /> Equip. Educação (out/22)'
            });
var format_EquipPubSadeout22_13 = new ol.format.GeoJSON();
var features_EquipPubSadeout22_13 = format_EquipPubSadeout22_13.readFeatures(json_EquipPubSadeout22_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubSadeout22_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubSadeout22_13.addFeatures(features_EquipPubSadeout22_13);
var lyr_EquipPubSadeout22_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubSadeout22_13,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_EquipPubSadeout22_13,
                popuplayertitle: "Equip. Pub. Saúde (out/22)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubSadeout22_13.png" /> Equip. Pub. Saúde (out/22)'
            });
var format_ProjetosREFLORACamaari2023_14 = new ol.format.GeoJSON();
var features_ProjetosREFLORACamaari2023_14 = format_ProjetosREFLORACamaari2023_14.readFeatures(json_ProjetosREFLORACamaari2023_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetosREFLORACamaari2023_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetosREFLORACamaari2023_14.addFeatures(features_ProjetosREFLORACamaari2023_14);
var lyr_ProjetosREFLORACamaari2023_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetosREFLORACamaari2023_14,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_ProjetosREFLORACamaari2023_14,
                popuplayertitle: "Projetos REFLORA Camaçari (2023)",
                interactive: true,
                title: '<img src="styles/legend/ProjetosREFLORACamaari2023_14.png" /> Projetos REFLORA Camaçari (2023)'
            });
var format_PraasdePedgiorodestaduais_15 = new ol.format.GeoJSON();
var features_PraasdePedgiorodestaduais_15 = format_PraasdePedgiorodestaduais_15.readFeatures(json_PraasdePedgiorodestaduais_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PraasdePedgiorodestaduais_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PraasdePedgiorodestaduais_15.addFeatures(features_PraasdePedgiorodestaduais_15);
var lyr_PraasdePedgiorodestaduais_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PraasdePedgiorodestaduais_15,
maxResolution:56.00893230452392,
 minResolution:0.28004466152261964,

                style: style_PraasdePedgiorodestaduais_15,
                popuplayertitle: "Praças de Pedágio (rod. estaduais)",
                interactive: true,
                title: '<img src="styles/legend/PraasdePedgiorodestaduais_15.png" /> Praças de Pedágio (rod. estaduais)'
            });
var format_LogradourosHierarquizao_16 = new ol.format.GeoJSON();
var features_LogradourosHierarquizao_16 = format_LogradourosHierarquizao_16.readFeatures(json_LogradourosHierarquizao_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosHierarquizao_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosHierarquizao_16.addFeatures(features_LogradourosHierarquizao_16);
var lyr_LogradourosHierarquizao_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosHierarquizao_16,
maxResolution:11.201786460904787,
 minResolution:0.14002233076130982,

                style: style_LogradourosHierarquizao_16,
                popuplayertitle: "Logradouros Hierarquização",
                interactive: true,
    title: 'Logradouros Hierarquização<br />\
    <img src="styles/legend/LogradourosHierarquizao_16_0.png" /> via expressa<br />\
    <img src="styles/legend/LogradourosHierarquizao_16_1.png" /> sistema viário urbano principal<br />\
    <img src="styles/legend/LogradourosHierarquizao_16_2.png" /> sistema viário urbano complementar<br />\
    <img src="styles/legend/LogradourosHierarquizao_16_3.png" /> outras vias<br />\
    <img src="styles/legend/LogradourosHierarquizao_16_4.png" /> Estradas e vias rurais<br />'
        });
var format_LogradourosOficializadoseouCepeados_17 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_17 = format_LogradourosOficializadoseouCepeados_17.readFeatures(json_LogradourosOficializadoseouCepeados_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_17.addFeatures(features_LogradourosOficializadoseouCepeados_17);
var lyr_LogradourosOficializadoseouCepeados_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_17,
maxResolution:11.201786460904787,
 minResolution:0.14002233076130982,

                style: style_LogradourosOficializadoseouCepeados_17,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_17.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_LinhaFrreaFCA_18 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_18 = format_LinhaFrreaFCA_18.readFeatures(json_LinhaFrreaFCA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_18.addFeatures(features_LinhaFrreaFCA_18);
var lyr_LinhaFrreaFCA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_18,
maxResolution:70.0111653806549,
 minResolution:0.28004466152261964,

                style: style_LinhaFrreaFCA_18,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_18.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_19 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_19 = format_EixosRodEstSEINFRABa2021_19.readFeatures(json_EixosRodEstSEINFRABa2021_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_19.addFeatures(features_EixosRodEstSEINFRABa2021_19);
var lyr_EixosRodEstSEINFRABa2021_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_19,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_EixosRodEstSEINFRABa2021_19,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_19.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PassarelasemRodovias_20 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_20 = format_PassarelasemRodovias_20.readFeatures(json_PassarelasemRodovias_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_20.addFeatures(features_PassarelasemRodovias_20);
var lyr_PassarelasemRodovias_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_20,
maxResolution:42.00669922839295,
 minResolution:0.28004466152261964,

                style: style_PassarelasemRodovias_20,
                popuplayertitle: "Passarelas em Rodovias",
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_20.png" /> Passarelas em Rodovias'
            });
var format_Paradasdenibusemrodovias2022_21 = new ol.format.GeoJSON();
var features_Paradasdenibusemrodovias2022_21 = format_Paradasdenibusemrodovias2022_21.readFeatures(json_Paradasdenibusemrodovias2022_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasdenibusemrodovias2022_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasdenibusemrodovias2022_21.addFeatures(features_Paradasdenibusemrodovias2022_21);
var lyr_Paradasdenibusemrodovias2022_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasdenibusemrodovias2022_21,
maxResolution:21.003349614196473,
 minResolution:0.28004466152261964,

                style: style_Paradasdenibusemrodovias2022_21,
                popuplayertitle: "Paradas de ônibus em rodovias (2022)",
                interactive: true,
                title: '<img src="styles/legend/Paradasdenibusemrodovias2022_21.png" /> Paradas de ônibus em rodovias (2022)'
            });
var format_Localidadesdiversas2023_22 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_22 = format_Localidadesdiversas2023_22.readFeatures(json_Localidadesdiversas2023_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_22.addFeatures(features_Localidadesdiversas2023_22);cluster_Localidadesdiversas2023_22 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Localidadesdiversas2023_22
});
var lyr_Localidadesdiversas2023_22 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Localidadesdiversas2023_22,
maxResolution:21.003349614196473,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_22,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_22.png" /> Localidades diversas (2023)'
            });
var format_Bairros2022vigente_23 = new ol.format.GeoJSON();
var features_Bairros2022vigente_23 = format_Bairros2022vigente_23.readFeatures(json_Bairros2022vigente_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros2022vigente_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros2022vigente_23.addFeatures(features_Bairros2022vigente_23);
var lyr_Bairros2022vigente_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros2022vigente_23,
maxResolution:84.0133984567859,
 minResolution:1.4002233076130983,

                style: style_Bairros2022vigente_23,
                popuplayertitle: "Bairros 2022 (vigente)",
                interactive: true,
                title: '<img src="styles/legend/Bairros2022vigente_23.png" /> Bairros 2022 (vigente)'
            });
var format_DistritosMunicipais2020_24 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_24 = format_DistritosMunicipais2020_24.readFeatures(json_DistritosMunicipais2020_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_24.addFeatures(features_DistritosMunicipais2020_24);
var lyr_DistritosMunicipais2020_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_24,
maxResolution:140.0223307613098,
 minResolution:2.8004466152261966,

                style: style_DistritosMunicipais2020_24,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_24.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_25 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_25 = format_LimitesMunicpiosRMS2020_25.readFeatures(json_LimitesMunicpiosRMS2020_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_25.addFeatures(features_LimitesMunicpiosRMS2020_25);
var lyr_LimitesMunicpiosRMS2020_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_25, 
                style: style_LimitesMunicpiosRMS2020_25,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_25.png" /> Limites Municípios/RMS (2020)'
            });

lyr_OSMStandard_0.setVisible(false);lyr_WazeWorld_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleTrafficonline_3.setVisible(false);lyr_GoogleLabels_4.setVisible(false);lyr_EsriBoundariesandPlaces_5.setVisible(true);lyr_RiosPerenesSEIBa25k_6.setVisible(false);lyr_Trecho_Massa_DaguaConder2010_7.setVisible(true);lyr_Massa_DaguaConder2010_8.setVisible(true);lyr_EquipPubEsportejan23_9.setVisible(false);lyr_EquipPubPraasParquesoutrosjan23_10.setVisible(false);lyr_EquipPubCulturaisout21_11.setVisible(false);lyr_EquipEducaoout22_12.setVisible(false);lyr_EquipPubSadeout22_13.setVisible(false);lyr_ProjetosREFLORACamaari2023_14.setVisible(true);lyr_PraasdePedgiorodestaduais_15.setVisible(true);lyr_LogradourosHierarquizao_16.setVisible(false);lyr_LogradourosOficializadoseouCepeados_17.setVisible(true);lyr_LinhaFrreaFCA_18.setVisible(true);lyr_EixosRodEstSEINFRABa2021_19.setVisible(false);lyr_PassarelasemRodovias_20.setVisible(true);lyr_Paradasdenibusemrodovias2022_21.setVisible(true);lyr_Localidadesdiversas2023_22.setVisible(true);lyr_Bairros2022vigente_23.setVisible(false);lyr_DistritosMunicipais2020_24.setVisible(false);lyr_LimitesMunicpiosRMS2020_25.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WazeWorld_1,lyr_GoogleSatellite_2,lyr_GoogleTrafficonline_3,lyr_GoogleLabels_4,lyr_EsriBoundariesandPlaces_5,lyr_RiosPerenesSEIBa25k_6,lyr_Trecho_Massa_DaguaConder2010_7,lyr_Massa_DaguaConder2010_8,lyr_EquipPubEsportejan23_9,lyr_EquipPubPraasParquesoutrosjan23_10,lyr_EquipPubCulturaisout21_11,lyr_EquipEducaoout22_12,lyr_EquipPubSadeout22_13,lyr_ProjetosREFLORACamaari2023_14,lyr_PraasdePedgiorodestaduais_15,lyr_LogradourosHierarquizao_16,lyr_LogradourosOficializadoseouCepeados_17,lyr_LinhaFrreaFCA_18,lyr_EixosRodEstSEINFRABa2021_19,lyr_PassarelasemRodovias_20,lyr_Paradasdenibusemrodovias2022_21,lyr_Localidadesdiversas2023_22,lyr_Bairros2022vigente_23,lyr_DistritosMunicipais2020_24,lyr_LimitesMunicpiosRMS2020_25];
lyr_RiosPerenesSEIBa25k_6.set('fieldAliases', {'Id': 'Id', 'nome': 'nome', 'regime': 'regime', });
lyr_Trecho_Massa_DaguaConder2010_7.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_8.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_EquipPubEsportejan23_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'layer': 'layer', 'bairro': 'bairro', 'fonte': 'fonte', 'distrito': 'distrito', 'obs': 'obs', 'revisão': 'revisão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubPraasParquesoutrosjan23_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'bairro': 'bairro', 'fonte': 'fonte', 'layer_': 'layer_', 'distrito': 'distrito', 'observaç�': 'observaç�', 'revisão': 'revisão', 'estrutura': 'estrutura', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubCulturaisout21_11.set('fieldAliases', {'id': 'id', 'uso': 'uso', 'tipo': 'tipo', 'fonte': 'fonte', 'origem': 'origem', 'bairro': 'bairro', 'distrito': 'distrito', 'observaç�': 'observaç�', 'turno': 'turno', 'endereço': 'endereço', 'capacidade': 'capacidade', 'gestão': 'gestão', 'equipament': 'equipament', 'org.': 'org.', });
lyr_EquipEducaoout22_12.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'cod_inep': 'cod_inep', 'nome_compl': 'nome_compl', 'distrito': 'distrito', 'numero': 'numero', 'titulo': 'titulo', 'nome_1': 'nome_1', 'bairro': 'bairro', 'x': 'x', 'y': 'y', 'nome_anter': 'nome_anter', 'salas': 'salas', 'endereco': 'endereco', 'turmas_exi': 'turmas_exi', 'gestão': 'gestão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubSadeout22_13.set('fieldAliases', {'id': 'id', 'name': 'name', 'descriptio': 'descriptio', 'tipo': 'tipo', 'fonte': 'fonte', 'bairro': 'bairro', 'distrito': 'distrito', 'cnes': 'cnes', 'n. gestão': 'n. gestão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_ProjetosREFLORACamaari2023_14.set('fieldAliases', {'Long': 'Long', 'Lat': 'Lat', 'Tipo': 'Tipo', 'Projeto': 'Projeto', });
lyr_PraasdePedgiorodestaduais_15.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_LogradourosHierarquizao_16.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'catalogo_': 'catalogo_', 'webmap': 'webmap', 'compriment': 'compriment', 'MAPA': 'MAPA', });
lyr_LogradourosOficializadoseouCepeados_17.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'catalogo_': 'catalogo_', 'webmap': 'webmap', 'compriment': 'compriment', 'MAPA': 'MAPA', });
lyr_LinhaFrreaFCA_18.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_19.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PassarelasemRodovias_20.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_Paradasdenibusemrodovias2022_21.set('fieldAliases', {'id': 'id', 'name': 'name', 'via': 'via', 'bairro_loc': 'bairro_loc', 'distrito': 'distrito', 'bases': 'bases', 'org.': 'org.', });
lyr_Localidadesdiversas2023_22.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Bairros2022vigente_23.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'area_km2': 'area_km2', 'area_ha': 'area_ha', 'perimet_km': 'perimet_km', 'Est_Pop22': 'Est_Pop22', 'Densidade': 'Densidade', });
lyr_DistritosMunicipais2020_24.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicpiosRMS2020_25.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RiosPerenesSEIBa25k_6.set('fieldImages', {'Id': 'TextEdit', 'nome': 'TextEdit', 'regime': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_7.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_8.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EquipPubEsportejan23_9.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'layer': 'TextEdit', 'bairro': 'TextEdit', 'fonte': 'TextEdit', 'distrito': 'TextEdit', 'obs': 'TextEdit', 'revisão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubPraasParquesoutrosjan23_10.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'bairro': 'TextEdit', 'fonte': 'TextEdit', 'layer_': 'TextEdit', 'distrito': 'TextEdit', 'observaç�': 'TextEdit', 'revisão': 'TextEdit', 'estrutura': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubCulturaisout21_11.set('fieldImages', {'id': 'TextEdit', 'uso': 'TextEdit', 'tipo': 'TextEdit', 'fonte': 'TextEdit', 'origem': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'observaç�': 'TextEdit', 'turno': 'TextEdit', 'endereço': 'TextEdit', 'capacidade': 'TextEdit', 'gestão': 'TextEdit', 'equipament': 'TextEdit', 'org.': 'TextEdit', });
lyr_EquipEducaoout22_12.set('fieldImages', {'id': 'Range', 'tipo': 'TextEdit', 'cod_inep': 'TextEdit', 'nome_compl': 'TextEdit', 'distrito': 'TextEdit', 'numero': 'TextEdit', 'titulo': 'TextEdit', 'nome_1': 'TextEdit', 'bairro': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nome_anter': 'TextEdit', 'salas': 'TextEdit', 'endereco': 'TextEdit', 'turmas_exi': 'TextEdit', 'gestão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubSadeout22_13.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'tipo': 'TextEdit', 'fonte': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'cnes': 'TextEdit', 'n. gestão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_ProjetosREFLORACamaari2023_14.set('fieldImages', {'Long': 'Range', 'Lat': 'Range', 'Tipo': 'TextEdit', 'Projeto': 'TextEdit', });
lyr_PraasdePedgiorodestaduais_15.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_LogradourosHierarquizao_16.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'catalogo_': 'TextEdit', 'webmap': 'TextEdit', 'compriment': 'TextEdit', 'MAPA': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_17.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'catalogo_': '', 'webmap': 'TextEdit', 'compriment': 'TextEdit', 'MAPA': '', });
lyr_LinhaFrreaFCA_18.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_19.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PassarelasemRodovias_20.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_Paradasdenibusemrodovias2022_21.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'via': 'TextEdit', 'bairro_loc': 'TextEdit', 'distrito': 'TextEdit', 'bases': 'TextEdit', 'org.': 'TextEdit', });
lyr_Localidadesdiversas2023_22.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Bairros2022vigente_23.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'area_km2': 'TextEdit', 'area_ha': 'TextEdit', 'perimet_km': 'TextEdit', 'Est_Pop22': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_DistritosMunicipais2020_24.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicpiosRMS2020_25.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_RiosPerenesSEIBa25k_6.set('fieldLabels', {'Id': 'inline label - always visible', 'nome': 'inline label - always visible', 'regime': 'inline label - always visible', });
lyr_Trecho_Massa_DaguaConder2010_7.set('fieldLabels', {'FID_HID_Tr': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'ID_Trecho_': 'inline label - always visible', 'tipoTrecho': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'SHAPE_Le_2': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Massa_DaguaConder2010_8.set('fieldLabels', {'FID_HID_Ma': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'tipoMassaD': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'Shape_Le_2': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_EquipPubEsportejan23_9.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'layer': 'inline label - always visible', 'bairro': 'hidden field', 'fonte': 'hidden field', 'distrito': 'hidden field', 'obs': 'hidden field', 'revisão': 'hidden field', 'org.': 'hidden field', 'Macrozona': 'hidden field', });
lyr_EquipPubPraasParquesoutrosjan23_10.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'bairro': 'hidden field', 'fonte': 'hidden field', 'layer_': 'inline label - always visible', 'distrito': 'hidden field', 'observaç�': 'hidden field', 'revisão': 'hidden field', 'estrutura': 'hidden field', 'org.': 'hidden field', 'Macrozona': 'hidden field', });
lyr_EquipPubCulturaisout21_11.set('fieldLabels', {'id': 'inline label - always visible', 'uso': 'inline label - always visible', 'tipo': 'inline label - always visible', 'fonte': 'hidden field', 'origem': 'hidden field', 'bairro': 'hidden field', 'distrito': 'hidden field', 'observaç�': 'hidden field', 'turno': 'hidden field', 'endereço': 'hidden field', 'capacidade': 'hidden field', 'gestão': 'inline label - always visible', 'equipament': 'inline label - always visible', 'org.': 'hidden field', });
lyr_EquipEducaoout22_12.set('fieldLabels', {'id': 'inline label - always visible', 'tipo': 'inline label - always visible', 'cod_inep': 'hidden field', 'nome_compl': 'inline label - always visible', 'distrito': 'hidden field', 'numero': 'hidden field', 'titulo': 'hidden field', 'nome_1': 'inline label - always visible', 'bairro': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'nome_anter': 'hidden field', 'salas': 'hidden field', 'endereco': 'hidden field', 'turmas_exi': 'hidden field', 'gestão': 'inline label - always visible', 'org.': 'hidden field', 'Macrozona': 'hidden field', });
lyr_EquipPubSadeout22_13.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'tipo': 'inline label - always visible', 'fonte': 'hidden field', 'bairro': 'hidden field', 'distrito': 'hidden field', 'cnes': 'hidden field', 'n. gestão': 'inline label - always visible', 'org.': 'hidden field', 'Macrozona': 'hidden field', });
lyr_ProjetosREFLORACamaari2023_14.set('fieldLabels', {'Long': 'hidden field', 'Lat': 'hidden field', 'Tipo': 'inline label - always visible', 'Projeto': 'inline label - always visible', });
lyr_PraasdePedgiorodestaduais_15.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'bairro': 'no label', 'distrito': 'no label', 'base': 'no label', 'fonte': 'no label', });
lyr_LogradourosHierarquizao_16.set('fieldLabels', {'id': 'hidden field', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'hidden field', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'catalogo_': 'inline label - always visible', 'webmap': 'hidden field', 'compriment': 'inline label - always visible', 'MAPA': 'inline label - always visible', });
lyr_LogradourosOficializadoseouCepeados_17.set('fieldLabels', {'id': 'hidden field', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'hidden field', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'catalogo_': 'inline label - always visible', 'webmap': 'hidden field', 'compriment': 'inline label - always visible', 'MAPA': 'inline label - always visible', });
lyr_LinhaFrreaFCA_18.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'nomeabrev': 'inline label - always visible', 'geometriaa': 'inline label - always visible', 'codtrechof': 'inline label - always visible', 'posicaorel': 'inline label - always visible', 'tipotrecho': 'inline label - always visible', 'bitola': 'inline label - always visible', 'eletrifica': 'inline label - always visible', 'nrlinhas': 'inline label - always visible', 'emarruamen': 'inline label - always visible', 'jurisdicao': 'inline label - always visible', 'administra': 'inline label - always visible', 'concession': 'inline label - always visible', 'operaciona': 'inline label - always visible', 'situacaofi': 'inline label - always visible', 'cargasupor': 'inline label - always visible', });
lyr_EixosRodEstSEINFRABa2021_19.set('fieldLabels', {'Name': 'inline label - always visible', 'fid': 'inline label - always visible', 'Codigo SRE': 'inline label - always visible', 'UF': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Local Iní': 'inline label - always visible', 'Km Inicial': 'inline label - always visible', 'Km Final': 'inline label - always visible', 'Extensão': 'inline label - always visible', 'Situação': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Tipo de Re': 'inline label - always visible', 'Descriç_1': 'inline label - always visible', 'Coincide_3': 'inline label - always visible', 'Identifica': 'inline label - always visible', 'Extensã_1': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_PassarelasemRodovias_20.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Numero': 'no label', 'Rodovia': 'no label', 'Gestao': 'no label', 'Bairro': 'no label', 'Distrito': 'no label', });
lyr_Paradasdenibusemrodovias2022_21.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'via': 'hidden field', 'bairro_loc': 'hidden field', 'distrito': 'no label', 'bases': 'no label', 'org.': 'no label', });
lyr_Localidadesdiversas2023_22.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_Bairros2022vigente_23.set('fieldLabels', {'id': 'hidden field', 'nm_bairro': 'inline label - always visible', 'cod_bairro': 'hidden field', 'distrito': 'inline label - always visible', 'situação': 'hidden field', 'bairros': 'hidden field', 'rotulos': 'hidden field', 'area_km2': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'perimet_km': 'hidden field', 'Est_Pop22': 'inline label - always visible', 'Densidade': 'hidden field', });
lyr_DistritosMunicipais2020_24.set('fieldLabels', {'id': 'inline label - always visible', 'cd_mun': 'inline label - always visible', 'cd_dist': 'inline label - always visible', 'nm_dist': 'inline label - always visible', 'Perímetro': 'inline label - always visible', 'Área': 'inline label - always visible', 'percentual': 'inline label - always visible', 'cg_majorit': 'inline label - always visible', 'cb_heigh': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_25.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});