@extends('layouts.app')

@section('content')

@section('title')
Projects
@endsection

<section class="ftco-section ftco-project" id="projects-section">
    <div class="container-fluid px-md-4">
        <div class="row justify-content-center pb-5">
            <div class="col-md-12 heading-section text-center ftco-animate">
                <span class="subheading">Accomplishments</span>
                <h2 class="mb-4">Our Projects</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                    style="background-image:url({{ asset('vendor/clyde') }}/images/work-1.jpg);">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                        <span>Web Design</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                    style="background-image:url({{ asset('vendor/clyde') }}/images/work-2.jpg);">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                        <span>Web Design</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                    style="background-image:url({{ asset('vendor/clyde') }}/images/work-3.jpg);">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                        <span>Web Design</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                    style="background-image:url({{ asset('vendor/clyde') }}/images/work-4.jpg);">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                        <span>Web Design</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
