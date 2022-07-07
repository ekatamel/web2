@extends('layouts/main')

@section('content')
    <h1 class="title">People of interest</h1>

    {{-- @if (count($errors) > 0)
        @foreach ($errors->all() as $error)
            <p>{{ $error }}</p>
        @endforeach
    @endif --}}



    <div id="root"></div>




    <script src="{{ mix('js/people-of-interest.js') }}"></script>
@endsection
