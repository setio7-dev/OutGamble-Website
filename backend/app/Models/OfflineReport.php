<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfflineReport extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'user_id',
        'place',
        'address',
        'category_place',
        'coordinates',
        'description',
        'proof',
        'contact'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
