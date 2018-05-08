var express = require('express');
var router = express.Router();
var BankAccount = require('../validators/bank_account');

/* GET users listing. */
router.post('/', function(req, res, next) {
    BankAccount.validate({
        bankNumber          :  req.body.bank_number,
        agencyNumber        :  req.body.agency_number,
        agencyCheckNumber   :  req.body.agency_check_number,
        accountNumber       :  req.body.account_number,
        accountCheckNumber :  req.body.account_check_number,
        valid :  function () {
            res.send(true)
        },
        invalid :  function ( data ) {
            res.status(400).send(JSON.stringify(data))
        }
    });
});


module.exports = router;
