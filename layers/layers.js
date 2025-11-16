var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITopo_1 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WazeWorld_2 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTrafficonline_5 = new ol.layer.Tile({
            'title': 'Google Traffic online',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.28004466152261964,

            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_6 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.14002233076130982,

            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_7 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RiosPerenesSEIBa25k_8 = new ol.format.GeoJSON();
var features_RiosPerenesSEIBa25k_8 = format_RiosPerenesSEIBa25k_8.readFeatures(json_RiosPerenesSEIBa25k_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPerenesSEIBa25k_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPerenesSEIBa25k_8.addFeatures(features_RiosPerenesSEIBa25k_8);
var lyr_RiosPerenesSEIBa25k_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPerenesSEIBa25k_8,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_RiosPerenesSEIBa25k_8,
                popuplayertitle: 'Rios Perenes (SEI-Ba, 25k)',
                interactive: true,
                title: '<img src="styles/legend/RiosPerenesSEIBa25k_8.png" /> Rios Perenes (SEI-Ba, 25k)'
            });
var format_reasmidasVeredasPMSBCamaari_9 = new ol.format.GeoJSON();
var features_reasmidasVeredasPMSBCamaari_9 = format_reasmidasVeredasPMSBCamaari_9.readFeatures(json_reasmidasVeredasPMSBCamaari_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasVeredasPMSBCamaari_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasVeredasPMSBCamaari_9.addFeatures(features_reasmidasVeredasPMSBCamaari_9);
var lyr_reasmidasVeredasPMSBCamaari_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasmidasVeredasPMSBCamaari_9,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_reasmidasVeredasPMSBCamaari_9,
                popuplayertitle: 'Áreas Úmidas/Veredas (PMSB - Camaçari)',
                interactive: false,
                title: '<img src="styles/legend/reasmidasVeredasPMSBCamaari_9.png" /> Áreas Úmidas/Veredas (PMSB - Camaçari)'
            });
var format_Trecho_Massa_DaguaConder2010_10 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_10 = format_Trecho_Massa_DaguaConder2010_10.readFeatures(json_Trecho_Massa_DaguaConder2010_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_10.addFeatures(features_Trecho_Massa_DaguaConder2010_10);
var lyr_Trecho_Massa_DaguaConder2010_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_10,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_Trecho_Massa_DaguaConder2010_10,
                popuplayertitle: 'Trecho_Massa_Dagua (Conder 2010)',
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_10.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_11 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_11 = format_Massa_DaguaConder2010_11.readFeatures(json_Massa_DaguaConder2010_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_11.addFeatures(features_Massa_DaguaConder2010_11);
var lyr_Massa_DaguaConder2010_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_11,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_Massa_DaguaConder2010_11,
                popuplayertitle: 'Massa_Dagua (Conder 2010)',
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_11.png" /> Massa_Dagua (Conder 2010)'
            });
var format_SIGEFPrivado_CamacariMar2025_12 = new ol.format.GeoJSON();
var features_SIGEFPrivado_CamacariMar2025_12 = format_SIGEFPrivado_CamacariMar2025_12.readFeatures(json_SIGEFPrivado_CamacariMar2025_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIGEFPrivado_CamacariMar2025_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIGEFPrivado_CamacariMar2025_12.addFeatures(features_SIGEFPrivado_CamacariMar2025_12);
var lyr_SIGEFPrivado_CamacariMar2025_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIGEFPrivado_CamacariMar2025_12,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_SIGEFPrivado_CamacariMar2025_12,
                popuplayertitle: 'SIGEF Privado_Camacari (Mar./2025)',
                interactive: true,
                title: '<img src="styles/legend/SIGEFPrivado_CamacariMar2025_12.png" /> SIGEF Privado_Camacari (Mar./2025)'
            });
var format_OutrosEquipInstitucionaiseComerciais2025_13 = new ol.format.GeoJSON();
var features_OutrosEquipInstitucionaiseComerciais2025_13 = format_OutrosEquipInstitucionaiseComerciais2025_13.readFeatures(json_OutrosEquipInstitucionaiseComerciais2025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutrosEquipInstitucionaiseComerciais2025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutrosEquipInstitucionaiseComerciais2025_13.addFeatures(features_OutrosEquipInstitucionaiseComerciais2025_13);
var lyr_OutrosEquipInstitucionaiseComerciais2025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutrosEquipInstitucionaiseComerciais2025_13,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_OutrosEquipInstitucionaiseComerciais2025_13,
                popuplayertitle: 'Outros Equip. Institucionais e Comerciais (2025)',
                interactive: true,
                title: '<img src="styles/legend/OutrosEquipInstitucionaiseComerciais2025_13.png" /> Outros Equip. Institucionais e Comerciais (2025)'
            });
var format_EquipPubEsportejan23_14 = new ol.format.GeoJSON();
var features_EquipPubEsportejan23_14 = format_EquipPubEsportejan23_14.readFeatures(json_EquipPubEsportejan23_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubEsportejan23_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubEsportejan23_14.addFeatures(features_EquipPubEsportejan23_14);
var lyr_EquipPubEsportejan23_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubEsportejan23_14,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubEsportejan23_14,
                popuplayertitle: 'Equip. Pub. Esporte (jan/23)',
                interactive: true,
                title: '<img src="styles/legend/EquipPubEsportejan23_14.png" /> Equip. Pub. Esporte (jan/23)'
            });
var format_EquipPubPraasParquesoutrosjan23_15 = new ol.format.GeoJSON();
var features_EquipPubPraasParquesoutrosjan23_15 = format_EquipPubPraasParquesoutrosjan23_15.readFeatures(json_EquipPubPraasParquesoutrosjan23_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubPraasParquesoutrosjan23_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubPraasParquesoutrosjan23_15.addFeatures(features_EquipPubPraasParquesoutrosjan23_15);
var lyr_EquipPubPraasParquesoutrosjan23_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubPraasParquesoutrosjan23_15,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubPraasParquesoutrosjan23_15,
                popuplayertitle: 'Equip. Pub. Praças/Parques/outros (jan/23)',
                interactive: true,
                title: '<img src="styles/legend/EquipPubPraasParquesoutrosjan23_15.png" /> Equip. Pub. Praças/Parques/outros (jan/23)'
            });
var format_EquipPubCulturaisout21_16 = new ol.format.GeoJSON();
var features_EquipPubCulturaisout21_16 = format_EquipPubCulturaisout21_16.readFeatures(json_EquipPubCulturaisout21_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubCulturaisout21_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubCulturaisout21_16.addFeatures(features_EquipPubCulturaisout21_16);
var lyr_EquipPubCulturaisout21_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubCulturaisout21_16,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubCulturaisout21_16,
                popuplayertitle: 'Equip. Pub. Culturais (out/21)',
                interactive: true,
                title: '<img src="styles/legend/EquipPubCulturaisout21_16.png" /> Equip. Pub. Culturais (out/21)'
            });
var format_EquipPubAssistSocialout23_17 = new ol.format.GeoJSON();
var features_EquipPubAssistSocialout23_17 = format_EquipPubAssistSocialout23_17.readFeatures(json_EquipPubAssistSocialout23_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubAssistSocialout23_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubAssistSocialout23_17.addFeatures(features_EquipPubAssistSocialout23_17);
var lyr_EquipPubAssistSocialout23_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubAssistSocialout23_17,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_EquipPubAssistSocialout23_17,
                popuplayertitle: 'Equip. Pub. Assist Social (out/23)',
                interactive: true,
                title: '<img src="styles/legend/EquipPubAssistSocialout23_17.png" /> Equip. Pub. Assist Social (out/23)'
            });
var format_EquipEducaoout23_18 = new ol.format.GeoJSON();
var features_EquipEducaoout23_18 = format_EquipEducaoout23_18.readFeatures(json_EquipEducaoout23_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipEducaoout23_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipEducaoout23_18.addFeatures(features_EquipEducaoout23_18);
var lyr_EquipEducaoout23_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipEducaoout23_18,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_EquipEducaoout23_18,
                popuplayertitle: 'Equip. Educação (out/23)',
                interactive: true,
                title: '<img src="styles/legend/EquipEducaoout23_18.png" /> Equip. Educação (out/23)'
            });
var format_EquipPubSadeset2025_19 = new ol.format.GeoJSON();
var features_EquipPubSadeset2025_19 = format_EquipPubSadeset2025_19.readFeatures(json_EquipPubSadeset2025_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipPubSadeset2025_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipPubSadeset2025_19.addFeatures(features_EquipPubSadeset2025_19);
var lyr_EquipPubSadeset2025_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipPubSadeset2025_19,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_EquipPubSadeset2025_19,
                popuplayertitle: 'Equip. Pub. Saúde (set./2025)',
                interactive: true,
                title: '<img src="styles/legend/EquipPubSadeset2025_19.png" /> Equip. Pub. Saúde (set./2025)'
            });
var format_ProjetosREFLORACamaari2023_20 = new ol.format.GeoJSON();
var features_ProjetosREFLORACamaari2023_20 = format_ProjetosREFLORACamaari2023_20.readFeatures(json_ProjetosREFLORACamaari2023_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetosREFLORACamaari2023_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetosREFLORACamaari2023_20.addFeatures(features_ProjetosREFLORACamaari2023_20);
var lyr_ProjetosREFLORACamaari2023_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetosREFLORACamaari2023_20,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_ProjetosREFLORACamaari2023_20,
                popuplayertitle: 'Projetos REFLORA Camaçari (2023)',
                interactive: true,
                title: '<img src="styles/legend/ProjetosREFLORACamaari2023_20.png" /> Projetos REFLORA Camaçari (2023)'
            });
var format_PraasdePedgiorodestaduais_21 = new ol.format.GeoJSON();
var features_PraasdePedgiorodestaduais_21 = format_PraasdePedgiorodestaduais_21.readFeatures(json_PraasdePedgiorodestaduais_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PraasdePedgiorodestaduais_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PraasdePedgiorodestaduais_21.addFeatures(features_PraasdePedgiorodestaduais_21);
var lyr_PraasdePedgiorodestaduais_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PraasdePedgiorodestaduais_21,
maxResolution:56.00893230452392,
 minResolution:0.28004466152261964,

                style: style_PraasdePedgiorodestaduais_21,
                popuplayertitle: 'Praças de Pedágio (rod. estaduais)',
                interactive: true,
                title: '<img src="styles/legend/PraasdePedgiorodestaduais_21.png" /> Praças de Pedágio (rod. estaduais)'
            });
var format_LogradourosHierarquizao_22 = new ol.format.GeoJSON();
var features_LogradourosHierarquizao_22 = format_LogradourosHierarquizao_22.readFeatures(json_LogradourosHierarquizao_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosHierarquizao_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosHierarquizao_22.addFeatures(features_LogradourosHierarquizao_22);
var lyr_LogradourosHierarquizao_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosHierarquizao_22,
maxResolution:11.201786460904787,
 minResolution:0.14002233076130982,

                style: style_LogradourosHierarquizao_22,
                popuplayertitle: 'Logradouros Hierarquização',
                interactive: true,
    title: 'Logradouros Hierarquização<br />\
    <img src="styles/legend/LogradourosHierarquizao_22_0.png" /> Rodovias / Vias Expressas<br />\
    <img src="styles/legend/LogradourosHierarquizao_22_1.png" /> Sist. Viário Urb. Principal (Arteriais)<br />\
    <img src="styles/legend/LogradourosHierarquizao_22_2.png" /> Sist. Viário Urb. Complementar (Coletoras)<br />\
    <img src="styles/legend/LogradourosHierarquizao_22_3.png" /> Outras vias urbanas (Vias Locais)<br />\
    <img src="styles/legend/LogradourosHierarquizao_22_4.png" /> Estradas e vias rurais<br />' });
var format_LogradourosOficializadoseouCepeados_23 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_23 = format_LogradourosOficializadoseouCepeados_23.readFeatures(json_LogradourosOficializadoseouCepeados_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_23.addFeatures(features_LogradourosOficializadoseouCepeados_23);
var lyr_LogradourosOficializadoseouCepeados_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_23,
maxResolution:11.201786460904787,
 minResolution:0.14002233076130982,

                style: style_LogradourosOficializadoseouCepeados_23,
                popuplayertitle: 'Logradouros Oficializados e/ou Cepeados',
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_23.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_LinhaFrreaFCA_24 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_24 = format_LinhaFrreaFCA_24.readFeatures(json_LinhaFrreaFCA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_24.addFeatures(features_LinhaFrreaFCA_24);
var lyr_LinhaFrreaFCA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_24,
maxResolution:70.0111653806549,
 minResolution:0.28004466152261964,

                style: style_LinhaFrreaFCA_24,
                popuplayertitle: 'Linha Férrea (FCA)',
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_24.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_25 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_25 = format_EixosRodEstSEINFRABa2021_25.readFeatures(json_EixosRodEstSEINFRABa2021_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_25.addFeatures(features_EixosRodEstSEINFRABa2021_25);
var lyr_EixosRodEstSEINFRABa2021_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_25,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_EixosRodEstSEINFRABa2021_25,
                popuplayertitle: 'Eixos Rod. Est. (SEINFRA-Ba/2021)',
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_25.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PassarelasemRodovias_26 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_26 = format_PassarelasemRodovias_26.readFeatures(json_PassarelasemRodovias_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_26.addFeatures(features_PassarelasemRodovias_26);
var lyr_PassarelasemRodovias_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_26,
maxResolution:42.00669922839295,
 minResolution:0.28004466152261964,

                style: style_PassarelasemRodovias_26,
                popuplayertitle: 'Passarelas em Rodovias',
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_26.png" /> Passarelas em Rodovias'
            });
var format_Paradasdenibusemrodovias2022_27 = new ol.format.GeoJSON();
var features_Paradasdenibusemrodovias2022_27 = format_Paradasdenibusemrodovias2022_27.readFeatures(json_Paradasdenibusemrodovias2022_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasdenibusemrodovias2022_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasdenibusemrodovias2022_27.addFeatures(features_Paradasdenibusemrodovias2022_27);
var lyr_Paradasdenibusemrodovias2022_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasdenibusemrodovias2022_27,
maxResolution:21.003349614196473,
 minResolution:0.28004466152261964,

                style: style_Paradasdenibusemrodovias2022_27,
                popuplayertitle: 'Paradas de ônibus em rodovias (2022)',
                interactive: false,
                title: '<img src="styles/legend/Paradasdenibusemrodovias2022_27.png" /> Paradas de ônibus em rodovias (2022)'
            });
var format_Localidadesdiversas2023_28 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_28 = format_Localidadesdiversas2023_28.readFeatures(json_Localidadesdiversas2023_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_28.addFeatures(features_Localidadesdiversas2023_28);
cluster_Localidadesdiversas2023_28 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Localidadesdiversas2023_28
});
var lyr_Localidadesdiversas2023_28 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Localidadesdiversas2023_28,
maxResolution:21.003349614196473,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_28,
                popuplayertitle: 'Localidades diversas (2023)',
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_28.png" /> Localidades diversas (2023)'
            });
var format_MacrozonaIndustrialPDDUS2023_29 = new ol.format.GeoJSON();
var features_MacrozonaIndustrialPDDUS2023_29 = format_MacrozonaIndustrialPDDUS2023_29.readFeatures(json_MacrozonaIndustrialPDDUS2023_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MacrozonaIndustrialPDDUS2023_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonaIndustrialPDDUS2023_29.addFeatures(features_MacrozonaIndustrialPDDUS2023_29);
var lyr_MacrozonaIndustrialPDDUS2023_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonaIndustrialPDDUS2023_29,
maxResolution:84.0133984567859,
 minResolution:0.7001116538065492,

                style: style_MacrozonaIndustrialPDDUS2023_29,
                popuplayertitle: 'Macrozona Industrial - PDDU-S 2023',
                interactive: true,
                title: '<img src="styles/legend/MacrozonaIndustrialPDDUS2023_29.png" /> Macrozona Industrial - PDDU-S 2023'
            });
var format_MacrozonaUrbana_SEDE_30 = new ol.format.GeoJSON();
var features_MacrozonaUrbana_SEDE_30 = format_MacrozonaUrbana_SEDE_30.readFeatures(json_MacrozonaUrbana_SEDE_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MacrozonaUrbana_SEDE_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonaUrbana_SEDE_30.addFeatures(features_MacrozonaUrbana_SEDE_30);
var lyr_MacrozonaUrbana_SEDE_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonaUrbana_SEDE_30,
maxResolution:84.0133984567859,
 minResolution:0.7001116538065492,

                style: style_MacrozonaUrbana_SEDE_30,
                popuplayertitle: 'Macrozona Urbana_SEDE',
                interactive: true,
                title: '<img src="styles/legend/MacrozonaUrbana_SEDE_30.png" /> Macrozona Urbana_SEDE'
            });
var format_Bairros_Enderecamento_2022_CNEFE_31 = new ol.format.GeoJSON();
var features_Bairros_Enderecamento_2022_CNEFE_31 = format_Bairros_Enderecamento_2022_CNEFE_31.readFeatures(json_Bairros_Enderecamento_2022_CNEFE_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros_Enderecamento_2022_CNEFE_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_Enderecamento_2022_CNEFE_31.addFeatures(features_Bairros_Enderecamento_2022_CNEFE_31);
var lyr_Bairros_Enderecamento_2022_CNEFE_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_Enderecamento_2022_CNEFE_31,
maxResolution:84.0133984567859,
 minResolution:1.4002233076130983,

                style: style_Bairros_Enderecamento_2022_CNEFE_31,
                popuplayertitle: 'Bairros_Enderecamento_2022_CNEFE',
                interactive: true,
                title: '<img src="styles/legend/Bairros_Enderecamento_2022_CNEFE_31.png" /> Bairros_Enderecamento_2022_CNEFE'
            });
var format_DistritosMunicipais2020_32 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_32 = format_DistritosMunicipais2020_32.readFeatures(json_DistritosMunicipais2020_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_32.addFeatures(features_DistritosMunicipais2020_32);
var lyr_DistritosMunicipais2020_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_32,
maxResolution:140.0223307613098,
 minResolution:2.8004466152261966,

                style: style_DistritosMunicipais2020_32,
                popuplayertitle: 'Distritos Municipais (2020)',
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_32.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_33 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_33 = format_LimitesMunicpiosRMS2020_33.readFeatures(json_LimitesMunicpiosRMS2020_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_33.addFeatures(features_LimitesMunicpiosRMS2020_33);
var lyr_LimitesMunicpiosRMS2020_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_33, 
                style: style_LimitesMunicpiosRMS2020_33,
                popuplayertitle: 'Limites Municípios/RMS (2020)',
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_33.png" /> Limites Municípios/RMS (2020)'
            });

lyr_GoogleTerrain_0.setVisible(false);lyr_ESRITopo_1.setVisible(false);lyr_WazeWorld_2.setVisible(false);lyr_OSMStandard_3.setVisible(true);lyr_GoogleSatellite_4.setVisible(true);lyr_GoogleTrafficonline_5.setVisible(false);lyr_GoogleLabels_6.setVisible(false);lyr_EsriBoundariesandPlaces_7.setVisible(true);lyr_RiosPerenesSEIBa25k_8.setVisible(false);lyr_reasmidasVeredasPMSBCamaari_9.setVisible(false);lyr_Trecho_Massa_DaguaConder2010_10.setVisible(true);lyr_Massa_DaguaConder2010_11.setVisible(true);lyr_SIGEFPrivado_CamacariMar2025_12.setVisible(false);lyr_OutrosEquipInstitucionaiseComerciais2025_13.setVisible(false);lyr_EquipPubEsportejan23_14.setVisible(false);lyr_EquipPubPraasParquesoutrosjan23_15.setVisible(false);lyr_EquipPubCulturaisout21_16.setVisible(false);lyr_EquipPubAssistSocialout23_17.setVisible(false);lyr_EquipEducaoout23_18.setVisible(false);lyr_EquipPubSadeset2025_19.setVisible(false);lyr_ProjetosREFLORACamaari2023_20.setVisible(true);lyr_PraasdePedgiorodestaduais_21.setVisible(true);lyr_LogradourosHierarquizao_22.setVisible(false);lyr_LogradourosOficializadoseouCepeados_23.setVisible(true);lyr_LinhaFrreaFCA_24.setVisible(true);lyr_EixosRodEstSEINFRABa2021_25.setVisible(false);lyr_PassarelasemRodovias_26.setVisible(true);lyr_Paradasdenibusemrodovias2022_27.setVisible(true);lyr_Localidadesdiversas2023_28.setVisible(true);lyr_MacrozonaIndustrialPDDUS2023_29.setVisible(false);lyr_MacrozonaUrbana_SEDE_30.setVisible(false);lyr_Bairros_Enderecamento_2022_CNEFE_31.setVisible(false);lyr_DistritosMunicipais2020_32.setVisible(false);lyr_LimitesMunicpiosRMS2020_33.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_ESRITopo_1,lyr_WazeWorld_2,lyr_OSMStandard_3,lyr_GoogleSatellite_4,lyr_GoogleTrafficonline_5,lyr_GoogleLabels_6,lyr_EsriBoundariesandPlaces_7,lyr_RiosPerenesSEIBa25k_8,lyr_reasmidasVeredasPMSBCamaari_9,lyr_Trecho_Massa_DaguaConder2010_10,lyr_Massa_DaguaConder2010_11,lyr_SIGEFPrivado_CamacariMar2025_12,lyr_OutrosEquipInstitucionaiseComerciais2025_13,lyr_EquipPubEsportejan23_14,lyr_EquipPubPraasParquesoutrosjan23_15,lyr_EquipPubCulturaisout21_16,lyr_EquipPubAssistSocialout23_17,lyr_EquipEducaoout23_18,lyr_EquipPubSadeset2025_19,lyr_ProjetosREFLORACamaari2023_20,lyr_PraasdePedgiorodestaduais_21,lyr_LogradourosHierarquizao_22,lyr_LogradourosOficializadoseouCepeados_23,lyr_LinhaFrreaFCA_24,lyr_EixosRodEstSEINFRABa2021_25,lyr_PassarelasemRodovias_26,lyr_Paradasdenibusemrodovias2022_27,lyr_Localidadesdiversas2023_28,lyr_MacrozonaIndustrialPDDUS2023_29,lyr_MacrozonaUrbana_SEDE_30,lyr_Bairros_Enderecamento_2022_CNEFE_31,lyr_DistritosMunicipais2020_32,lyr_LimitesMunicpiosRMS2020_33];
lyr_RiosPerenesSEIBa25k_8.set('fieldAliases', {'Id': 'Id', 'nome': 'nome', 'regime': 'regime', });
lyr_reasmidasVeredasPMSBCamaari_9.set('fieldAliases', {'Id': 'Id', 'Descricao': 'Descricao', 'Coef__Defl': 'Coef__Defl', 'Categorias': 'Categorias', 'AREA': 'AREA', });
lyr_Trecho_Massa_DaguaConder2010_10.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_11.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_SIGEFPrivado_CamacariMar2025_12.set('fieldAliases', {'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', 'X': 'X', 'Y': 'Y', });
lyr_OutrosEquipInstitucionaiseComerciais2025_13.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'setor': 'setor', 'bairro': 'bairro', 'distrito': 'distrito', 'situação': 'situação', 'gestão': 'gestão', 'observaç�': 'observaç�', 'fonte': 'fonte', 'revisão': 'revisão', });
lyr_EquipPubEsportejan23_14.set('fieldAliases', {'id': 'id', 'name': 'name', 'layer': 'layer', 'bairro': 'bairro', 'fonte': 'fonte', 'distrito': 'distrito', 'obs': 'obs', 'revisão': 'revisão', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubPraasParquesoutrosjan23_15.set('fieldAliases', {'id': 'id', 'name': 'name', 'bairro': 'bairro', 'fonte': 'fonte', 'layer_': 'layer_', 'distrito': 'distrito', 'observaç�': 'observaç�', 'revisão': 'revisão', 'estrutura': 'estrutura', 'org.': 'org.', 'Macrozona': 'Macrozona', });
lyr_EquipPubCulturaisout21_16.set('fieldAliases', {'id': 'id', 'uso': 'uso', 'tipo': 'tipo', 'fonte': 'fonte', 'origem': 'origem', 'bairro': 'bairro', 'distrito': 'distrito', 'observaç�': 'observaç�', 'turno': 'turno', 'endereço': 'endereço', 'capacidade': 'capacidade', 'gestão': 'gestão', 'equipament': 'equipament', 'org.': 'org.', });
lyr_EquipPubAssistSocialout23_17.set('fieldAliases', {'id': 'id', 'unidade': 'unidade', 'local': 'local', 'contato': 'contato', 'obs.': 'obs.', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'org.': 'org.', 'Abrangenci': 'Abrangenci', 'link': 'link', });
lyr_EquipEducaoout23_18.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'cod_inep': 'cod_inep', 'nome_compl': 'nome_compl', 'distrito': 'distrito', 'numero': 'numero', 'bairro': 'bairro', 'nome_anter': 'nome_anter', 'salas': 'salas', 'endereco': 'endereco', 'turmas_exi': 'turmas_exi', 'gestão': 'gestão', 'org.': 'org.', 'LINK': 'LINK', 'Obs.': 'Obs.', });
lyr_EquipPubSadeset2025_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Instalacao': 'Instalacao', 'fonte': 'fonte', 'bairro': 'bairro', 'distrito': 'distrito', 'gestao': 'gestao', 'Org.': 'Org.', });
lyr_ProjetosREFLORACamaari2023_20.set('fieldAliases', {'Long': 'Long', 'Lat': 'Lat', 'Tipo': 'Tipo', 'Projeto': 'Projeto', });
lyr_PraasdePedgiorodestaduais_21.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_LogradourosHierarquizao_22.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'catalogo_': 'catalogo_', 'webmap': 'webmap', 'class.2': 'class.2', 'compriment': 'compriment', 'MAPA': 'MAPA', });
lyr_LogradourosOficializadoseouCepeados_23.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'catalogo_': 'catalogo_', 'webmap': 'webmap', 'class.2': 'class.2', 'compriment': 'compriment', 'MAPA': 'MAPA', });
lyr_LinhaFrreaFCA_24.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_25.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PassarelasemRodovias_26.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_Paradasdenibusemrodovias2022_27.set('fieldAliases', {'id': 'id', 'name': 'name', 'via': 'via', 'bairro_loc': 'bairro_loc', 'distrito': 'distrito', 'bases': 'bases', 'org.': 'org.', });
lyr_Localidadesdiversas2023_28.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_MacrozonaIndustrialPDDUS2023_29.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', 'id': 'id', 'perímetro_ellip_m': 'perímetro_ellip_m', 'área_ellip_m²': 'área_ellip_m²', 'perímetro_ellip_Km': 'perímetro_ellip_Km', 'área_ellip_Km²': 'área_ellip_Km²', });
lyr_MacrozonaUrbana_SEDE_30.set('fieldAliases', {'Id': 'Id', 'layer': 'layer', 'perímetro': 'perímetro', 'área_elli': 'área_elli', 'area_km2': 'area_km2', 'perimetro': 'perimetro', 'percentual': 'percentual', });
lyr_Bairros_Enderecamento_2022_CNEFE_31.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'CNEFE 2022': 'CNEFE 2022', 'Hab_Dom': 'Hab_Dom', 'PopEst_22': 'PopEst_22', 'area_Ha': 'area_Ha', 'Perim_km': 'Perim_km', 'Pop_est_24': 'Pop_est_24', 'area_km2': 'area_km2', 'Dens_km2': 'Dens_km2', 'Dens_Ha': 'Dens_Ha', 'hab_dom_1': 'hab_dom_1', });
lyr_DistritosMunicipais2020_32.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicpiosRMS2020_33.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RiosPerenesSEIBa25k_8.set('fieldImages', {'Id': 'TextEdit', 'nome': 'TextEdit', 'regime': 'TextEdit', });
lyr_reasmidasVeredasPMSBCamaari_9.set('fieldImages', {'Id': 'Range', 'Descricao': 'TextEdit', 'Coef__Defl': 'TextEdit', 'Categorias': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_10.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_11.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SIGEFPrivado_CamacariMar2025_12.set('fieldImages', {'parcela_co': '', 'rt': '', 'art': '', 'situacao_i': '', 'codigo_imo': '', 'data_submi': '', 'data_aprov': '', 'status': '', 'nome_area': '', 'registro_m': '', 'registro_d': '', 'municipio_': '', 'uf_id': '', 'X': '', 'Y': '', });
lyr_OutrosEquipInstitucionaiseComerciais2025_13.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'setor': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'gestão': 'TextEdit', 'observaç�': 'TextEdit', 'fonte': 'TextEdit', 'revisão': 'TextEdit', });
lyr_EquipPubEsportejan23_14.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'layer': 'TextEdit', 'bairro': 'TextEdit', 'fonte': 'TextEdit', 'distrito': 'TextEdit', 'obs': 'TextEdit', 'revisão': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubPraasParquesoutrosjan23_15.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'bairro': 'TextEdit', 'fonte': 'TextEdit', 'layer_': 'TextEdit', 'distrito': 'TextEdit', 'observaç�': 'TextEdit', 'revisão': 'TextEdit', 'estrutura': 'TextEdit', 'org.': 'TextEdit', 'Macrozona': 'TextEdit', });
lyr_EquipPubCulturaisout21_16.set('fieldImages', {'id': 'TextEdit', 'uso': 'TextEdit', 'tipo': 'TextEdit', 'fonte': 'TextEdit', 'origem': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'observaç�': 'TextEdit', 'turno': 'TextEdit', 'endereço': 'TextEdit', 'capacidade': 'TextEdit', 'gestão': 'TextEdit', 'equipament': 'TextEdit', 'org.': 'TextEdit', });
lyr_EquipPubAssistSocialout23_17.set('fieldImages', {'id': 'TextEdit', 'unidade': 'TextEdit', 'local': 'TextEdit', 'contato': 'TextEdit', 'obs.': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'org.': 'TextEdit', 'Abrangenci': '', 'link': '', });
lyr_EquipEducaoout23_18.set('fieldImages', {'id': 'Range', 'tipo': 'TextEdit', 'cod_inep': 'TextEdit', 'nome_compl': 'TextEdit', 'distrito': 'TextEdit', 'numero': 'TextEdit', 'bairro': 'TextEdit', 'nome_anter': 'TextEdit', 'salas': 'TextEdit', 'endereco': 'TextEdit', 'turmas_exi': 'TextEdit', 'gestão': 'TextEdit', 'org.': 'TextEdit', 'LINK': '', 'Obs.': '', });
lyr_EquipPubSadeset2025_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Instalacao': 'TextEdit', 'fonte': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'gestao': 'TextEdit', 'Org.': 'TextEdit', });
lyr_ProjetosREFLORACamaari2023_20.set('fieldImages', {'Long': 'Range', 'Lat': 'Range', 'Tipo': 'TextEdit', 'Projeto': 'TextEdit', });
lyr_PraasdePedgiorodestaduais_21.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_LogradourosHierarquizao_22.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'catalogo_': '', 'webmap': 'TextEdit', 'class.2': '', 'compriment': 'TextEdit', 'MAPA': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_23.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'catalogo_': '', 'webmap': 'TextEdit', 'class.2': '', 'compriment': 'TextEdit', 'MAPA': '', });
lyr_LinhaFrreaFCA_24.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_25.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PassarelasemRodovias_26.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_Paradasdenibusemrodovias2022_27.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'via': 'TextEdit', 'bairro_loc': 'TextEdit', 'distrito': 'TextEdit', 'bases': 'TextEdit', 'org.': 'TextEdit', });
lyr_Localidadesdiversas2023_28.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_MacrozonaIndustrialPDDUS2023_29.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', 'id': 'Range', 'perímetro_ellip_m': 'TextEdit', 'área_ellip_m²': 'TextEdit', 'perímetro_ellip_Km': 'TextEdit', 'área_ellip_Km²': 'TextEdit', });
lyr_MacrozonaUrbana_SEDE_30.set('fieldImages', {'Id': 'TextEdit', 'layer': 'TextEdit', 'perímetro': 'TextEdit', 'área_elli': 'TextEdit', 'area_km2': 'TextEdit', 'perimetro': 'TextEdit', 'percentual': 'TextEdit', });
lyr_Bairros_Enderecamento_2022_CNEFE_31.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'CNEFE 2022': '', 'Hab_Dom': '', 'PopEst_22': '', 'area_Ha': '', 'Perim_km': '', 'Pop_est_24': '', 'area_km2': '', 'Dens_km2': '', 'Dens_Ha': '', 'hab_dom_1': '', });
lyr_DistritosMunicipais2020_32.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicpiosRMS2020_33.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_RiosPerenesSEIBa25k_8.set('fieldLabels', {'Id': 'inline label - always visible', 'nome': 'inline label - always visible', 'regime': 'inline label - always visible', });
lyr_reasmidasVeredasPMSBCamaari_9.set('fieldLabels', {'Id': '', 'Descricao': '', 'Coef__Defl': '', 'Categorias': '', 'AREA': '', });
lyr_Trecho_Massa_DaguaConder2010_10.set('fieldLabels', {'FID_HID_Tr': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'ID_Trecho_': 'inline label - always visible', 'tipoTrecho': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'SHAPE_Le_2': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Massa_DaguaConder2010_11.set('fieldLabels', {'FID_HID_Ma': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'tipoMassaD': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'Shape_Le_2': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_SIGEFPrivado_CamacariMar2025_12.set('fieldLabels', {'parcela_co': 'inline label - always visible', 'rt': 'inline label - always visible', 'art': 'inline label - always visible', 'situacao_i': 'inline label - always visible', 'codigo_imo': 'inline label - always visible', 'data_submi': 'inline label - always visible', 'data_aprov': 'inline label - always visible', 'status': 'inline label - always visible', 'nome_area': 'inline label - always visible', 'registro_m': 'inline label - always visible', 'registro_d': 'inline label - always visible', 'municipio_': 'inline label - always visible', 'uf_id': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_OutrosEquipInstitucionaiseComerciais2025_13.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'setor': 'hidden field', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'situação': 'hidden field', 'gestão': 'inline label - always visible', 'observaç�': 'hidden field', 'fonte': 'hidden field', 'revisão': 'hidden field', });
lyr_EquipPubEsportejan23_14.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'layer': 'inline label - always visible', 'bairro': 'hidden field', 'fonte': 'hidden field', 'distrito': 'hidden field', 'obs': 'hidden field', 'revisão': 'hidden field', 'org.': 'hidden field', 'Macrozona': 'hidden field', });
lyr_EquipPubPraasParquesoutrosjan23_15.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'bairro': 'hidden field', 'fonte': 'hidden field', 'layer_': 'inline label - always visible', 'distrito': 'hidden field', 'observaç�': 'hidden field', 'revisão': 'hidden field', 'estrutura': 'hidden field', 'org.': 'hidden field', 'Macrozona': 'hidden field', });
lyr_EquipPubCulturaisout21_16.set('fieldLabels', {'id': 'inline label - always visible', 'uso': 'inline label - always visible', 'tipo': 'inline label - always visible', 'fonte': 'hidden field', 'origem': 'hidden field', 'bairro': 'hidden field', 'distrito': 'hidden field', 'observaç�': 'hidden field', 'turno': 'hidden field', 'endereço': 'hidden field', 'capacidade': 'hidden field', 'gestão': 'inline label - always visible', 'equipament': 'inline label - always visible', 'org.': 'hidden field', });
lyr_EquipPubAssistSocialout23_17.set('fieldLabels', {'id': 'hidden field', 'unidade': 'inline label - always visible', 'local': 'inline label - always visible', 'contato': 'hidden field', 'obs.': 'hidden field', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'org.': 'inline label - always visible', 'Abrangenci': 'inline label - always visible', 'link': 'inline label - always visible', });
lyr_EquipEducaoout23_18.set('fieldLabels', {'id': 'inline label - always visible', 'tipo': 'inline label - always visible', 'cod_inep': 'hidden field', 'nome_compl': 'inline label - always visible', 'distrito': 'hidden field', 'numero': 'hidden field', 'bairro': 'hidden field', 'nome_anter': 'hidden field', 'salas': 'hidden field', 'endereco': 'hidden field', 'turmas_exi': 'hidden field', 'gestão': 'inline label - always visible', 'org.': 'hidden field', 'LINK': 'hidden field', 'Obs.': 'hidden field', });
lyr_EquipPubSadeset2025_19.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'Instalacao': 'inline label - always visible', 'fonte': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'gestao': 'inline label - always visible', 'Org.': 'inline label - always visible', });
lyr_ProjetosREFLORACamaari2023_20.set('fieldLabels', {'Long': 'hidden field', 'Lat': 'hidden field', 'Tipo': 'inline label - always visible', 'Projeto': 'inline label - always visible', });
lyr_PraasdePedgiorodestaduais_21.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_LogradourosHierarquizao_22.set('fieldLabels', {'id': 'hidden field', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'inline label - always visible', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'catalogo_': 'inline label - always visible', 'webmap': 'inline label - always visible', 'class.2': 'inline label - always visible', 'compriment': 'inline label - always visible', 'MAPA': 'inline label - always visible', });
lyr_LogradourosOficializadoseouCepeados_23.set('fieldLabels', {'id': 'hidden field', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'inline label - always visible', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'catalogo_': 'hidden field', 'webmap': 'hidden field', 'class.2': 'hidden field', 'compriment': 'inline label - always visible', 'MAPA': 'inline label - always visible', });
lyr_LinhaFrreaFCA_24.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'nomeabrev': 'inline label - always visible', 'geometriaa': 'inline label - always visible', 'codtrechof': 'inline label - always visible', 'posicaorel': 'inline label - always visible', 'tipotrecho': 'inline label - always visible', 'bitola': 'inline label - always visible', 'eletrifica': 'inline label - always visible', 'nrlinhas': 'inline label - always visible', 'emarruamen': 'inline label - always visible', 'jurisdicao': 'inline label - always visible', 'administra': 'inline label - always visible', 'concession': 'inline label - always visible', 'operaciona': 'inline label - always visible', 'situacaofi': 'inline label - always visible', 'cargasupor': 'inline label - always visible', });
lyr_EixosRodEstSEINFRABa2021_25.set('fieldLabels', {'Name': 'inline label - always visible', 'fid': 'inline label - always visible', 'Codigo SRE': 'inline label - always visible', 'UF': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Local Iní': 'inline label - always visible', 'Km Inicial': 'inline label - always visible', 'Km Final': 'inline label - always visible', 'Extensão': 'inline label - always visible', 'Situação': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Tipo de Re': 'inline label - always visible', 'Descriç_1': 'inline label - always visible', 'Coincide_3': 'inline label - always visible', 'Identifica': 'inline label - always visible', 'Extensã_1': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_PassarelasemRodovias_26.set('fieldLabels', {'id': 'inline label - always visible', 'Layer': 'inline label - always visible', 'Numero': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Gestao': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Distrito': 'inline label - always visible', });
lyr_Paradasdenibusemrodovias2022_27.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'via': 'hidden field', 'bairro_loc': 'hidden field', 'distrito': 'hidden field', 'bases': 'hidden field', 'org.': 'hidden field', });
lyr_Localidadesdiversas2023_28.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_MacrozonaIndustrialPDDUS2023_29.set('fieldLabels', {'Name': 'inline label - always visible', 'layer': 'inline label - always visible', 'id': 'inline label - always visible', 'perímetro_ellip_m': 'inline label - always visible', 'área_ellip_m²': 'inline label - always visible', 'perímetro_ellip_Km': 'inline label - always visible', 'área_ellip_Km²': 'inline label - always visible', });
lyr_MacrozonaUrbana_SEDE_30.set('fieldLabels', {'Id': 'inline label - always visible', 'layer': 'inline label - always visible', 'perímetro': 'inline label - always visible', 'área_elli': 'inline label - always visible', 'area_km2': 'inline label - always visible', 'perimetro': 'inline label - always visible', 'percentual': 'hidden field', });
lyr_Bairros_Enderecamento_2022_CNEFE_31.set('fieldLabels', {'id': 'hidden field', 'nm_bairro': 'inline label - always visible', 'cod_bairro': 'hidden field', 'distrito': 'inline label - always visible', 'situação': 'hidden field', 'bairros': 'hidden field', 'rotulos': 'hidden field', 'CNEFE 2022': 'inline label - always visible', 'Hab_Dom': 'hidden field', 'PopEst_22': 'hidden field', 'area_Ha': 'inline label - always visible', 'Perim_km': 'inline label - always visible', 'Pop_est_24': 'hidden field', 'area_km2': 'inline label - always visible', 'Dens_km2': 'hidden field', 'Dens_Ha': 'hidden field', 'hab_dom_1': 'hidden field', });
lyr_DistritosMunicipais2020_32.set('fieldLabels', {'id': 'inline label - always visible', 'cd_mun': 'inline label - always visible', 'cd_dist': 'inline label - always visible', 'nm_dist': 'inline label - always visible', 'Perímetro': 'inline label - always visible', 'Área': 'inline label - always visible', 'percentual': 'inline label - always visible', 'cg_majorit': 'inline label - always visible', 'cb_heigh': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_33.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});