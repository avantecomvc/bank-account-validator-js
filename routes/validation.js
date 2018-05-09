var express = require('express');
var router = express.Router();
var BankAccount = require('../validators/bank_account');
var tab = require('../utilities/numbers').tab;

/* GET users listing. */
router.post('/', function(req, res, next) {
    BankAccount.validate({
        bankNumber          :  tab(req.body.bank_number.toString(), 4),
        agencyNumber        :  req.body.agency_number ? req.body.agency_number.toString() : '',
        agencyCheckNumber   :  req.body.agency_check_number ? req.body.agency_check_number.toString() : '',
        accountNumber       :  tab(req.body.account_number.toString(), 7),
        accountCheckNumber :  req.body.account_check_number ? req.body.account_check_number.toString() : '',
        valid :  function () {
            res.send(true)
        },
        invalid :  function ( data ) {
            res.status(400).send(JSON.stringify(data))
        }
    });
});


module.exports = router;
