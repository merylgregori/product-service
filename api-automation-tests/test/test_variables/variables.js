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
  user_id: "f20db05d-b861-4cb7-a0f6-a41faf0cc11d",
  lastname: "Test IN",
  firstname: "Muri",
  middlename: "Sample",
  employer_id: 2247, 
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

module.exports = {dataPH, dataIN};