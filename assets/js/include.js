const header = `<div class="container">
    <div class="bostami-header-wrap">
        <div class="row align-items-center">

            <!-- logo -->
            <div class="col-6">
                <div class="bostami-header-logo">
                    <a class="site-logo" href="">
                        <h3>{{CODE-NOVA}}</h3>
                    </a>
                </div>
            </div>

            <!-- menu btn -->
            <div class="col-6">
                <div class="bostami-header-menu-btn text-right">
                    <div class="dark-btn dark-btn-stored dark-btn-icon">
                        <i class="fa-light fa-moon"></i>
                        <i class="fa-light fa-sun"></i>
                    </div>
                    <div class="menu-btn toggle_menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu-wrap">
        <div class="mobile-menu mobile_menu">
        </div>
    </div>

</div>`;

const footer = `<span>© 2024 All Rights Reserved by <a href="https://themeforest.net/user/elite-themes24" target="_blank"
        rel="noopener noreferrer">elite-themes24</a>.</span>`;

const info = `<div class="bostami-parsonal-info-area">
    <div class="bostami-parsonal-info-wrap">

        <!-- img -->
        <div class="bostami-parsonal-info-img">
            <img src="assets/img/parsonal-info/parson-img-1.png" alt="avatar">
        </div>

        <!-- name -->
        <h4 class="bostami-parsonal-info-name">
            <a href="#">James Daniel</a>
        </h4>
        <span class="bostami-parsonal-info-bio mb-15">Backend Developer</span>

        <!-- socail link -->
        <ul class="bostami-parsonal-info-social-link mb-30">
            <li>
                <a href="https://www.github.com/niel22" target="_blank" class="github">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://x.com/codeNovaNiel" target="_blank" class="x">
                    <i class="fa-brands fa-x"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/novaniel" target="_blank" class="linkedin">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </li>
        </ul>

        <!-- contact -->
        <div class="bostami-parsonal-info-contact mb-30">
            <div class="bostami-parsonal-info-contact-item phone">
                <div class="icon">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div class="text">
                    <span>Phone</span>
                    <p>+234 704 0357 987</p>
                </div>
            </div>


            <div class="bostami-parsonal-info-contact-item email">
                <div class="icon">
                    <i class="fa-regular fa-envelope-open-text"></i>
                </div>
                <div class="text">
                    <span>Email</span>
                    <p style="text-transform: lowercase;">niel2264@gmail.com</p>
                </div>
            </div>

            <div class="bostami-parsonal-info-contact-item location">
                <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="text">
                    <span>Location</span>
                    <p>Lagos, Nigeria</p>
                </div>
            </div>

            <div class="bostami-parsonal-info-contact-item calendar">
                <div class="icon">
                    <i class="fa-light fa-calendar-days"></i>
                </div>
                <div class="text">
                    <span>Birthday</span>
                    <p>April 28, 2003</p>
                </div>
            </div>
        </div>

        <!-- cv button -->
        <div class="bostami-parsonal-info-btn">
            <a class="btn-1" href="#">
                <span class="icon">
                    <i class="fa-regular fa-download"></i>
                </span>
                download cv
            </a>
        </div>

    </div>
</div>`;

const menu = `<div class="bostami-main-menu-wrap">
    <nav class="bastami-main-menu main_menu">
        <ul>
            <li class="active">
                <a href="index.html">
                    <span>
                        <i class="fa-light fa-address-card"></i>
                    </span>
                    about
                </a>
            </li>
            <li>
                <a href="resume.html">
                    <span>
                        <i class="fa-light fa-file-user"></i>
                    </span>
                    Resume
                </a>
            </li>
            <li>
                <a href="portfolio.html">
                    <span>
                        <i class="fa-light fa-briefcase"></i>
                    </span>
                    Works
                </a>
            </li>
            <li>
                <a href="blog.html">
                    <span>
                        <i class="fa-light fa-newspaper"></i>
                    </span>
                    Blogs
                </a>
            </li>
            <li>
                <a href="contact.html">
                    <span>
                        <i class="fa-light fa-address-book"></i>
                    </span>
                    contact
                </a>
            </li>
        </ul>
    </nav>
</div>`;

const includeHTML = async (selector, content) => {
    try{
        document.querySelector(selector).innerHTML = content;
    }catch(error){
        console.log(error.message);
    }
}

includeHTML('#header', header);
includeHTML('#footer', footer);
includeHTML('#info', info);
includeHTML('#menu', menu);