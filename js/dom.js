const donateButtons = document.querySelectorAll('.donate-btn')
for(const donateButton of donateButtons){
    donateButton.addEventListener('click', ()=>{
        donateHandler()
    })
}


const donateHandler = (btn) => {
    const getInputBalance =parseFloat(document.querySelector('.input-field').value) ;
    const navBalance =parseInt(document.getElementById('nav-balance').innerText);
    if(typeof navBalance === "number" && navBalance > getInputBalance) {
        const remainingBalance = navBalance - getInputBalance
        document.getElementById('nav-balance').innerText = remainingBalance
    }
    else{
        alert('something is wrong')
    }
}

