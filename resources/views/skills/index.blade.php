@extends('layouts.app')

@section('content')

@section('title')
Skills
@endsection

<section class="ftco-section bg-light" id="skills-section">
    <div class="container">
        <div class="row justify-content-center pb-5">
            <div class="col-md-12 heading-section text-center ftco-animate">
                <span class="subheading">Skills</span>
                <h2 class="mb-4">My Skills</h2>
            </div>
        </div>
        <div class="row progress-circle mb-5">
            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">HTML</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">CSS</h2>
                </div>
            </div>

        </div>
    </div>
</section>

@endsection
