<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::insert([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('Password1234'), // Replace with the desired password
        //  'status' => 'Active',
        ]);
    }
}
