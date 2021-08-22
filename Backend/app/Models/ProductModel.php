<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    protected $table="tbl_productos";
    // protected $primaryKey="idpersona";
    protected  $fillable=['id_proveedor','referencia','nombre_producto','id_categoria','precio_unitario','cantidad','estado'];

    public $timestamps=false;
}
