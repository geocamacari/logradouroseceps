var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_3 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Trecho_Massa_DaguaConder2010_4 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_4 = format_Trecho_Massa_DaguaConder2010_4.readFeatures(json_Trecho_Massa_DaguaConder2010_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_4.addFeatures(features_Trecho_Massa_DaguaConder2010_4);
var lyr_Trecho_Massa_DaguaConder2010_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_4, 
                style: style_Trecho_Massa_DaguaConder2010_4,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_4.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_5 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_5 = format_Massa_DaguaConder2010_5.readFeatures(json_Massa_DaguaConder2010_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_5.addFeatures(features_Massa_DaguaConder2010_5);
var lyr_Massa_DaguaConder2010_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_5, 
                style: style_Massa_DaguaConder2010_5,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_5.png" /> Massa_Dagua (Conder 2010)'
            });
var format_INCRAAssentRuraismaio2021_6 = new ol.format.GeoJSON();
var features_INCRAAssentRuraismaio2021_6 = format_INCRAAssentRuraismaio2021_6.readFeatures(json_INCRAAssentRuraismaio2021_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INCRAAssentRuraismaio2021_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INCRAAssentRuraismaio2021_6.addFeatures(features_INCRAAssentRuraismaio2021_6);
var lyr_INCRAAssentRuraismaio2021_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INCRAAssentRuraismaio2021_6,
maxResolution:56.00893230452392,
 minResolution:0.28004466152261964,

                style: style_INCRAAssentRuraismaio2021_6,
                popuplayertitle: "INCRA - Assent. Rurais (maio/2021)",
                interactive: true,
                title: '<img src="styles/legend/INCRAAssentRuraismaio2021_6.png" /> INCRA - Assent. Rurais (maio/2021)'
            });
var format_Paradasdenibusemrodovias2022_7 = new ol.format.GeoJSON();
var features_Paradasdenibusemrodovias2022_7 = format_Paradasdenibusemrodovias2022_7.readFeatures(json_Paradasdenibusemrodovias2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasdenibusemrodovias2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasdenibusemrodovias2022_7.addFeatures(features_Paradasdenibusemrodovias2022_7);
var lyr_Paradasdenibusemrodovias2022_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasdenibusemrodovias2022_7,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_Paradasdenibusemrodovias2022_7,
                popuplayertitle: "Paradas de ônibus em rodovias (2022)",
                interactive: true,
                title: '<img src="styles/legend/Paradasdenibusemrodovias2022_7.png" /> Paradas de ônibus em rodovias (2022)'
            });
var format_PassarelasemRodovias_8 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_8 = format_PassarelasemRodovias_8.readFeatures(json_PassarelasemRodovias_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_8.addFeatures(features_PassarelasemRodovias_8);
var lyr_PassarelasemRodovias_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_8, 
                style: style_PassarelasemRodovias_8,
                popuplayertitle: "Passarelas em Rodovias",
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_8.png" /> Passarelas em Rodovias'
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
maxResolution:28.00446615226196,
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
maxResolution:28.00446615226196,
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
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_EquipPubCulturaisout21_11,
                popuplayertitle: "Equip. Pub. Culturais (out/21)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubCulturaisout21_11.png" /> Equip. Pub. Culturais (out/21)'
            });
var format_EquipPubAssistSocialout22_12 = new ol.format.GeoJSON();
var features_EquipPubAssistSocialout22_12 = format_EquipPubAssistSocialout22_12.readFeatures(json_EquipPubAssistSocialout22_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubAssistSocialout22_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubAssistSocialout22_12.addFeatures(features_EquipPubAssistSocialout22_12);
var lyr_EquipPubAssistSocialout22_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubAssistSocialout22_12,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_EquipPubAssistSocialout22_12,
                popuplayertitle: "Equip. Pub. Assist Social (out/22)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubAssistSocialout22_12.png" /> Equip. Pub. Assist Social (out/22)'
            });
var format_EquipEducaoout22_13 = new ol.format.GeoJSON();
var features_EquipEducaoout22_13 = format_EquipEducaoout22_13.readFeatures(json_EquipEducaoout22_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipEducaoout22_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipEducaoout22_13.addFeatures(features_EquipEducaoout22_13);
var lyr_EquipEducaoout22_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipEducaoout22_13,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_EquipEducaoout22_13,
                popuplayertitle: "Equip. Educação (out/22)",
                interactive: true,
                title: '<img src="styles/legend/EquipEducaoout22_13.png" /> Equip. Educação (out/22)'
            });
var format_EquipPubSadeout22_14 = new ol.format.GeoJSON();
var features_EquipPubSadeout22_14 = format_EquipPubSadeout22_14.readFeatures(json_EquipPubSadeout22_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubSadeout22_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubSadeout22_14.addFeatures(features_EquipPubSadeout22_14);
var lyr_EquipPubSadeout22_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubSadeout22_14,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_EquipPubSadeout22_14,
                popuplayertitle: "Equip. Pub. Saúde (out/22)",
                interactive: true,
                title: '<img src="styles/legend/EquipPubSadeout22_14.png" /> Equip. Pub. Saúde (out/22)'
            });
var format_ProjetosREFLORACamaari2023_15 = new ol.format.GeoJSON();
var features_ProjetosREFLORACamaari2023_15 = format_ProjetosREFLORACamaari2023_15.readFeatures(json_ProjetosREFLORACamaari2023_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetosREFLORACamaari2023_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetosREFLORACamaari2023_15.addFeatures(features_ProjetosREFLORACamaari2023_15);
var lyr_ProjetosREFLORACamaari2023_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetosREFLORACamaari2023_15,
maxResolution:42.00669922839295,
 minResolution:0.28004466152261964,

                style: style_ProjetosREFLORACamaari2023_15,
                popuplayertitle: "Projetos REFLORA Camaçari (2023)",
                interactive: true,
                title: '<img src="styles/legend/ProjetosREFLORACamaari2023_15.png" /> Projetos REFLORA Camaçari (2023)'
            });
var format_PraasdePedgiorodestaduais_16 = new ol.format.GeoJSON();
var features_PraasdePedgiorodestaduais_16 = format_PraasdePedgiorodestaduais_16.readFeatures(json_PraasdePedgiorodestaduais_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PraasdePedgiorodestaduais_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PraasdePedgiorodestaduais_16.addFeatures(features_PraasdePedgiorodestaduais_16);
var lyr_PraasdePedgiorodestaduais_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PraasdePedgiorodestaduais_16,
maxResolution:56.00893230452392,
 minResolution:0.28004466152261964,

                style: style_PraasdePedgiorodestaduais_16,
                popuplayertitle: "Praças de Pedágio (rod. estaduais)",
                interactive: true,
                title: '<img src="styles/legend/PraasdePedgiorodestaduais_16.png" /> Praças de Pedágio (rod. estaduais)'
            });
var format_LinhaFrreaFCA_17 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_17 = format_LinhaFrreaFCA_17.readFeatures(json_LinhaFrreaFCA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_17.addFeatures(features_LinhaFrreaFCA_17);
var lyr_LinhaFrreaFCA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_17,
maxResolution:70.0111653806549,
 minResolution:0.28004466152261964,

                style: style_LinhaFrreaFCA_17,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_17.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_18 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_18 = format_EixosRodEstSEINFRABa2021_18.readFeatures(json_EixosRodEstSEINFRABa2021_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_18.addFeatures(features_EixosRodEstSEINFRABa2021_18);
var lyr_EixosRodEstSEINFRABa2021_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_18, 
                style: style_EixosRodEstSEINFRABa2021_18,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_18.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_LogradourosOficializadoseouCepeados_19 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_19 = format_LogradourosOficializadoseouCepeados_19.readFeatures(json_LogradourosOficializadoseouCepeados_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_19.addFeatures(features_LogradourosOficializadoseouCepeados_19);
var lyr_LogradourosOficializadoseouCepeados_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_19,
maxResolution:11.201786460904787,
 minResolution:0.28004466152261964,

                style: style_LogradourosOficializadoseouCepeados_19,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_19.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_Localidadesdiversas2023_20 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_20 = format_Localidadesdiversas2023_20.readFeatures(json_Localidadesdiversas2023_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_20.addFeatures(features_Localidadesdiversas2023_20);cluster_Localidadesdiversas2023_20 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Localidadesdiversas2023_20
});
var lyr_Localidadesdiversas2023_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Localidadesdiversas2023_20,
maxResolution:21.003349614196473,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_20,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_20.png" /> Localidades diversas (2023)'
            });
var format_Bairros2022vigente_21 = new ol.format.GeoJSON();
var features_Bairros2022vigente_21 = format_Bairros2022vigente_21.readFeatures(json_Bairros2022vigente_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros2022vigente_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros2022vigente_21.addFeatures(features_Bairros2022vigente_21);
var lyr_Bairros2022vigente_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros2022vigente_21,
maxResolution:84.0133984567859,
 minResolution:1.4002233076130983,

                style: style_Bairros2022vigente_21,
                popuplayertitle: "Bairros 2022 (vigente)",
                interactive: true,
                title: '<img src="styles/legend/Bairros2022vigente_21.png" /> Bairros 2022 (vigente)'
            });
var format_DistritosMunicipais2020_22 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_22 = format_DistritosMunicipais2020_22.readFeatures(json_DistritosMunicipais2020_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_22.addFeatures(features_DistritosMunicipais2020_22);
var lyr_DistritosMunicipais2020_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_22,
maxResolution:140.0223307613098,
 minResolution:2.8004466152261966,

                style: style_DistritosMunicipais2020_22,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_22.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicipais2020_23 = new ol.format.GeoJSON();
var features_LimitesMunicipais2020_23 = format_LimitesMunicipais2020_23.readFeatures(json_LimitesMunicipais2020_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipais2020_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais2020_23.addFeatures(features_LimitesMunicipais2020_23);
var lyr_LimitesMunicipais2020_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais2020_23,
maxResolution:140.0223307613098,
 minResolution:28.00446615226196,

                style: style_LimitesMunicipais2020_23,
                popuplayertitle: "Limites Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicipais2020_23.png" /> Limites Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_24 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_24 = format_LimitesMunicpiosRMS2020_24.readFeatures(json_LimitesMunicpiosRMS2020_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_24.addFeatures(features_LimitesMunicpiosRMS2020_24);
var lyr_LimitesMunicpiosRMS2020_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_24, 
                style: style_LimitesMunicpiosRMS2020_24,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_24.png" /> Limites Municípios/RMS (2020)'
            });

lyr_WazeWorld_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleLabels_2.setVisible(false);lyr_EsriBoundariesandPlaces_3.setVisible(true);lyr_Trecho_Massa_DaguaConder2010_4.setVisible(true);lyr_Massa_DaguaConder2010_5.setVisible(true);lyr_INCRAAssentRuraismaio2021_6.setVisible(true);lyr_Paradasdenibusemrodovias2022_7.setVisible(true);lyr_PassarelasemRodovias_8.setVisible(true);lyr_EquipPubEsportejan23_9.setVisible(false);lyr_EquipPubPraasParquesoutrosjan23_10.setVisible(false);lyr_EquipPubCulturaisout21_11.setVisible(false);lyr_EquipPubAssistSocialout22_12.setVisible(false);lyr_EquipEducaoout22_13.setVisible(false);lyr_EquipPubSadeout22_14.setVisible(false);lyr_ProjetosREFLORACamaari2023_15.setVisible(true);lyr_PraasdePedgiorodestaduais_16.setVisible(true);lyr_LinhaFrreaFCA_17.setVisible(true);lyr_EixosRodEstSEINFRABa2021_18.setVisible(false);lyr_LogradourosOficializadoseouCepeados_19.setVisible(true);lyr_Localidadesdiversas2023_20.setVisible(true);lyr_Bairros2022vigente_21.setVisible(false);lyr_DistritosMunicipais2020_22.setVisible(false);lyr_LimitesMunicipais2020_23.setVisible(false);lyr_LimitesMunicpiosRMS2020_24.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_GoogleSatellite_1,lyr_GoogleLabels_2,lyr_EsriBoundariesandPlaces_3,lyr_Trecho_Massa_DaguaConder2010_4,lyr_Massa_DaguaConder2010_5,lyr_INCRAAssentRuraismaio2021_6,lyr_Paradasdenibusemrodovias2022_7,lyr_PassarelasemRodovias_8,lyr_EquipPubEsportejan23_9,lyr_EquipPubPraasParquesoutrosjan23_10,lyr_EquipPubCulturaisout21_11,lyr_EquipPubAssistSocialout22_12,lyr_EquipEducaoout22_13,lyr_EquipPubSadeout22_14,lyr_ProjetosREFLORACamaari2023_15,lyr_PraasdePedgiorodestaduais_16,lyr_LinhaFrreaFCA_17,lyr_EixosRodEstSEINFRABa2021_18,lyr_LogradourosOficializadoseouCepeados_19,lyr_Localidadesdiversas2023_20,lyr_Bairros2022vigente_21,lyr_DistritosMunicipais2020_22,lyr_LimitesMunicipais2020_23,lyr_LimitesMunicpiosRMS2020_24];
lyr_Trecho_Massa_DaguaConder2010_4.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_5.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_INCRAAssentRuraismaio2021_6.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', 'origem': 'origem', });
lyr_Paradasdenibusemrodovias2022_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'via': 'via', 'bairro_loc': 'bairro_loc', 'distrito': 'distrito', 'bases': 'bases', 'org.': 'org.', });
lyr_PassarelasemRodovias_8.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_EquipPubEsportejan23_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'layer': 'layer', 'bairro': 'bairro', 'fonte': 'fonte', 'distrito': 'distrito', 'obs': 'obs', 'revisão': 'revisão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubPraasParquesoutrosjan23_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'bairro': 'bairro', 'fonte': 'fonte', 'layer_': 'layer_', 'distrito': 'distrito', 'observaç�': 'observaç�', 'revisão': 'revisão', 'estrutura': 'estrutura', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubCulturaisout21_11.set('fieldAliases', {'id': 'id', 'uso': 'uso', 'tipo': 'tipo', 'fonte': 'fonte', 'origem': 'origem', 'bairro': 'bairro', 'distrito': 'distrito', 'observaç�': 'observaç�', 'turno': 'turno', 'endereço': 'endereço', 'capacidade': 'capacidade', 'gestão': 'gestão', 'equipament': 'equipament', 'org.': 'org.', });
lyr_EquipPubAssistSocialout22_12.set('fieldAliases', {'id': 'id', 'unidade': 'unidade', 'local': 'local', 'contato': 'contato', 'obs.': 'obs.', 'abrangen.': 'abrangen.', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'org.': 'org.', });
lyr_EquipEducaoout22_13.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'cod_inep': 'cod_inep', 'nome_compl': 'nome_compl', 'distrito': 'distrito', 'numero': 'numero', 'titulo': 'titulo', 'nome_1': 'nome_1', 'bairro': 'bairro', 'x': 'x', 'y': 'y', 'nome_anter': 'nome_anter', 'salas': 'salas', 'endereco': 'endereco', 'turmas_exi': 'turmas_exi', 'gestão': 'gestão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubSadeout22_14.set('fieldAliases', {'id': 'id', 'name': 'name', 'descriptio': 'descriptio', 'tipo': 'tipo', 'fonte': 'fonte', 'bairro': 'bairro', 'distrito': 'distrito', 'cnes': 'cnes', 'n. gestão': 'n. gestão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_ProjetosREFLORACamaari2023_15.set('fieldAliases', {'Long': 'Long', 'Lat': 'Lat', 'Tipo': 'Tipo', 'Projeto': 'Projeto', });
lyr_PraasdePedgiorodestaduais_16.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_LinhaFrreaFCA_17.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_18.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_LogradourosOficializadoseouCepeados_19.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'webmap': 'webmap', 'compriment': 'compriment', });
lyr_Localidadesdiversas2023_20.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Bairros2022vigente_21.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'area_km2': 'area_km2', 'area_ha': 'area_ha', 'perimet_km': 'perimet_km', 'Est_Pop22': 'Est_Pop22', 'Densidade': 'Densidade', });
lyr_DistritosMunicipais2020_22.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicipais2020_23.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Est_P_2021': 'Est_P_2021', 'Dens_2021': 'Dens_2021', 'Pop_2010': 'Pop_2010', 'Dom_2010': 'Dom_2010', 'Dens_2010': 'Dens_2010', 'IDH-m_2010': 'IDH-m_2010', 'cg_majorit': 'cg_majorit', 'cg_major_1': 'cg_major_1', 'cg_major_2': 'cg_major_2', 'cg_major_3': 'cg_major_3', 'cb_heigh': 'cb_heigh', 'cg_major_4': 'cg_major_4', });
lyr_LimitesMunicpiosRMS2020_24.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Trecho_Massa_DaguaConder2010_4.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_5.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_INCRAAssentRuraismaio2021_6.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', 'origem': 'TextEdit', });
lyr_Paradasdenibusemrodovias2022_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'via': 'TextEdit', 'bairro_loc': 'TextEdit', 'distrito': 'TextEdit', 'bases': 'TextEdit', 'org.': 'TextEdit', });
lyr_PassarelasemRodovias_8.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_EquipPubEsportejan23_9.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'layer': 'TextEdit', 'bairro': 'TextEdit', 'fonte': 'TextEdit', 'distrito': 'TextEdit', 'obs': 'TextEdit', 'revisão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubPraasParquesoutrosjan23_10.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'bairro': 'TextEdit', 'fonte': 'TextEdit', 'layer_': 'TextEdit', 'distrito': 'TextEdit', 'observaç�': 'TextEdit', 'revisão': 'TextEdit', 'estrutura': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubCulturaisout21_11.set('fieldImages', {'id': 'TextEdit', 'uso': 'TextEdit', 'tipo': 'TextEdit', 'fonte': 'TextEdit', 'origem': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'observaç�': 'TextEdit', 'turno': 'TextEdit', 'endereço': 'TextEdit', 'capacidade': 'TextEdit', 'gestão': 'TextEdit', 'equipament': 'TextEdit', 'org.': 'TextEdit', });
lyr_EquipPubAssistSocialout22_12.set('fieldImages', {'id': 'TextEdit', 'unidade': 'TextEdit', 'local': 'TextEdit', 'contato': 'TextEdit', 'obs.': 'TextEdit', 'abrangen.': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'org.': 'TextEdit', });
lyr_EquipEducaoout22_13.set('fieldImages', {'id': 'Range', 'tipo': 'TextEdit', 'cod_inep': 'TextEdit', 'nome_compl': 'TextEdit', 'distrito': 'TextEdit', 'numero': 'TextEdit', 'titulo': 'TextEdit', 'nome_1': 'TextEdit', 'bairro': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nome_anter': 'TextEdit', 'salas': 'TextEdit', 'endereco': 'TextEdit', 'turmas_exi': 'TextEdit', 'gestão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubSadeout22_14.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'tipo': 'TextEdit', 'fonte': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'cnes': 'TextEdit', 'n. gestão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_ProjetosREFLORACamaari2023_15.set('fieldImages', {'Long': 'Range', 'Lat': 'Range', 'Tipo': 'TextEdit', 'Projeto': 'TextEdit', });
lyr_PraasdePedgiorodestaduais_16.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_LinhaFrreaFCA_17.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_18.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_19.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'webmap': 'TextEdit', 'compriment': 'TextEdit', });
lyr_Localidadesdiversas2023_20.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Bairros2022vigente_21.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'area_km2': 'TextEdit', 'area_ha': 'TextEdit', 'perimet_km': 'TextEdit', 'Est_Pop22': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_DistritosMunicipais2020_22.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicipais2020_23.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Est_P_2021': 'Range', 'Dens_2021': 'TextEdit', 'Pop_2010': 'Range', 'Dom_2010': 'Range', 'Dens_2010': 'TextEdit', 'IDH-m_2010': 'TextEdit', 'cg_majorit': 'TextEdit', 'cg_major_1': 'TextEdit', 'cg_major_2': 'TextEdit', 'cg_major_3': 'TextEdit', 'cb_heigh': 'TextEdit', 'cg_major_4': 'TextEdit', });
lyr_LimitesMunicpiosRMS2020_24.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_4.set('fieldLabels', {'FID_HID_Tr': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'ID_Trecho_': 'inline label - always visible', 'tipoTrecho': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'SHAPE_Le_2': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Massa_DaguaConder2010_5.set('fieldLabels', {'FID_HID_Ma': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'tipoMassaD': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'Shape_Le_2': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_INCRAAssentRuraismaio2021_6.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', 'origem': 'no label', });
lyr_Paradasdenibusemrodovias2022_7.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'via': 'no label', 'bairro_loc': 'no label', 'distrito': 'no label', 'bases': 'no label', 'org.': 'no label', });
lyr_PassarelasemRodovias_8.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Numero': 'no label', 'Rodovia': 'no label', 'Gestao': 'no label', 'Bairro': 'no label', 'Distrito': 'no label', });
lyr_EquipPubEsportejan23_9.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'layer': 'no label', 'bairro': 'no label', 'fonte': 'no label', 'distrito': 'no label', 'obs': 'no label', 'revisão': 'no label', 'org.': 'no label', 'Macrozona': 'no label', });
lyr_EquipPubPraasParquesoutrosjan23_10.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'bairro': 'no label', 'fonte': 'no label', 'layer_': 'no label', 'distrito': 'no label', 'observaç�': 'no label', 'revisão': 'no label', 'estrutura': 'no label', 'org.': 'no label', 'Macrozona': 'no label', });
lyr_EquipPubCulturaisout21_11.set('fieldLabels', {'id': 'no label', 'uso': 'no label', 'tipo': 'no label', 'fonte': 'no label', 'origem': 'no label', 'bairro': 'no label', 'distrito': 'no label', 'observaç�': 'no label', 'turno': 'no label', 'endereço': 'no label', 'capacidade': 'no label', 'gestão': 'no label', 'equipament': 'no label', 'org.': 'no label', });
lyr_EquipPubAssistSocialout22_12.set('fieldLabels', {'id': 'no label', 'unidade': 'no label', 'local': 'no label', 'contato': 'no label', 'obs.': 'no label', 'abrangen.': 'no label', 'tipo': 'no label', 'bairro': 'no label', 'distrito': 'no label', 'org.': 'no label', });
lyr_EquipEducaoout22_13.set('fieldLabels', {'id': 'no label', 'tipo': 'no label', 'cod_inep': 'no label', 'nome_compl': 'no label', 'distrito': 'no label', 'numero': 'no label', 'titulo': 'no label', 'nome_1': 'no label', 'bairro': 'no label', 'x': 'no label', 'y': 'no label', 'nome_anter': 'no label', 'salas': 'no label', 'endereco': 'no label', 'turmas_exi': 'no label', 'gestão': 'no label', 'org.': 'no label', 'Macrozona': 'no label', });
lyr_EquipPubSadeout22_14.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'descriptio': 'no label', 'tipo': 'no label', 'fonte': 'no label', 'bairro': 'no label', 'distrito': 'no label', 'cnes': 'no label', 'n. gestão': 'no label', 'org.': 'no label', 'Macrozona': 'no label', });
lyr_ProjetosREFLORACamaari2023_15.set('fieldLabels', {'Long': 'no label', 'Lat': 'no label', 'Tipo': 'inline label - always visible', 'Projeto': 'inline label - always visible', });
lyr_PraasdePedgiorodestaduais_16.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'bairro': 'no label', 'distrito': 'no label', 'base': 'no label', 'fonte': 'no label', });
lyr_LinhaFrreaFCA_17.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'nomeabrev': 'inline label - always visible', 'geometriaa': 'inline label - always visible', 'codtrechof': 'inline label - always visible', 'posicaorel': 'inline label - always visible', 'tipotrecho': 'inline label - always visible', 'bitola': 'inline label - always visible', 'eletrifica': 'inline label - always visible', 'nrlinhas': 'inline label - always visible', 'emarruamen': 'inline label - always visible', 'jurisdicao': 'inline label - always visible', 'administra': 'inline label - always visible', 'concession': 'inline label - always visible', 'operaciona': 'inline label - always visible', 'situacaofi': 'inline label - always visible', 'cargasupor': 'inline label - always visible', });
lyr_EixosRodEstSEINFRABa2021_18.set('fieldLabels', {'Name': 'inline label - always visible', 'fid': 'inline label - always visible', 'Codigo SRE': 'inline label - always visible', 'UF': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Local Iní': 'inline label - always visible', 'Km Inicial': 'inline label - always visible', 'Km Final': 'inline label - always visible', 'Extensão': 'inline label - always visible', 'Situação': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Tipo de Re': 'inline label - always visible', 'Descriç_1': 'inline label - always visible', 'Coincide_3': 'inline label - always visible', 'Identifica': 'inline label - always visible', 'Extensã_1': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_LogradourosOficializadoseouCepeados_19.set('fieldLabels', {'id': 'inline label - always visible', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'inline label - always visible', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'webmap': 'inline label - always visible', 'compriment': 'inline label - always visible', });
lyr_Localidadesdiversas2023_20.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_Bairros2022vigente_21.set('fieldLabels', {'id': 'inline label - always visible', 'nm_bairro': 'inline label - always visible', 'cod_bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'situação': 'inline label - always visible', 'bairros': 'inline label - always visible', 'rotulos': 'inline label - always visible', 'area_km2': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'perimet_km': 'inline label - always visible', 'Est_Pop22': 'inline label - always visible', 'Densidade': 'inline label - always visible', });
lyr_DistritosMunicipais2020_22.set('fieldLabels', {'id': 'inline label - always visible', 'cd_mun': 'inline label - always visible', 'cd_dist': 'inline label - always visible', 'nm_dist': 'inline label - always visible', 'Perímetro': 'inline label - always visible', 'Área': 'inline label - always visible', 'percentual': 'inline label - always visible', 'cg_majorit': 'inline label - always visible', 'cb_heigh': 'inline label - always visible', });
lyr_LimitesMunicipais2020_23.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'Est_P_2021': 'inline label - always visible', 'Dens_2021': 'inline label - always visible', 'Pop_2010': 'inline label - always visible', 'Dom_2010': 'inline label - always visible', 'Dens_2010': 'inline label - always visible', 'IDH-m_2010': 'inline label - always visible', 'cg_majorit': 'inline label - always visible', 'cg_major_1': 'inline label - always visible', 'cg_major_2': 'inline label - always visible', 'cg_major_3': 'inline label - always visible', 'cb_heigh': 'inline label - always visible', 'cg_major_4': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_24.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});