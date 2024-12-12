
let display = document.getElementById("result")



document.getElementById("btn1").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 1
})
document.getElementById("btn2").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 2
})
document .getElementById("btn3").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 3
})
document.getElementById("btn4").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 4
})
document.getElementById("btn5").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 5
})
document.getElementById("btn6").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 6
})
document.getElementById("btn7").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 7
})
document.getElementById("btn8").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 8
})
document.getElementById("btn9").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 9
})
document.getElementById("btn0").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 0
})
document.getElementById("btn-").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "-"
})
document.getElementById("btn+").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "+"
})
document.getElementById("btn/").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "/"
})
document.getElementById("btn*").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "*"
})
 document.getElementById("btnCE").addEventListener("click", ()=>{
    display.innerHTML = ""
})
document.getElementById("btn=").addEventListener("click", ()=>{
    // display.innerHTML = display.innerHTML + "="
    display.innerHTML = eval(display.innerHTML)
})


// const addToScreen = (value)=>{
//     display.innerHTML = display.innerHTML + value
// }
// const calculate= ()=>{
//     display.innerHTML = eval(display.innerHTML)
// }

// const x = 10
// console.log(`Ope has ${x} number of apple`)

// const firstname ="Emmanuel"

// const greeting = `Welcome ${firstname}`
// console.log(greeting)



const inputText = document.getElementById('input-text')


const list = []

document.getElementById("btn").addEventListener("click", function(){
    //console.log(inputText.value)
    list.push(inputText.value)
    console.log(list)
 

    for(i=0; i<list.length; i++){
        document.getElementById("unorderlist").innerHTML = `<li>${list[i]}</li>`
    }
}) 