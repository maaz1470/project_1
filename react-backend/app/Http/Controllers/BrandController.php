<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Brand;
use Auth;
class BrandController extends Controller
{
    protected function added_slug($name){
        $slug = preg_replace("/-$/","",preg_replace('/[^a-z0-9]+/i', "-", strtolower($name)));
        $categories = Brand::where('slug',$slug)->get();
        if($categories->count() >= 1){
            $all = Brand::all(['id']);
            $slug = $slug . '-' . $all->count();
        }
        return $slug;
    }

    public function addBrand(Request $request){
        $validator = Validator::make($request->all(),[
            'name'              => 'required|string|max:255',
            'status'            => 'required',
            'meta_title'        => 'max:255',
            'meta_description'  => 'max:255'
        ]);

        if($validator->fails()){
            return Response()->json([
                'errors'    => $validator->errors()->all(),
                'status'    => 401
            ]);
        }

        $brand = new Brand();

        $brand->name = $request->name;
        $brand->slug = $this->added_slug($request->name);
        $brand->description = $request->description;
        $brand->status = $request->status;
        $brand->meta_title = $request->meta_title;
        $brand->meta_description = $request->meta_description;
        $brand->meta_keywords = $request->meta_keywords;

        if($brand->save()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'Brand saved successfully'
            ]);
        }

    }

    public function getBrands(){
        $brands = Brand::orderBy('id','desc')->get();

        return Response()->json([
            'status'    => 200,
            'brands'    => $brands
        ]);
    }

    public function editBrand($id){
        $brand = Brand::find($id);
        if(!$brand){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Brand not found'
            ]);
        }else{
            return Response()->json([
                'status'    => 200,
                'brand'     => $brand
            ]);
        }
    }

    public function updateBrand(Request $request){
        $validator = Validator::make($request->all(),[
            'slug'      => 'required|string|max:255',
            'name'      => 'required|string|max:255',
            'status'    => 'required',
            'meta_title'=> 'max:255'
        ]);

        if($validator->fails()){
            return Response()->json([
                'errors'    => $validator->errors()->all(),
                'status'    => 401
            ]);
        }

        $brand = Brand::find($request->id);
        $brand->name = $request->name;
        if($brand->slug == $request->slug){
            $brand->slug = $request->slug;
        }else{
            $validator = Validator::make($request->all(),[
                'slug'  => 'unique:brands,slug'
            ]);
            if($validator->fails()){
                return Response()->json([
                    'errors'    => $validator->errors()->all(),
                    'status'    => 401
                ]);
            }
            $brand->slug = $request->slug;
        }
        $brand->description = $request->description;
        $brand->status = $request->status;
        $brand->meta_title = $request->meta_title;
        $brand->meta_description = $request->meta_description;
        $brand->meta_keywords = $request->meta_keywords;
        if($brand->update()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'Brand update successfully'
            ]);
        }

    }

    public function deleteBrand($id){
        $brand = Brand::find($id);
        if(!$brand){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Brand not found'
            ]);
        }else{
            $brand->delete();
            return Response()->json([
                'status'    => 200,
                'message'   => 'Brand Delete Successfully'
            ]);
        }
    }
}
