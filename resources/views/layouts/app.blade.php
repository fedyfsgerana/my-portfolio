<!DOCTYPE html>
<html lang="en">

<head>
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="{{ asset('vendor/clyde') }}/css/animate.css">

    <link rel="stylesheet" href="{{ asset('vendor/clyde') }}/css/owl.carousel.min.css">
    <link rel="stylesheet" href="{{ asset('vendor/clyde') }}/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="{{ asset('vendor/clyde') }}/css/magnific-popup.css">

    <link rel="stylesheet" href="{{ asset('vendor/clyde') }}/css/flaticon.css">
    <link rel="stylesheet" href="{{ asset('vendor/clyde') }}/css/style.css">
</head>

<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

    <div id="app">
        <div id="main" class="layout-horizontal">
            <header class="mb-5">
                @include('layouts/navbar')
                @include('layouts/content')
            </header>

            @include('layouts/footer')
        </div>
    </div>

    <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px">
            <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
            <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                stroke="#F96D00" />
        </svg></div>

    <script src="{{ asset('vendor/clyde') }}/js/jquery.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/jquery-migrate-3.0.1.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/popper.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/bootstrap.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/jquery.easing.1.3.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/jquery.waypoints.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/jquery.stellar.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/owl.carousel.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/jquery.magnific-popup.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/jquery.animateNumber.min.js"></script>
    <script src="{{ asset('vendor/clyde') }}/js/scrollax.min.js"></script>

    <script src="{{ asset('vendor/clyde') }}/js/main.js"></script>

</body>

</html>
