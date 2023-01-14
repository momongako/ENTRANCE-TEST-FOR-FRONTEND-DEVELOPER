import React, { useState } from 'react';

const Gallery = () => {
    const [index, setIndex] = useState(1);


    const handlePrevious = (event) => {
        setIndex(event);
    };
    return (
        <>
            {/* screen desktop */}
            <div className="gallery responsive-display">
                <div>
                    <p id="text-gallery">Packer pen Gallery</p>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide relative sliderAx h-auto" data-bs-ride="carousel">
                    <div className="carousel">
                        <div className="slideshow-container">
                            <div className={index === 1 ? "" : "hidden"}>
                                <div className="mySlides fade">
                                    <div id="slider-1" className="container mx-auto flex flex-row">
                                        <div style={{ marginRight: '18px', marginTop: '50px' }} className="bg-cover bg-center h-auto text-white object-fill basis-1/4 flex flex-col">
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 23.jpg")} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/Rectangle 25.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="bg-cover bg-center h-auto text-white object-fill basis-2/4 flex flex-col">
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 21.jpg")} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/Rectangle 24.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '18px', marginTop: '50px' }} className="bg-cover bg-center h-auto text-white object-fill basis-1/4 flex flex-col">
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 26.jpg")} alt="" />
                                            </div>
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 27.jpg")} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/Rectangle 28.jpg")} alt="" />
                                            </div>
                                        </div>
                                        {/* container */}
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className={index === 2 ? "" : "hidden"}>
                                <div className="mySlides fade">
                                    <div id="slider-2" className="container mx-auto flex flex-row">
                                        <div style={{ marginRight: '18px', marginTop: '50px' }} className="bg-cover bg-center h-auto text-white object-fill basis-1/4 flex flex-col">
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 23.jpg")} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/Rectangle 25.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="bg-cover bg-center h-auto text-white object-fill basis-2/4 flex flex-col">
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 24.jpg")} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/Rectangle 21.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '18px', marginTop: '50px' }} className="bg-cover bg-center h-auto text-white object-fill basis-1/4 flex flex-col">
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 26.jpg")} alt="" />
                                            </div>
                                            <div className="img-gallery-px">
                                                <img src={require("../img/Rectangle 27.jpg")} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/Rectangle 28.jpg")} alt="" />
                                            </div>
                                        </div>
                                        {/* container */}
                                        <br />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <span className={index === 1 ? 'dot active' : 'dot'} onClick={() => handlePrevious(1)} />
                        <span className={index === 2 ? 'dot active' : 'dot'} onClick={() => handlePrevious(2)} />
                    </div>
                </div>

            </div>
            {/* screen mobile 390px */}
            <div className="responsive-mobile">
                <div id="px-mobile-gallery">
                    <div style={{ marginBottom: '33.93px' }}>
                        <p id="text-gallery-mobile">Packer pen Gallery</p>
                    </div>
                    <div id="carouselExampleCaptions" className="carousel slide relative sliderAx h-auto" data-bs-ride="carousel">
                        <div className="carousel">

                            <div className="slideshow-container">
                                <div className={index === 1 ? "" : "hidden"}>
                                    <div className="mySlides fade">
                                        <div className='flex'>
                                            <div style={{ marginRight: '9.51px' }} >
                                                <div>
                                                    <img src={require("../img/mobile/Rectangle 23.jpg")}
                                                        style={{ width: '189.25px', height: '128.38px' }} alt="" />
                                                </div>
                                                <div style={{ marginTop: '9.51px' }}>
                                                    <img src={require("../img/mobile/Rectangle 27.jpg")}
                                                        style={{ width: '189.25px', height: '152.16px' }} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <img src={require("../img/mobile/Rectangle 25.jpg")}
                                                    style={{ width: '189.25px', height: '290.05px' }} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '9.51px' }}>
                                            <img src={require("../img/mobile/Rectangle 24.jpg")}
                                                style={{ width: '388px', height: '298.46px' }} alt="" />
                                        </div>
                                        <div style={{ marginTop: '9.51px' }}>
                                            <img src={require("../img/mobile/Rectangle 21.jpg")}
                                                style={{ width: '388px', height: '298.46px' }} alt="" />
                                        </div>
                                        <div className='flex' style={{ marginTop: '9.51px' }} >
                                            <div style={{ marginRight: '9.51px' }} >
                                                <img src={require("../img/mobile/Rectangle 28.jpg")}
                                                    style={{ width: '189.25px', height: '131.24px' }} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/mobile/Rectangle 26.jpg")}
                                                    style={{ width: '189.25px', height: '131.24px' }} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className={index === 2 ? "" : "hidden"}>
                                    <div className="mySlides fade">
                                        <div className='flex'>
                                            <div style={{ marginRight: '9.51px' }} >
                                                <div>
                                                    <img src={require("../img/mobile/Rectangle 23.jpg")}
                                                        style={{ width: '189.25px', height: '128.38px' }} alt="" />
                                                </div>
                                                <div style={{ marginTop: '9.51px' }}>
                                                    <img src={require("../img/mobile/Rectangle 27.jpg")}
                                                        style={{ width: '189.25px', height: '152.16px' }} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <img src={require("../img/mobile/Rectangle 25.jpg")}
                                                    style={{ width: '189.25px', height: '290.05px' }} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '9.51px' }}>
                                            <img src={require("../img/mobile/Rectangle 21.jpg")}
                                                style={{ width: '388px', height: '298.46px' }} alt="" />
                                        </div>
                                        <div style={{ marginTop: '9.51px' }}>
                                            <img src={require("../img/mobile/Rectangle 24.jpg")}
                                                style={{ width: '388px', height: '298.46px' }} alt="" />
                                        </div>
                                        <div className='flex' style={{ marginTop: '9.51px' }} >
                                            <div style={{ marginRight: '9.51px' }} >
                                                <img src={require("../img/mobile/Rectangle 28.jpg")}
                                                    style={{ width: '189.25px', height: '131.24px' }} alt="" />
                                            </div>
                                            <div>
                                                <img src={require("../img/mobile/Rectangle 26.jpg")}
                                                    style={{ width: '189.25px', height: '131.24px' }} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <span className={index === 1 ? 'dot active' : 'dot'} onClick={() => handlePrevious(1)} />
                                <span className={index === 2 ? 'dot active' : 'dot'} onClick={() => handlePrevious(2)} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
