//precisei instalar essa dependencia antes do pandas-js (yarn add babel-runtime)
const  { Series, DataFrame }  = require('pandas-js') 
const Immutable = require('immutable');
const { text } = require('express');

const ds = new Series([1, 2, 3, 4], {name: 'My test name', index: [2, 3, 4, 5]})
//console.log(ds.toString())
 

const ds2 = new Series([1, 2, 3]);

// Returns Series([2, 3]);
ds2.filter(ds2.gte(2));
//console.log(ds2.toString())


const ds3 = new Series([1, 2, 3], {name: 'Test name'})
// Returns Series([true, false, false])
ds3.eq(1);
// Returns Series([false, true, true])
ds3.eq(new Series([0, 2, 3]));
// Returns Series([false, true, true])
ds3.eq(Immutable.List([0, 2, 3]));
// Returns Series([false, true, true])
ds3.eq([0, 2, 3]);
// Returns Series([2, 3])
ds3.filter(ds3.eq([0, 2, 3]));


const df = new DataFrame([{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}])
// Returns:
//    x  |  y
// 0  1  |  2
// 1  2  |  3
// 2  3  |  4
df.toString();


const df1 = new DataFrame([{x: 1, y: 2}, {x: 2, y: 3}], {index: [1, 2]});
const df2 = new DataFrame([{x: 2, y: 2}, {x: 3, y: 3}], {index: [2, 3]});
// Returns DataFrame
//(
//  [{x: 1, y: 2}, {x: 2, y: 3}, {x: 2, y: 2}, {x: 3, y: 3}],
//  {index: [1, 2, 2, 3]});
df1.append(df2);

// Returns DataFrame
////(
//  [{x: 1, y: 2}, {x: 2, y: 3}, {x: 2, y: 2}, {x: 3, y: 3}],
//  {index: [0, 1, 2, 3]});
df1.append(df2, true);  





const df5 = new DataFrame([{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}]);
// Returns {x: {0: 1, 1: 2, 2: 3}, y: {0: 1, 1: 2, 2: 3}}
df5.to_json();
//console.log(df5.toString())
// Returns [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}]
df5.to_json({orient: 'records'});

// Returns {0: {x: 1, y: 2}, 1: {x: 2, y: 3}, 2: {x: 3, y: 4}}
df5.to_json({orient: 'index'}); 

// Returns {index: [0, 1, 2], columns: ['x', 'y'], values: [[1, 2], [2, 3], [3, 4]]}
df5.to_json({orient: 'split'});   

// Returns [[1, 2], [2, 3], [3, 4]] 
df5.to_json({orient: 'values'});
 


const df8 = new DataFrame([{x: 1, y: 2}, {x: 2, y: 3}]);

// Returns DataFrame(Map({x: Series([true, false]), y: Series([false, true])})
df8.where(new Series([1, 3]), (a, b) => a === b);

const dfv = new DataFrame([{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}]);
// Returns x,y,\r\n1,2,\r\n2,3\r\n3,4\r\n
dfv.to_csv();  



const df11 =  new DataFrame([['a', 'b'], ['c', 'd']],
                   index=['row 1', 'row 2'],
                   columns=['col 1', 'col 2'])
//df11.to_excel("testePandas.xlsx")  
console.log(df11.to_csv('testePandas.xlsx')) 




