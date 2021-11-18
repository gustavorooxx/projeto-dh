
const produtos = JSON.parse(localStorage.getItem('carrinho'));

const carrinho = localStorage.getItem('carrinho') !== null ? produtos : [];

const updateCartLocalStorage = () => {
    localStorage.setItem('carrinho', JSON.stringify(produtos))
}


getProdutos();
getSubTotal();

//EXIBINDO PRODUTOS
function getProdutos() {
    
    const divProdutos = document.getElementById('prev-cart')
    
    if (!localStorage.getItem('carrinho') || localStorage.getItem('carrinho') == '[]' ) {
        let semProdutos = `<p class="sem-produtos"> <img src="/images/tenor.gif"></img></p>`
        divProdutos.innerHTML = semProdutos;
    } else {
        // console.log('tem produtos')
        let produtosCarrinho = ''
        for (const produto of produtos) {
            
            produtosCarrinho += `<div class="product" id="product">
            
            <i class="far fa-times-circle"></i>
            
            <p id="id">${produto.id}</p>
            <p class="product-name" id="nome" >${produto.nome}</p>
            
            <span class="product-value" id="valor">R$ ${produto.valor.toFixed(2)}</span>
            
            <div class="quantidade"><p id="add">+</p><input type="number" max="20" min="0" value="${produto.quantidade}" id="qtd" disabled=""><p id="subtract">-</p></div>
            
            <span id="total">R$ ${parseFloat(produto.valor * produto.quantidade).toFixed(2)}</span>
            
            </div>`
        }
        
        divProdutos.innerHTML = produtosCarrinho;
        
    }
    
}



//EXIBINDO SUBTOTAL DO PRODUTO
function getSubTotal(){
    
    var subtotalGeral = 0;
    for (let index = 0; index < carrinho.length; index++) {
        subtotalGeral += carrinho[index].total;
    }
    const subTotal = document.getElementById('subtotal')

    if (!localStorage.getItem('carrinho')) {
        let semProdutos = `<p>SUBTOTAL</p>
        <p class="subtotal-value">R$ 0,00 </p>`
        subTotal.innerHTML = semProdutos;
    }else {
        // console.log('tem produtos')
        let subTotalValue = ''

        subTotalValue += `<p>SUBTOTAL</p>
        <p class="subtotal-value">R$ ${subtotalGeral.toFixed(2)}</p>`
        subTotal.innerHTML = subTotalValue;
    }
}




const adds = document.querySelectorAll('#add')


// console.log(adds)
//SOMANDO QUANTIDADE DO PRODUTO
for (let i = 0; i < adds.length; i++) {
    adds[i].addEventListener("click", function (e) {
        const qtdAtual = e.target.parentElement.children
        // console.log(qtdAtual)
        
        qtdAtual.qtd.value = Number(qtdAtual.qtd.value) + 1;
        
        const qtd = e.target.parentElement;
        const product = qtd.parentElement.children;
        console.log(product);
        const id = parseInt(product.id.innerText);
        const valor = Number(product.valor.innerText.replace('R$', ''))
        let total = Number(product.total.innerText.replace('R$', ''))
        total = valor * qtdAtual.qtd.value
        
        product.total.innerText = 'R$ ' + total.toFixed(2)
        
        //localizando se existe no carrinho o produto a ser adicionado
        let locaId = carrinho.findIndex((item) => item.id == id);
        //se não localizar retorna -1, se for maior é pq existe
        if (locaId > -1) {
            console.log("tem desse produto!")
            // soma naquela posição a quantidade
            carrinho[locaId].quantidade += 1;
            carrinho[locaId].total = total;
            updateCartLocalStorage();
            
            window.location.reload();
        }
        
    })
}


const subs = document.querySelectorAll('#subtract')
//SUBTRAINDO QUANTIDADE DO PRODUTO
for (let i = 0; i < subs.length; i++) {
    subs[i].addEventListener('click', function(e){
        const qtdAtual = e.target.parentElement.children
        qtdAtual.qtd.value = Number(qtdAtual.qtd.value) - 1;
        
        const qtd = e.target.parentElement;
        const product = qtd.parentElement.children;
        // console.log(product);
        const id = parseInt(product.id.innerText);
        const valor = Number(product.valor.innerText.replace('R$', ''))
        let total = Number(product.total.innerText.replace('R$', ''))
        total = valor * qtdAtual.qtd.value

        product.total.innerText = 'R$ ' + total.toFixed(2)

        //localizando se existe no carrinho o produto a ser adicionado
        let locaId = carrinho.findIndex((item) => item.id == id);
        //se não localizar retorna -1, se for maior é pq existe
        if (locaId > -1) {
            console.log("tem desse produto!")
            // soma naquela posição a quantidade
            carrinho[locaId].quantidade -= 1;
            carrinho[locaId].total = total;
            updateCartLocalStorage();
            window.location.reload();

        }if(carrinho[locaId].quantidade == 0){
            console.log("zerou")
            console.log(carrinho[locaId])
            let buscarPor = carrinho[locaId]
            carrinho.splice(carrinho.indexOf(buscarPor), 1)
            updateCartLocalStorage();
        }
    })
    

}

//EXCLUINDO PRODUTO
const exclude = document.querySelectorAll('.fa-times-circle')
for (let i = 0; i < exclude.length; i++) {
    exclude[i].addEventListener('click', function(e){
        let idProduto = (exclude[i].parentElement.children[1].innerText)
        // console.log(idProduto);
        let locaId = carrinho.findIndex((item) => item.id == idProduto)
        let buscaPor = carrinho[locaId];
        console.log(buscaPor)
        carrinho.splice(carrinho.indexOf(buscaPor), 1)
        updateCartLocalStorage();
        window.location.reload()
    })
}







