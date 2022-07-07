<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix('/css/style.css') }}">
    <!-- <script src="./js/script.js" defer></script> -->
</head>

<body>
    <div class="nav-panel">
        <img class="seal" src="/images/mi6-seal.png" alt="MI6 Seal">
        <a href="/">
            <p>Home</p>
        </a>
        <a href="/people-of-interest">
            <p>People of Interest</p>
        </a>
        <a href="/missions">
            <p>Missions</p>
        </a>


        <div class="nav-control">
            <button>
                << /button>
        </div>
    </div>
    <main class="content">
        @yield('content')

    </main>

    <script>
        const button = document.querySelector('.nav-control button')
        const navPanel = document.querySelector('.nav-panel')

        button.addEventListener('click', () => {
            navPanel.classList.toggle('hidden')
            button.textContent = button.textContent == '>' ? '<' : '>'
        })
    </script>
</body>

</html>
