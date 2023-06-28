<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Page;
use Image;
class PageController extends Controller
{
    public function savePage(Request $request){
        $validator = Validator::make($request->all(),[
            'title'         => 'required|string|max:255',
            'status'        => 'required'
        ]);

        if($validator->fails()){
            return Response()->json([
                'status'    => 401,
                'errors'    => $validator->errors()->all()
            ]);
        }

        $page = new Page();
        $page->title = $request->title;
        $page->description = $request->description;
        $page->status = $request->status;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $name = md5(time()) . '_rh' . '.jpg';
            $path = 'pages/' . $name;
            Image::make($image)->save($page,80);
        }
    }
}
