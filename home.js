
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
function addBg(id){
    const cardFeatures = document.getElementsByClassName("cardFeature")
    for(const cardFeature of cardFeatures){
        cardFeature.classList.remove("bg-hoverBlue")
    }
    document.getElementById(id).classList.add("bg-hoverBlue")
}



addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const bank = getInputValue("bank")
    const accountNumber = getInputValueNumber("accountNumber")
    if (accountNumber.length < 11) {
        alert("please enter your valid number")
        return
    }
    const pinInput = getInputValueNumber("pinInput")
    getInputValueNumber("pinInput")
    if (pinInput !== validPin) {
        alert("please enter your valid pin number!")
        return
    }

    const addAmount = getInputValueNumber("addAmount")
    getInputValueNumber("addAmount")
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
    if (cashOutAgentNum.length < 11) {
        alert("please enter valid agent number")
        return
    }
    const cashOutPinNum = getInputValueNumber("cashOutPinNum")
    getInputValueNumber("cashOutPinNum")
    if (cashOutPinNum !== validPin) {
        alert("please enter your valid pin")
        return
    }

    const cashOutAddAmount = getInputValueNumber("cashOutAddAmount")
    getInputValueNumber("cashOutAddAmount")
    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    const afterCashOut = availableBlnc - cashOutAddAmount
    // document.getElementById("availableBlnc").innerText = afterCashOut
    setInnerText(afterCashOut)

    document.getElementById("cashOutAgentNum").value = ""
    document.getElementById("cashOutPinNum").value = ""
    document.getElementById("cashOutAddAmount").value = ""
})

// add ement listener for money handle box section
// toggoling


// // main toggoling button
// const addMoneyBox = document.getElementById("addMoneyBox")
// const cashOutBox = document.getElementById("cashOutBox")
// const transferMoneyBox = document.getElementById("transferMoneyBox")
// const getBonusBox = document.getElementById("getBonusBox")
// const payBillBox = document.getElementById("payBillBox")
// const transactionsBox = document.getElementById("transactionsBox")

// // form
// const addMoneyForm = document.getElementById("addMoneyForm")
// const cashOutForm = document.getElementById("cashOutForm")

// addMoneyBox.addEventListener("click", function () {
//     cashOutForm.classList.add("hidden")
//     addMoneyForm.classList.remove("hidden")


// })
// cashOutBox.addEventListener("click", function () {
//     addMoneyForm.classList.add("hidden")
//     cashOutForm.classList.remove("hidden")

// })



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