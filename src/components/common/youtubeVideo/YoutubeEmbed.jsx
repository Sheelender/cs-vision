import React from "react";
import './youtube.css'

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e6P8pdVORnY?si=quMRGnOexCfrvZem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
);



export default YoutubeEmbed;