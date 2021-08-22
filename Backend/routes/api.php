<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




//Rutas proveedores
Route::resource('proveedores','ProviderController');

//Rutas productos
Route::resource('productos','ProductController');

//Rutas Documento
Route::resource('documentos','DocumentController');

//Rutas categoria
Route::resource('categorias','CategoryController');

//Rutas admin
Route::resource('admin','UserController');

//Rutas Pedido
Route::resource('pedido','OrderController');


//Rutas listar datos
Route::get('proveedor', 'ListDataController@listProvider');
Route::get('categoria', 'ListDataController@listCategory');
Route::get('documento', 'ListDataController@listDocument');

//Rutas usuarios
Route::get('users','UserController@getUser');

//Rutas producto en stop
Route::get('stopMinimo', 'ListDataController@stopMinimo');
Route::get('stopMaximo', 'ListDataController@stopMaximo');

//Rutas cambiar estado
//Route::post('estadop', 'ChangeStatus@estadoProveedor');


//Rutas Login
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::post('/proveedores','ProviderController@create');

//Route::get('proveedores/{id}','ProviderController@show');

//Route::delete('proveedores/{id}','ProviderController@delete');
