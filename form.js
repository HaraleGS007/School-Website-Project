let loginForm = document.getElementById("myform");

myform.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let number = document.getElementById("number");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  if (name.value == "" || email.value == "" , number.value=="" || subject.value=="") 


  
  {
    alert("Ensure you input a value in both fields!");

  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    smg.innerHTML = "Message sent successfully";
    

    console.log(
      `This form user  name  is ${name.value} and password is ${email.value} and number is ${number.value} and subject is ${subject.value} `
    );

    name.value = "";
    email.value = "";
    number.value = "";
    subject.value = "";
    message.value = "";

  }
});








// if(name1=="" || name1.length<2){

//     document.getElementById('nm').innerText="Please write name..";
      
//         status=false; 
//     }else{
//          document.getElementById("nm").innerText=" Sucess...";
    
    
//         status=true;  
    
    