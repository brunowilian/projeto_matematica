function verificar() {
  let valor = document.querySelector("#valor").value;
  let mes = document.querySelector("#mes").value;
  let banco = document.querySelector("#banco").value;
  let consignado = document.querySelector("#consignado").value;
  let correntista = document.querySelector("#correntista").value;
  var invalormes = document.querySelector(".valormes");
  var invalortotal = document.querySelector(".valortotal");

  let juros, valormes, valortotal;

  if (valor == "") {
    alert("Infomar valor do emprestimo.")
  } else if (mes == "") {
    alert("Informar a quantidade de meses.")
  }

  if (banco == "brasil" && consignado == "Nao" && correntista == "Nao") {
    juros = +((valor * 3.06 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);

  } else if (banco == "brasil" && consignado == "Sim" && correntista == "Nao") {
    juros = +((valor * 2.96 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "brasil" && consignado == "Nao" && correntista == "Sim") {
    juros = +((valor * 2.72 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "brasil" && consignado == "Sim" && correntista == "Sim") {
    juros = +((valor * 2.52 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  }
  // banco caixa
  if (banco == "caixa" && consignado == "Nao" && correntista == "Nao") {
    juros = +((valor * 3.32 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);

  } else if (banco == "caixa" && consignado == "Sim" && correntista == "Nao") {
    juros = +((valor * 3.22 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "caixa" && consignado == "Nao" && correntista == "Sim") {
    juros = +((valor * 3.12 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "caixa" && consignado == "Sim" && correntista == "Sim") {
    juros = +((valor * 3.01 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  }
  // banco Itau
  if (banco == "itau" && consignado == "Nao" && correntista == "Nao") {
    juros = +((valor * 3.72 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "itau" && consignado == "Sim" && correntista == "Nao") {
    juros = +((valor * 3.63 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "itau" && consignado == "Nao" && correntista == "Sim") {
    juros = +((valor * 3.56 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  } else if (banco == "itau" && consignado == "Sim" && correntista == "Sim") {
    juros = +((valor * 3.42 / 100) * mes).toFixed(2);
    valortotal = +(valor++ + juros).toFixed(2);
    valormes = +(valortotal / mes).toFixed(2);
  }

  let valortotall = valortotal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  let valormess = valormes.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  invalortotal.textContent = valortotall;
  invalormes.textContent = valormess;
}