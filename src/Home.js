import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Home banner image" className="home__image" />
           
                <div className="home__row">
                    {/* Product */}
                    <Product 
                    title="Maxboost Screen Protector for Apple iPhone Xs & iPhone X & iPhone 11 Pro (3 Packs, Clear) 0.25mm Tempered Glass Screen Protector with Advanced Clarity [3D Touch] Work w/Most Case 99% Touch Accurate" 
                    price={11.85} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71zW4NXBIXL._AC_SL1500_.jpg" 
                    rating={5}/>
                    <Product 
                    title="Kasa Smart Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz WiFi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack (HS200), White" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71dXf56rv0L._AC_SL1500_.jpg" 
                    rating={4}/>
                    
                    {/* Product */}
                </div>
                <div className="home__row">
                <Product 
                    title=" Power Theory iPhone X/iPhone Xs Glass Screen Protector [2-Pack] with Easy Install Kit [Premium Tempered Glass] " 
                    price={11.85} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81wdDf6o-QL._AC_SL1500_.jpg" 
                    rating={2}/>
                    <Product 
                    title="Kasa Smart Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz WiFi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack (HS200), White" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91fAg%2ByOSpL._AC_SL1500_.jpg" 
                    rating={4}/>
                    <Product 
                    title=" 49.2FT LED Strip Lights, QZYL Lights Strip Music Sync, App Control with Remote, 5050 RGB LED Light Strip Color Changing 24-Key Remote, Sensitive Built-in Mic, LED Lights Rope Lights for Home TV Party" 
                    price={13.76} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81lmAL14poL._AC_SL1500_.jpg" 
                    rating={3}/>
                </div>
                <div className="home__row">
                <Product 
                    title=" Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020" 
                    price={228.87 } 
                    image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg" 
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}
export default Home
