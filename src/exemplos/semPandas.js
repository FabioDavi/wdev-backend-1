var pivot = function(data){
    var result = [];
    for (var i = 0; i < data.length; i++){
        for (var j=0; j < data[i].length; j++){
            if (i === 0){
                result[j] = [];
            }
            result[j][i] = data[i][j];
        }
    }
    return result;
};

var getData = function(variavel) {
    var csvString = variavel;
    var csvLines = csvString.split(/\n?$/m);

    var dataTable = [];

    for (var i = 0; i < csvLines.length; i++){
        var values;
        eval("values = [" + csvLines[i] + "]");
        dataTable[i] = values;
    }

    return pivot(dataTable);
};

const variavel_ = '"this","is",3,"right?",1'

console.log(getData(variavel_))