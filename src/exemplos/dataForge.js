const dataForge = require('data-forge');

require('data-forge-fs');




const dfs =  dataForge.readFileSync('./src/exemplos/testePandas.csv').parseCSV()
console.log(dfs.where(row=>row['open'] === '306.2900').toString())
console.log(dfs.toString())
console.log(dfs.count())



const arrayOfArrays = dfs.toRows();
//console.log(arrayOfArrays.toString());

const df = new dataForge.DataFrame({
    columnNames:["id","name","sex","age"],
    rows:[
        [1,"Jesse","male",25],
        [2,"Jane","female",25],
        [3,"Mark","male",20],
        [4,"Peter","male",55],
        [5,"Paula","female",35],
    ]
})
//console.log(df.toJSON())


const data = [{ A: 1, B: 10 }, { A: 2, B: 20 }, { A: 3, B: 30 }];
const df_ = new dataForge.DataFrame(data);
console.log(df_.toString());