/*const fetchApi = async () => {
  const apiResponse = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
  const data = await apiResponse.json();


  const {products} = data;

 var productsResult = products.map((product, indice) => {
   return `<div class="celular-container">
   <img src=${product.photo} alt="celular">
   <div class="text-cell">
     <p class="text-p1">${product.productName}</p>
     <p class="text-p2">R$ ${product.price}</p>
     <p class="text-p3">R$ ${product.price}</p>
     <p class="text-p4">ou 2x de R$ ${product.price / 2}sem juros</p>
     <p class="text-p5">Frete grátis</p>
     <button class="btn-comprar">Comprar</button>
   </div>
 </div>
   `
 })

  console.log(products[0]);
  
  document.querySelector('.celulares').innerHTML = productsResult.join("")
}



fetchApi();*/