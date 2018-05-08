var CommonBankAccountValidator = require('./common_bank_account_validator');
class HSBCValidator {
    agencyNumberIsValid(agencyNumber) {
      return Moip.CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
    };

    agencyCheckNumberIsValid(agencyCheckNumber) {
      return agencyCheckNumber === undefined || agencyCheckNumber === "";
    };

    accountNumberIsValid(accountNumber) {
      return accountNumber.length == this.accountNumberLength() &&
        Moip.CommonBankAccountValidator.accountNumberIsValid(accountNumber);
    };

    accountCheckNumberIsValid(accountCheckNumber) {
      return true;
    };

    agencyCheckNumberMatch(bankAccount) {
      return true;
    };

    accountCheckNumberMatch(bankAccount) {
      return true;
    };

    agencyNumberMsgError() {
      return Moip.CommonBankAccountValidator.agencyNumberMsgError();
    };

    agencyCheckNumberMsgError() {
      return Moip.CommonBankAccountValidator.agencyCheckNumberMsgError();
    };

    accountNumberMsgError() {
      return Moip.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
    };

    accountNumberLength() { return 6; }

  };
var instance = new HSBCValidator();
module.exports = instance;