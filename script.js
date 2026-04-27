document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNum = 1626227321;
    const pinNum = 14106;

    const mobileNumber = document.getElementById("mobileNumber").value
    const mobileNumberConvert = parseInt(mobileNumber)

    const pinNumber = document.getElementById("pinNumber").value
    const pinNumberConvert = parseInt(pinNumber)

    if(mobileNumberConvert  === mobileNum && pinNumberConvert === pinNum){
        window.location.href = "./home.html"
    }else{
        alert("incorrect your number or pin")
    }
})