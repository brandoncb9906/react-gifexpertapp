import { useEffect, useState } from "react"
import {getGifts} from '../helpers/getGifs'
const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () =>{

        getGifts( category )
            .then( imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 1500);
            } )

    }, [category])

    return state; // {data: [], loading:true}
}

export default useFetchGifs;