<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
Use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Admin\UserRequest;
use App\Http\Resources\Admin\UserResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         try {
            //code...
                return UserResource::collection(
                    User::orderBy('created_at', 'desc')->paginate(10)
                );
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 422); 
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        $data=$request->validated();
        // $data['password'] =bcrypt($request->password);
        // $data['admin_id'] = Auth::guard('admin')->user()->id;
         
        $user= User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'admin_id' => Auth::user()->id,
            'designation' => $data['designation'],
            'status' => 'In-Active',
        ]);        
        return response(new UserResource($user),201);  
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
