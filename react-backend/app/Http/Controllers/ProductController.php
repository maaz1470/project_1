<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use Auth;
use Image;
use App\Models\Brand;

class ProductController extends Controller
{
    public function getProductCategory(){
        $categories = Category::select('id','name')->orderBy('id','desc')->get();
        return Response()->json([
            'status'    => 200,
            'categories'  => $categories
        ]);
    }

    public function getProductBrand(){
        $brands = Brand::select('id','name')->orderBy('id','desc')->get();
        return Response()->json([
            'status'    => 200,
            'brands'    => $brands
        ]);
    }

    protected function added_slug($name){
        $slug = preg_replace("/-$/","",preg_replace('/[^a-z0-9]+/i', "-", strtolower($name)));
        $products = Product::where('slug',$slug)->get();
        if($products->count() >= 1){
            $all = Product::all(['id']);
            $slug = $slug . '-' . $all->count();
        }
        return $slug;
    }


    public function addProduct(Request $request){
        
        $validator = Validator::make($request->all(),[
            'name'                  => 'required|string|max:255',
            'category_id'           => 'required',
            'status'                => 'required',
            'product_price'         => 'required|max:255',
            'product_quantity'      => 'required|max:255',
            'product_sku'           => 'required|max:255',
            'sell_price'            => 'max:255',
            'meta_title'            => 'max:255'
        ]);

        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }

        if($request->hasFile('productImage')){
            $image = $request->file('productImage');
            $name = time() . '_' . md5($image->getClientOriginalName()) . '.jpg';
            $path = 'product/' . $name;
            Image::make($image)->save($path,80);
        }else{
            $name = null;
        }

        

        $product = new Product();
        $product->name = $request->name;
        $product->slug = $this->added_slug($request->name);
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->status = $request->status;
        $product->product_image = $name;
        $product->price = $request->product_price;
        $product->quantity = $request->product_quantity;
        $product->product_sku = $request->product_sku;
        $product->sell_price = $request->sell_price;
        $product->description = $request->product_description;
        $product->meta_title = $request->meta_title;
        $product->meta_keywords = $request->meta_keywords;
        $product->meta_description = $request->meta_description;
        $product->added_by = Auth::user()->id;

        if($product->save()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'Product Successfully saved'
            ]);
        }
        
    }


    public function getProduct(){
        $products = Product::all();

        return Response()->json([
            'status'    => 200,
            'products'  => $products
        ]);
    }


    public function editProduct($id){
        $product = Product::find($id);
        if(!$product){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Product Not Found'
            ]);
        }else{
            return Response()->json([
                'status'    => 200,
                'product'   => $product
            ]);
        }
    }

    public function updateProduct(Request $request){
        $validator = Validator::make($request->all(),[
            'name'                  => 'required|string|max:255',
            'id'                    => 'required|max:255',
            'slug'                  => 'required|string|max:255',
            'category_id'           => 'required',
            'status'                => 'required',
            'product_price'         => 'required|max:255',
            'product_quantity'      => 'required|max:255',
            'product_sku'           => 'required|max:255',
            'sell_price'            => 'max:255',
            'meta_title'            => 'max:255'
        ]);
        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }


        $product = Product::find($request->id);
        if(!$product){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Page not Found'
            ]);
        }else{
            $product->name = $request->name;
            if($product->slug == $request->slug){
                $product->slug = $request->slug;
            }else{
                $slug_validate = Validator::make($request->all(),[
                    'slug'  => 'unique:products,slug'
                ]);
                if($slug_validate->fails()){
                    return Response()->json([
                        'status'    => 401,
                        'errors'    => $slug_validate->errors()->all()
                    ]);
                    
                }
                $product->slug = $request->slug;
                
            }

            $product->status = $request->status;
            $product->category_id = $request->category_id;
            $product->status = $request->status;

            if($request->hasFile('image')){
                $image = $request->file('image');
                $name = time() . '_' . md5($image->getClientOriginalName()) . '.jpg';
                $path = 'product/' . $name;
                Image::make($image)->save($path,80);

                $product->product_image = $name;
            }

            $product->price = $request->product_price;
            $product->description = $request->product_description;
            $product->meta_title = $request->meta_title;
            $product->meta_description = $request->meta_description;
            $product->meta_keywords = $request->meta_keywords;
            $product->quantity = $request->product_quantity;
            $product->sell_price = $request->sell_price;

            if($product->update()){
                return Response()->json([
                    'status'    => 200,
                    'message'   => 'Product Update Successfully'
                ]);
            }
        }


    }


    public function removieProductImage($id){
        $product = Product::find($id);
        if(!$product){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Page not found'
            ]);
        }else{
            if(file_exists('product/' . $product->product_image)){
                unlink('product/' . $product->product_image);
            }
            $product->product_image = null;

            if($product->update()){
                return Response()->json([
                    'status'    => 200,
                    'message'   => 'Image Remove Successfully'
                ]);
            }
        }
    }


    public function deleteProduct($id){
        $product = Product::find($id);
        if(!$product){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Page not Found'
            ]);
        }else{
            if(file_exists('product/' . $product->product_image)){
                unlink('product/' . $product->product_image);
            }
            if($product->delete()){
                return Response()->json([
                    'status'    => 200,
                    'message'   => 'Product Successfully Delete'
                ]);
            }
        }
    }

    public function getSingleProduct($url){
        $product = Product::select('id','name','slug','category_id','brand_id','status','sell_price as price','price as original_price','quantity','product_sku as sku','description','product_image','meta_title','meta_description')->where('slug',$url)->get()->first();
        return Response()->json([
            'status'    => 200,
            'product'   => $product
        ]);
    }



}
