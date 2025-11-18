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

Route::get("/community", [CommunityController::class, "index"]);
Route::get("/community/{id}", [CommunityController::class, "show"]);

Route::middleware("auth")->group(function() {
    // Me
    Route::get("/me", [UserController::class, 'me']);
    Route::post("/logout", [UserController::class, 'logout']);

    // Community
    Route::post("/community", [CommunityController::class, "store"]);
    Route::put("/community/{id}", [CommunityController::class, "update"]);
    Route::delete("/community/{id}", [CommunityController::class, "delete"]);

    // Report Online & Offline
    Route::resource("/report/online", OnlineReportController::class);
    Route::resource("/report/offline", OfflineReportController::class);
});
