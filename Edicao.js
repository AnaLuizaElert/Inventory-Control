  function Listar(){
  let produtos = localStorage.getItem("Produtos");
  produtos = JSON.parse(produtos);
  let divComTabela = document.querySelector('#flex-container-listar-produtos-edicao');
  divComTabela.innerText = '';

  if(produtos == null){
    let aviso = document.createElement('h1')
    divComTabela.appendChild(aviso)
    aviso.innerText = 'Precisa cadastrar algum produto!'
    alert("asdasd s" + produtos.length);
  } else { 
    for(var i = 0; i < produtos.length; i ++){

      let table = document.createElement('table');
      divComTabela.appendChild(table);

      let td_name = produtos[i].name;
      let td_category = produtos[i].category;
    
      table.innerHTML = `<hr><p>PRODUTO ${i + 1}:</p>
      <tr>
      <td id="informacoes">
      <p><span>Nome:</span> ${td_name}<span>Categoria:</span> ${td_category}</p>
      </td>
      <td class="input-edicao"><input type="button" value="Editar" onclick="Editar(${i})" class="editar"></td>
      <td class="input-edicao"><input type="button" value="Remover" onclick="Remover(${i})" id="remover"></td>
      </tr>`;
      }
  }
}

  
  function Remover(i){
    if(confirm("Deseja realmente deletar?")){
    let produto = JSON.parse(localStorage.getItem("Produtos"));
    produto.splice(i, 1);
    localStorage.setItem("Produtos", JSON.stringify(produto));
    Listar();
    }
  }

  function Editar(i){

    let modal = document.getElementById("dv-modal");
    let botao = document.getElementById("colocar-botao")
    let produto = JSON.parse(localStorage.getItem("Produtos"));
    document.querySelector("#nome").value = produto[i].name.value;   
   document.querySelector('#flex-item-categoria').value = produto[i].category; 
    document.querySelector('#url').value = produto[i].urlImage;
    document.querySelector('#unidadeMedida').value = produto[i].unitMeasurement; 
    document.querySelector('#localizacao').value = produto[i].localization;
    document.querySelector('#localizacaoUrl').value = produto[i].localizationUrl;
    document.querySelector('#qtdPacket').value = produto[i].qtyPacket;
    document.querySelector('#qtdEstoque').value = produto[i].qtyStock;
    document.querySelector('#preco').value = produto[i].price;

    if(typeof modal == 'undefined' || modal === null)
      return;

      modal.style.display = 'Block';
      document.body.style.overflow = 'hidden';
      botao.innerHTML += `<input type="button" value="Fechar" onclick="FecharModal(${i})" id="editar">`
  }

  function FecharModal(i){

    let modal = document.getElementById("dv-modal");
    let produtos = JSON.parse(localStorage.getItem("Produtos"));

    if(typeof modal == 'undefined' || modal === null)
      return;
      
    let nome = document.querySelector("#nome").value
    let categoria = document.querySelector('#flex-item-categoria').value; 
    let url = document.querySelector('#url').value;
    let unidadeMedida = document.querySelector('#unidadeMedida').value; 
    let localizacao = document.querySelector('#localizacao').value;
    let localizacaoURL = document.querySelector('#localizacaoUrl').value;
    let qtdPacote = document.querySelector('#qtdPacket').value;
    let qtdEstoque = document.querySelector('#qtdEstoque').value;
    let preco = document.querySelector('#preco').value;
    produtos[i].name = nome;    
    produtos[i].category = categoria;    
    produtos[i].urlImage = url;    
    produtos[i].unitMeasurement = unidadeMedida;    
    produtos[i].localizacao = localizacao;    
    produtos[i].localizationUrl = localizacaoURL;    
    produtos[i].qtyPacket = qtdPacote;    
    produtos[i].qtyStock = qtdEstoque;    
    produtos[i].price = preco;       
    localStorage.setItem("Produtos", JSON.stringify(produtos));
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    location.reload();
  }