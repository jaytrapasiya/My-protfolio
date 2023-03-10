import React from 'react';
import ProgressBar from "bootstrap-progress-bar";

const Proge = () => {
    return (
        <div>
            <h1 className="text-center mt-4 mb-4">My Skill</h1>
           <div className="mt-3 pbar">
                <h6>HTML</h6>
                <ProgressBar animated width="90%"/>
            </div>
            <div className="mt-3">
                <h6>CSS</h6>
                <ProgressBar animated width="80%"/>
            </div>
            <div className="mt-3">
                <h6>Javascript</h6>
                <ProgressBar animated width="70%"/>
            </div>
            <div className="mt-3">
                <h6>React Js</h6>
                <ProgressBar animated width="88%"/>
            </div>
        </div>
    )
}

export default Proge;