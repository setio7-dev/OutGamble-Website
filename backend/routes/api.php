<?php

use App\Http\Controllers\CommunityController;
use App\Http\Controllers\OfflineReportController;
use App\Http\Controllers\OnlineReportController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Auth
Route::post("/register", [UserController::class, 'register']);
Route::post("/register/admin", [UserController::class, 'registerAdmin']);
Route::post("/login", [UserController::class, 'login']);

Route::middleware("auth")->group(function() {
    // Me
    Route::get("/me", [UserController::class, 'me']);

    // Community
    Route::resource("/community", CommunityController::class);

    // Report Online & Offline
    Route::resource("/report/online", OnlineReportController::class);
    Route::resource("/report/offline", OfflineReportController::class);
});
