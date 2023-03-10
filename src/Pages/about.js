import Myfotor from "./foter"
const Myabout = () =>{
   
    return(
        <div>
            <div>
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
                    <div>
                <Myfotor/>
              </div>
                </div>
            </div>
        </div>
    )
}
export default Myabout