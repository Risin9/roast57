<?php

namespace app\Http\Controller\Web;

use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function getApp()
    {
        return view('app');
    }
    
}



