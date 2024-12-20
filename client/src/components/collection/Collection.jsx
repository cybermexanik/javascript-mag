import React from 'react';
import './collection.css'
import OutWearImg from './../../fashion_images/CollectionOne.jpg';
import BlousesImg from './../../fashion_images/CollectionTwo.png';
import DressesImg from './../../fashion_images/CollectionThree.png';
import PantsImg from './../../fashion_images/CollectionFour.png';

function Collection() {

    return (
       <section className='collection'>
        <div className="collection_container">
            <div className="header_name">
                <h2 className="header_title">Collection</h2>
            </div>
            <div className="collection_content_wrapper">
                <div className="collection_content">
                    <div className="collection_blouses">
                        <img src={BlousesImg} alt="Blouses" className="img_blouses" />
                        <button className='btn_blouses'>Blouses</button>
                    </div>
                    <div className="collection_dresses">
                        <img src={DressesImg} alt="Dresses" className="img_dresses" />
                        <button className='btn_blouses'>Dresses</button>
                    </div>
                </div>
                <div className="collection_content2">
                    <div className="collection_pants">
                        <img src={PantsImg} alt="Pants" className="img_pants" />
                        <button className='btn_pants'>Pants</button>
                    </div>
                    <div className="collection_outwear">
                        <img src={OutWearImg} alt="Outwear" className="img_outwear" />
                        <button className='btn_pants'>Outwear</button>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    );
    
}

export default Collection;
