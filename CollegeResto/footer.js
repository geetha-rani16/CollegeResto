function check(){
    const username=document.contact.username.value;
    const mobile=document.contact.mobile.value;
    const nameError=document.getElementById('nameError');
    const mobileError=document.getElementById('mobileError');
    let nameStatus=false;
    let mobileStatus=false;
    const alphaExp=/^[a-zA-Z\s]+$/
    const numExp=/^[0-9]+$/

    //Name Validation
    if(username==''){
        nameError.textContent='Name is Mandatory';
    }
    else{
        if(username.match(alphaExp)){
            nameError.textContent=''
            nameStatus=true
        }
        else{
            nameError.textContent='Name should be contain only alphabetics'
        }
    }

    //mobile validation

    if(mobile===''){
        mobileError.textContent='Mobile number is Mandatory';
    }
    else{
        if(mobile.match(numExp)){
            if(mobile.length==10){
                mobileError.textContent=''
                mobileStatus=true
            }
            else{
                mobileError.textContent='10 digit Mobile number is mandatory'
            }
        }
        else{
            mobileError.textContent='Mobile number should be in digits'
        }
    }

    //return logic
    if(nameStatus && mobileStatus){
        return true
    }
    else{
        return false
    }


}