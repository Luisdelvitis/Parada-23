
const itens = {
    "pera": 1.00,
    "abacate": 0.79,
    "goiaba": 1.00,
    "kiwi": 7.00,
    "morango": 6.00,
    "maça": 1.70,
    "banana": 0.70,
    "laranja": 1.25,
    "uva": 4.10,
    "manga": 4.10,
    "acerola": 2.34,
    "alho": 0.75,
    "cebola": 1.30,
    "batata": 3.00,
    "alface": 3.00,
    "brocolis": 1.50,
    "cenoura": 1.75,
    "couve": 1.19,
    "pimentão": 2.40,
    "tomate": 10.05
  };
  
  
  function obterValorItem() {
   
    const itemInput = document.getElementById("itemInput");
    const item = itemInput.value.trim().toLowerCase();
    
   
    const resultado = document.getElementById("resultado");
  
   
    if (item in itens) {

      const valor = itens[item];

      resultado.textContent = `O valor de ${item} é R$${valor.toFixed(2)}`;
      resultado.style.color = "green";

    } 
    
    else {

      resultado.textContent = "Item não encontrado.";
      resultado.style.color = "red";

    }
  
   
    itemInput.value = '';
  }
  