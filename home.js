
const addMoneyBtn = document.getElementById("addMoneyBtn")
const validPin = 1234

addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("accountNumber").value
    if (accountNumber.length < 11 ) {
        alert("please enter your valid number")
        return
    }
    const pinInput = parseInt(document.getElementById("pinInput").value)
    if (pinInput !== validPin) {
        alert("please enter your valid pin number!")
        return
    }

    const addAmount = parseInt(document.getElementById("addAmount").value)
    if(isNaN(addAmount) || addAmount <= 0){
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
