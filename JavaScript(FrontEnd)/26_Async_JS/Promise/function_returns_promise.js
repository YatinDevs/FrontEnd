//  ############# Function Returning a Promise ##### 


const bucket = ['coffee','chips','vegetables','salt','rice'];


function friedRicePromise(){


  return new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){

       resolve({value:"Fried Rice"}); // can take any value string , array,object

    }else{
       reject(new Error ("something missing in bucket")); // Error Object
    }
  });

}

friedRicePromise().then(
    (myfriedrice)=>{
    console.log(`lets Eat my `,myfriedrice);
    }
    ).catch((error)=>{
    console.log(error);
  })


