function someasync(callback){
    console.log("starting");
    setTimeout(function(){
        console.log("Ending");
        callback();
    },3000)

}

let someTaskasync=function(){
   /// console.log("we done it async function");
   return new Promise(function(reslove,reject){
       someasync(reslove);
   })
}

someTaskasync().then(function(){
    console.log("Async to promise function");
});
