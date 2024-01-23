<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolePermission extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'sidebar_list', 'create_action', 'update_action', 'delete_action', 'view_action'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
