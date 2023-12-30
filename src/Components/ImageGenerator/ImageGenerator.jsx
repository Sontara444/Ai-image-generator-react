import React, { useRef, useState } from 'react'
import "./ImageGenerator.css"
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {

    const[image_url, setImage_url] = useState('/');
    let inputRef = useRef(null);

    const imageGenerator = async () =>{
        if(inputRef.current.value===""){
            return 0;
        }
    }

  return (
    <div className='ai-image-generator'>
        <div className="header">Ai Image <span>generator</span></div>
        <div className="img-loading">
            <div className="image">
                <img src={image_url==="/"?default_image:image_url} alt="img" />
            </div>
        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To See ' />
            <div className="generate-btn">
                Generate
            </div>
        </div>
    </div>
  )
}

export default ImageGenerator
