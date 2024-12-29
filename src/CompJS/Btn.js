import React from "react";
import { useState } from "react";
import "../CompCSS/Btn.css";


function BtnDoThings() {

    /*const [bgColor, setBgColor] = useState("aquamarine");

    const clrSwitch = () => {
        setBgColor((currentColor) => (currentColor === "aquamarine" ? "red" : "aquamarine"));
*/
 const [image, setImage] = useState(0);

 const images = [ "https://images.pexels.com/photos/101529/pexels-photo-101529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
                  "https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgMBAJRMyisAAAAASUVORK5CYII="  ];

 const flipImageChange = (index) => {
    setImage(index);
 }
    
    return (
<div>
<img src={images[image]} alt="currentImage" />
<div className="button-container">
  {images.map((image, index) => (
       
    <button  className="button" key={index} onClick={() => flipImageChange(index)}>
     pics {index + 1}
    </button>
  ))}
 
</div>
</div>
    );
};


export default BtnDoThings;