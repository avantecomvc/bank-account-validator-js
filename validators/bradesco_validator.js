var CommonBankAccountValidator = require('./common_bank_account_validator');
var BradescoCheckNumberCalculator = require('./bradesco_check_number_calculator');
class BradescoValidator {
    agencyNumberIsValid (agencyNumber) {
      return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
    };

    agencyCheckNumberIsValid (agencyCheckNumber) {
      return agencyCheckNumber.length == this.agencyCheckNumberLength() && 
        CommonBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber);
    };

    accountNumberIsValid (accountNumber) {
      return accountNumber.length == this.accountNumberLength() && 
        CommonBankAccountValidator.accountNumberIsValid(accountNumber);
    };

    accountCheckNumberIsValid (accountCheckNumber) {
      return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
    };

    agencyCheckNumberMatch (bankAccount) {
      var checkNumberCalculated = BradescoCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber);
      var checkNumberInformed = bankAccount.agencyCheckNumber.toUpperCase();
      if (checkNumberInformed === "0") {
        return checkNumberCalculated === checkNumberInformed || checkNumberCalculated === "P";
      }
      return checkNumberCalculated === checkNumberInformed;
    };
    
    accountCheckNumberMatch (bankAccount) {
      var checkNumberCalculated = BradescoCheckNumberCalculator.calculateAccount(bankAccount.accountNumber);
      var checkNumberInformed = bankAccount.accountCheckNumber.toUpperCase();
      if (checkNumberInformed === "0") {
        return checkNumberCalculated === checkNumberInformed || checkNumberCalculated === "P";
      }
      return checkNumberCalculated === checkNumberInformed;
    };

    agencyNumberMsgError () {
      return CommonBankAccountValidator.agencyNumberMsgError();
    };

    agencyCheckNumberMsgError () {
      return CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength());
    };

    accountNumberMsgError () {
      return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
    };

    agencyCheckNumberLength () { return 1; };

    accountNumberLength () { return 7; }

  };
var instance = new BradescoValidator();
module.exports = instance;