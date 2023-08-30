import React from 'react';
import {Link} from "react-router-dom";

export default function  ListItem({coin})  {
    return (

            <div  className= 'home-crypto'>

                <Link to={`/${coin.id}`}>
                    <div className='info'>
                        <div className='crypto-info'>
                            <span className='home-crypto-image'><img src={coin.image}/></span>
                            <span className='home-crypto-names'>  {coin.name}</span>
                        </div>
                        {coin.priceBtc &&(
                        <span className='home-crypto-price'>
                            <span className='home-crypto-btc'>

                                {coin.priceBtc} BTC
                            </span>
                            <span className='home-crypto-usd'>({coin.priceUsd} USD)</span>
                        </span>)}

                    </div>
                </Link>
            </div>

    );
};

;