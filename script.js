const chk = decument.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

// calculadora 50/30/20

function clicar() {
  var num1 = document.querySelector(".num1").value;
  
  var resultado1 = parseInt(num1) / 2 ;
   document.querySelector(".resultado50").innerHTML = resultado1;
  var resultado2 = parseInt(num1) * 0.3
   document.querySelector(".resultado30").innerHTML = resultado2;
  var resultado3 = parseInt(num1) * 0.2
   document.querySelector(".resultado20").innerHTML = resultado3;
      
}


