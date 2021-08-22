<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProviderModel;
use DB;

class ProviderController extends Controller
{

    public function list(){
       
    }
    
    public function index()
    {
        $proveedores = DB::table('tbl_proveedores')
        ->select('tbl_proveedores.id','tbl_proveedores.nombre','tbl_proveedores.apellido','tbl_proveedores.documento','tbl_proveedores.telefono','tbl_proveedores.celular','tbl_proveedores.departamento','tbl_proveedores.ciudad','tbl_tipo_documento.nombre_documento',
             DB::raw('(CASE WHEN tbl_proveedores.estado = "1" THEN "Activo" ELSE "Inactivo" END) AS estado'))
         ->join('tbl_tipo_documento', 'tbl_proveedores.tipo_documento', '=','tbl_tipo_documento.id')
         //->where('tbl_proveedores.estado',1 ,'=', 'Activo')
         ->orderBy('tbl_proveedores.id', 'desc')
         ->get();

         return response()->json($proveedores);

         //return view('provider.provider',compact('proveedores'));
         //compact(data)

        // dd(proveedores);
    }

    
    public function create(Request $request)
    {
      
    }

    
    public function store(Request $request)
    {
        $proveedores=ProviderModel::create($request->all()); 
        return response()->json($proveedores);
    }

    
    
    public function show($id)
    {
        $proveedores=ProviderModel::findOrfail($id);
        return response()->json($proveedores);
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request,$id)
    {


        $proveedores = ProviderModel::findOrFail($id);

        if($proveedores)
           $proveedores->update($request->all()); 
        else
            return response()->json(error);
        return response()->json(null);
    }

    
    
    public function destroy($id)
    {
        $proveedores = ProviderModel::findOrFail($id);
    if($proveedores)
       $proveedores->delete(); 
    else
        return response()->json(error);
    return response()->json(null); 
    }


}
