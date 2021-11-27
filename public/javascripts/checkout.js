
const produtos = JSON.parse(localStorage.getItem('carrinho'));
var frete = localStorage.getItem('frete');

console.log(produtos)


getCheckout();


function getCheckout() {

    //Produtos
    const products = document.getElementById('products')

    let produtosCarrinho = ''

    for (const produto of produtos) {
        produtosCarrinho +=
            `
  <div class"product">
    <p>${produto.nome} x ${produto.quantidade}</p>
    <p>R$ ${parseFloat(produto.valor * produto.quantidade).toFixed(2)}</p>
  </div> 
  `
    }

    products.innerHTML = produtosCarrinho;


    // Subtotal

    const subtotalDiv = document.getElementById('subtotal')


    var subTotalGeral = 0;
    for (let index = 0; index < produtos.length; index++) {
        subTotalGeral += produtos[index].total;
    }

    subtotalDiv.innerHTML =
        `
<p class="bold">Subtotal</p>
<p class="thin">R$ ${subTotalGeral.toFixed(2)}</p>
`

    //Frete

    let freteDiv = document.getElementById('shipping');

    // console.log("FRETE " + typeof frete);

    if (frete == "Retirar na loja") {
        freteDiv.innerHTML = `
<p class="bold">Envio</p>
<p class="thin">${frete}</p>
`
    } else {
        frete = parseFloat(frete).toFixed(2)
        freteDiv.innerHTML = `
<p class="bold">Envio</p>
<p class="thin">R$ ${frete}</p>
`
    }
    //Total

    const totalDiv = document.getElementById('total');
    const total = subTotalGeral + parseFloat(frete);
    // console.log(typeof total)

    if (frete == "Retirar na loja") {
        totalDiv.innerHTML =
            `
<p>Total</p>
<p>R$ ${subTotalGeral.toFixed(2)}</p>
`
    } else {

        totalDiv.innerHTML =
            `
    <p>Total</p>
    <p>R$ ${total.toFixed(2)}</p>
    `

    }

}


const id = document.querySelector("body > div.page-container > div.checkout-container > div.user-info > p:nth-child(1)").textContent

const btn = document.querySelector("body > div.page-container > div.payment-container > button")

btn.addEventListener('click', function(){

    console.log('clicou')
    Swal.fire({
        icon: 'success',
        title: 'Pedido solicitado com sucesso ! Continue comprando...',
        confirmButtonColor: "#003884",
    })

    localStorage.clear();

    setTimeout(function () {
        window.location.href = '/loja'
    }, 3500);

})





