'use strict'

const fs = require('fs');



fs.readFile('K:/ken/u/nivel 7/aprendizaje de maquina/kmeans/iris.csv', 'utf8', function (err, data) {
  var dataArray = data.split(/\r?\n/);
  var newArray
  for (let i=0;i<dataArray.length;i++){
    newArray= dataArray[i].split(',');
    var suma=0;
    for (let j =0;j<newArray.length-1;j++){
      suma=suma+parseFloat(newArray[j]);
    }
    console.log(suma);
  }
});