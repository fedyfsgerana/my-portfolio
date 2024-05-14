@extends('layouts.app')

@section('content')
<section id="home-section" class="hero">
    <div class="home-slider owl-carousel">
        <div class="slider-item">
            <div class="overlay"></div>COMPLETE
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

<section class="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
    <div class="container">
        <div class="row d-flex no-gutters">
            <div class="col-md-6 col-lg-5 d-flex">
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

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">JavaScript</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">PHP</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">CodeIgniter</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">Laravel</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">Microsoft Office</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">AutoCad</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">SketchUp</h2>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="bg-white rounded-lg shadow p-4">
                    <h2 class="h5 font-weight-bold text-center mb-4">Fl Studio</h2>
                </div>
            </div>
        </div>
    </div>
</section>

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

<section class="ftco-section contact-section ftco-no-pb" id="contact-section">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
                <span class="subheading">Contact us</span>
                <h2 class="mb-4">Have a Project?</h2>
            </div>
        </div>

        <div class="row block-9">
            <div class="col-md-8">
                <form action="{{ url('/contact') }}" class="bg-light p-4 p-md-5 contact-form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Email">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Subject">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea name="" id="" cols="30" rows="7" class="form-control"
                                    placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-md-4 d-flex pl-md-5">
                <div class="row">
                    <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text">
                            <p><span>Address:</span> Desa Harapan Tani, Kabupaten
                                Indragiri Hilir, Provinsi Riau</p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-phone"></span>
                        </div>
                        <div class="text">
                            <p><span>Phone:</span> <a href="tel://1234567920">+62 822 6839
                                    1862</a></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-paper-plane"></span>
                        </div>
                        <div class="text">
                            <p><span>Email:</span>
                                <a href="mailto:fedfg30@gmail.com">fedfg30@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-globe"></span>
                        </div>
                        <div class="text">
                            <p><span>YouTube</span>
                                <a href="https://youtube.com/@symphonymusic18?si=O5XfcwClAmJEK0uc">symphonymusic18</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
