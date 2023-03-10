import React from "react";


const Appp = () =>{
    return(
        <>
        <div className="container">
          <div className="row">
          <h1 className="text-center mt-5 mb-4">CLIENT SAY</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="col-lg-12 col-md-12">
                    <div className="carousel-item active text-center">
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a
                        galley of type and scrambled it to make a type<br/> galley of type and scrambled it to make a type</p><br/>
                        <div className><img src="0jwhEGnX_400x400.jpg" className="rounded-circle" width="50px"/></div>
                        <h6>Dharuvin Nakrani</h6>
                        <p>Web Designer</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                  <div className="carousel-item text-center">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a
                        galley of type and scrambled it to make a type<br/> galley of type and scrambled it to make a type</p><br/>
                        <div className><img src="UNJ05AV8_400x400.jpg" className="rounded-circle" width="50px"/></div>
                        <h6>Ronak Kanani</h6>
                        <p>React Developer</p>
                  </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                  <div className="carousel-item text-center">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a
                        galley of type and scrambled it to make a type<br/> galley of type and scrambled it to make a type</p><br/>
                        <div className><img src="0jwhEGnX_400x400.jpg" className="rounded-circle" width="50px"/></div>
                        <h6>Deep Dobariya</h6>
                        <p>grafics Designer</p>
                  </div>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
           </div>
           
        </div>
        </>
    )
}
export default Appp;