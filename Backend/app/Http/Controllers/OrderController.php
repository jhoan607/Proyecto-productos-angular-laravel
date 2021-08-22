<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\OrderModel;
use App\Models\OrderDetailModel;

class OrderController extends Controller
{
   
    public function index()
    {
        //
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {


       // $proveedores=OrderModel::create($request->all()); 
       // return response()->json($proveedores);

        
        $input = $request->all();
        
            //DB::beginTransaction();
            $producto = OrderModel::create([
                "id_persona" => $input["id_persona"],
                "fecha_pedido" => $input["fecha_pedido"],
                "comentario" => $input["comentario"],

            ]);

            foreach ($input["productos"] as $key => $value){
                OrderDetailModel::create([
                    
                   
                    "id_producto"=>$value["id_producto"],
                     "id_pedido"=>$producto->id,
                    
                   // "cantidad" => $input["cantidades"][$key]
                
            ]);

               // $ins = Producto::find($value);
               
            }

            
            return response()->json($producto);
            
        }
        
    












/*
public function store(Request $request)
    {
        $input = $request->all();
        try {
            DB::beginTransaction();
            $producto = OrderModel::create([
                "id_persona" => $input["id_persona"],
                "fecha_pedido" => $input["fecha_pedido"],
                "comentario" => $input["comentario"],
            ]);

            foreach ($input["id_producto"] as $value){
                OrderDetailModel::create([
                    "id_producto"=>$value
                    
                   // "cantidad" => $input["cantidades"][$key]
                ]);

               // $ins = Producto::find($value);
               
            }

            DB::commit();
            return response()->json(null);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json($producto);
        }
        
    
}*/
    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
    
    }
    
}

/*

Bueno melo

public function store(Request $request)
    {


       // $proveedores=OrderModel::create($request->all()); 
       // return response()->json($proveedores);

        
        $input = $request->all();
        
            //DB::beginTransaction();
            $producto = OrderModel::create([
                "id_persona" => $input["id_persona"],
                "fecha_pedido" => $input["fecha_pedido"],
                "comentario" => $input["comentario"],
            ]);

            foreach ($input["productos"] as $key => $value){
                OrderDetailModel::create([
                    "id_producto"=>$value,
                    "id_pedido"=>$producto->id
                    
                   // "cantidad" => $input["cantidades"][$key]
                ]);

               // $ins = Producto::find($value);
               
            }

            
            return response()->json($producto);
            
        }
        

*/