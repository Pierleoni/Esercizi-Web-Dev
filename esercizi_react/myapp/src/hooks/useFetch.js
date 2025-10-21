/* Gli hook restituiscono dati non jsx, quindi questo file ha l'estensione classica '.js' */

import React, {useEffect, useState} from "react";

const useFetch = (url)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    /* const getData = async ()=>{
        const response = await fetch(url);
        const result = await response.json();
        setData(result)
    }; */
    useEffect(()=>{
        setIsLoading(true);
        setTimeout(()=>{
            (async ()=>{
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);

            }catch (err){
                console.log(err)
            }
        })();
        setIsLoading(false)
        }, 2000)
        
    
    }, [url]);
    return {data, isLoading};
}

export default useFetch;