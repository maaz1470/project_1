<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Customer;
use Hash;
use Mail;
use App\Mail\CustomerVerification;
use App\Models\CustomerVerification as Verify;
use DB;
use App\Models\User;

class CustomerController extends Controller
{

    public function __construct(){
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email'     => 'required|email|max:255',
            'password'  => 'required'
        ]);
        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }
        $customer = Customer::where('email',$request->email)->get()->first();
        if($customer){


            if(Hash::check($request->password, $customer->password)){
                if($customer->verify_at === 1){
                    if($customer->status == 1){
                        if($request->remember){
                            
                        }
                    }else{
                        return Response()->json([
                            'status'    => 400,
                            'error'     => 'You are disabled user'
                        ]);
                    }
                }else{
                    return Response()->json([
                        'status'    => 400,
                        'error'     => 'You are not verified user'
                    ]);
                }
            }else{
                return Response()->json([
                    'status'    => 400,
                    'error'     => 'Email or Password not matched'
                ]);
            }
        }else{
            return Response()->json([
                'customer'  => 'Email or Password not matched'
            ]);
        }
    }

    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'      => 'required|string|max:255',
            'email'     => 'required|email|max:255|unique:customers,email',
            'password'  => 'required'
        ]);

        if($validator->fails()){
            return Response()->json(['status' => 401,'errors'=>$validator->errors()->all()]);
        }


        $customer = new User();
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->role_as = 9;
        $customer->password = Hash::make($request->password);

        if($customer->save()){
            $id = $customer->id;
            $user = Customer::find($id);
            $token = hash('sha256',md5(uniqid()) . md5(time())) . '_rh';
            $verification = new Verify();
            $verification->token = $token;
            $verification->customer_id = $id;
            if($verification->save()){
                $home_url = 'http://localhost:5173';
                $data = [
                    $user->toArray(),
                    $token,
                    $home_url,
                ];
                Mail::to($user->email)->send(new CustomerVerification($data));
                return Response()->json([
                    'status'    => 200,
                    'message'   => 'Customer Registration Successfully'
                ]);
            }
            
        }


    }

    public function verifyCustomer($token){
        $find_token = Verify::where('token',$token)->get()->first();
        if($find_token){
            $find_user = DB::table('customer_verifications')
                        ->join('customers','customer_verifications.customer_id','=','customers.id')
                        ->select('customers.id as customer_id','customer_verifications.id as verification_id')
                        ->get()
                        ->first();

            $user = Customer::find($find_user->customer_id);
            $user->verify_at = 1;
            
            if($user->update()){
                $find_token->delete();
                return Response()->json([
                    'status'    => 200,
                    'message'   => 'User Verified Successfully'
                ]);
            }

            
            
        }
    }
}
