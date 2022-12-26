function MyTabs(){
    return (
        <div>
                {/* <!--================My Tabs Area =================--> */}
        <section class="mytabs_area p_120">
        	<div class="container">
        		<div class="tabs_inner">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<ul class="list">
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Dec 2019 to present</p>
										</div>
										<div class="media-body">
											<h4>Advanced Business & Healthcare</h4>
											<p>Sr. Software Engineer <br />Rajkot, India</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Oct 2016 to Dec 2018</p>
										</div>
										<div class="media-body">
											<h4>Cybage Software</h4>
											<p>Sr. Software Engineer <br />Gandhinagar, India</p>
										</div>
									</div>
								</li>
								<li>
								<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Aug 2014 to Oct 2016</p>
										</div>
										<div class="media-body">
											<h4>Cognizant</h4>
											<p>Associate - Projects <br />Pune, India</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>May 2013 to June 2014</p>
										</div>
										<div class="media-body">
											<h4>Zealousweb Technologies</h4>
											<p>.Net Developer <br />Ahmedabad, India</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>June 2011 to Apr 2013</p>
										</div>
										<div class="media-body">
											<h4>iPatientCare</h4>
											<p>Software Engineer <br />Ahmedabad, India</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							<ul class="list">
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>June 2007 to June 2011</p>
										</div>
										<div class="media-body">
											<h4>Saurashtra University</h4>
											<p>Bachelor of Engineering<br />L. E. College, Morbi</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>June 2005 to June 2007</p>
										</div>
										<div class="media-body">
											<h4>12th Science</h4>
											<p>Krishna Higher Secondary School <br />Rajkot, India</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
        		</div>
        	</div>
        </section>
        {/* <!--================End My Tabs Area =================--> */}
        </div>
    );
}

export default MyTabs;