$(document).on('click', '#loginbtn', function(){
    // Email Validation
    var check_email = document.getElementById('email').value;
    var regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(check_email == ""){
        document.getElementById('adminEmail').innerHTML = '* Email is required';
        // return false;
    } else if (!check_email.match(regExp)){
        document.getElementById('adminEmail').innerHTML = '* Email is Invalid';
        return false;
    }else {
        return true;
    }

    //password validation
    var check_password = document.getElementById('password').value;
  
    if(check_password == ""){
        document.getElementById('adminPassword').innerHTML = '* Password is required'
        return false;
    } else if (check_password.length < 6 ){
        document.getElementById('adminPassword').innerHTML = '* length of password min 6';
        return false;
    } else if (check_password.length > 13 ){
        document.getElementById('adminPassword').innerHTML = '* length of password max 12';
        return false;
    } else{
        // var data = $("#frm_login").serialize();

        // $.ajax({
        //     type: 'get',
        //     url: "{{ route('loginForm') }}",
        //     data: data,
        //     success: function(response) {}
        // });      
    }
})