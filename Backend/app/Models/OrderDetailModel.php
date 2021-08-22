<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetailModel extends Model
{
    protected $table ="tbl_detalle_pedido";
    protected  $fillable=['id_pedido','id_producto','cantidad','precio'];

    public $timestamps=false;
}
