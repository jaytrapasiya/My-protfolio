import { BsDisplay } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { BsZoomOut } from "react-icons/bs";
import { BsFileBreak } from "react-icons/bs";
import Myfotor from "./foter"
const Myserveces = () =>{
   
    return(
        <div>
            <div>
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
                    <div>
                <Myfotor/>
              </div>
                </div>
            </div>
        </div>
    )
}
export default Myserveces;