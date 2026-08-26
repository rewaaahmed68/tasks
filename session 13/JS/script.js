
//practise 1

// var num1 = prompt("Enter num1")
// var num2 = prompt("Enter num2")
// var contNUM = prompt("Enter contNum")
// var breakNum = prompt("Enter breakNum")

// if((num1 != null || num1 == "") && (num2 != null || num2 == "") && (contNUM != null ||contNUM == "") && (breakNum != null ||breakNum == "") ){

//    for (let i = num1; i < num2 ; i++) {
//        if (i == contNUM ) continue
//        else if (i == breakNum ) break
//        console.log(i)
// }

// else 
//     alert("please enter a number") 
// }



//practise 2

let tracks = ["web design" , "network" ,"UX"]
let track = prompt(" Enter your track")
if(tracks.includes(track))
    alert("this is founded")
else
    tracks.push(track)
    console.log(tracks)




