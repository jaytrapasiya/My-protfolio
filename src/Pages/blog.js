import Myfotor from "./foter"
const Myblog = () =>{
   
    return(
        <div>
            <div>
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
                    <div>
                <Myfotor/>
              </div>
                </div>
            </div>
        </div>
    )
}
export default Myblog;