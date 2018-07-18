
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
        "0001": BanoDoBrasilValidator,
        "0237": BradescoValidator,
        "0341": ItauValidator,
        "0033": SantanderValidator,
        "0745": CitibankValidator,
        "0399": HSBCValidator,
        "0041": BanrisulValidator
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
        errors.push({ description: "Banco inválido", field: "bankNumber" });
      }

      if(!validator.agencyNumberIsValid(params.agencyNumber)){
        errors.push({ description: validator.agencyNumberMsgError(), field: "agencyNumber" });
      }

      if(!validator.agencyCheckNumberIsValid(params.agencyCheckNumber)){
        errors.push({ description: validator.agencyCheckNumberMsgError(), field: "agencyCheckNumber" });
      }

      if(!validator.accountNumberIsValid(params.accountNumber)){
        errors.push({ description: validator.accountNumberMsgError(validator.accountNumberLength()), field: "accountNumber" });
      }

      if(!validator.accountCheckNumberIsValid(params.accountCheckNumber)){
        errors.push({ description: "Dígito da conta corrente inválido", field: "accountCheckNumber" });
      }

      if(validator.agencyNumberIsValid(params.agencyNumber) && validator.agencyCheckNumberIsValid(params.agencyCheckNumber)){
        if(!validator.agencyCheckNumberMatch(params)) {
          errors.push({ description: "Dígito da agência inválido", field: "agencyCheckNumber" });
        }
      }

      if(validator.accountNumberIsValid(params.accountNumber) && validator.accountCheckNumberIsValid(params.accountCheckNumber)){
        if(!validator.accountCheckNumberMatch(params)) {
          errors.push({ description: "Dígito da conta não corresponde ao número da conta/agência preenchido", field: "accountCheckNumber" });
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
