<?php

use Illuminate\Support\Facades\Route;

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

// !xmevnApp routes ---
Route::get('/', function () {
    return view('xmevnApp');
});

Route::get('/{xmevnApp}', function () {
    return view('xmevnApp');
})->where('xmevnApp', 'about|profile|contact|project|server|login');

// !Laravel mix routes (Vue) ---

// !Laravel routes ---
