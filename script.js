const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalatte = () => {
    container.innerHTML=""; //clearing the container
  for (let i = 0; i < maxPaletteBoxes; i++) {
    // generate a random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`; //pad a string with another string until it reaches the given length

    // creating new 'li' element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML=`<div class="rect-box" style="background:${randomHex}"></div>
                    <span class="hex-value">${randomHex}</span>`;
    container.appendChild(color)

    color.addEventListener("click",()=> copyColor(color,randomHex))
  }
};

generatePalatte();

refreshBtn.addEventListener("click", generatePalatte);
//copying the hex value, updating the text to copied
// and chaning text back to original hex value after 1 second
const copyColor =(elem,hexVal)=>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal.toUpperCase()).then(()=>{
        colorElement.innerText="Copied";
        setTimeout(()=>colorElement.innerText=hexVal,1000)
    }).catch(()=>alert("failed to copy color code!"))
}