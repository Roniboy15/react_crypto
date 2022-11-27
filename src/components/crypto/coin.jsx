import React from 'react'

const Coin = ({coin}) => {
    return (
        <div className='col-12 col-md-4 p-2 border shadow'>
            <h2>{coin.name}</h2>
            <h2>-{coin.symbol}</h2>
            <br/>
            <h4>Price in btc: {coin.price_btc}</h4>
        </div>

    )
}

export default Coin