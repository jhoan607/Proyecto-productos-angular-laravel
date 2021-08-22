<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use DB;

class UserController extends Controller
{   

    public function register(Request $request)
    {
            $validator = Validator::make($request->json()->all() , [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6', 
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),
            'rol' => 2,
            'password' => Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user','token'),201);
    }
    
    public function login(Request $request)
    {
        $credentials = $request->json()->all();

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json( compact('token') );
    }

    

    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }






    public function store(Request $request)
    {
            
        $user = User::create([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),
            'rol' => $request->json()->get('rol'),
            'password' => Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user','token'),201);
    }






    public function index()
    {
        $administradores = DB::table('users')
        ->select('users.id','users.name','users.email','users.estado',
             DB::raw('(CASE WHEN users.rol = "1" THEN "Administrador" END) AS rol'))
         ->join('tbl_rol', 'users.rol', '=','tbl_rol.id')
         ->where('users.rol',1)
         ->orderBy('users.id', 'desc')
         ->get();

         return response()->json($administradores);

    }

    public function show($id)
    {
        $admin=User::findOrfail($id);
        return response()->json($admin);
    }


    public function update(Request $request,$id)
    {
        $admin = User::findOrFail($id);
        $admin ->update([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),
            'rol' => $request->json()->get('rol'),
            'password' => Hash::make($request->json()->get('password')),
        ]);

        //$token = JWTAuth::fromUser($admin);
        return response()->json($admin);
    }



    public function destroy($id)
    {
    $admin = User::findOrFail($id);
    if($admin)
       $admin->delete(); 
    else
        return response()->json(error);
    return response()->json(null); 
    }




    public function getUser()
    {
        $usuarios = DB::table('users')
        ->select('users.email')
         ->get();

         return response()->json($usuarios);

    }

}
