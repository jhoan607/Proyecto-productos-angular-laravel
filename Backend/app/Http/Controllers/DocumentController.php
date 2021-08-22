<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DocumentModel;
use DB;


class DocumentController extends Controller
{
    
    public function index()
    {
        $documentos=DocumentModel::all();
        return response()->json($documentos);
    }

    
    public function create(Request $request)
    {
        
    }

    
    public function store(Request $request)
    {
        $documentos=DocumentModel::create($request->all()); 
        return response()->json($documentos);
    }

    
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
