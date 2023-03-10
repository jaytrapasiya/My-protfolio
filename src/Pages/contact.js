import Myfotor from "./foter"
// let[uname, pickName] = useState("");
//     let[subject, pickSubject] = useState("");
//     let[email, pickEmail] = useState("");
//     let[address, pickMessage] = useState("");

//     const sendmsg = () =>{
//         var orderdata = {name:uname, subject:subject, email:email, address:address};
//         let url = "http://localhost:1234/order";
//         var postData={ 
//             headers:{'Content-type' : 'application/json'},
//             method:"POST",
//             body:JSON.stringify(orderdata)
//         };
//         fetch(url, postData)
//         .then(response=> response.json())
//         .then(serverRes=>{
//             alert("Hi ,"+ uname + " we Received Your Order")
//         })
//     }

const Mycontact = () =>{
   
    return(    
               <div className="contavtus">
                    <div className="container">
                        <div className="row">
                            <div className="text-center mt-5 mb-2"><h1>Contact Us</h1></div>
                                 <div className="row">
                                    <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-8 col-md-8 ronak">
                                            <input type="text" placeholder="Your Name" className="me-2"
                                            /> 
                                            <input type="text" placeholder="Your Email" className="mt-2"
                                            />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-8 col-md-8">
                                         <input type="text" placeholder="Subject" className="mt-2"
                                          /> 
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-2 col-md-2"></div>
                                    <div className="col-lg-8 col-md-8">
                                        <textarea placeholder="Message"className="mt-2"
                                        ></textarea>
                                        <div><button>Send Message</button></div>
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
export default Mycontact;