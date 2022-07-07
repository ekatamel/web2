<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Mission;

class MissionController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            "name" => "required",
            "year" => "required|numeric|digits:4"
        ]);

        
        
        $mission = new Mission;
        
        $name = $request->input("name");
        $year = $request->input("year");

        $mission->name = $name;
        $mission->year = $year;

        $mission->save();
    }
    // render react app for missionss
    public function app()
    {
        return view("missions/app");
    }
}
