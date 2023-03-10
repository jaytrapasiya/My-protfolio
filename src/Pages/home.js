// import Progres from "./progres"
import Proge from "../component/Proge"
import Appp from "../component/slider";
import Myfotor from "./foter"
import { BsDisplay } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { BsZoomOut } from "react-icons/bs";
import { BsFileBreak } from "react-icons/bs";
// import BasicExample from "./progres"



const Myhome = () =>{
   
    return(
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1"></div>
                        <div className="col-lg-5 col-md-5 jay">
                            <img src="jay.jpg" className="rounded-circle"/>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-5 mb-5 imjay">
                            <h4>I'M</h4>
                            <h1>JAY TRAPASIYA</h1>
                            <p>Web Designer Web Developer,React Developer</p>
                            <button><a href="_Resume-2.pdf" download target="_blank">Download CV</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutme">
                    <div className="container">
                        <div className="row">
                        <div className="text-center mt-3 mb-3"><h1>ABOUT ME</h1></div>
                            <div className="col-lg-6 col-md-6">
                                <img src="123jay.jpeg" width="100%"/>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5 mb-5">
                                <h3>UI/UX Designer & Web Developer</h3>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
                                    graphic or web designs. The passage is attributed to an unknown 
                                Lorem ipsum, or lipsum as it is sometimes known
                                </p>
                                
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 aboutme">
                                            <p><strong className="text-dark">Name :</strong> Jay Trapasiya</p>
                                            <p><strong className="text-dark">Degree :</strong> B.com</p>
                                            <p><strong className="text-dark">Phone :</strong> +91 9723000184</p>
                                            <p><strong className="text-dark">Address :</strong> A-72 Pramukh Chaya Society, Nana Varachha, Surat, Gujarat-395010</p>
                                           
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <p><strong className="text-dark">Birthday :</strong> 24 Jullay 2002</p>
                                            <p><strong className="text-dark">Experience :</strong> 1 Yers</p>
                                            <p><strong className="text-dark">Email :</strong> Jaytrapasiya70@gmail.com</p>
                                        </div>
                                        <div className="aboutme">
                                            <button>Hire Me</button>  <button>Lern More</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div> 
            <div>
                <div className="container">
                    <div className="row">
                    <div className="text-center mt-3 mb-3 myedu"><h1>Education & Experience</h1></div>
                        <div className="col-lg-6 col-md-6">
                            <div className="mt-3 mb-3"><h4>My Education</h4></div>
                        <div className="stepper-wrapper-vertical">
                            <div className="node">
                                <h5>S.S.C</h5>
                                <h6>g.s.e.b (Gujarat)/ 2018</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type</p>
                            </div>
                            <div className="node ">
                            <h5>H.S.C</h5>
                                <h6>g.s.e.b (Gujarat)/ 2020</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type</p>
                            </div>
                            <div className="node">
                            <h5>B.com</h5>
                                <h6> Narsinh Mehta University </h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="mt-3 mb-3"><h4>My Experience</h4></div>
                        <div className="stepper-wrapper-vertical">
                            <div className="node">
                                <h5>React Training</h5>
                                <h6>Info Cumpus</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type</p>
                            </div>
                            <div className="node ">
                            <h5>Web Designer</h5>
                                <h6>Info Cumpus</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type</p>
                            </div>
                            <div className="node">
                            <h5>React Front-End Developer</h5>
                                <h6> Info Cumpus </h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="text-center mt-5 mb-2"><h1>Services</h1></div>
                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div>
                                    <div className="rounded-circle webdesign mb-3"><BsDisplay/></div><h3>Web Design</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took</p>
                                        <a href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div>
                                    <div className="rounded-circle webdesign mb-3"><BsDisplayFill/></div><h3>Web Devlopment</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took</p>
                                        <a href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div>
                                    <div className="rounded-circle webdesign mb-3"><BsPhoneFill/></div><h3>App Design</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took</p>
                                        <a href="">Read More</a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div>
                                    <div className="rounded-circle webdesign mb-3"><BsFileBreak/></div><h3>App Devlopment</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took</p>
                                        <a href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div>
                                    <div className="rounded-circle webdesign mb-3"><BsZoomOut className="mb-1 mt-1"/></div>
                                    <h3>SEO</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took</p>
                                        <a href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center mt-4 servicebox">
                                <div>
                                    <div className="rounded-circle webdesign mb-3"><BsFileEarmarkPostFill/></div><h3>Content Creating</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took</p>
                                        <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            
            <div className="container">
                    <div className="row">
                        <Proge/>
                    </div>
               </div>
               <div className="contavtus">
                    <div className="container">
                        <div className="row">
                            <div className="mt-5">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Design</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Devlopment</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#marketing" type="button" role="tab" aria-controls="marketing" aria-selected="false">Marketing</button>
                                </li>
                            </ul>
                            </div>


                            <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="mt-3 pfolio-images"> 
                                            <img src="person-using.jpg"/>
                                            <div className="text">Design</div>
                                            <div className="overlay"></div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">
                                    <img src="176_E39A2335.jpg"/>
                                    <div className="text">Marketing</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">  
                                    <img src="5-book-reading.jpg"/>  
                                    <div className="text">Design</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="mt-3 pfolio-images">
                                            <img src="6697_wide_250x141_2x.jpg"/>
                                            <div className="text">Devlopment</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">
                                         <img src="This-is-.jpg"/>
                                         <div className="text">Devlopment</div>
                                            <div className="overlay"></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images"> 
                                        <img src="assam-india.jpg"/>   
                                        <div className="text">Design</div>
                                            <div className="overlay"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                <div className="col-lg-4 col-md-6">
                                        <div className="mt-3 pfolio-images"> 
                                            <img src="person-using.jpg"/>
                                            <div className="text">Design</div>
                                            <div className="overlay"></div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">  
                                    <img src="5-book-reading.jpg"/>  
                                    <div className="text">Design</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images"> 
                                        <img src="assam-india.jpg"/>   
                                        <div className="text">Design</div>
                                            <div className="overlay"></div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                <div className="col-lg-4 col-md-6">
                                        <div className="mt-3 pfolio-images">
                                            <img src="6697_wide_250x141_2x.jpg"/>
                                            <div className="text">Devlopment</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">
                                         <img src="This-is-.jpg"/>
                                         <div className="text">Devlopment</div>
                                            <div className="overlay"></div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                                <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="mt-3 pfolio-images">
                                    <img src="176_E39A2335.jpg"/>
                                    <div className="text">Marketing</div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
             <div>
                <Appp/>
            </div>
            <div className="latestBlog">
                    <div className="container">
                        <div className="row">
                            <div className="text-center mt-3 mb-3"><h1>Latest Blog</h1></div>
                            <div className="col-lg-4 col-md-4">
                                <div className="onejan">
                                </div>
                                <div>
                                    <p className="mt-3">Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took </p>
                                    <button className="mb-4">Read More</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="twojan">
                                </div>
                                <div>
                                    <p className="mt-3">Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took </p>
                                    <button className="mb-4">Read More</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="threejan">
                                </div>
                                <div>
                                    <p className="mt-3">Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took </p>
                                    <button className="mb-4">Read More</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="contavtus">
                    <div className="container">
                        <div className="row">
                            <div className="text-center mt-5 mb-2"><h1>Contact Us</h1></div>
                                 <div className="row">
                                    <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-8 col-md-8 ronak">
                                            <input type="text" placeholder="Your Name" className="me-2"/> 
                                            <input type="text" placeholder="Your Email" className="mt-2"/>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-8 col-md-8">
                                         <input type="text" placeholder="Subject" className="mt-2"/> 
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-8 col-md-8">
                                        <textarea placeholder="Message"className="mt-2"></textarea>
                                        <div><button>Send Message</button></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
              <div>
                <Myfotor/>
              </div>
                
        </div>
    )
}

export default Myhome