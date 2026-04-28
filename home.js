
const addMoneyBtn = document.getElementById("addMoneyBtn")

addMoneyBtn.addEventListener("click", function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("accountNumber").value
    const addAmount = parseInt(document.getElementById("addAmount").value)
    const pinInput = parseInt(document.getElementById("pinInput").value)
    
    const availableBlnc = parseInt(document.getElementById("availableBlnc").innerText)
    
    const totalAvailableBalence = availableBlnc + addAmount
    document.getElementById("availableBlnc").innerText = totalAvailableBalence
  

})
