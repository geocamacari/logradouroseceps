var size = 0;
var placement = 'point';
function categories_LogradourosHierarquizao_16(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'via expressa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,0,146,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sistema viário urbano principal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sistema viário urbano complementar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,136,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'outras vias':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Estradas e vias rurais':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,255,5,1.0)', lineDash: [13.072,6.536], lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_LogradourosHierarquizao_16 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("MAPA");
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Impact\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.6;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("logradour_") !== null) {
        labelText = String(feature.get("logradour_"));
    }
    
var style = categories_LogradourosHierarquizao_16(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
