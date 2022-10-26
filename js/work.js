let producto = parseInt(
    prompt(
      'Escoge la seccion que deseas comprar:- 1.body - 2.remera - 3. short - 4.pantalon'
    )
  )
  let seguirComprando = true
  let totalCompra = 0
  let decision
  
  // clase detalle del producto
  class detalle{
    constructor(id,name,price,stock){
      this.id = id
      this.name = name;
      this.price = price;
      this.stock = stock
    }
  }
  const body = new detalle(1,'body',1500,20);
  const remera = new detalle(2,'remera',2000,40);
  const short = new detalle(3,' short',2000,30);
  const pantalon = new detalle(4,'pantalon',850,15);
 
  body.price = 650
  
  
  while (seguirComprando === true) {
    if (producto === body.id) {
      totalCompra = totalCompra + body.price
      body.stock = body.stock-1
    } else if (producto === remera.id) {
      totalCompra = totalCompra + remera.price
    } else if (producto === short.id) {
      totalCompra = totalCompra + short.price
    } else if (producto === pantalon.id) {
      totalCompra = totalCompra + pantalon.price
    }
  
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