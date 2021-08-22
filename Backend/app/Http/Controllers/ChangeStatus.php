<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProviderModel;
use DB;

class ChangeStatus extends Controller
{
    
    
    public function estadoProveedor(Request $request, $id)
    {
        /*
         $proveedores = ProviderModel::findOrFail($id);


            $estado = DB::table('tbl_proveedores')
            ->select('tbl_proveedores.estado')
            -get();

             if $estado = 1{
               $proveedores->update($request-> $estado=>2); 
            }else{
                $proveedores->update($request-> $estado=>1); 
            }

        return response()->json(null);
*/

    }

}
