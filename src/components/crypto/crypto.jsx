import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Coin from './coin'

const Crypto = () => {

    const [crypto, setCrypto] = useState([])

    const doApi = async () => {

        try {
            const url = 'http://fs1.co.il/bus/bitcoin.php'
            const { data } = await axios(url)
            setCrypto(data);
            console.log(data)
        }
        catch (err) {
            console.log(err.response)
        }

    }

    useEffect(() => {
        doApi()
    }, [])

    return (
        <div className='container'>
            <div className='row p-2'>
                {crypto.map((item, i) => {
                    return (
                       <Coin key={i} coin={item} />
                    )
                })}

            </div>

        </div>
    )
}

export default Crypto