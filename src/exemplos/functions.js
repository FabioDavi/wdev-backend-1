function funSomaValores(array_){    
    total = 0 
    for (num of array_){
        total = total + num
    }
    return total
}
const arrayValores = [7,1]
const soma = funSomaValores(arrayValores)
console.log(soma)




var numbers = [1, 2, 3, 4, 5];
numbers.map(function(e){
  return e * 2; // [2, 4, 6, 8, 10]
});

console.log(numbers.map(function(e){ return e * 2}))



//sem uso arrow function
var Hello1 = function(name) {
    return 'Olá ' + name;
  };
  //com arrow function
  const Hello2 = (name) => {
    return 'Olá ' + name;
  };
  //em uma unica linha
  const Hello3 = (name) =>  'Olá ' + name;
  console.log(Hello3('Fabio Davi Rauh'))



  function somaCallBack(a, b, fnCallBack){      
      return fnCallBack(a+b)
  }
  console.log(somaCallBack(10,5,function (totald){
      return totald * 2
  }))
  console.log(somaCallBack(10,5,function (totald){
    return totald / 2
}))
console.log(somaCallBack(10,5,function (totald){
    return totald + 2
}))


  
//função autoexcutavel   - nao funcionou
/*(function main() {
    var userName = "Sean";
  
      console.log(name());
  
      function name() {
        return userName;
      }
    }
  )(); */
  
