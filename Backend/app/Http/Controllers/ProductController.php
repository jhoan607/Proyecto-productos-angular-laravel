<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\ProductModel;

class ProductController extends Controller
{
    
    public function index()
    {
        $productos=DB::table('tbl_productos')
        ->select('tbl_productos.id','tbl_productos.nombre_producto','tbl_productos.referencia','tbl_productos.estado','tbl_productos.cantidad','tbl_proveedores.nombre','tbl_categoria_producto.nombre_categoria')
        ->join('tbl_proveedores','tbl_productos.id_proveedor','=','tbl_proveedores.id')
        ->join('tbl_categoria_producto','tbl_productos.id_categoria','=','tbl_categoria_producto.id')
        ->get();

        return response()->json($productos);
       
    }

    
    public function create(Request $request)
    {
      
    }

    
    public function store(Request $request)
    {
        $productos=ProductModel::create($request->all()); 
        return response()->json($productos);
    }

    
    
    public function show($id)
    {
        $productos=ProductModel::findOrfail($id);
        return response()->json($productos);
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request,$id)
    {

        $productos = ProductModel::findOrFail($id);

        if($productos)
           $productos->update($request->all()); 
        else
            return response()->json(error);
        return response()->json(null);
    }

    
    
    public function destroy($id)
    {
        $productos = ProductModel::findOrFail($id);
    if($productos)
       $productos->delete(); 
    else
        return response()->json(error);
    return response()->json(null); 
    }

}
