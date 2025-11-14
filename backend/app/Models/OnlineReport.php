<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class OnlineReport extends Model
{
    //
    use HasFactory, Notifiable;

    protected $fillable = [
        'user_id',
        'url_link',
        'category',
        'address',
        'description',
        'proof'
    ];

    public function user() {
         return $this->belongsTo(User::class, 'user_id');
    }
}
