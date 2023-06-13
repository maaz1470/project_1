<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Slider;
use Image;
class SliderController extends Controller
{
    public function saveSlider(Request $request){
        $validator = Validator::make($request->all(),[
            'title'         => 'required|string|max:255',
            'status'        => 'required',
            'slider_image'  => 'required|mimes:jpg,jpeg,png,gif'
        ]);

        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }

        $slider = new Slider();
        $slider->title = $request->title;
        $slider->description = $request->description;
        $slider->status = $request->status;
        if($request->hasFile('slider_image')){
            $image = $request->file('slider_image');
            $name = time() . '_' . md5($image->getClientOriginalName()) . '.jpg';
            $path = 'slider/' . $name;
            Image::make($image)->save($path,80);
            $slider->slider_image = $name;
            if($slider->save()){
                return Response()->json([
                    'status'    =>200,
                    'message'   => 'Slider Saved Successfully'
                ]);
            }
        }else{
            return Response()->json([
                'error' => 'Image not uploaded'
            ]);
        }

    }

    public function allSlider(){
        $sliders = Slider::all();
        return Response()->json([
            'status'    => 200,
            'sliders'   => $sliders
        ]);
    }

    public function editSlider($id){
        $slider = Slider::find($id);
        if(!$slider){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Slider Not Found'
            ]);
        }else{
            return Response()->json([
                'status'    => 200,
                'sliders'    => $slider
            ]);
        }
    }

    public function updateSlider(Request $request){
        $validator = Validator::make($request->all(),[
            'title'         => 'required|string|max:255',
            'description'   => 'required'
        ]);

        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }

        $slider = Slider::find($request->id);

        if(!$slider){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Slider not found'
            ]);
        }

        $slider->title = $request->title;
        $slider->description = $request->description;
        $slider->status = $request->status;
        if($request->hasFile('slider_image')){
            $validate_image = Validator::make($request->all(),[
                'slider_image'      => 'mimes:jpg,png,jpeg,gif'
            ]);
            if($validate_image->fails()){
                return Response()->json([
                    'status'    => 401,
                    'error'     => $validate_image->errors()->all()
                ]);
            }
            if(file_exists('slider/' . $slider->slider_image)){
                unlink('slider/'.$slider->slider_image);
            }

            $image = $request->file('slider_image');
            $name = time() . '_' . md5($image->getClientOriginalName()) . '.jpg';
            $path = 'slider/' . $name;
            Image::make($image)->save($path,80);
            
        }
        if($slider->update()){
            return Response()->json([
                'status'    => 200,
                'message'   => 'Slider update successfully'
            ]);
        }
    }

    public function deleteSlider($id){
        $slider = Slider::find($id);
        if(!$slider){
            return Response()->json([
                'status'    => 404,
                'message'   => 'Slider not found'
            ]);
        }

        return Response()->json([
            'status'    => 200,
            'message'   => 'Slider delete successfully'
        ]);
    }
}
