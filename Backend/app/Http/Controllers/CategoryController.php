<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\CategoryModel;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categoria=CategoryModel::all();
        return response()->json($categoria);
    }

    
    public function create(Request $request)
    {
      
    }

    
    public function store(Request $request)
    {
        $categoria=CategoryModel::create($request->all()); 
        return response()->json($categoria);
    }

    
    
    public function show($id)
    {
        $categoria=CategoryModel::findOrfail($id);
        return response()->json($categoria);
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request,$id)
    {


        $categoria = CategoryModel::findOrFail($id);

        if($categoria)
           $categoria->update($request->all()); 
        else
            return response()->json(error);
        return response()->json(null);
    }

    
    
    public function destroy($id)
    {
        $categoria = CategoryModel::findOrFail($id);
    if($categoria)
       $categoria->delete(); 
    else
        return response()->json(error);
    return response()->json(null); 
    }
}
