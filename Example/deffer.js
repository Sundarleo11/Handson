function download(){
    console.log("Starting to download the files");
    return new Promise(function(reslove,reject){
        setTimeout(() => {
            console.log("99%");
            reslove();
        }, 3000);
       
    })
}

/*download().then(function(){
console.log('After Download the files');


})*/

// how to deale with dealy-job
let defferjob =download();

setTimeout(() => {
    console.log('After Download the files');  
}, 5000);
