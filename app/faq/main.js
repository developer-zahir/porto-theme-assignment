
// section title 
const section_title_container = document.querySelector('.section-title-container')
faq_section_title_data.map((section_element, index)=>{
    section_title_container.innerHTML +=`
    <h2 class="font-weight-normal text-7 mb-2">${section_element.section_title}</h2>
    <p class="lead">${section_element.section_content}</p>
    `
})
// section tilte end


// section main content -----------------
const faq_container = document.querySelector(".faq-container");

faqs_data.map((faq, index) => {
  faq_container.innerHTML += `
    
    <!-- toggle item start -->
    <section class="toggle ">
        <a class="toggle-title">${faq.title} - ( 0${(index = index + 1)} )</a>
        <div class="toggle-content">
            <p>${faq.content}</p>
        </div>
    </section>
    <!-- toggle item end -->
    `;
});
faq_container.firstElementChild.classList.add("active");
