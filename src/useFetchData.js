// This file is for creating the Custom Hook 

import { useState, useEffect } from 'react'

const useFetchData = (url)=>{
    const [characters, setCharacters] = useState([])
    const [isPending, setIsPending] = useState(true)
    // var extracted = url.split("?").find(function(v){ 
    //     return v.indexOf("name") > -1;
    // });

    useEffect(()=>{
        fetch(url)
            .then(res=>{
                if(!res.ok){
                throw Error('Unable to fetch data from that resource')
                }
                else{
                return res.json()
                }
            })
            .then(data =>{
                setCharacters(data)
                setIsPending(false)
            })
    }, [url])
    return { characters, isPending }
}

export default useFetchData;