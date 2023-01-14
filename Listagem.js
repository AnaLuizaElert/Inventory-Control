let divComTabela = document.querySelector('#flex-container-listar-produtos-listagem');
let produtos = localStorage.getItem("Produtos");
produtos = JSON.parse(produtos);

if(produtos == null){
    let aviso = document.createElement('h1')
    divComTabela.appendChild(aviso)
    aviso.innerText = 'Precisa cadastrar algum produto!'
    alert("asdasd s" + produtos.length);
} else {  
    for(var i = 0; i < produtos.length; i ++){

      let table = document.createElement('table');
      table.className = "listagem-table";
      divComTabela.appendChild(table);

      let td_image = produtos[i].urlImage;
      let td_name = produtos[i].name;
      let td_category = produtos[i].category;
      let td_unidadeMedida = produtos[i].unitMeasurement;
      let td_localizacao = produtos[i].localization;
      let td_localizacaoUrl = produtos[i].localizationUrl;
      let td_qtdPack = produtos[i].qtyPacket;
      let td_qtdEstoque = produtos[i].qtyStock;
      let td_precoUnitario = produtos[i].price;
      let td_precoTotal = td_precoUnitario * td_qtdEstoque;

      table.innerHTML = `
      <label class="divProdutoTitulo">PRODUTO ${i + 1}:</label>
      <tr>
        <td class="tr_imagens" colspan = "4">
            <p>Produto</p>
            <br>
            <img src = ${td_image}>
        </td>
        <td class="tr_imagens" colspan = "4">
          <p>Localização</p>
          <br>
          <img src = ${td_localizacaoUrl}>
        </td>
      </tr>
      <tr>
        <td>
            <p><span class="classification">Nome:</span> ${td_name}</p>
        </td>
        <td>
            <p><span class="classification">Categoria:</span> ${td_category}</p>
        </td>
        <td>
            <p><span class="classification">Localização:</span>  ${td_localizacao}</p>
        </td>
        <td>
            <p><span class="classification">Quantidade no estoque:</span> ${td_qtdEstoque}</p>
        </td>
        <td>
            <p><span class="classification">Quantidade por packet:</span> ${td_qtdPack}</p>
        </td>
        <td>
            <p><span class="classification">Unidade de medida:</span> ${td_unidadeMedida}</p>
        </td>
        <td>
            <p><span class="classification">Preço unitário:</span> R$${td_precoUnitario}</p>
        </td>
        <td>
            <p><span class="classification">Preço total em estoque:</span> R$${td_precoTotal}</p>
        </td>
      </tr>`;
    }
}