<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        return view('backend.admin.dashboard.mainIndex');
    }
    public function loginForm(Request $request)
    {

        return view('backend.admin.dashboard.mainIndex');
    }
}
