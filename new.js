
function show (){

    var name1 = document.myform.name.value;
    var number1 = document.myform.number.value;
    var email1 = document.myform.email.value;
    var subject = document.myform.subject.value;
    var status=false;  
    
    
    if(name1=="" || name1.length<2){
    
    document.getElementById('nm').innerText="Please write name..";
      
        status=false; 
    }else{
         document.getElementById("nm").innerText=" Sucess...";
    
    // mk.style.color = "green";
    
        status=true;  
    
    }
    
    
        
    
    
    
    if(number1 =="" || number1.length<10){
    
        document.getElementById('nn').innerText="Please write number..";
    
    
    //     status=false; 
    }else{
         document.getElementById("nn").innerText=" Sucess...;  ";
        status=true;  
    
    
        // alert("Numer is not correct please fill again")
        // return false;
    
    }
    
    if(subject==""){
        document.getElementById('ps').innerText="Please write Subject..";
    
        status=false; 
    }else{
         document.getElementById("ps").innerText=" Sucess...;  ";
        status=true;
    
        alert("subject required...")
        return false;
     }
    
    if(email1==""){
        document.getElementById('em').innerText="Plaese write email..";
    
        alert("Email is required....")
        return false;
    }
    
    
    }
    