let myDetails = document.getElementById("details")
console.log(myDetails)
let myTag = document.getElementsByTagName("input")
console.log(myTag)


for (let i = 0; i < myTag.length; i++) {
    let a = myTag[i];
    console.log(a.value);

    // console.log (myTag[2].placeholder);
    // console.log (myTag[0].value);
    // console.log (myTag[3].ty);


}
let email = document.getElementById("email")
let password = document.getElementById("password")
console.log(email.value, password.value)
if (email.value === '' && password.value === '') {
    console.log('dsdsd')
    document.getElementById("submit").setAttribute("disabled", true)
    
} else {
    console.log('dsdsdsdsdsdsdsd')
    document.getElementById("submit").removeAttribute("disabled", true)
}

// Declaring Object
let user ={
    Fullname : "Shittu Abimbola Muibat",
    Email: "monnyann10@gmail.com",
    ["Phone Number"]: 08065607842,
    Gender : "Female"   
}
for(key in user){
console.log(user);
}

// Cloning &  Merging
let users = {
    name: "Helen",
    age: 5
  };  
  let clone = {}; // The new empty object of clone 
  //Copy all user properties into it
  for (let key in users) {
    clone[key] = users[key];
    console.log(clone);
  }  

// Or  Another Way tp Clone 
for (let prop in users) {
    clone[prop] = users[prop];
    console.log(clone[prop]);
  }  


//   Assign
let useer = {  name: "Doyin" };

Object.assign(useer, { name: "Judith" });
console.log(useer);

