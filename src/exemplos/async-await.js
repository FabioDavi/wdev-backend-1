function teste(){
    return new Promise(function(resolve, reject){
        setTimeout(resolve,3000, '2 segundos');
    })
}

function teste2(){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, 1000, '1 segundo')
    })
}


(
    async function(){



        await teste2()
          .then(function(val){
            console.log(val)
        }).catch(function(error){
            console.log(error)
        })

        await teste().then(function(val){
            console.log(val)
        })

        console.log('chamando depois das promisses')





    }
)();