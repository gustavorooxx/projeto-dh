const btn = document.getElementById('btn-save');

btn.addEventListener('click', function(e){
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Alterações realizadas com sucesso!',
            confirmButtonColor: "#003884",
          })
    }, 1000);
  
})

const btn2 = document.getElementById('btn-save2');

btn2.addEventListener('click', function(e){
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Alterações realizadas com sucesso!',
            confirmButtonColor: "#003884",
          })
    }, 800);
  
})



const btnClose = document.getElementById('alerta-close');

btnClose.addEventListener('click', function (e) {
    const alert = document.getElementById('alerta');
    alert.style.display = "none"
})



