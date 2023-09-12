const body = document.body;
const intervalID = setInterval(()=>{
     const red = Math.floor(Math.random()*256);
     const blue = Math.floor(Math.random()*256);
     const green = Math.floor(Math.random()*256);
     const rgb = `rgb(${red},${green},${blue})`;
     console.log(rgb);
     body.style.backgroundColor = rgb;

 },1000);

 console.log(intervalID);

 const stopButton = document.querySelector("button");

 stopButton.addEventListener("click",(e)=>{
    e.preventDefault();
    clearTimeout(intervalID);
    stopButton.textContent = body.style.backgroundColor;
     
 });