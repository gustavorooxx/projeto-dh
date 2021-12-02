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

const btnClose = document.getElementById('alerta-close');

btnClose.addEventListener('click', function (e) {
    const alert = document.getElementById('alerta');
    alert.style.display = "none"
})

