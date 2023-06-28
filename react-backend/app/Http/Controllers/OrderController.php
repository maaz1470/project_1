<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Checkout;
use Auth;
use App\Models\Order;

class OrderController extends Controller
{
    public function checkout(Request $request){
        $validator = Validator::make($request->all(),[
            'firstName'     => 'required|string|max:255',
            'lastName'      => 'required|string|max:255',
            'company'       => 'max:255',
            'country'       => 'required|string|max:255',
            'streetAddress' => 'required|string|max:255',
            'city'          => 'required|string|max:255',
            'zipCode'       => 'required|string|max:255',
            'phoneNumber'   => 'required|string|max:255',
            'email'         => 'required|email|max:255'
        ]);

        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }

        $customer = Auth::guard('customer')->user();

        $checkout = new Checkout;
        $checkout->firstName = $request->firstName;
        $checkout->lastName = $request->lastName;
        $checkout->company = $request->company;
        $checkout->country = $request->country;
        $checkout->streetAddress = $request->streetAddress;
        $checkout->city = $request->city;
        $checkout->zipCode = $request->zipCode;
        $checkout->phoneNumber = $request->phoneNumber;
        $checkout->email = $request->email;
        $checkout->customer_id = $customer->id;

        if($checkout->save()){
            $id = $checkout->id;
            foreach($request->products as $product){
                $order = new Order;
                $order->product_id = $product['id'];
                $order->customer_id = $customer->id;
                $order->quantity = $product['quantity'];
                $order->checkout_id = $id;
                $order->save();
            }

            return Response()->json([
                'status'    => 200,
                'message'   => 'Order Complete Successfully'
            ]);
        }

    }
}
