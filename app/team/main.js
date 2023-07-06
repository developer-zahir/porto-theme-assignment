const team_section = document.querySelector('.team-section');
teams_data.map((member, index)=>{
  if(index%2 ===0 ){
    team_section.innerHTML += `
    <div class="row pt-5 pb-5">
    <div class="col-md-7 order-2">
    <div class="overflow-hidden">
    <h2 class="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">${member.name}</h2>
    </div>
    <div class="overflow-hidden mb-3">
    <p class="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="500">${member.job_tilte}</p>
    </div>
    <p class="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">${member.about}</p>
    <hr class="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900">
    <div class="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
    <div class="col-lg-6">
    <a href="${member.call_to_action.button_one}" class="btn btn-modern btn-dark mt-3">Get In Touch</a>
    <a href="${member.call_to_action.button_two}" class="btn btn-modern btn-primary mt-3">Hire Me</a>
    </div>
    <div class="col-sm-6 text-lg-right my-4 my-lg-0">
    <strong class="text-uppercase text-1 mr-3 text-dark">follow me</strong>
    <ul class="social-icons float-lg-right">
    <li class="social-icons-facebook"><a href="${member.social_links.facebook}" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
    <li class="social-icons-twitter"><a href="${member.social_links.twitter}" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
    <li class="social-icons-linkedin"><a href="${member.social_links.linkeding}" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
    </ul>
    </div>
    </div>
    </div>
    <div class="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
    <img src="${member.image}" class="img-fluid" alt="">
    </div>
    </div> 
    `
  }else{
    team_section.innerHTML += `
    <div class="row  pt-5 pb-5">
    <div class="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
    <img src="${member.image}" class="img-fluid" alt="">
    </div>
    <div class="col-md-7 order-2">
    <div class="overflow-hidden">
    <h2 class="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">${member.name}</h2>
    </div>
    <div class="overflow-hidden mb-3">
    <p class="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="500">${member.job_tilte}</p>
    </div>
    <p class="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">${member.about}</p>
    <hr class="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900">
    <div class="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
    <div class="col-lg-6">
    <a href="${member.call_to_action.button_one}" class="btn btn-modern btn-dark mt-3">Get In Touch</a>
    <a href="${member.call_to_action.button_two}" class="btn btn-modern btn-primary mt-3">Hire Me</a>
    </div>
    <div class="col-sm-6 text-lg-right my-4 my-lg-0">
    <strong class="text-uppercase text-1 mr-3 text-dark">follow me</strong>
    <ul class="social-icons float-lg-right">
    <li class="social-icons-facebook"><a href="${member.social_links.facebook}" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
    <li class="social-icons-twitter"><a href="${member.social_links.twitter}" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
    <li class="social-icons-linkedin"><a href="${member.social_links.linkeding}" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
    </ul>
    </div>
    </div>
    </div>
    </div> 
    `
  }
})


{/* <div class="row">
<div class="col-md-7 order-2">
<div class="overflow-hidden">
<h2 class="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">John Doe</h2>
</div>
<div class="overflow-hidden mb-3">
<p class="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="500">CEO</p>
</div>
<p class="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.</p>
<p class="pb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.</p>
<hr class="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900">
<div class="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
<div class="col-lg-6">
<a href="#" class="btn btn-modern btn-dark mt-3">Get In Touch</a>
<a href="#" class="btn btn-modern btn-primary mt-3">Hire Me</a>
</div>
<div class="col-sm-6 text-lg-right my-4 my-lg-0">
<strong class="text-uppercase text-1 mr-3 text-dark">follow me</strong>
<ul class="social-icons float-lg-right">
<li class="social-icons-facebook"><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
<li class="social-icons-twitter"><a href="https://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
<li class="social-icons-linkedin"><a href="https://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorter">
<img src="img/team/team-1.jpg" class="img-fluid" alt="">
</div>
</div> */}