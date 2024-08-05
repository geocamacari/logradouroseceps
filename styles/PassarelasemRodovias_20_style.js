var size = 0;
var placement = 'point';

var style_PassarelasemRodovias_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial Black\', sans-serif";
    var labelFill = "#000ad2";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Numero") !== null) {
        labelText = String(feature.get("Numero"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,0,162,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
