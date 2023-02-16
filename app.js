
function set_inner_text(id , value)
{   
    document.getElementById(id).innerText = value
}
   
function set_inner_value(id)
{   
    let x = document.getElementById(id).value;
    return parseInt(x);
}
function space(id)
{   
    document.getElementById(id).value = ""

}

function totals()
{
    const one = document.getElementById("chocolate").innerText
    const two = document.getElementById("rose").innerText
    const three = document.getElementById("diary").innerText
    const totals = parseInt(one) + parseInt(two) + parseInt(three)
    console.log(totals)
    set_inner_text("total",totals)
}

 

document.getElementById("kitkat-buy-btn").addEventListener("click",function(){
    let quantity = set_inner_value("kitkat-quantity")
    quantity *= 200;
    set_inner_text("chocolate",quantity)
    space("kitkat-quantity")
    totals()
})

document.getElementById("rose-buy-btn").addEventListener("click",function(){
    let quantity = set_inner_value("rose-quantity")
    quantity *= 100;
    set_inner_text("rose",quantity)
    space("rose-quantity")
    totals()
})
document.getElementById("diary-buy-btn").addEventListener("click",function(){
    let quantity = set_inner_value("diary-quantity")
    quantity *= 100;
    set_inner_text("diary", quantity)
    space("diary-quantity")
    totals()
})

document.getElementById("promo-btn").addEventListener("click",function(){
    const test = document.getElementById("promo-code").value
    const val = document.getElementById("total").innerText

    if(test === '101')
    {
        let x = val -  parseInt(val * 0.1)
        set_inner_text("total",x)
        set_inner_text("all-total" , x)
    }
    else
    {
        alert("Wrong Promo Code Entered!!")
    }

    
})

