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
                <h2 class="mb-4">My Projects</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                    style="background-image:url({{ asset('vendor/clyde') }}/images/image_1.jpg);">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                        <h3><a href="#">Build Manager</a></h3>
                        <span>CodeIgniter</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="project img shadow ftco-animate d-flex justify-content-center align-items-center"
                    style="background-image:url({{ asset('vendor/clyde') }}/images/image_2.jpg);">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                        <h3><a href="#">Bookify</a></h3>
                        <span>Laravel</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
