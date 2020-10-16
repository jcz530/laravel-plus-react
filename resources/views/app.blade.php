<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel + React Setup</title>

        <style>
            body{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: rgb(100 198 245);
                background: linear-gradient(320deg, #61dafb, #ff2d20);
                color: #fff;
                font-family: Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
            }
            h1{
                font-size: 3rem;
            }
        </style>
    </head>

    <body class="">
        <h1>Laravel + React</h1>


        <MySimpleComponent></MySimpleComponent>

        @guest
        <MySecondComponent
            title="This is using blade's {{'@'}}guest helper to show to 'Guests' only"
        />
        @endguest


        @auth
        {{-- Remember to use "json_encode" to pass in objects --}}
        <MySecondComponent
            title="This is showing to authed users"
            user="{{ json_encode(auth()->user()) }}"
        />
        @endauth


        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
