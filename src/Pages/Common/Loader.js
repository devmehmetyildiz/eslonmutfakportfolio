import React from 'react'
import "./Loader.css"
export default function Loader() {

    return (
        <div className='w-full h-[100vh] loader '>
            <div id="cooking">
                <div className='bubble'></div>
                <div className='bubble'></div>
                <div className='bubble'></div>
                <div className='bubble'></div>
                <div className='bubble'></div>
                <div id="area">
                    <div id="sides">
                        <div id="pan"></div>
                        <div id="handle"></div>
                    </div>
                    <div id="pancake">
                        <div id="pastry"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
