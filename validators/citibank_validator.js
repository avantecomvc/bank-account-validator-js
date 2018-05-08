var CommonBankAccountValidator = require('./common_bank_account_validator');
  class CitibankValidator{
    agencyNumberIsValid(agencyNumber) {
      return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
    };

    agencyCheckNumberIsValid(agencyCheckNumber) {
      return agencyCheckNumber === undefined || agencyCheckNumber === "";
    };

    accountNumberIsValid(accountNumber) {
      return accountNumber.length == this.accountNumberLength() && CommonBankAccountValidator.accountNumberIsValid(accountNumber);
    };

    accountCheckNumberIsValid(accountCheckNumber) {
      return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
    };

    agencyCheckNumberMatch(bankAccount) {
      return true;
    };
    
    accountCheckNumberMatch(bankAccount) {
      return true;
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

    accountNumberLength() { return 7; }

  };
var instance = new CitibankValidator();
module.exports = instance;