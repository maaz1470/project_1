<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'username'  => 'required|string|max:255|unique:users,username',
            'email'     => 'required|email|max:255|unique:users,email',
            'password'  => 'required|max:255'
        ]);

        if($validator->fails()){
            return Response()->json(['errors'=>$validator->errors()->all(),'status'=>400]);
        }

        $user = new User();

        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        if($user->save()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'User registration successfully'
            ]);
        }
    }


    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'username'  => 'required|string|max:255',
            'password'  => 'required|string|max:255'
        ]);
        if($validator->fails()){
            return Response()->json(['status'=>400,'errors'=>$validator->errors()->all()]);
        }
        
        $user = User::where('username',$request->username)->get()->first();
        if(!$user){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Username and Password not match'
            ]);
        }else{
            if(Hash::check($request->password,$user->password)){
                if($user->role_as === 1){
                    $token = $user->createToken($user->email . '_admin',['*'])->plainTextToken;
                }elseif($user->role_as === 0){
                    $token = $user->createToken($user->email . '_user')->plainTextToken;
                }
                
                return Response()->json([
                    'status'    => 200,
                    'token'     => $token,
                    'message'   => 'Logged in successfully.'
                ]);
            }else{
                return Response()->json([
                    'status'    => 404,
                    'message'   => 'Username and Password not match'
                ]);
            }
        }

    }


    public function logout(){
        if(auth()->user()->tokens()->delete()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'Logout Successfully.'
            ]);
        }
    }
}
