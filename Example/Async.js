function someasync(callback){
  //  console.log("start");
    setTimeout(function(){
    //    console.log("End");
        callback();
    },3000)

}

someasync(function(){
    console.log("we done it async function");
})