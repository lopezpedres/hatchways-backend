import fetcher from "../../utils/fetcher"


const index = async (req, res) => {

    let {
        query:
        { tags,
            sortBy,
            direction
        }
    } = req

    //Sample output
    // const sample = {
    //     author: "Rylee Paul",
    //     authorId: 9,
    //     id: 1,
    //     likes: 960,
    //     popularity: 0.13,
    //     reads: 50361,
    //     tags: [
    //     "tech",
    //     "health"
    //     ]
    //     }

    //Here I handle errors
    if (!tags) {
        res.status(400).json({ error: "Tags parameter is required" })
        return
    }

    if (!sortBy){
        sortBy="id"
    }

    if (sortBy !== 'id' | 'reads' | 'likes' | 'popularity'|""
    ) {
        res.status(400).json({ error: "sortBy parameter is invalidad" })
        return
    }

    if (!direction){
        direction="asc"
    }

    
    if (direction !== "asc" | "desc"
    ) {
        res.status(400).json({ error: "direction parameter is invalid" })
        return
    }

    //Here I handle the tag value or values

    const parsedTags = tags.split(",");
    const promises = parsedTags.map((tag) =>  fetcher(tag));
    const results = await Promise.all(promises);

    const posts = results
        .reduce((acc, curr) => {
            const { posts } = curr;
            return [...acc, ...posts];
        }, [])
        // unique
        .filter(
            (post, index, self) => index === self.findIndex((t) => t.id === post.id)
        );




    //Here I sort the values acording to the sortBy variable
    if (direction === "asc") {
        const sortedPosts = posts.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)
        return res.status(200).json(sortedPosts)
    } else {
        const sortedPosts = posts.sort((a, b) => b[sortBy] > a[sortBy] ? 1 : -1)
        return res.status(200).json(sortedPosts)
    }
}

export default index