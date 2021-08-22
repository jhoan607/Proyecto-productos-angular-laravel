<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderModel extends Model
{
    protected $table="tbl_pedido";
    // protected $primaryKey="idpersona";
    protected  $fillable=['id_persona','fecha_pedido','comentario'];

    public $timestamps=false;
}
