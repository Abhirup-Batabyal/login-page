import React from "react";

function EntryBoard(props){
    return <div className="container">
        <div className="slider-wrapper">
            <div className="slider">
                <img id={"slide-1"} src={props.img+".png"} alt="" />
                <img id={"slide-2"} src={props.img+"2.png"} alt="" />
                <img id={"slide-3"} src={props.img+".png"} alt="" />
            </div>
            <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
        </div>
    </div>
}

export default EntryBoard;