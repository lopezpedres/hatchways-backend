import fetcher from "../../utils/fetcher"


const index = async (req, res) => {

    const {
        query:
        { tags,
            sortBy,
            direction
        }
    } = req

    console.log(tags)
    console.log(sortBy)
    console.log(direction)

    //Here I handle errors
    if (!tags){
        res.status(400).json({error:"Tags parameter is required"})
        return 
    }

    if (sortBy!=='id'|'reads'|'likes'|'popularity'
    |direction!=="asc"|"desc"
    ){
        res.status(400).json({error:"sortBy parameter is invalidad"})
        return 
    }

    //Here I handle the tag value or values

    // const tagList = tags.split(",")

    // const AllPosts=[]

    // tagList.map(tag=>{ 

    //     const [{ posts }] = fetcher(tag)
    //     return [...AllPosts,posts]
    //     //The following post might have an answer
    //     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        



    // })
    // console.log(AllPosts.length)




    //Here I deconstruct the post array after fetching it
    const { posts } = await fetcher(tags)
    //Here I sort the values acording to the sortBy variable
    if (direction==="asc") {
        const sortedPosts = posts.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)
        return res.status(200).json(sortedPosts)
    } else {
        const sortedPosts = posts.sort((a, b) => b[sortBy] > a[sortBy] ? 1 : -1)
        return res.status(200).json(sortedPosts)
    }
}

export default index