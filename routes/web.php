<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.content');
});

Route::get('/about', function () {
    return view('about.index');
});

Route::get('/skills', function () {
    return view('skills.index');
});

Route::get('/projects', function () {
    return view('projects.index');
});

Route::get('/contact', function () {
    return view('contact.index');
});
