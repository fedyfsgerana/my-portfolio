@extends('layouts.app')

@section('content')

<section class="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
    <div class="container">
        <div class="row d-flex no-gutters">
            <div class="col-md-6 col-lg-5 d-flex" style="margin-top: 100px;">
                <div class="img-about img d-flex align-items-stretch">
                    <div class="overlay"></div>
                    <div class="img d-flex align-self-stretch align-items-center"
                        style="background-image:url({{ asset('vendor/clyde') }}/images/#);">
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
                <div class="py-md-5">
                    <div class="row justify-content-start pb-3">
                        <div class="col-md-12 heading-section ftco-animate">
                            <span class="subheading">My Intro</span>
                            <h2 class="mb-4" style="font-size: 34px; text-transform: capitalize;">About Me</h2>
                            <p>Sebagai programmer dan desainer, saya menggabungkan kreativitas dan logika untuk
                                menciptakan solusi inovatif dalam teknologi.</p>
                            <ul class="about-info mt-4 px-md-0 px-2">
                                <li class="d-flex"><span>Name:</span> <span>Fedy Fs. Gerana</span></li>
                                <li class="d-flex"><span>Date of birth:</span> <span>Juni 30, 2001</span></li>
                                <li class="d-flex"><span>Address:</span> <span>Concong Luar</span></li>
                                <li class="d-flex"><span>Zip code:</span> <span>29281</span></li>
                                <li class="d-flex"><span>Email:</span> <span>fedfg30@gmail.com</span></li>
                                <li class="d-flex"><span>Phone: </span> <span>+62 822 6839 1862</span></li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <div class="my-interest d-lg-flex w-100">
                                <div class="interest-wrap d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="flaticon-listening"></span>
                                    </div>
                                    <div class="text">Music</div>
                                </div>
                                <div class="interest-wrap d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="flaticon-suitcases"></span>
                                    </div>
                                    <div class="text">Travel</div>
                                </div>
                                <div class="interest-wrap d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="flaticon-video-player"></span>
                                    </div>
                                    <div class="text">Movie</div>
                                </div>
                                <div class="interest-wrap d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="flaticon-football"></span>
                                    </div>
                                    <div class="text">Sports</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
