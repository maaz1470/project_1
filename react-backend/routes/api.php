<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\OrderController;
Route::post('/register',[AuthController::class, 'register'])->name('auth.register');
Route::post('/login',[AuthController::class, 'login'])->name('auth.login');
Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('/authCheck',function(){
        return Response()->json([
            'status'    => 200
        ]);
    });

    Route::get('all-categories',[CategoryController::class, 'allCategories']);

    Route::post('add-category',[CategoryController::class, 'addCategory']);

    Route::get('edit-category/{id}',[CategoryController::class, 'editCategory']);

    Route::post('update-category',[CategoryController::class, 'updateCategory']);

    Route::post('delete-category/{id}',[CategoryController::class, 'deleteCategory']);

    Route::post('/add-brand',[BrandController::class, 'addBrand']);

    Route::get('/get-brands',[BrandController::class, 'getBrands']);

    Route::get('edit-brand/{id}',[BrandController::class, 'editBrand']);

    Route::post('update-brand',[BrandController::class, 'updateBrand']);

    Route::get('delete-brand/{id}',[BrandController::class, 'deleteBrand']);

    

    // Slider Page routes

    Route::post('/save-slider',[SliderController::class, 'saveSlider']);
    Route::get('/get-slider',[SliderController::class, 'allSlider']);
    Route::get('/edit-slider/{id}',[SliderController::class, 'editSlider']);
    Route::post('/update-slider',[SliderController::class, 'updateSlider']);
    Route::get('/slider-delete/{id}',[SliderController::class, 'deleteSlider']);

    // Product Page routes
    Route::get('get-product-category',[ProductController::class, 'getProductCategory']);
    Route::get('get-product-brand',[ProductController::class, 'getProductBrand']);

    Route::post('add-product',[ProductController::class, 'addProduct']);

    Route::get('get-product',[ProductController::class, 'getProduct']);

    Route::get('edit-product/{id}',[ProductController::class, 'editProduct']);

    Route::post('update-product',[ProductController::class, 'updateProduct']);

    Route::get('removie-product-image/{id}',[ProductController::class, 'removieProductImage']);
    Route::get('delete-product/{id}',[ProductController::class, 'deleteProduct']);


    // Page Routes
    Route::post('save-page',[PageController::class, 'savePage']);



    // Order View

    Route::get('orders',[OrderController::class, 'orders']);




    Route::post('/logout',[AuthController::class, 'logout'])->name('auth.logout');
});

Route::get('/get-front-categories',[CategoryController::class, 'getFrontCategory']);
Route::get('/get-single-product/{url}',[ProductController::class, 'getSingleProduct']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
