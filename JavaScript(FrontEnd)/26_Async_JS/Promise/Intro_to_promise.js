// Promise :
  
// future

// const bucket = ['coffee','chips','vegetables','salt','rice'];

/**
  Promise 
  task :  future value --> fried rice -> made from [vegetables,salt,rice]
  status : pending
  value : undefined


  task :  future value done -> [vegetables,salt,rice] --> fried rice
  status : fullfilled
  value : returned future value --> fried rice

 */


// Promise :
// future

const bucket = ['coffee','chips','vegetables',,'rice'];
// salt not present

/**
  Promise 

  task : future value --> fried rice -> made from [vegetables,salt,rice].
  status : pending 
  value : undefined


  task :  future value --> fried rice -> made from [vegetables,,rice]
  // salt not found.

  status : rejected
  value : ` couldnt do the task ` --> we can send any message or error.

 */

// Promise ----> Represents Future Value . 


  