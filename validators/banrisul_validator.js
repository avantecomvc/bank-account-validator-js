var CommonBankAccountValidator = require('./common_bank_account_validator');
var banrisulCheckNumberCalculator = require('./banrisul_check_number_calculator');

  class BanrisulValidator {
    agencyNumberIsValid(agencyNumber) {
      return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
    };

    agencyCheckNumberIsValid(agencyCheckNumber) {
      return agencyCheckNumber === undefined || agencyCheckNumber === "";
    };

    accountNumberIsValid(accountNumber) {
      return accountNumber.length == this.accountNumberLength() && 
        CommonBankAccountValidator.accountNumberIsValid(accountNumber);
    };

    accountCheckNumberIsValid(accountCheckNumber) {
      return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
    };

    agencyCheckNumberMatch(bankAccount) {
      return true;
    };
    
    accountCheckNumberMatch(bankAccount) {
      var checkNumberCalculated = banrisulCheckNumberCalculator.calculate(bankAccount.accountNumber);
      return checkNumberCalculated === bankAccount.accountCheckNumber;
    };

    agencyNumberMsgError() {
      return CommonBankAccountValidator.agencyNumberMsgError();
    };

    agencyCheckNumberMsgError() {
      return CommonBankAccountValidator.agencyCheckNumberMsgError();
    };

    accountNumberMsgError() {
      return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
    };

    accountNumberLength() { return 9; }
    
  };
var instance = new BanrisulValidator();
module.exports  = instance;