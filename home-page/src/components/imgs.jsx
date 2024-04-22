import React from "react";

function imgs(props){
    return <img className="slider" id={"slide-"+props.id} src={props.img} alt="" />
}

export default imgs;