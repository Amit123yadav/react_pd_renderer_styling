import React, { useState } from 'react'

const Img = () => {
    const [images, setImages] = useState([])


    const handleImage = (e) => {
        setImages([...images, URL.createObjectURL(...e.target.files)]);
       
    }
    console.log(images)
    return (
        <>
            <input type='file' onChange={handleImage} />
            <div className='container-fluid'>
                <div className='row mt-3 mb-3'>
                    {images.map((imgSrc) => {
                        return (
                            <div className='col-md-3 mb-3'>
                                <img className='img-fluid' src={imgSrc} style={{ height: '200px', height: '200px' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Img;