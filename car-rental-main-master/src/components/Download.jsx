import blog1 from "../images/download/blog-1.jpg";
import blog2 from "../images/download/blog-2.jpg";
import blog3 from "../images/download/blog-3.jpg";
import blog4 from "../images/download/blog-4.jpg";
import blog5 from "../images/download/blog-5.jpg";

function Download() {
  return (
    <>
      <section class="section blog" id="blog">
        <div class="container">

          <h2 class="h2 section-title" >Our Blog</h2>

          <ul class="blog-list has-scrollbar">

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    {/* <img src="./assets/images/blog-1.jpg" alt="Opening of new offices of the company" loading="lazy" */}
                    <img src={blog1} alt="Opening of new offices of the company" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge"></a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">Opening of new offices of the company</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2024</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog2} alt="What cars are most vulnerable" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge"></a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">What cars are most vulnerable</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2024</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog3} alt="Statistics showed which average age" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge"></a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">Statistics showed which average age</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2024</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog4} alt="What´s required when renting a car?" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge"></a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">What´s required when renting a car?</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2024</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog5} alt="New rules for handling our cars" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge"></a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">New rules for handling our cars</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2024</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      
    </>
  
    );
 }

 export default Download; 






















// import Img1 from "../images/download/appstore.svg";
// import Img2 from "../images/download/googleapp.svg";

{/* function Download() {
   return (
    <>
//       <section className="download-section">
//         <div className="container">
//           <div className="download-text">
//             <h2>Download our app to get most out of it</h2>
//             <p>
//               Thrown shy denote ten ladies though ask saw. Or by to he going
//               think order event music. Incommode so intention defective at
//               convinced. Led income months itself and houses you.
//             </p>
//             <div className="download-text__btns">
//               <img alt="download_img" src={Img2} />
//               <img alt="download_img" src={Img1} />
             
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
  );
 }

 export default Download; */}
