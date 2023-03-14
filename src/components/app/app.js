import React, { useState } from "react";
import Slider from "../slider/slider"

const App = () => {

    const photos = [
        "amp.jpg",
        "dj.jpg",
        "effect.jpeg",
        "gibson-exclusive-collection.jpg",
        "headphones.jpeg",
        "keys.jpg",
        "remni.jpeg",
        "studio.jpeg"
    ]

    return (
        <div>
            <Slider photos={photos}/>
        </div>
    );

};

export default App;