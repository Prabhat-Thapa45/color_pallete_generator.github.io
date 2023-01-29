let combination = new Array(0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F");

function getHexCodes(){
    let hexCode = "";
    for(let i=0; i < 6; i++){
        let a = Math.floor(Math.random()*16)
        hexCode += combination[a]
    }
    return "#" + hexCode
}
let outer = document.createElement('div')
outer.classList.add('outer')
document.body.appendChild(outer)

function genrateColorPallete(){
    for (let i =0; i < 18; i++){
        let code = getHexCodes();

        let pallete = document.createElement('div')
        pallete.classList.add('pallete')
        outer.appendChild(pallete)

        let boxes = document.createElement('div')
        boxes.classList.add('box')
        boxes.style.backgroundColor = code
        pallete.appendChild(boxes)

        let hexes = document.createElement('h3')
        hexes.classList.add('hex')
        pallete.appendChild(hexes)
        hexes.innerHTML = code
    }
}
genrateColorPallete()

generateBtn = document.createElement('button')
generateBtn.classList.add('btn')
generateBtn.innerText = "Generate"
// Attach the "click" event to your button
generateBtn.addEventListener('click', function(){
    outer.innerHTML = ""
    genrateColorPallete()
})
document.body.appendChild(generateBtn)

let value = document.querySelector('button')
