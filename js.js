let grid=document.querySelector(".grid");
let button =document.querySelector("#size");
function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}`;
}
button.addEventListener("click",()=>
    {
        grid.innerHTML="";
        let size=prompt("le nombre de care du care ? ")
        for (let i=0;i<size*size;i++)
        {
            let div=document.createElement("div");
            div.classList.add("square");
            div.dataset.opacity=0;
            grid.appendChild(div);
        }
        grid.style.height=62*size +"px";
        grid.style.width=62*size +"px";
        let squares=document.querySelectorAll(".square");
        squares.forEach(square=>square.addEventListener("mouseenter",()=>
        {
            let currentOpacity = parseFloat(square.dataset.opacity);
            currentOpacity =currentOpacity + 0.3;
            square.dataset.opacity=`${currentOpacity}`;
            square.style.backgroundColor = `${getRandomColorRGB()} , ${currentOpacity})`;
        }))
    })