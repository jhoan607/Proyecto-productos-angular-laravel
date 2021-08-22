<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocumentModel extends Model
{

    protected $table="tbl_tipo_documento";
    // protected $primaryKey="idpersona";
    protected  $fillable=['nombre_documento'];

    public $timestamps=false;
    
}
