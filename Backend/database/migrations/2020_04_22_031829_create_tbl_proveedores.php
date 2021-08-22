<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblProveedores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_proveedores', function (Blueprint $table) {
            $table->increments('id_proveedor');
            $table->string('nombre');
            $table->string('apellido');
            $table->integer('tipo_documento');
            $table->integer('documento');
            $table->integer('telefono');
            $table->integer('celular');
            $table->string('departamento');
            $table->string('ciudad');
            $table->integer('estado');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_proveedores');
    }
}
