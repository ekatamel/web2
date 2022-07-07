<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PeopleController extends Controller
{
    public function show()
    {
        $people = Person::get();

        return view("people/people", compact("people"));
    }
}
