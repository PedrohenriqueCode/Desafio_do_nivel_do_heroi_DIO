//jSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
// usando Jason 
let invoice = { 
    name: "Pedro",
    age: 28,
    products: {
        0: ["Mouse 2xwm", 29.99],
        1: ["Teclado mecânico",129.99],
        2: [ "Monitor", 899.99],
        3: ["Tv 100 polegadas"],
    }, 
    taxes: "98.90"
}
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.nome}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("----------------------------------------")

    for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(` - ${ productName } : R$ ${ productPrice }`)
 }
    

}

console.log(invoice.products)