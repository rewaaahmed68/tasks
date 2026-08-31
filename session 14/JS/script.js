let users = [
    {
    name : "rewaa ",
    id : 1078 ,
    balance : 1000
},
    
    {
    name : "ali ",
    id : 1541 ,
    balance : 2000
},

    {
    name : "doaa ",
    id : 4021 ,
    balance : 5000
}

 
]

// function addUser() {
//     name = prompt("Enter Your Name :"),
//     id = prompt("Enter Your ID :"),
//     balance = prompt("Enter Your Balance :")
//   let user = {
//     Name : name , 
//     ID : id ,
//     Balance: balance
//   }
//   users.push(user)
//   console.log(users)
// }
    
// console.log(addUser())



// function editUserBalanceById() {
//   let id = prompt("Enter Your ID :")
//   let balance = prompt("Enter New Balance :")
//   let user = users.find(item => id == id)
//   user.balance = balance
//   console.log(users)
// }
// console.log(editUserBalanceById())



function transferBalance() {
    let fromId = +prompt("Enter from id")
    let toId = +prompt("Enter to id")
    let amount = +prompt("Enter balance")

    let sender = users.find(item => item.id === fromId)
    let receiver = users.find(item => item.id === toId)

    sender.balance -= amount
    receiver.balance += amount
}

transferBalance()
console.log(users)



// function deleteUserById(){
//     let deleteId = prompt("Enter Your ID :")
//     let user = users.findIndex(item => item.id == deleteId )
//     users.splice(user , 1)

// }
// console.log(deleteUserById())
// console.log(users)