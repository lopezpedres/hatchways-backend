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

##Testing

Run the command

```bash
yarn cypress open
```


## Comments

Thank you for reviewing my application, I took me a little bit of time because I had to go to work plus I have been very busy. In average I spent 2.5 hours 3 days each day to complete these assigment. I only created 1 unit test for 3 main functions that tests the API response, its a topic that I am still learning.

I am very excited for your feedback

Miguel



Had to install all these dep for cypress
https://gist.github.com/winuxue/cfef08e2f5fe9dfc16a1d67a4ad38a01?permalink_comment_id=4056573#gistcomment-4056573

