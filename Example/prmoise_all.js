// to check wethere the url start with http or Not.
function download(url){
    console.log("download start :"+url);
    return new Promise(function(resloved,reject){
        if(!url.startsWith("http")){
            reject(new Error("Url doesn't start with http"));
           // console.log("Url doesn't start with http");
        }else{
            // take  3 sec dealy job
            setTimeout(() => {
                let filename=url.split('/').pop();
                resloved(filename);
            }, 3000);
        }
    })
}

// to check wethere the url end with .png.
function resize(filename){
    return new Promise(function(resloved,reject){
        console.log("file start creating :",filename);
        if(!filename.endsWith('.png')){
            reject(new Error("the filename isn't end with png"));
            //console.log("the filename isn't end with png ");
        }else{
            //take 3 sec dealy job
            setTimeout(() => {
                let resized=filename.split('.')[0]+"-resized";
                resloved(resized);
            }, 3000);
        }
    })
}

function upload(resziedfilename){
    return new Promise(function(resloved,reject){
        console.log("file start upload :"+resziedfilename)
        setTimeout(() => {
            let uploadurl="http://img.com/"+resziedfilename;
            resloved(uploadurl);
        }, 3000);
    })
}


Promise.all([
    download('http://cb.lk/log.png'),
    download('http://cb.lk/gift.png'),
    download('http://cb.lk/happy.png')
])
.then(function(downloadvalue){
    //console.log(value);
    return Promise.all(downloadvalue.map(resize));
}).then(function(resizevalue){
    return Promise.all(resizevalue.map(upload));
}).then(function(uploadvalue){
    console.log(uploadvalue)
})
.catch((err)=>{
console.error(err);
})