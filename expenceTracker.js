document.addEventListener("DOMContentLoaded" ,()=>{
    const Container = document.querySelector(".container");
    const ExpenceTracker = document.getElementById("expence-tracker");
    const ExpenceName = document.getElementById("expence-name");
    const ExpenceAmount = document.getElementById("expence-amount");
    const addBtn = document.getElementById("add-expence");
    const trackExpence = document.getElementById("track-expence");
    const ExpenceList = document.getElementById("expence-list");
    const totalSpend = document.getElementById("total");
    const ExpenceTotal = document.getElementById("expence-total");
    const removeExpence = document.getElementById("clearExpence");

    const cartName = [];
    let expenceAmt = 0;
    
    ExpenceTracker.addEventListener("submit" , (event)=>{
        event.preventDefault();
        const name = ExpenceName.value.trim();
        const amount = parseFloat(ExpenceAmount.value);

        if(name!=="" && !isNaN(amount) && amount>0){
            const newExpences={
                id:Date.now(),
                name:name,
                amount:amount,
            };
            cartName.push(newExpences)
            console.log(cartName)
            saveExpencesToLocal();
            Addamount(newExpences);
            expenceList(newExpences);
            ExpenceName.value="";
            ExpenceAmount.value="";
        }

    })
    function Addamount(){
        // expenceAmt+=expence.amount;
        // console.log(expenceAmt)
        // ExpenceTotal.textContent=`${expenceAmt}`;
        const myTotal = cartName.reduce((initialAmt , currentValue)=>initialAmt+=currentValue.amount,0);
        console.log(myTotal)
        ExpenceTotal.textContent=`${myTotal}`;
    }
    function expenceList(myExpence){
        console.log(myExpence.name);
        console.log(myExpence.amount);
        let myLi = document.createElement('li');
        myLi.innerHTML=`${myExpence.name} - ${myExpence.amount}`;
        ExpenceList.append(myLi);


    }
    function  saveExpencesToLocal(){
        localStorage.setItem("expences" ,JSON.stringify(cartName))
    }
    removeExpence.addEventListener("click" ,()=>{
        cartName.length = 0;
        console.log(cartName);
        ExpenceList.textContent="";
        Addamount();
    })
})