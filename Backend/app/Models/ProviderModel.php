<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProviderModel extends Model
{
    protected $table="tbl_proveedores";
    // protected $primaryKey="idpersona";
    protected  $fillable=['nombre', 'apellido', 'tipo_documento', 'documento','telefono', 'celular', 'departamento', 'ciudad', 'estado'];

    public $timestamps=false;
}
