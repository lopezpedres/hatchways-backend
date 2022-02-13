# Getting Started

Welcome

First, install the dependencies:

```bash 
yarn 
```

Second, run the development server:

```bash
yarn dev
```

Go to [http://localhost:3000/api/posts](http://localhost:3000/api/post) and use the following queries to call the API:

    name                    type    default   
    tags (Mandatory)       string    N/A
    sortBy (Optinal)       string    id
    direction (Optional)   string    asc

    Example: http://localhost:3000/api/posts?tags=tech,history&sortBy=likes&direction=des

## Testing

Run the command

```bash
yarn cypress open
```


## Comments

Thank you for reviewing my application, I took me a little bit of time because I had to go to work plus I have been very busy. In average I spent 2.5 hours per day for 2 days to complete this assigment. I only created 1 unit test for 3 main functions that tests the endpoints, its a topic that I am still learning.

I am very excited to receive your feedback

Miguel



Github Repo: [https://github.com/lopezpedres/hatchways-backend](https://github.com/lopezpedres/hatchways-backend)

