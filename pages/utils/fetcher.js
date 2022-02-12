import fetch from "isomorphic-fetch"

const fetcher = async (queries) => {
try{
    const url=`https://api.hatchways.io/assessment/blog/posts?tag=${queries}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}catch(e){
    console.error(e)
    res.status(400).json({error:"Tags parameter required"})
}

}

export default fetcher