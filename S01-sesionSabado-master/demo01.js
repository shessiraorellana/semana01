class Emisor{constructor(razonSocial,direccion,telefono,NIF){
    this.razonSocial=razonSocial,
    this.direccion=direccion,
    this.telefono=telefono,
    this.NIF=NIF
}}
class Receptor{constructor(razonSocial,direccion,telefono,NIF){
    this.razonSocial=razonSocial,
    this.direccion=direccion,
    this.telefono=telefono,
    this.NIF=NIF
}}
class Producto{constructor(descripcion,precio,cantidad){
    this.descripcion=descripcion,
    this.precio=precio,
    this.cantidad=cantidad
}}
class Detalle{constructor(tipoIVA,formaPago,importeTotal){
    this.tipoIVA=tipoIVA,
    this.formaPago=formaPago
    this.importeTotal=importeTotal
}}
class Factura{constructor(emisor,receptor,producto,detalle){
    this.emisor=emisor,
    this.receptor=receptor,
    this.producto=producto,
    this.detalle=detalle,
    this.detalle.importeTotal=importeTotal(producto)
}}
function importeTotal(producto) {
    return producto.precio * producto.cantidad;
}
var emi = new Emisor("Pepito.SAC","Av Principal","333-33333","?");
var cli = new Receptor("Juanito","Av cliente","666-66666","?");
var prod = new Producto("Celular",2000,3)
var det = new Detalle("IGV","Credito")
var fac = new Factura(emi,cli,prod,det);
//console.log(fac);
console.log("El importe total es: $" + fac.detalle.importeTotal);