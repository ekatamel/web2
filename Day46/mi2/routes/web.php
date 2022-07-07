<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\MissionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/people-of-interest', function () {
    return view('people/people');
});

// Route::get('/people-of-interest', [
//     PeopleController::class, "show"
// ]);

Route::get("/", [
    HomeController::class, "index"
]);

Route::post("/missions", [
    MissionController::class, "store"
])->name("mission.store");

Route::get("/missions/{path?}", 
    [MissionController::class, "app"]
)->where("path", ".*");


