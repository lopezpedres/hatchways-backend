import fetch from "isomorphic-fetch"
import url from "../app.config"

import cache from "memory-cache";


const fetcher = async (queries) => {

    const URL=`${url}${queries}`
    const cachedResponse = cache.get(URL)
    if (cachedResponse){
        console.log('Got the url: ',URL," from the cache")
        return cachedResponse
    }else {


        
        try{
            const hours = 24
            const response = await fetch(URL)
            const data = await response.json()
            cache.put(URL, data, hours*1000*60*60)
            console.log('Got the url: ',URL,"by calling the api")
            return data
        }catch(e){
            console.error(e)
            res.status(400)
        }
    }

}

export default fetcher