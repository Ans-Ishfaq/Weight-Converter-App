const output = document.querySelector("#output")
const input = document.querySelector("#lbsInput")
const grams = document.querySelector("#gramsOutput")
const kilo = document.querySelector("#kgOutput")
const ounce = document.querySelector("#ozOutput")
output.style.visibility='hidden'
input.addEventListener("input",function(e){
        output.style.visibility='visible'
        const i = e.target.value
        grams.innerText=(i/0.0022046)
        kilo.innerText=(i/2.2046)
        ounce.innerText=(i*16)
})
