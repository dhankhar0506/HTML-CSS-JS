function colorGenrator(){
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  const color = `rgb(${r},${g},${b})`
  return color
}

// Start Fucntion
let intervalId;

const startColor = function(){  
    function startChange(){
      document.body.style.backgroundColor =  colorGenrator()
    }
    console.log(intervalId)
  if(intervalId == null){
    intervalId = setInterval(startChange,1000)
  }

}

// Stop Function
const stopColor = function(){
  clearInterval(intervalId)
  intervalId = null;
}

document.querySelector('#start').addEventListener('click',
startColor)


document.querySelector('#stop').addEventListener('click',
  stopColor)





