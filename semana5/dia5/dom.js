const inputs = document.getElementsByTagName('input')
console.log('input, inputs');




const newInputs = Array.from(imputs)
console.log('newinput', newInputs)

newInputs.map((newInput)=>{
    console.log("nueva forma", newInput.value);

})

//bucle for
for (let i=0; i < inputs.length; i++)


for(let i=0; i<inputs.length; i++){
    console.log('input',imputs[i].value)
}

const password = document.getElementByid('input_password')

conaole.log("password", password)

password.style.backgroundColor = "#000"
password.style.color = "#fff"