import './promo.css'
import promoImg from './../../fashion_images/promoImg.png';


const Promo = () => {
    return ( 
    <section className='promo'>
        <div className='container_promo'>
            <div className='promo_content'>
                <div className='promo_text'>
                    <div className='promo_title'>
                    Elegance in simplicity,<br />
                    Earth’s harmony
                    </div>
                    <div className='promo_btn-wrapper'>
                      <button href="#!" className='promo_btn'>New In</button>
                    </div>
                </div>
                <div className='promo_img'><img src={promoImg} alt="hero" /></div>
            </div>
        </div>
    </section>
    );
}

 
export default Promo;