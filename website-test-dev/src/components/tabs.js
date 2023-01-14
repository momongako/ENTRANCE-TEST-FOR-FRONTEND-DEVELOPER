import React from 'react';
import { useState } from "react";
import '../css/style.css';
const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const [hideAndShow, setHideAndShow] = useState(1);
    const [hideAndShow2, setHideAndShow2] = useState(1);
    const [hideAndShow3, setHideAndShow3] = useState(1);
    const [hideAndShow4, setHideAndShow4] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const handChangeHideShow = (event) => {
        setHideAndShow(event)
    }
    const handChangeHideShow2 = (event) => {
        setHideAndShow2(event)
    }
    const handChangeHideShow3 = (event) => {
        setHideAndShow3(event)
    }
    const handChangeHideShow4 = (event) => {
        setHideAndShow4(event)
    }
    return (
        <div>
            <div className='responsive-display'>
                <div className="container">
                    <div className="bloc-tabs">
                        <div className="tabs-all">
                            <div className="w3-container">
                                <div className="w3-bar w3-white">
                                    <button id="tab-1"
                                        className={toggleState === 1 ? "tabs active-tabs tablink bg-zinc-100" : "tabs tablink"}
                                        onClick={() => toggleTab(1)}
                                    >
                                        <div className="icon-size">
                                            <div style={{ position: 'relative', top: '23px' }}>
                                                <img src={require('../icon/bi_pencil-fill.svg').default} alt="" id="img-edit" />
                                                <p className="style-text">Pencils
                                                </p></div>
                                        </div>
                                    </button>
                                    <button id="tab-2"
                                        className={toggleState === 2 ? "tabs active-tabs tablink bg-zinc-100" : "tabs tablink "}
                                        onClick={() => toggleTab(2)}
                                    >
                                        <div className="icon-size">
                                            <div style={{ position: 'relative', top: '23px' }}>
                                                <img src={require('../icon/marker.svg').default} alt="" id="img-edit" />
                                                <p className="style-text">Markers
                                                </p></div>
                                        </div>
                                    </button>
                                    <button id="tab-3"
                                        className={toggleState === 3 ? "tabs active-tabs tablink bg-zinc-100" : "tabs tablink "}
                                        onClick={() => toggleTab(3)}
                                    >
                                        <div className="icon-size">
                                            <div style={{ position: 'relative', top: '23px' }}>
                                                <img src={require('../icon/drawing.svg').default} alt="" id="img-edit" />
                                                <p className="style-text">Drawing Colors
                                                </p></div>
                                        </div>
                                    </button>
                                    <button id="tab-4"
                                        className={toggleState === 4 ? "tabs active-tabs tablink bg-zinc-100" : "tabs tablink"}
                                        onClick={() => toggleTab(4)}
                                    >
                                        <div className="icon-size">
                                            <div style={{ position: 'relative', top: '23px' }}>
                                                <img src={require('../icon/noteBook.svg').default} alt="" id="img-edit" />
                                                <p className="style-text">Notebooks
                                                </p></div>
                                        </div>

                                    </button>
                                </div>
                            </div>
                            <div id="London" className="w3-container city bg-zinc-100">

                                <div className="">
                                    <div className="flex flex-nowrap grid grid-cols-2 gap-1"
                                        style={{ display: 'flex', height: '80%', marginLeft: '50px', marginRight: '50px', paddingTop: '44px', paddingLeft: '17px' }}>

                                        <div
                                            className={toggleState === 1 ? "content  active-content" : "content"}
                                        >
                                            <div style={{ display: 'flex' }}>
                                                <div className=" row-span-3">
                                                    <div id="text-style">
                                                        Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib
                                                        Pencils.
                                                    </div>
                                                    <div>
                                                        <ul className="text-list">
                                                            <li>MECHANICAL PENCILS</li>
                                                            <li>ARCHITECT'S CHOICE</li>
                                                            <li>EXECUTIVE PENCILS</li>
                                                            <li>ENGRAVABLE PENCILS</li>
                                                        </ul>
                                                    </div>
                                                    <div style={{ marginTop: '40px' }}>
                                                        <button className="border-none button-style">SHOP ALL</button>
                                                    </div>
                                                </div>
                                                <div className=" row-span-2 flex flex-col" style={{ width: '712px' }}>
                                                    <div className="sale-off flex flex-row ">
                                                        <div className="text-saleoff">
                                                            <p id="text-off">
                                                                25% off
                                                            </p>
                                                        </div>
                                                        <div id="offer">Offer Applicable on All Our Pencils</div>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <div className="basis-1/3">
                                                            <div className="flex justify-center">
                                                                <div className>
                                                                    <a href="#!">
                                                                        <img className="rounded-t-lg" src={require("../img/pen-img11 1.jpg")} alt="" />
                                                                    </a>
                                                                    <div className="p-6">
                                                                        <h5 className="text-fontsize">
                                                                            Aero Mechanical Pencil
                                                                        </h5>
                                                                        <p className="text-usd">
                                                                            $99.00
                                                                            <span>$125.00</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="basis-1/3">
                                                            <div className="flex justify-center">
                                                                <div className>
                                                                    <a href="#!">
                                                                        <img className="rounded-t-lg" src={require("../img/pen-img11 2.jpg")} alt="" />
                                                                    </a>
                                                                    <div className="p-6">
                                                                        <h5 className="text-fontsize">
                                                                            Aero Mechanical Pencil
                                                                        </h5>
                                                                        <p className="text-usd">
                                                                            $75.00
                                                                            <span>$99.00</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="basis-1/3">
                                                            <div className="flex justify-center">
                                                                <div className>
                                                                    <a href="#!">
                                                                        <img className="rounded-t-lg" src={require("../img/pen-img11 3.jpg")} alt="" />
                                                                    </a>
                                                                    <div className="p-6">
                                                                        <h5 className="text-fontsize">
                                                                            Aero Mechanical Pencil
                                                                        </h5>
                                                                        <p className="text-usd">
                                                                            $45.00
                                                                            <span>$70.00</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div
                                        className={toggleState === 2 ? "content  active-content" : "content"}
                                    >
                                        <h2>Content 2</h2>
                                        <hr />
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                            voluptatum qui adipisci.
                                        </p>
                                    </div>

                                    <div
                                        className={toggleState === 3 ? "content  active-content" : "content"}
                                    >
                                        <h2>Content 3</h2>
                                        <hr />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                                            recusandae totam quidem repudiandae omnis veritatis nostrum
                                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                                        </p>
                                    </div>
                                    <div
                                        className={toggleState === 4 ? "content  active-content" : "content"}
                                    >
                                        <h2>Content 4</h2>
                                        <hr />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                                            recusandae totam quidem repudiandae omnis veritatis nostrum
                                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* screen Mobile */}
            <div className="responsive-mobile">
                <div className="flex flex-col">
                    <div className="flex flex-col ...">
                        <div className="item-mobile">
                            <div className={!hideAndShow ? 'tabs-mobile border-radius-box' : 'tabs-mobile'}>
                                <div className="tabs-1">
                                    <div className="boder-img-tabs flex">
                                        <div style={{/* position: 'absolute', */
                                            width: '50px', height: '50px', /* left: '41px', */
                                            /* top: '23px', */
                                            background: '#F4F4F4', borderRadius: '50%'
                                        }}>
                                            <img className="edit-mobile-img" src={require("../icon/bi_pencil-fill.svg").default} alt="" />
                                        </div>
                                        <p className="mobile-text-tabs">Pencils</p>
                                        <button onClick={() => handChangeHideShow(hideAndShow ? 0 : 1)}
                                            style={{ marginLeft: '140px' }}
                                        >
                                            <div className={hideAndShow ? '' : 'hidden'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </div>
                                            <div className={!hideAndShow ? '' : 'hidden'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            {/* show content */}
                            <div className={!hideAndShow ? 'show-hide' : 'hidden show-hide'}>
                                <div >
                                    <div className=" row-span-3">
                                        <div id="text-style-mobile">
                                            Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib
                                            Pencils.
                                        </div>
                                        <div style={{ display: 'flex', paddingTop: '35px' }}>
                                            <ul className="text-list-mobile-1">
                                                <li>MECHANICAL PENCILS</li>
                                                <li>ARCHITECT'S CHOICE</li>
                                            </ul>
                                            <ul className="text-list-mobile-2">
                                                <li>EXECUTIVE PENCILS</li>
                                                <li>ENGRAVABLE PENCILS</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" row-span-2 flex flex-col" style={{ marginTop: '27px' }}>
                                        <div className="sale-off-mobile flex flex-row ">
                                            <div className="text-saleoff-mobile">
                                                <p id="text-off">
                                                    25% <sup style={{ fontSize: '20px' }}>OFF</sup>
                                                </p>
                                            </div>
                                            <div id="offer-mobile">Offer Applicable on All Our Pencils</div>
                                        </div>
                                        <div className="flex flex-row" style={{ marginTop: '40px' }}>
                                            <div className="basis-1/2" style={{ marginLeft: '20px' }}>
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 1.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $99.00
                                                                <span>$125.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="basis-1/2">
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 2.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $75.00
                                                                <span>$99.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', textAlign: 'center' }}>
                                            <button className="border-none button-style" style={{ width: '100px', height: '40px' }}>
                                                SHOP ALL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end show content */}
                            <div className="tabs-mobile">
                                <div className={!hideAndShow2 ? 'tabs-mobile border-radius-box' : 'tabs-mobile'}>
                                    <div style={{ height: '10px' }}></div>
                                    <div className='tabs-2'>
                                        <div className="boder-img-tabs flex">
                                            <div style={{/* position: 'absolute', */
                                                width: '50px', height: '50px', /* left: '41px', */
                                                /* top: '23px', */
                                                background: '#F4F4F4', borderRadius: '50%'
                                            }}>
                                                <img className="edit-mobile-img" src={require("../icon/marker.svg").default} alt="" />
                                            </div>
                                            <p className="mobile-text-tabs">Markers</p>
                                            <button onClick={() => handChangeHideShow2(hideAndShow2 ? 0 : 1)}
                                                style={{ marginLeft: '140px' }}
                                            >
                                                <div className={hideAndShow2 ? '' : 'hidden'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </div>
                                                <div className={!hideAndShow2 ? '' : 'hidden'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={!hideAndShow2 ? 'show-hide' : 'hidden show-hide'}>
                                <div >
                                    <div className=" row-span-3">
                                        <div id="text-style-mobile">
                                            Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib
                                            Pencils.
                                        </div>
                                        <div style={{ display: 'flex', paddingTop: '35px' }}>
                                            <ul className="text-list-mobile-1">
                                                <li>MECHANICAL PENCILS</li>
                                                <li>ARCHITECT'S CHOICE</li>
                                            </ul>
                                            <ul className="text-list-mobile-2">
                                                <li>EXECUTIVE PENCILS</li>
                                                <li>ENGRAVABLE PENCILS</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" row-span-2 flex flex-col" style={{ marginTop: '27px' }}>
                                        <div className="sale-off-mobile flex flex-row ">
                                            <div className="text-saleoff-mobile">
                                                <p id="text-off">
                                                    25% <sup style={{ fontSize: '20px' }}>OFF</sup>
                                                </p>
                                            </div>
                                            <div id="offer-mobile">Offer Applicable on All Our Pencils</div>
                                        </div>
                                        <div className="flex flex-row" style={{ marginTop: '40px' }}>
                                            <div className="basis-1/2" style={{ marginLeft: '20px' }}>
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 1.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $99.00
                                                                <span>$125.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="basis-1/2">
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 2.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $75.00
                                                                <span>$99.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', textAlign: 'center' }}>
                                            <button className="border-none button-style" style={{ width: '100px', height: '40px' }}>
                                                SHOP ALL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs-mobile">
                                <div className={!hideAndShow3 ? 'tabs-mobile border-radius-box' : 'tabs-mobile'}>
                                    <div style={{ height: '10px' }}></div>
                                    <div className="tabs-3">
                                        <div className="boder-img-tabs flex">
                                            <div style={{/* position: 'absolute', */
                                                width: '50px', height: '50px', /* left: '41px', */
                                                /* top: '23px', */
                                                background: '#F4F4F4', borderRadius: '50%'
                                            }}>
                                                <img className="edit-mobile-img" src={require("../icon/drawing.svg").default} alt="" />
                                            </div>
                                            <p className="mobile-text-tabs" style={{ width: '218px' }} >Drawing Colors</p>
                                            <button onClick={() => handChangeHideShow3(hideAndShow3 ? 0 : 1)}

                                            >
                                                <div className={hideAndShow3 ? '' : 'hidden'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </div>
                                                <div className={!hideAndShow3 ? '' : 'hidden'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={!hideAndShow3 ? 'show-hide' : 'hidden show-hide'}>
                                <div >
                                    <div className=" row-span-3">
                                        <div id="text-style-mobile">
                                            Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib
                                            Pencils.
                                        </div>
                                        <div style={{ display: 'flex', paddingTop: '35px' }}>
                                            <ul className="text-list-mobile-1">
                                                <li>MECHANICAL PENCILS</li>
                                                <li>ARCHITECT'S CHOICE</li>
                                            </ul>
                                            <ul className="text-list-mobile-2">
                                                <li>EXECUTIVE PENCILS</li>
                                                <li>ENGRAVABLE PENCILS</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" row-span-2 flex flex-col" style={{ marginTop: '27px' }}>
                                        <div className="sale-off-mobile flex flex-row ">
                                            <div className="text-saleoff-mobile">
                                                <p id="text-off">
                                                    25% <sup style={{ fontSize: '20px' }}>OFF</sup>
                                                </p>
                                            </div>
                                            <div id="offer-mobile">Offer Applicable on All Our Pencils</div>
                                        </div>
                                        <div className="flex flex-row" style={{ marginTop: '40px' }}>
                                            <div className="basis-1/2" style={{ marginLeft: '20px' }}>
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 1.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $99.00
                                                                <span>$125.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="basis-1/2">
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 2.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $75.00
                                                                <span>$99.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', textAlign: 'center' }}>
                                            <button className="border-none button-style" style={{ width: '100px', height: '40px' }}>
                                                SHOP ALL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tabs-mobile">
                                <div className={!hideAndShow4 ? 'tabs-mobile border-radius-box' : 'tabs-mobile'}>
                                    <div style={{ height: '10px' }}></div>
                                    <div className="tabs-4">
                                        <div className="boder-img-tabs flex">
                                            <div style={{/* position: 'absolute', */
                                                width: '50px', height: '50px', /* left: '41px', */
                                                /* top: '23px', */
                                                background: '#F4F4F4', borderRadius: '50%'
                                            }}>
                                                <img className="edit-mobile-img" src={require("../icon/noteBook.svg").default} alt="" />
                                            </div>
                                            <p className="mobile-text-tabs">Notebooks</p>
                                            <button onClick={() => handChangeHideShow4(hideAndShow4 ? 0 : 1)}
                                                style={{ marginLeft: '140px' }}
                                            >
                                                <div className={hideAndShow4 ? '' : 'hidden'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </div>
                                                <div className={!hideAndShow4 ? '' : 'hidden'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={!hideAndShow4 ? 'show-hide' : 'hidden show-hide'}>
                                <div >
                                    <div className=" row-span-3">
                                        <div id="text-style-mobile">
                                            Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib
                                            Pencils.
                                        </div>
                                        <div style={{ display: 'flex', paddingTop: '35px' }}>
                                            <ul className="text-list-mobile-1">
                                                <li>MECHANICAL PENCILS</li>
                                                <li>ARCHITECT'S CHOICE</li>
                                            </ul>
                                            <ul className="text-list-mobile-2">
                                                <li>EXECUTIVE PENCILS</li>
                                                <li>ENGRAVABLE PENCILS</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" row-span-2 flex flex-col" style={{ marginTop: '27px' }}>
                                        <div className="sale-off-mobile flex flex-row ">
                                            <div className="text-saleoff-mobile">
                                                <p id="text-off">
                                                    25% <sup style={{ fontSize: '20px' }}>OFF</sup>
                                                </p>
                                            </div>
                                            <div id="offer-mobile">Offer Applicable on All Our Pencils</div>
                                        </div>
                                        <div className="flex flex-row" style={{ marginTop: '40px' }}>
                                            <div className="basis-1/2" style={{ marginLeft: '20px' }}>
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 1.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $99.00
                                                                <span>$125.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="basis-1/2">
                                                <div className="flex justify-center mobile">
                                                    <div className>
                                                        <a href="#!">
                                                            <img className="rounded-t-lg" src={require("../img/pen-img11 2.jpg")} alt="" />
                                                        </a>
                                                        <div className="p-1">
                                                            <h5 className="text-fontsize-mobile">
                                                                Aero Mechanical Pencil
                                                            </h5>
                                                            <p className="text-usd">
                                                                $75.00
                                                                <span>$99.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', textAlign: 'center' }}>
                                            <button className="border-none button-style" style={{ width: '100px', height: '40px' }}>
                                                SHOP ALL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Tabs;
