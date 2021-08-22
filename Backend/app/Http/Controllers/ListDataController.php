<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class ListDataController extends Controller
{
     public function listProvider(){

         $proveedores = DB::table('tbl_proveedores')
        ->select('tbl_proveedores.id','tbl_proveedores.nombre','tbl_proveedores.documento')
         ->where('tbl_proveedores.estado','=', 1)
         ->orderBy('tbl_proveedores.id', 'desc')
         ->get();

         return response()->json($proveedores);
       
    }

    public function listCategory(){

         $categorias = DB::table('tbl_categoria_producto')
        ->select('tbl_categoria_producto.id','tbl_categoria_producto.nombre_categoria','tbl_categoria_producto.estado')
         ->where('tbl_categoria_producto.estado','=', 1)
         ->orderBy('tbl_categoria_producto.id', 'desc')
         ->get();

          return response()->json($categorias);
    }

    public function listDocument(){

         $documentos = DB::table('tbl_tipo_documento')
        ->select('tbl_tipo_documento.id','tbl_tipo_documento.nombre_documento','tbl_tipo_documento.estado')
         ->where('tbl_tipo_documento.estado','=', 1)
         ->orderBy('tbl_tipo_documento.id', 'desc')
         ->get();

          return response()->json($documentos);
    }

    public function stopMinimo(){

         $productos=DB::table('tbl_productos')
        ->select('tbl_productos.id','tbl_productos.nombre_producto','tbl_productos.referencia','tbl_productos.estado','tbl_productos.cantidad','tbl_categoria_producto.nombre_categoria')
        ->join('tbl_categoria_producto','tbl_productos.id_categoria','=','tbl_categoria_producto.id')
        ->where('tbl_productos.cantidad', '<=', 10)
        ->get();

        return response()->json($productos);
    }


    public function stopMaximo(){

         $productos=DB::table('tbl_productos')
        ->select('tbl_productos.id','tbl_productos.nombre_producto','tbl_productos.referencia','tbl_productos.estado','tbl_productos.cantidad','tbl_categoria_producto.nombre_categoria')
        ->join('tbl_categoria_producto','tbl_productos.id_categoria','=','tbl_categoria_producto.id')
        ->where('tbl_productos.cantidad', '>=', 50)
        ->get();

        return response()->json($productos);
    }
}
