
function enviar(){
    var category = document.querySelector('#flex-item-categoria-cadastro').value;
    var nome = document.querySelector('#nome').value;
    var urlImage = document.querySelector('#url').value;
    var unitMeasurement = document.querySelector('#unidadeMedida').value;
    var localization = document.querySelector('#localizacao').value;
    var localizationUrl = document.querySelector('#localizacaoUrl').value;
    var qtyPacket = document.querySelector('#qtdPacket').value;
    var qtyStock = document.querySelector('#qtdEstoque').value;
    var price = document.querySelector('#preco').value;
    let listProducts = [];
    
    let product = {
        name: nome,
        category: category,
        urlImage: urlImage,
        unitMeasurement: unitMeasurement,
        localization: localization,
        localizationUrl: localizationUrl,
        qtyPacket: qtyPacket,
        qtyStock: qtyStock,
        price: price
    }

    let listJson = localStorage.getItem('Produtos');
    if(listJson){
        listProducts = JSON.parse(listJson)
    }

    listProducts.push(product);
    localStorage.setItem("Produtos", JSON.stringify(listProducts));
    alert("Produto adicionado!!!");
    location.reload();
}