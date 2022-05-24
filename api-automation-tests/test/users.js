import { describe } from "mocha";
import supertest from "supertest";
import { expect } from "chai";
const base_url_req = supertest('https://gorest.co.in/public/v2/');
const token='038724ed18e605af3cf7f1e1da86e8cc5e978d70decb43907c183f5b137c2ad3';

describe('Users', () => {
  it('GET /users', () => {
    return base_url_req.get(`users?access-token=${token}`).then((res) => {
      expect(res.body).to.not.be.empty;
    });//test
  });//it block

  it('GET /users gender', () => {
    return base_url_req.get(`users?access-token=${token}&gender=female`).then((res) => {
      console.log(res.body);
    });
}) //describe block

//describe block (groups tests) and it block (actual tests) 

});
