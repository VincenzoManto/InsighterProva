import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


const FeatureList = [
  {
    title: 'Easy to Use',
    icon: 'fa fa-sliders-h',
    description: "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",
  },
  {
    title: 'Focus on What Matters',
    icon: 'fa fa-sliders-h',
    description: "Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the <code>docs</code> directory."
  },
  {
    title: 'Powered by React',
    icon: 'fa fa-sliders-h',
    description: "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
  },
];

 function Feature({icon, title, description}) {
  return (
    <div class="col-12 col-md-3">
      <div class="card h-100">
      <div class="card-body py-5">
          <div class="card-icon mb-4"><i class={icon}></i></div>
          <h3 class="card-title h4">{title}</h3>
          <p class="card-text">{description}</p>
          <a href="1.html" class="stretched-link"></a>
      </div>
    </div>
    </div>

  );
}
 




export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  // Initialize the CMS object

  return (
    <Layout
    >
      <div class="index-content">
    <section class="section pb-0">
    <div class="container">
       <div class="row justify-content-between align-items-center">
          <div class="col-xl-6 col-lg-8 text-center text-lg-start">
             <h1 class="mb-4">Documentation</h1>
             <p class="mb-4">Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
             <div class="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <a class="btn btn-primary ms-2 me-2 me-lg-4 mt-2" href="basic-startup/">Get Started</a>
             </div>
          </div>
          <div class="col-lg-4 d-lg-block d-none">
           <img src="https://ouch-cdn2.icons8.com/Pf4yc2Gqrpc8DXaT4cx4QL9Ck-RF57T6_23GAMTvWmA/rs:fit:368:508/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjU1/L2YxOTc1NDA2LWY1/YjMtNGE5My1iOWFk/LWRjN2I2MDAyY2Rh/Yy5wbmc.png" loading="lazy" decoding="async" alt="illustration" class="img-fluid" width="346" height="352"/>
           </div>
       </div>
    </div>
  </section>
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section class="section">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-4 text-center d-lg-block d-none">
                <img src="https://ouch-cdn2.icons8.com/tQ0HwENhibiKHVm7aUvPDylUlQ8W01w2GOAlnFYiO54/rs:fit:368:315/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcw/LzVhMjE4ODUxLTUw/OWItNGQyOC1hNjQ0/LWIzMDYxMGFlYjY4/MC5wbmc.png" loading="lazy" decoding="async" alt="call-to-action" class="img-fluid" width="254" height="428"/></div>
               <div class="col-lg-8 text-lg-start text-center">
                  <h2 class="mb-3 fw-bold">Still Didn’t Find Your Answer?</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam<br/>nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                  <a href="page.html" class="btn btn-primary">Submit a ticket</a>
               </div>
            </div>
         </div>
      </section>
    </div>
    </Layout>
  );
}