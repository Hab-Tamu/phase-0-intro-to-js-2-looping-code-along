// // Code your solutions in this file


//================== TEST 1 ============================
const names = ["Guadalupe", "Ollie", "Aki"]
// let message = "surprise"
function writeCards(names, message){
    let newNames = []
    let msg = " "
    for(let i = 0; i < names.length; i++){
        msg = `Thank you, ${names[i]}, for the wonderful ${message} gift!`
        newNames.push(msg)
    }
    return newNames
}
// writeCards(names, "surprise")
console.log(writeCards(names, "surprise"))

//================== TEST 2 ============================

function countDown(num){
    for(let i = 0; num >= 0 ; i++){
        console.log(num)
        num--   
    }
    return num
}
// countDown(4)
console.log(countDown(10))