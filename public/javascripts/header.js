const cart = JSON.parse(localStorage.getItem('carrinho'));

getCartHeader();

function myFunction(){
    var element = document.getElementById("myLinks");

    if(element.style.opacity === "1"){
        element.style.marginLeft = "100%"
        element.style.opacity = "0";
        element.style.pointerEvents = "none"

    }  else{
        element.style.opacity = "1"
        element.style.marginLeft = "0"
        element.style.pointerEvents = "all"
    }
}

//valor do
function getCartHeader(){
    
    const spanTotal = document.getElementById('total-cart');
    const spanTotalMobile = document.getElementById('total-cart-mobile')
    console.log(spanTotal)
    
    if (!localStorage.getItem('carrinho') || localStorage.getItem('carrinho') == '[]' ) {
        spanTotal.innerText = '(R$ 0,00)'
    } else{
        var subtotalGeral = 0;
        for (let index = 0; index < cart.length; index++) {
            subtotalGeral += cart[index].total;
            console.log(cart[index].total)
        }
        spanTotal.innerText = '('+ 'R$ ' + subtotalGeral.toFixed(2) + ')';
        spanTotalMobile.innerText = '('+ 'R$' + subtotalGeral.toFixed(2) + ')';
    }

    
}





