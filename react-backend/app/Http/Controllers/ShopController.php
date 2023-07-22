<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;


class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getAllProducts()
    {
        $products = Product::all()->where('status',1);
        $categories = Category::all()->where('status',1);
        $brands = Brand::all()->where('status',1);
        return Response()->json([
            'status'    => 200,
            'products'  => $products,
            'categories'=> $categories,
            'brands'    => $brands
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
