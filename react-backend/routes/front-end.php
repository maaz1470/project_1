<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::post('/customer-login',[CustomerController::class, 'login']);
Route::post('/customer-registration',[CustomerController::class, 'register']);

Route::get('/verify-customer/{token}',[CustomerController::class, 'verifyCustomer']);

