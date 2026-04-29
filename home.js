
const addMoneyBtn = document.getElementById("addMoneyBtn")
const validPin = 1234

// reuseable function 
// get input value in number 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNum = parseInt(inputFieldValue)
    return inputFieldValueNum
}
// get only input feild value
function getInputValue(id) {
    const inputValue = document.getElementById(id)
    const inputFieldValue = inputValue.value
    return inputFieldValue
}
// set innter text function
function setInnerText(value) {
    const availableBlncElement = document.getElementById("availableBlnc")
    availableBlncElement.innerHTML = value
}
// show form for button match
function formShow(id) {
    const allForms = document.getElementsByClassName("allForm")
    for (const allForm of allForms) {
        allForm.classList.add("hidden")
    }
    document.getElementById(id).classList.remove("hidden")
}
// add bg when click money handle box
function addBg(id) {
    const cardFeatures = document.getElementsByClassName("cardFeature")
    for (const cardFeature of cardFeatures) {
        cardFeature.classList.remove("bg-hoverBlue")
    }
    document.getElementById(id).classList.add("bg-hoverBlue")
}



// add ement listener for money handle box section
// toggoling



document.getElementById("addMoneyBox").addEventListener("click", function () {
    formShow("addMoneyForm")
    addBg("addMoneyBox")
})
document.getElementById("cashOutBox").addEventListener("click", function () {
    formShow("cashOutForm")
    addBg("cashOutBox")
})
document.getElementById("transferMoneyBox").addEventListener("click", function () {
    formShow("transferMoney")
    addBg("transferMoneyBox")
})
document.getElementById("getBonusBox").addEventListener("click", function () {
    formShow("getBonus")
    addBg("getBonusBox")
})
document.getElementById("payBillBox").addEventListener("click", function () {
    formShow("payBill")
    addBg("payBillBox")
})
document.getElementById("transactionsBox").addEventListener("click", function () {
    formShow("transiction")
    addBg("transactionsBox")
})


// Money management with form

addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const bank = getInputValue("bank")
    const accountNumber = getInputValueNumber("accountNumber")
    if (!/^\d+$/.test(transferAccountNum) || accountNumber.length < 11) {
        alert("please enter your valid number")
        return
    }
    const pinInput = getInputValueNumber("pinInput")
    if (pinInput !== validPin) {
        alert("please enter your valid pin number!")
        return
    }

    const addAmount = getInputValueNumber("addAmount")
    if (isNaN(addAmount) || addAmount <= 0) {
        alert("please enter your amount")
        return
    }

    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    const totalAvailableBalence = availableBlnc + addAmount
    setInnerText(totalAvailableBalence)

    document.getElementById("accountNumber").value = ""
    document.getElementById("addAmount").value = ""
    document.getElementById("pinInput").value = ""

})


// cashout form validation
const cashOutBtn = document.getElementById("cashOutBtn")

cashOutBtn.addEventListener("click", function (e) {
    e.preventDefault()


    const cashOutAgentNum = getInputValueNumber("cashOutAgentNum")
    if (!/^\d+$/.test(transferAccountNum) || cashOutAgentNum.length < 11) {
        alert("please enter valid agent number")
        return
    }
    const cashOutPinNum = getInputValueNumber("cashOutPinNum")
    if (cashOutPinNum !== validPin) {
        alert("please enter your valid pin")
        return
    }

    const cashOutAddAmount = getInputValueNumber("cashOutAddAmount")
    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    const afterCashOut = availableBlnc - cashOutAddAmount
    // document.getElementById("availableBlnc").innerText = afterCashOut
    setInnerText(afterCashOut)

    document.getElementById("cashOutAgentNum").value = ""
    document.getElementById("cashOutPinNum").value = ""
    document.getElementById("cashOutAddAmount").value = ""
})

// transfer money form validation

const transferBtn = document.getElementById("transferBtn")

transferBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const transferAccountNum = getInputValue("transferAccountNum")
    if(!/^\d+$/.test(transferAccountNum) || transferAccountNum.length < 11){
        alert("please enter valid account number")
        return 
    }
    
     const transferPinNum = getInputValueNumber("transferPinNum")
    if (transferPinNum !== validPin) {
        alert("please enter your valid pin")
        return
    }

    const transferAddAmount = getInputValueNumber("transferAddAmount")
    if (isNaN(transferAddAmount) || transferAddAmount <= 0) {
        alert("please enter your amount")
        return
    }
    
    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    const afterTransferMoney = availableBlnc - transferAddAmount
    document.getElementById("availableBlnc").innerText = afterTransferMoney
    setInnerText(afterTransferMoney)

    document.getElementById("cashOutAgentNum").value = ""
    document.getElementById("cashOutPinNum").value = ""
    document.getElementById("cashOutAddAmount").value = ""
})

