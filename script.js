botao.addEventListener("click", function () {
  var nomeCliente = nome.value;
  var quantiaSorvete = quantidade.value;
  var saborSorvete = sabores.value;

  /*alert("nome:" + nomeCliente + "qnt:" quantiaSorvete "sabor:" + saborSorvete);*/

  pedidoNome.innerHTML = nomeCliente;
  pedidoQuantia.innerHTML = quantiaSorvete;
  pedidoSabor.innerHTML = saborSorvete;
});
