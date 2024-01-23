<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Auth;
class AdminAuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {

               
            $requestData = $request->all();
            $userType = $request->usertype;
            // Convert double quotes to single quotes in the request data
            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];

           
            // Use the $userType parameter to specify the guard
            if (!Auth::guard($userType)->attempt(['email'=>$request->email, 'password'=>$request->password], $request->remember)) {
                return response([
                    'message' => 'The Provided credentials are not correct'
                ], 401);
            }

                $user = Auth::guard($userType)->user();
                $token = $user->createToken('main')->plainTextToken;

            return response([
                'user' => $user,
                'token' => $token,
                'usertype' => $userType,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 422); 
        }
    }
    public function logout(Request $request){
          
         
        
         $user= Auth::guard($request->usertype)->user();

         $user->currentAccessToken()->delete();

        return response([
            'success' => true,
        ]);
    }
}
