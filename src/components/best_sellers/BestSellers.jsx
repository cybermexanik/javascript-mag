import './bestSellers.css'
import bestOne from './../../fashion_images/bestOne.jpg'
import bestTwo from './../../fashion_images/bestTwo.jpg'
import bestThree from './../../fashion_images/bestThree.jpg'
import Card from './../card/Card'

function Best_sellers(){
    return(
        <section className='sellers'>
            <div className='container'>
                <div className="header_name">
                    <h2 className="header_title">Best Sellers</h2>
                        <div className="sellers_btn-wrapper">
                            <button href="#!" className="sellers_btn">View All</button>
                        </div>
                </div>
            <div className='sellers_cards'>
                <Card title="Tailored Stretch" desc="Turn It Up Pants" img={bestOne}/>
                <Card title="Technical Silk" desc="Make A Splash" img={bestTwo}/> 
                <Card title="Cool Weave" desc="Anywhere Dress" img={bestThree}/> 
            </div>
        </div>
        </section>
    )
}

export default Best_sellers;