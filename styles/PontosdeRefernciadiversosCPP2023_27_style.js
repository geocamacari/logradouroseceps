var size = 0;
var placement = 'point';

var style_PontosdeRefernciadiversosCPP2023_27 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Arial Black\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("nome") !== null) {
        labelText = String(feature.get("nome"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
