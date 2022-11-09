let producto = parseInt(
  prompt(
    'Escoge la seccion que deseas comprar:- 1.body - 2.remera - 3. short - 4.pantalon'
  )
)
let seguirComprando = true
let totalCompra = 0
let decision
//arreglo de productos
const productosArrays = []

class Ropa{
  constructor(id,name,price,stock){
    this.id = id
    this.name = name;
    this.price = price;
    this.stock = stock
  }
}
const body = new Ropa(1,'body',1500,20);
productosArrays.push(body);
const remera = new Ropa(2,'remera',2000,40);
productosArrays.push(remera);
const short = new Ropa (3,' short',2000,30);
productosArrays.push(short);
const pantalon = new Ropa(4,'pantalon',850,15);
productosArrays.push(pantalon);

console.log(productosArrays)



while (seguirComprando === true) {
    totalCompra = totalCompra + productosArrays[producto-1].price
  

  decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
  if (decision === 1) {
    producto = parseInt(
      prompt(
          'Escoge la seccion que deseas comprar: 1.body - 2.remera - 3. short - 4.pantalon'
      )
    )
  } else {
    seguirComprando = false
  }
}
console.log(totalCompra)

const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compra es ${totalCompraConDescuento}`)

// Escoge la seccion que deseas comprar: 1.body - 2.remera - 3. short - 4.pantalon

function descuento(valor) {
  let descuento = 0
  if (valor <= 2000) {
    descuento = 10
  } else if (valor > 2000 && valor <= 3000) {
    descuento = 15
  } else {
    descuento = 20
  }

  let valorDescuento = valor * (descuento / 100)
  let valorFinal = valor - valorDescuento
  return valorFinal
}