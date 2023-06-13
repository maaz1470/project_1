<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class CategoryController extends Controller
{

    protected function added_slug($name){
        $slug = preg_replace("/-$/","",preg_replace('/[^a-z0-9]+/i', "-", strtolower($name)));
        $categories = Category::where('slug',$slug)->get();
        if($categories->count() > 0){
            $all = Category::all(['id']);
            $slug = $slug . '-' . $all->count();
        }
        return $slug;
    }

    public function addCategory(Request $request){
        $validator = Validator::make($request->all(),[
            'name'          => 'required|string|max:255',
            'status'        => 'required'
        ]);

        if($validator->fails()){
            return Response()->json([
                'errors'    => $validator->errors()->all()
            ]);
        }

        $category = new Category();

        $category->name = $request->name;
        $category->slug = $this->added_slug($request->name);
        $category->description = $request->description;
        $category->status = $request->status;
        $category->meta_title = $request->meta_title;
        $category->meta_keywords = $request->meta_keywords;
        $category->meta_description = $request->meta_description;

        if($category->save()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'Category save successfully'
            ]);
        }
        
    }

    public function allCategories(){
        $categories = Category::all();
        return Response()->json([
            'status'    => 200,
            'categories'=> $categories
        ]);
    }

    public function editCategory($id){
        $category = Category::find($id);
        if(!$category){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Category Not Found'
            ]);
        }else{
            return Response()->json([
                'status'    => 200,
                'category'  => $category
            ]);
        }
    }

    public function deleteCategory($id){
        $category = Category::find($id);
        if(!$category){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Category Not Found'
            ]);
        }else{
            $category->delete();
            return Response()->json([
                'status'    => 200,
                'message'   => 'Category Delete Successfully'
            ]);
        }
    }


    public function updateCategory(Request $request){
        $validator = Validator::make($request->all(),[
            'name'      => 'required|string|max:255',
            'slug'      => 'required|string|max:255'
        ]);

        if($validator->fails()){
            return Response()->json([
                'errors'    => $validator->errors()->all(),
                'status'    => 401
            ]);
        }

        $category = Category::find($request->id);

        $category->name = $request->name;
        if($request->slug == $category->slug){
            $category->slug = $request->slug;
        }else{
            $slug_validator = Validator::make($request->all(),[
                'slug'  => 'unique:categories,slug'
            ]);
            if($slug_validator->fails()){
                return Response()->json([
                    'errors'    => $slug_validator->errors()->all(),
                    'status'    => 401
                ]);
            }else{
                $category->slug = $request->slug;
            }
        }
        $category->description = $request->description;
        $category->status = $request->status;
        $category->meta_title = $request->meta_title;
        $category->meta_keywords = $request->meta_keywords;
        $category->meta_description = $request->meta_description;

        if($category->update()){
            return Response()->json([
                'status' => 200,
                'message'   => 'Category update successfully'
            ]);
        }

    }

    public function getFrontCategory(){
        $categories = Category::with('products')->get();
        return Response()->json([
            'status'        => 200,
            'categories'    => $categories
        ]);
    }

    

    
}
