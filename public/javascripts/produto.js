
function moreInfoBtn() {
  
  var descriptionBtn = document.getElementById("btn-description");
  var moreInfoBtn = document.getElementById("btn-moreInfo")
  var descInfo = document.getElementById("description")
  var moreInfo = document.getElementById("moreInfo")
  
  descriptionBtn.style.backgroundColor = "white"
  descriptionBtn.style.color = "black"
  descriptionBtn.style.border = "1px solid #575757"
  moreInfoBtn.style.border = "none"
  moreInfoBtn.style.backgroundColor = "#003884"
  moreInfoBtn.style.color = "white"
  descInfo.style.display = "none"
  moreInfo.style.display = "block"
}

function descriptionBtn() {
  
  var descriptionBtn = document.getElementById("btn-description");
  var moreInfoBtn = document.getElementById("btn-moreInfo")
  var descInfo = document.getElementById("description")
  var moreInfo = document.getElementById("moreInfo")
  
  moreInfoBtn.style.backgroundColor = "white"
  moreInfoBtn.style.color = "black"
  moreInfoBtn.style.border = "1px solid #575757"
  descriptionBtn.style.backgroundColor = "#003884"
  descriptionBtn.style.color = "white"
  descriptionBtn.style.border = "none"
  descInfo.style.display = "block"
  moreInfo.style.display = "none"
}

const cartLocalStorage = JSON.parse(localStorage.getItem('carrinho'));
// se localStorage.getItem que recebe 'carrinho' é diferente de null, let carrinho armazena cartLocalStorage
// se localStorage.getItem('carrinho') estiver vazia let carrinho armazena array vazio
let carrinho = localStorage.getItem('carrinho') !== null ? cartLocalStorage : [];

const updateCartLocalStorage = () =>{
  localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

const form = document.getElementById('form');

const nomeProduto = document.getElementById('nome').innerText;
const quantidade = document.getElementById('quantidade');
const valor = parseFloat(document.querySelector("#valor").textContent.replace('R$ ',''))
const url = parseFloat(window.location.pathname.replace('/produto/', ''));

form.addEventListener('submit', event => {
  event.preventDefault();

  if(quantidade.value != ''){
    const produtos = {
      id: url,
      nome: nomeProduto,
      valor: valor.toFixed(2), // 2 casas decimais
      quantidade: quantidade.value,
      total: valor*quantidade
      
    }
  
    carrinho.push(produtos);
    quantidade.value = '';
    updateCartLocalStorage();

    alert("Adicionado ao carrinho!")

    console.log(typeof produtos.id)
  }else{  
    alert("informe a quantidade")
  }





  console.log(typeof quantidade.value)
  console.log(valor)


})

