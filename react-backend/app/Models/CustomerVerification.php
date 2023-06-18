<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerVerification extends Model
{
    use HasFactory;

    protected $table = 'customer_verifications';

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
