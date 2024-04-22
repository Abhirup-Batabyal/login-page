import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import imgLinks from "../imgLinks";
import EntryBoard from "./EntryBoard";

function App(){
    return <div>
        <Header />
        <EntryBoard key={imgLinks[0].key} id={imgLinks[0].key} img={imgLinks[0].imageURL} />
        <Footer />
        
    </div>
}

export default App;