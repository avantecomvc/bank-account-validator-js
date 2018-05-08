 class BancoDoBrasilCheckNumberCalculator{

    // Account validation
    calculateAccount(accountNumber) {
      var numbers = accountNumber.split("");
      var sumSeq = 0;
      var sequence = 0;
      for (var i = 0; i < numbers.length; i++) {
        seq = 9 - i;
        sumSeq += (parseInt(numbers[i]) * seq);
      }
      return this.module(sumSeq);
    };

    // Agency validation
    calculateAgency(agencyNumber) {
      var numbers = agencyNumber.split("");
      var sumSeq = 0;
      var sequence = 0;
      for (var i = 0; i < numbers.length; i++) {
        seq = 5 - i;
        sumSeq += (parseInt(numbers[i]) * seq);
      }
      return this.module(sumSeq);
    };

    module(sumSeq) {
      var result = 11 - (sumSeq % 11);
      if(result === 10) {
        return "X";
      } else {
        if (result === 11) {
          return "0";
        } else {
          return result.toString();
        }
      }
    }

  };
var instance  = new BancoDoBrasilCheckNumberCalculator();
module.exports = instance;