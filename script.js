const amountEl = document.getElementById('amount');
const outputEl = document.getElementById('output');
const outputEl2 = document.getElementById('output2');
const outputEl3 = document.getElementById('output3');

amountEl.addEventListener('input',(e)=>{
    // console.log(e);
    const number = e.target.value;
    // console.log(number);
    const result = Intl.NumberFormat().format(number);
    const result2 = Intl.NumberFormat("th-TH",{
        style: "currency",
        currency:"THB"
    }).format(number);
    const result3 = Intl.NumberFormat("en",{
        notation:"compact"
    }).format(number);


    outputEl.innerText = result;
    outputEl2.innerText = result2;
    outputEl3.innerText = result3;
});
