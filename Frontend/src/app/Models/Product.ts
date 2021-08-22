export class Product{
    id:number;
    id_proveedor:number;
    referencia:number;
    nombre_producto:string;
    id_categoria:number;
    precio_unitario:number;
    cantidad:number;
    estado:number;

    //Foreign key
    nombre:string;
    nombre_categoria:string;
}