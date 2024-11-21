import './followus.css'
import React from 'react';
import followus from './../../fashion_images/Follow Us.png'

function followUs(){
    return(
        <section className='followus'>
            <div className='followus_container'>
                <div className='header_name'>
                    <h2 className='header_title'>Follow Us</h2>
                </div>
                <div className="followus_img"><img src={followus} alt="hero" /></div>
            </div>
        </section>
    );
}

export default followUs;