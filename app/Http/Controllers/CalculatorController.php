<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function getSum(Request $request)
    {
        $number_1 = (float)$request->number_1;
        $number_2 = (float)$request->number_2;
        $sum      = $number_1 + $number_2;
        $result   = ['result' => $sum];

        return response()->json($result);
    }
}
