<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ShopController;
Route::post('/customer-login',[CustomerController::class, 'login']);
Route::post('/customer-registration',[CustomerController::class, 'register']);

Route::get('/verify-customer/{token}',[CustomerController::class, 'verifyCustomer']);


Route::get('/get-category-products/{slug}',[CategoryController::class, 'getCategoryPageProducts']);

Route::get('/get-shop-page-product',[ShopController::class, 'getAllProducts']);


Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('/authCheck',function(){
        return Response()->json([
            'status'    => 200
        ]);
    });


    Route::post('/checkout',[OrderController::class, 'checkout']);

    Route::post('/customerLogout',[CustomerController::class, 'customerLogout']);


});