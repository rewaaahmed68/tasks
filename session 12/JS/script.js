// var firstName = "Rewaa"
// var lastName = "Ahmed"
// var age = 19
// var isGraduated = false

// console.log(typeof(age))
// console.log(typeof isGraduated)

// console.log("--------------------------------------")

// var bio = `My name is ${firstName} ${lastName}
// my age is ${age}`
// console.log(bio)


// var fullName =  firstName+ " " + lastName
// console.log(fullName)

// console.log("--------------------------------------")

// var x = 12
// console.log(x++)
// console.log(x)
// console.log(++x)

// console.log("--------------------------------------")

// var l = 20 
// l+=5
// console.log(l)

// console.log("--------------------------------------")

// var x = 20
// var y = 20
// var h = "20"
// console.log(h == x) 
// console.log(h === x)
// console.log(x > y && typeof h == "number" && x == 30)

// console.log("--------------------------------------")

// var userName = prompt("enter your name");    // ; is important 
// (userName == "rewaa" || userName == "Rewaa" || userName == "REWAA") ? console.log('welcome ! Rewaa') : console.log('invalid user')


// TASK 
var Degree = +prompt("Enter your Degree")
if(Degree== null || Degree==""){
    alert('please enter Your degree')

}
else {

     if (Degree>100)
    console.log('invalid degree')
    else if (Degree>=90)
        console.log('A')
    else if (Degree>=80)
        console.log('B')
    else if (Degree>=70)
        console.log('C')
    else if (Degree>=60)
        console.log('D')
    else {
        console.log('F')
    }
}

