<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $hidden = [
        'created_at',
        'updated_at'
    ];


    protected $with = ['category','brands'];


    public function category(){
        return $this->belongsTo(Category::class, 'category_id','id');
    }

    public function brands(){
        return $this->belongsTo(Brand::class, 'brand_id','id');
    }


}
