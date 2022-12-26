import personal from './img/personal.jpg';

function HomeBanner(){
    return (
        <div>

        {/* <!================Home Banner Area ================= */}
        <section class="home_banner_area">
           	<div class="container box_1620">
           		<div class="banner_inner d-flex align-items-center">
					<div class="banner_content">
						<div class="media">
							<div class="d-flex">
								<img src={personal} alt="" />
							</div>
							<div class="media-body">
								<div class="personal_text">
									<h6>Hello there, i am</h6>
									<h3>Hitesh Asodiya</h3>
									<h4>.Net Developer and Architect</h4>
									<p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
									<ul class="list basic_info">
										<li><a href="#"><i class="lnr lnr-calendar-full"></i> 29th August, 1989</a></li>
										<li><a href="#"><i class="lnr lnr-phone-handset"></i> +91 982 497 3032</a></li>
										<li><a href="#"><i class="lnr lnr-envelope"></i> hitesh.29889@outlook.com</a></li>
										<li><a href="#"><i class="lnr lnr-home"></i> Rajkot, India</a></li>
									</ul>
									<ul class="list personal_social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
        {/* <!--================End Home Banner Area =================--> */}
        </div>
    );
}

export default HomeBanner;