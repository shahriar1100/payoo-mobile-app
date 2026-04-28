
const addMoneyBtn = document.getElementById("addMoneyBtn")
const validPin = 1234

addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("accountNumber").value
    if (accountNumber.length < 11) {
        alert("please enter your valid number")
        return
    }
    const pinInput = parseInt(document.getElementById("pinInput").value)
    if (pinInput !== validPin) {
        alert("please enter your valid pin number!")
        return
    }

    const addAmount = parseInt(document.getElementById("addAmount").value)
    if (isNaN(addAmount) || addAmount <= 0) {
        alert("please enter your amount")
        return
    }

    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)

    const totalAvailableBalence = availableBlnc + addAmount
    document.getElementById("availableBlnc").innerText = totalAvailableBalence

    document.getElementById("accountNumber").value = ""
    document.getElementById("addAmount").value = ""
    document.getElementById("pinInput").value = ""

})

// toggoling


// main toggoling button
const addMoneyBox = document.getElementById("addMoneyBox")
const cashOutBox = document.getElementById("cashOutBox")
const transferMoneyBox = document.getElementById("transferMoneyBox")
const getBonusBox = document.getElementById("getBonusBox")
const payBillBox = document.getElementById("payBillBox")
const transactionsBox = document.getElementById("transactionsBox")

// form
const addMoneyForm = document.getElementById("addMoneyForm")
const cashOutForm = document.getElementById("cashOutForm")

addMoneyBox.addEventListener("click", function () {
    cashOutForm.classList.add("hidden")
    addMoneyForm.classList.remove("hidden")


})
cashOutBox.addEventListener("click", function () {
    addMoneyForm.classList.add("hidden")
    cashOutForm.classList.remove("hidden")

})


// cashout form validation
const cashOutBtn = document.getElementById("cashOutBtn")

cashOutBtn.addEventListener("click", function (e) {
    e.preventDefault()


    const cashOutAgentNum = document.getElementById("cashOutAgentNum").value
    if (cashOutAgentNum.length < 11) {
        alert("please enter valid agent number")
        return
    }
    const cashOutPinNum = parseInt(document.getElementById("cashOutPinNum").value)
    if (cashOutPinNum !== validPin) {
        alert("please enter your valid pin")
        return
    }

    const cashOutAddAmount = parseInt(document.getElementById("cashOutAddAmount").value)
    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    const afterCashOut = availableBlnc - cashOutAddAmount
    document.getElementById("availableBlnc").innerText = afterCashOut

    document.getElementById("cashOutAgentNum").value = ""
    document.getElementById("cashOutPinNum").value = ""
    document.getElementById("cashOutAddAmount").value = ""
})