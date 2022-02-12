import { expect } from "chai"
import chaiJsonSchema from 'chai-json-schema'; 
chai.use(chaiJsonSchema);

describe('HTTP REQUESTS', function(){

    it ('GET API/PING',function(){
        cy.request({
            method:'GET',
            url:"http://localhost:3000/api/ping"
        }).then(function(response){
            expect(response.body).to.deep.equal({"success": "True"})
        })
    })

    it ('GET API/POSTS WITHOUT TAGS QUERY',function(){
        cy.request({
            method:'GET',
            url:"http://localhost:3000/api/posts",
            failOnStatusCode:false
        }).then(function(response){
            expect(response.status).to.eq(400)
            expect(response.body).to.deep.equal({
                error: "Tags parameter is required"
                })
        })
    })

    it ('GET SUCCESFUL API/POST WITH ONE VALUE TAGS',function(){
        cy.request({
            method:'GET',
            url:"http://localhost:3000/api/posts",
            qs:{
                //Here I am giving a known valid tag
                tags: "tech"
            }
        }).then(function(response){
            //Here I am expecting my response to have those keys, but I just realize that my response is an array.
            //Need to iterate over the array to check the json tags
            expect(response.status).to.eq(200)
            // expect(response.body).to.be.property('authorId')

        })
    })
})