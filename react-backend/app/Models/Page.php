<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'status'
    ];

    protected $table = 'pages';

    protected $hidden = ['created_at','updated_at'];

}
