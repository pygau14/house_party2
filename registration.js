// console.log("js is loaded");
const registerURL = "https://hp.hnkrecruitment.com/register";
const loginURL = "https://hp.hnkrecruitment.com/login"; 

async function sendRegisterData(event){

    //console.log("function is called");
    event.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name  = document.getElementById("last_name").value;
    const mobile_no = document.getElementById("mobile_no").value;
    const email  = document.getElementById("email").value;

    const password  = document.getElementById('password').value;
    const confirm_password  = document.getElementById("confirm_password").value;

    console.log(first_name,last_name, mobile_no, email , password , confirm_password);

    const formdata  = new FormData();

    formdata.append('first_name', first_name);
    formdata.append('last_name', last_name);
    formdata.append("mobile_no",mobile_no);
    formdata.append('email', email);
    formdata.append("password",password);
    formdata.append("confirm_password",confirm_password);


    // const formDataObj = {};
    // formdata.forEach((value,key)=>{
    //     formDataObj[key] = value;
    // });

    //console.log(formDataObj);


    // fetch code
    const response = await fetch(registerURL,{
        method : 'POST',
        body : formdata
    })

   

   
    // const fakeStatus = 200;
    if(response.status ==200){
        showMessage('success' , "Registration Successful" , "🌟 Hooray! You're now part of our community" , 'login.html');
    }

    else {
        showMessage('error', 'Registration Failed' , '🔧 Oops! Looks like a little glitch. Could you try again for us?' ,'registration.html' );
    }

   
}



//sending login data
async function sendLoginData(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formdata = new FormData();

    formdata.append('email',email);
    formdata.append('password',password);

    const response  = await fetch(loginURL,{
        method : 'POST',
        body : formdata
    })

    if(response.status == 200){
        const token = response.token;
        localStorage.setItem("token",token);
        showMessage('success' , 'You\'re In!' , '🌟 Success! Access granted. Let\'s get started!' , 'dashboard.html');
        
    }
    else{
        showMessage('error' , 'Hold Up!' , '🛑 Access denied. Double-check your credentials.' , 'login.html' );
    }



}





 // This function is called when the registration is successful (status code 200)
 function showMessage(icon , title , message , path) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      // You can customize more properties here
    }).then((result)=>{
        if(result.isConfirmed){
            window.location.href = path;
        }
    });

    
  }




