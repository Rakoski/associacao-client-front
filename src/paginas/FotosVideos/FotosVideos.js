import "./estilo.css";
import React, { Component } from "react";
import Fotos from "./Fotos"
import Videos from "./Videos"
import { Parallax } from "react-parallax";

class FotosVideos extends Component {
  render() {

    return (
      <>
        <section>
          <Videos />
        </section>
        <section>
          <Fotos />
        </section>
      </>
    )
  }
}

export default FotosVideos;
