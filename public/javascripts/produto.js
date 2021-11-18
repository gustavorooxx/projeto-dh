
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
const carrinho = localStorage.getItem('carrinho') !== null ? cartLocalStorage : [];
console.log(carrinho)

const updateCartLocalStorage = () =>{
  localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

const form = document.getElementById('form');

const nomeProduto = document.getElementById('nome').innerText;
const quantidade = document.getElementById('quantidade');
const valor = parseFloat(document.querySelector("#valor").textContent.replace(',' , '.'));
const url = parseFloat(window.location.pathname.replace('/loja/produto/', ''));

form.addEventListener('submit', event => {
  event.preventDefault();
//localizando se existe no carrinho o produto a ser adicionado
 let locaId = carrinho.findIndex((item) => item.id == url);
 //se não localizar retorna -1, se for maior é pq existe
 if(locaId > -1){
    console.log("tem desse produto!")
    // soma naquela posição a quantidade
    
    carrinho[locaId].quantidade += Number(quantidade.value)
    const total = carrinho[locaId].quantidade * valor;
    carrinho[locaId].total = total;
    // carrinho[locaId].total = Number(valor)*Number(quantidade.value)
    quantidade.value = '';
    updateCartLocalStorage();
    alert("Adicionado ao carrinho!")
 }else {

   carrinho.push({
       id: url,
       nome: nomeProduto,
       valor: valor,
       quantidade: Number(quantidade.value),
       total: valor*Number(quantidade.value)
     })
 
     quantidade.value = '';
     updateCartLocalStorage();
     alert("Adicionado ao carrinho!")
 }

})



