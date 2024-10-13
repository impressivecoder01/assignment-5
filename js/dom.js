// const donateButton = document.getElementById('donate-btn-one')
// for(const donateButton of donateButtons){
//     donateButton.addEventListener('click', ()=>{
//         donateHandler()
//         // donateHandlerTwo()
//     })
// }

// const donateButton = () =>  {
//     document.getElementById("donate-btn-one").addEventListener("click", ()=>{
//         donateHandler()
//         updateFirstBalance()
//         donationHistory()
//     })
// }

const donateHandler = () => {
    const getInputBalance =parseInt(document.getElementById('total-balance').value) ;
    console.log(getInputBalance)
    const navBalance =parseInt(document.getElementById('nav-balance').innerText);
    if(typeof navBalance === "number" && typeof getInputBalance === "number" && navBalance > getInputBalance) {
        const remainingBalance = navBalance - getInputBalance;
        document.getElementById('nav-balance').innerText = remainingBalance
        document.getElementById("show-modal-btn").showModal()
        updateFirstBalance()
        donationHistory()
    }
    else{
        alert("The donation for flood relief in Feni, Bangladesh has failed.")
    }
}


// const donateButtonTwo = () => {
//     document.getElementById('donate-btn-two').addEventListener("click" , ()=>{
//         donateHandlerTwo()
//         updateFirstBalanceTwo()
//         donationHistoryTwo()
//     })
// }

const donateHandlerTwo = () => {
    const getInputBalanceTwo = parseInt(document.getElementById('total-balanceTwo').value);
    const navBalance = parseInt(document.getElementById("nav-balance").innerText);
    if(typeof navBalance === "number" && typeof getInputBalanceTwo === "number" && navBalance > getInputBalanceTwo) {
        const remainingBalanceTwo = navBalance - getInputBalanceTwo;
        document.getElementById("nav-balance").innerText = remainingBalanceTwo
        document.getElementById("show-modal-btn").showModal()
        updateFirstBalanceTwo()
        donationHistoryTwo()
    }
    else{
        alert("Donate for Flood at Noakhali, Bangladesh has failed.")
    }
}

// const donateButtonThree = () => {
//     document.getElementById("donate-btn-three").addEventListener("click", () => {
//         donateHandlerThree()
//         updateFirstBalanceThree()
//         donationHistoryThree()
//     })
// }

const donateHandlerThree = () => {
    const getInputBalanceThree = parseInt(document.getElementById("total-balance-three").value);
        const navBalance = parseInt(document.getElementById("nav-balance").innerText)
        if(typeof navBalance === "number" && typeof getInputBalanceThree === "number" && navBalance > getInputBalanceThree){
            const remainingBalanceThree = navBalance - getInputBalanceThree
            document.getElementById("nav-balance").innerText = remainingBalanceThree
            document.getElementById("show-modal-btn").showModal()
            updateFirstBalanceThree()
            donationHistoryThree()
        }
        else{
            alert("Aid for Injured in the Quota Movement has failed")
        }
}


const updateFirstBalance = () => {
   const getFirst = parseInt(document.getElementById("first-card-balance").innerText);
   const getInputBalance =parseInt(document.getElementById('total-balance').value);
   const update = getFirst + getInputBalance;
   document.getElementById("first-card-balance").innerText = update 
}

const updateFirstBalanceTwo = () => {
    const getSecond = parseInt(document.getElementById("second-card-balance").innerText);
    const getInputBalance = parseInt(document.getElementById("total-balanceTwo").value);
    const update = getSecond + getInputBalance
    document.getElementById("second-card-balance").innerText = update
}


const updateFirstBalanceThree = () => {
    const getThird = parseInt(document.getElementById("third-card-balance").innerText);
    const getInputBalance = parseInt(document.getElementById("total-balance-three").value);
    const update = getThird + getInputBalance;
    document.getElementById("third-card-balance").innerText = update
}



const donationHistory = () => {
    const firstCardTitle = document.getElementById("first-title").innerText;
    const getInputBalance =parseInt(document.getElementById('total-balance').value)
    const historyConatainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("p-4", "rounded-sm");
    div.innerHTML = `
    <h2 class = "font-bold">${firstCardTitle}</h2>
    <p>Donation amount:${getInputBalance} </p>
    <p>Date:${new Date()}</p>
`
historyConatainer.appendChild(div)
}

const donationHistoryTwo = () => {
    const secondCardTitle = document.getElementById("second-title").innerText;
    const getInputBalance = parseInt(document.getElementById("total-balanceTwo").value)
    const historyConatainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("p-4", "rounded-sm");
    div.innerHTML = `
    <h2 class = "font-bold">${secondCardTitle}</h2>
    <p>Donation amount:${getInputBalance} </p>
    <p>Date:${new Date()}</p>
`
historyConatainer.appendChild(div) 
}

const donationHistoryThree = () => {
    const thirdCardTitle = document.getElementById("third-title").innerText;
    const getInputBalance = parseInt(document.getElementById("total-balance-three").value)
    const historyConatainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("p-4", "rounded-sm");
    div.innerHTML = `
    <h2 class = "font-bold">${thirdCardTitle}</h2>
    <p>Donation amount:${getInputBalance} </p>
    <p>Date:${new Date()}</p>
`
historyConatainer.appendChild(div) 
}

document.getElementById("donation-btn").addEventListener("click", ()=>{
    document.getElementById("donation-btn").classList.add("btn-accent");
    document.getElementById("history-btn").classList.remove("btn-accent")
    document.getElementById("donation-section").classList.remove("hidden")
    document.getElementById("history-container").classList.add("hidden")
})

document.getElementById("history-btn").addEventListener("click", ()=>{
    document.getElementById("history-btn").classList.add("btn-accent");
    document.getElementById("donation-btn").classList.remove("btn-accent")
    document.getElementById("donation-section").classList.add("hidden")
    document.getElementById("history-container").classList.remove("hidden")
})




// const donateButtonstwo = document.querySelectorAll('.donate-btn')
// for(const donateButton of donateButtons){
//     donateButton.addEventListener('click', ()=>{
//         donateHandler()
//         donateHandlerTwo()
//     })
// }



// const donateHandlerTwo = () => {
//     const getInputBalanceTwo = parseInt(document.getElementById("total-balanceTwo").value);
//     const navBalance = parseInt(document.getElementById("nav-balance").innerText)
//     if(typeof navBalance === "number" && typeof getInputBalanceTwo === "number" && navBalance > getInputBalanceTwo){
//         const remainingBalanceTwo = navBalance - getInputBalanceTwo
//         document.getElementById("nav-balance").innerText = remainingBalanceTwo
//     }
//     else{
//         alert("something is wrong.")
//     }
// }