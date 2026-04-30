const transectionData = []
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

document.getElementById("transactionsBox").addEventListener("click",function(){
    const transectionContainer = document.getElementById("transectionContainer")
    transectionContainer.innerText = ""
    for(const data of transectionData){
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-[450px] mx-auto">
            <div class="flex justify-between items-center">
              <div class="flex justify-between items-center">
                <div class="img rounded-full p-3 bg-[#f4f5f7]">
                  <img src="assets/wallet1.png" alt="assets/wallet1.png">
                </div>
                <div class="transictionText ml-2">
                  <h1 class="text-[#080808be] text-[16px] font-semibold">${data.name}</h1>
                  <h1 class="text-xs text-[#080808be]">Today ${data.date}</h1>
                </div>
              </div>
              <div class="dotIcon text-[#080808be] text-2xl">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
        `
        transectionContainer.appendChild(div)
    }
})


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

// add money form
const addMoneyBtn = document.getElementById("addMoneyBtn")
addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const bank = getInputValue("bank")
    const accountNumber = getInputValue("accountNumber")
    if (!/^\d+$/.test(accountNumber) || accountNumber.length < 11) {
        alert("please enter your valid account number")
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
    
    const data = {
        name : "Add Money",
        date : new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    
})


// cashout form validation
const cashOutBtn = document.getElementById("cashOutBtn")

cashOutBtn.addEventListener("click", function (e) {
    e.preventDefault()


    const cashOutAgentNum = getInputValue("cashOutAgentNum")
    if (!/^\d+$/.test(cashOutAgentNum) || cashOutAgentNum.length < 11) {
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
    setInnerText(afterCashOut)

    document.getElementById("cashOutAgentNum").value = ""
    document.getElementById("cashOutPinNum").value = ""
    document.getElementById("cashOutAddAmount").value = ""

    const data = {
        name : "Cash-Out",
        date : new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    
})

// transfer money form validation

const transferBtn = document.getElementById("transferBtn")

transferBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const transferAccountNum = getInputValue("transferAccountNum")
    if (!/^\d+$/.test(transferAccountNum) || transferAccountNum.length < 11) {
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
    setInnerText(afterTransferMoney)

    document.getElementById("transferAccountNum").value = ""
    document.getElementById("transferPinNum").value = ""
    document.getElementById("transferAddAmount").value = ""

    const data = {
        name : "Transfer Money",
        date : new Date().toLocaleTimeString()
    }
    transectionData.push(data)
})

// pay bill form
const payBillMoneyBtn = document.getElementById('payBillMoneyBtn')
payBillMoneyBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const payBillBank = getInputValue("payBillBank")
    const accountNumberPayBill = getInputValue("accountNumberPayBill")
    if (!/^\d+$/.test(accountNumberPayBill) || accountNumberPayBill.length < 11) {
        alert("please enter account number")
        return
    }
    const pinInputPayBill = getInputValueNumber("pinInputPayBill")
    if (pinInputPayBill !== validPin) {
        alert("please enter your valid pin")
        return
    }
    const addAmountPayBill = getInputValueNumber("addAmountPayBill")
    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    const afterPayBillAvailableBalence = availableBlnc - addAmountPayBill
    setInnerText(afterPayBillAvailableBalence)

    document.getElementById("accountNumberPayBill").value = ""
    document.getElementById("pinInputPayBill").value = ""
    document.getElementById("addAmountPayBill").value = ""

    const data = {
        name : "Pay Bill",
        date : new Date().toLocaleTimeString()
    }
    transectionData.push(data)

})
