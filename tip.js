const bill=document.querySelector("#billamount")
const tip=document.querySelector("#tipamount")
const total=document.querySelector("#total")
document.querySelector("#calculate").addEventListener("click",()=>{
    check(bill.value,tip.value);
})
const check= (first,second)=>{
    if(first<0 && second<0)
    {
        console.log("negative value");
        bill.classList.toggle("err")
       tip.classList.toggle("err")
    //    first.innerText=`enter the correct amount`;

    }
    else
    {
        tipcal(first,second);
    }
}
const tipcal=(first,second)=>{
 
     const totalvalue=first*(1+(second/100))
    total.innerHTML=totalvalue.toFixed(2);

}