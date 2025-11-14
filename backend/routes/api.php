<?php

use App\Http\Controllers\CommunityController;
use App\Http\Controllers\OnlineReportController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth
Route::post("/register", [UserController::class, 'register']);
Route::post("/register/admin", [UserController::class, 'registerAdmin']);
Route::post("/login", [UserController::class, 'login']);

Route::middleware("auth")->group(function() {
    Route::get("/me", [UserController::class, 'me']);
    Route::resource("/community", CommunityController::class);
    Route::resource("/report/online", OnlineReportController::class);
});
