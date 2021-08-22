<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{

     protected $table="tbl_categoria_producto";
    // protected $primaryKey="idpersona";
    protected  $fillable=['nombre_categoria','estado'];

    public $timestamps=false;
}
