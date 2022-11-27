import React from 'react'

const Coin = ({coin}) => {
    return (
        <div className='col-11 col-md-3 p-3 m-3 border shadow'>
            <h2>{coin.name}</h2>
            <h2 style={{color:"red"}}>{coin.symbol}</h2>
            <br/>
            <h4>Price (bitcoin): {coin.price_btc}</h4>
        </div>

    )
}

export default Coin