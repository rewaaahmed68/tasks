// let changeColor = (element) => {
//     let listItems = document.querySelectorAll("li")
//     listItems.forEach((item) => {
//         item.classList.remove("text-danger")
//     }
// )
//     element.classList.add("text-danger")
// }







let userName = document.querySelector("#userName")
let userEmail = document.querySelector("#userEmail")
let loginForm = document.getElementById("loginForm")
let divsContainer = document.querySelector(".divsContainer")

let usersList = []

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let userObject = {
        name: userName.value,
        email: userEmail.value
    }
    usersList.push(userObject)
    console.log(usersList)

    let newDiv = document.createElement("div")
    let h4 = document.createElement("h4")
    let h5 = document.createElement("h5")

    h4.innerText = "Name : " + userObject.name
    h5.innerText = "Email : " + userObject.email

    newDiv.appendChild(h4)
    newDiv.appendChild(h5)

    newDiv.classList.add("alert", "alert-primary")
    divsContainer.appendChild(newDiv)

    userName.value =""
    userEmail.value =""
}
)