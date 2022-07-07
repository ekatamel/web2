<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::with("aliases")->with("missions")->get();

        return $people;
    }

    public function search($id)
    {
        $search = $id;
        
        $people = Person::with("status")->with("missions")
                        ->where("name", "like", "%$search%")
                        ->get();

        return $people;
    }
}
