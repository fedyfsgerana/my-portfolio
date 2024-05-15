@extends('layouts.app')

@section('content')
<section id="home-section" class="hero">
    <div class="home-slider owl-carousel">
        <div class="slider-item">
            <div class="overlay"></div>
            <div class="container-fluid px-md-0">
                <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                    data-scrollax-parent="true">
                    <div class="one-third order-md-last">
                        <div class="overlay"></div>
                        <div class="overlay-1"></div>
                    </div>
                    <div class="one-forth d-flex  align-items-center ftco-animate"
                        data-scrollax=" properties: { translateY: '70%' }">
                        <div class="text">
                            <span class="subheading">Hello! My Name Is Fedy</span>
                            <h1 class="mb-4 mt-3">Designer &amp; Developer</h1>
                            <p><a href="#" class="btn btn-primary">Hire me</a> <a href="#"
                                    class="btn btn-primary btn-outline-primary">Download CV</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider-item">
            <div class="overlay"></div>
            <div class="container-fluid px-md-0">
                <div class="row d-flex no-gutters slider-text align-items-end justify-content-end"
                    data-scrollax-parent="true">
                    <div class="one-third order-md-last">
                        <div class="overlay"></div>
                        <div class="overlay-1"></div>
                    </div>
                    <div class="one-forth d-flex align-items-center ftco-animate"
                        data-scrollax=" properties: { translateY: '70%' }">
                        <div class="text">
                            <span class="subheading">We Design &amp; Developer</span>
                            <h1 class="mb-4 mt-3">Hi, I am <span>Fedy</span></h1>
                            <p><a href="#" class="btn btn-primary">Hire me</a> <a href="#"
                                    class="btn btn-primary btn-outline-primary">Download CV</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
