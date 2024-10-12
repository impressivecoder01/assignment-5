// const donateButton = document.getElementById('donate-btn-one')
// for(const donateButton of donateButtons){
//     donateButton.addEventListener('click', ()=>{
//         donateHandler()
//         // donateHandlerTwo()
//     })
// }

const donateButton = () =>  {
    document.getElementById("donate-btn-one").addEventListener("click", ()=>{
        donateHandler()
        updateFirstBalance()
    })
}

const donateHandler = () => {
    const getInputBalance =parseInt(document.getElementById('total-balance').value) ;
    console.log(getInputBalance)
    const navBalance =parseInt(document.getElementById('nav-balance').innerText);
    if(typeof navBalance === "number" && typeof getInputBalance === "number" && navBalance > getInputBalance) {
        const remainingBalance = navBalance - getInputBalance;
        document.getElementById('nav-balance').innerHTML = `${remainingBalance} BDT`
    }
    else{
        alert('something is wrong')
    }
}


const donateButtonTwo = () => {
    document.getElementById('donate-btn-two').addEventListener("click" , ()=>{
        donateHandlerTwo()
    })
}

const donateHandlerTwo = () => {
    const getInputBalanceTwo = parseInt(document.getElementById('total-balanceTwo').value);
    const navBalance = parseInt(document.getElementById("nav-balance").innerText);
    if(typeof navBalance === "number" && typeof getInputBalanceTwo === "number" && navBalance > getInputBalanceTwo) {
        const remainingBalanceTwo = navBalance - getInputBalanceTwo;
        document.getElementById("nav-balance").innerHTML = `${remainingBalanceTwo} BDT`
    }
    else{
        alert("donation not done properly")
    }
}

const donateButtonThree = () => {
    document.getElementById("donate-btn-three").addEventListener("click", () => {
        donateHandlerThree()
    })
}

const donateHandlerThree = () => {
    const getInputBalanceThree = parseInt(document.getElementById("total-balance-three").value);
        const navBalance = parseInt(document.getElementById("nav-balance").innerText)
        if(typeof navBalance === "number" && typeof getInputBalanceThree === "number" && navBalance > getInputBalanceThree){
            const remainingBalanceThree = navBalance - getInputBalanceThree
            document.getElementById("nav-balance").innerHTML = ` ${remainingBalanceThree} BDT`
        }
        else{
            alert("not done")
        }
}


const updateFirstBalance = () => {
   const getFirst = parseInt(document.getElementById("first-card-balance").innerText);
   const getInputBalance =parseInt(document.getElementById('total-balance').value);
   const update = getFirst + getInputBalance;
   document.getElementById("first-card-balance").innerText = update 
}













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