import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
const Myfotor = () =>{
   
    return(    
               <div className="fotor">
                    <div className="container">
                        <div className="row">
                            <div className="fotorone">
                               <a href="https://www.facebook.com/profile.php?id=100008571760718"> <BsFacebook className="ms-3 text-light"/></a>
                                <BsLinkedin className="ms-3 text-light"/>
                                <BsGoogle className="ms-3 text-light"/>
                                <BsTwitter className="ms-3 text-light"/>
                                <p>privacy | Terms | FAQs | Help</p>
                                <h6>@ Email: jay@designarena.tech</h6>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Myfotor;