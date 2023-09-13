// Promise And setTimeout

// Lets Try to Resolve/ Reject Promise after 2 Seconds


function myPromise(){

    return new Promise((resolve,reject)=>{
        
        const value = true;

        setTimeout(()=>{
             if(value){
                resolve();
             }else{
                reject();
             }
        },2000);
    })
}


myPromise()
.then(()=>{console.log("resolved!")})
.catch(()=>{console.log("rejected!");})