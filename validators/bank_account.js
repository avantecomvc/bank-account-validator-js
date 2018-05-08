
var GenericValidator = require('./generic_bank_account_validator');
var BanoDoBrasilValidator = require('./banco_do_brasil_validator');
var BradescoValidator = require('./bradesco_validator');
var ItauValidator = require('./itau_validator');
var SantanderValidator = require('./santander_validator');
var CitibankValidator=  require('./citibank_validator');
var HSBCValidator = require('./hsbc_validator');
var BanrisulValidator = require('./banrisul_validator');

  class BankAccount{

     validator (bankNumber) {

      var validators = {
        "001": BanoDoBrasilValidator,
        "237": BradescoValidator,
        "341": ItauValidator,
        "033": SantanderValidator,
        "745": CitibankValidator,
        "399": HSBCValidator,
        "041": BanrisulValidator
      };

      if (validators[bankNumber]) {
        return validators[bankNumber];
      } else {
        return GenericValidator;
      }
    };

    validate (params){

      var errors = [];
      var validator = this.validator(params.bankNumber);

      if(!GenericValidator.bankNumberIsValid(params.bankNumber)){
        errors.push({ description: "Banco inválido", code: "INVALID_BANK_NUMBER" });
      }

      if(!validator.agencyNumberIsValid(params.agencyNumber)){
        errors.push({ description: validator.agencyNumberMsgError(), code: "INVALID_AGENCY_NUMBER" });
      }

      if(!validator.agencyCheckNumberIsValid(params.agencyCheckNumber)){
        errors.push({ description: validator.agencyCheckNumberMsgError(), code: "INVALID_AGENCY_CHECK_NUMBER" });
      }

      if(!validator.accountNumberIsValid(params.accountNumber)){
        errors.push({ description: validator.accountNumberMsgError(), code: "INVALID_ACCOUNT_NUMBER" });
      }

      if(!validator.accountCheckNumberIsValid(params.accountCheckNumber)){
        errors.push({ description: "Dígito da conta corrente inválido", code: "INVALID_ACCOUNT_CHECK_NUMBER" });
      }

      if(validator.agencyNumberIsValid(params.agencyNumber) && validator.agencyCheckNumberIsValid(params.agencyCheckNumber)){
        if(!validator.agencyCheckNumberMatch(params)) {
          errors.push({ description: "Dígito da agência não corresponde ao número da agência preenchido", code: "AGENCY_CHECK_NUMBER_DONT_MATCH" });
        }
      }

      if(validator.accountNumberIsValid(params.accountNumber) && validator.accountCheckNumberIsValid(params.accountCheckNumber)){
        if(!validator.accountCheckNumberMatch(params)) {
          errors.push({ description: "Dígito da conta não corresponde ao número da conta/agência preenchido", code: "ACCOUNT_CHECK_NUMBER_DONT_MATCH" });
        }
      }

      if(errors.length === 0) {
        params.valid();
      } else {
        params.invalid({ errors: errors });
      }
    }

  }
var instance  = new BankAccount();
  module.exports = instance;
