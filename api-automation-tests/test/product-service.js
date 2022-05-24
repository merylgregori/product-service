import { describe } from "mocha";
import supertest from "supertest";
import { expect } from "chai";

const base_url_req = supertest('https://product-service-uat.savii.io/');
const date = new Date();
const appId = date.getMonth()+1 + "" + date.getDate() + "" + date.getFullYear() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();
const appIdIN = appId + "-IN";
const dataPH = {
  application_id: `${appId}`,
  user_id: "7280",
  lastname: "Test PH",
  firstname: "Muri",
  middlename: "Sample",
  employer_id: 600, 
  disbursed_date: "2022-05-12T16:07:17.404Z",
  disbursed_amount: 7777,
  principal: 9777,
  loan_term: 3,
  num_repayments: 3,
  first_repayment_date: "2022-05-30T16:07:17.404Z",
  application_snapshot: {},
  periodic_interest_rate: 0.199495,
  charges: [
     {
      chargeId: 1,
      amount: 1000
     },
     {
     chargeId: 2,
    amount: 1000
     }
   ]
};

const dataIN = {
  application_id: `${appIdIN}`,
  user_id: "7280",
  lastname: "Test PH",
  firstname: "Muri",
  middlename: "Sample",
  employer_id: 600, 
  disbursed_date: "2022-05-12T16:07:17.404Z",
  disbursed_amount: 7777,
  principal: 9777,
  loan_term: 3,
  num_repayments: 3,
  first_repayment_date: "2022-05-30T16:07:17.404Z",
  application_snapshot: {},
  periodic_interest_rate: 0.199495,
  charges: [
     {
      chargeId: 1,
      amount: 1000
     },
     {
     chargeId: 2,
    amount: 1000
     }
   ]
};




describe('/approve endpoint', (done) => {
  it('POST /approve IN', () => {
  return base_url_req.post('custom-loans/approve').send(data).then(res =>{
        console.log(res.body);
        done;
    });
    });
  it('POST /approve PH', () => {
    return base_url_req.post('custom-loans/approve').send(data).then(res =>{
        console.log(res.body);
        done;
    });
  });
});