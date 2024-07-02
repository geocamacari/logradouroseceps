var size = 0;
var placement = 'point';

var style_ProjetosREFLORACamaari2023_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial Black\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Tipo") !== null) {
        labelText = String(feature.get("Tipo"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.4 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(1,255,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(4,118,0,0.5333333333333333)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
