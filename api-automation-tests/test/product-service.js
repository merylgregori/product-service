import { describe } from "mocha";
import supertest from "supertest";
import { expect } from "chai";
const {dataPH} = require('./test_variables/variables.js');
const {dataIN} = require('./test_variables/variables.js');

const base_url_req = supertest('https://product-service-uat.savii.io/');

describe('/approve endpoint', (done) => {
  it('POST /approve request for PH Tenant', () => {
  return base_url_req.post('custom-loans/approve').send(dataPH).then(res =>{
        console.log(dataPH.application_id);
        console.log(res.body);
        //ASSERT HERE
        done;
    });
    });
  // it('POST /approve request for IN Tenant', () => {
  //   return base_url_req.post('custom-loans/approve').send(dataIN).then(res =>{
  //       console.log(res.body);
  //       //ASSERT HERE
  //       done;
  //   });
  // });
});