<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{
    public function register(Request $request)
    {
         try {
            $validateData = Validator::make($request->all(), [
                'username' => 'required|unique:users,username',
                'fullname' => 'required',
                'password' => 'required'
            ], [
                'username.unique' => 'Nama Pengguna Sudah Digunakan!',
                'username.required' => 'Nama Pengguna wajib diisi!',
                'fullname.required' => 'Nama Lengkap wajib diisi!',
                'password.required' => 'Kata Sandi wajib diisi!',
            ]);

            if ($validateData->fails()) {
                return response()->json([
                    'message' => $validateData->errors()->first()
                ], 422);
            }

            $data = User::create([
                "username" => $request->username,
                "fullname" => $request->fullname,
                "password" => $request->password,
                "role" => "user"
            ]);
            return response()->json([
                "data" => $data,
                "message" => "Daftar Berhasil!"
            ]);
        } catch(Exception $err) {
            return response()->json([
                'message' => $err->getMessage()
            ], 422);
        }
    }

    public function registerAdmin(Request $request)
    {
         try {
            $validateData = Validator::make($request->all(), [
                'username' => 'required|unique:users,username',
                'fullname' => 'required',
                'password' => 'required'
            ], [
                'username.unique' => 'Nama Pengguna Sudah Digunakan!',
                'username.required' => 'Nama Pengguna wajib diisi!',
                'fullname.required' => 'Nama Lengkap wajib diisi!',
                'password.required' => 'Kata Sandi wajib diisi!',
            ]);

            if ($validateData->fails()) {
                return response()->json([
                    'message' => $validateData->errors()->first()
                ], 422);
            }

            $data = User::create([
                "username" => $request->username,
                "fullname" => $request->fullname,
                "password" => $request->password,
                "role" => "admin"
            ]);
            return response()->json([
                "data" => $data,
                "message" => "Daftar Berhasil!"
            ]);
        } catch(Exception $err) {
            return response()->json([
                'message' => $err->getMessage()
            ], 422);
        }
    }

    public function login(Request $request)
    {
        try {
            $validateData = Validator::make($request->all(), [
                'username' => 'required',
                'password' => 'required'
            ], [
                'username.required' => 'Nama Pengguna wajib diisi!',
                'password.required' => 'Kata Sandi wajib diisi!',
            ]);

            if ($validateData->fails()) {
                return response()->json([
                    'message' => $validateData->errors()->first()
                ], 422);
            }

            $user = User::where("username", $request->username)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    "message" => "Nama atau Kata Sandi Salah!"
                ], 401);
            }

            $token = $user->createToken("access_token")->plainTextToken;
            return response()->json([
                "message" => "Masuk Berhasil!",
                "token" => $token,
                "data" => $user
            ]);
        } catch (Exception $err) {
            return response()->json([
                "message" => $err->getMessage()
            ], 422);
        }
    }

    public function me()
    {
        try {
            $user = Auth::user();
            return response()->json([
                "data" => $user
            ]);
        } catch (Exception $err) {
            return response()->json([
                "message" => $err->getMessage()
            ], 422);
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = PersonalAccessToken::findToken($request->bearerToken());
            $user->delete();

            return response()->json([
                "message" => "Keluar Berhasil!",
                "data" => $user
            ]);
        } catch (Exception $err) {
            return response()->json([
                "message" => $err->getMessage()
            ], 422);
        }
    }
}
