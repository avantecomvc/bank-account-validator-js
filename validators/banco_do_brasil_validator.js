var CommonBankAccountValidator = require('./common_bank_account_validator');

class BancoDoBrasilValidator{
    agencyNumberIsValid(agencyNumber) {
      return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
    };

    agencyCheckNumberIsValid(agencyCheckNumber) {
      return agencyCheckNumber.length == this.agencyCheckNumberLength() && 
        CommonBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber);
    };

    accountNumberIsValid(accountNumber) {
      return accountNumber.length == this.accountNumberLength() && 
        CommonBankAccountValidator.accountNumberIsValid(accountNumber);
    };

    accountCheckNumberIsValid(accountCheckNumber) {
      return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
    };

    agencyCheckNumberMatch(bankAccount) {
      var checkNumberCalculated = Moip.BancoDoBrasilCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber);
      return checkNumberCalculated === bankAccount.agencyCheckNumber.toUpperCase();
    };

    accountCheckNumberMatch(bankAccount) {
      var checkNumberCalculated = Moip.BancoDoBrasilCheckNumberCalculator.calculateAccount(bankAccount.accountNumber);
      return checkNumberCalculated === bankAccount.accountCheckNumber.toUpperCase();
    };

    agencyNumberMsgError() {
      return CommonBankAccountValidator.agencyNumberMsgError();
    };

    agencyCheckNumberMsgError() {
      return CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength());
    };

    accountNumberMsgError() {
      return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
    };

    agencyCheckNumberLength() { return 1; };

    accountNumberLength() { return 8; };

  };
var instance = new BancoDoBrasilValidator();
module.exports = instance;