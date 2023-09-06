// Async vs Defer --> Correct way to link the JS file : 

/*  
        If you're working with JavaScript, it's important to understand the difference between async and defer attributes

    

    <!-- <script src="./Async_vs_Defer.js"></script>  -->
    <!-- 1. html file will pe parse till here and then Js will start loading , after than it will start executing
    Bur problem with declaring file here is rest html is not parsed and if js is applied in below tags i may throw error so its bad practice -->

     <!-- 2. Declaring js file here  : file is been read from top to bottom so html content and css will be parsed and loaded ,
       as it reaches here Js file starts to load after it the file will be executed this process is good less chances of error but 
       its very time comsuming . -->

    <!-- <script src="./Async_vs_Defer.js" async></script>  -->
    <!-- 3.Async Way of Linking : So when Browser gets file It starts Read file from top and when it reaches JS file script as we have used async - i.e
      asynchronous attribute so parsing of html and loading of JS file occurs at same time 
      Problem here is lets consider JS file is loaded fully but Html is parsed half way through file as soon as Js is Loaded html parsing will stop and 
      JS file Execution will start with half parsed html file which may cause and error if JS is used below ,So this approach is also not that efficient.
     -->

     
       <script src="./Async_vs_Defer.js" defer></script> 
    <!-- 4. Best way to Link JS file  : Defer (Deferred) So here File reading Start from top as it reach script the loading of script file and parsing of html
       occurs at same time lets say js file is loaded completely so here in case of defer html parsing doesnt stop it continues till its full loaded and that loaded 
      Js file is on hold as both html and js are loaded now execution of script occurs with error and this is best approach as saves time as well. -->

  1. Asynchronous	

  - Asynchronous blocks the parsing of the page.	
  - Asynchronous scripts don’t wait for each other. 
  - The execution of scripts begins by pause parsing.	

  2. Deferred
  
  - Deferred never blocks the page.
  - Deferred scripts maintain their relative order which means the first script will be loaded first while all others below it will have to wait.
  - However, the execution of scripts begins only after parsing is completely finished but before the document’s DOMContentLoadedevent.

*/