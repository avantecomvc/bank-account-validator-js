  class BradescoCheckNumberCalculator{

    // Account validation
    calculateAccount (accountNumber) {
      var numbers = accountNumber.split("");
      var sumSeq = 0;
      var sequence = 0;
      for (var i = 0; i < numbers.length; i++) {
        var number = parseInt(numbers[i]);
        sumSeq += this.multiplyAccordingWeight(number, i);
      }
      return this.accountModule(sumSeq);
    };

    multiplyAccordingWeight (number, i) {
      var weight = [2,7,6,5,4,3,2];
      return number * weight[i];
    };

    accountModule (sumSeq) {
      var module = sumSeq % 11;
      if(module === 0) {
        return "0";
      } else {
        if (module === 1) {
          return "P";
        } else {
          return (11 - module).toString();
        }
      }
    };

    // Agency validation
    calculateAgency (agencyNumber) {
      var numbers = agencyNumber.split("");
      var sumSeq = 0;
      var seq = 0;
      for (var i = 0; i < numbers.length; i++) {
        seq = 5 - i;
        sumSeq += (parseInt(numbers[i]) * seq);
      }
      return this.agencyModule(sumSeq);
    };

    agencyModule (sumSeq) {
      var result = 11 - (sumSeq % 11);
      if(result === 10) {
        return "P";
      } else {
        if (result === 11) {
          return "0";
        } else {
          return result.toString();
        }
      }
    };

  };
var instance  = new BradescoCheckNumberCalculator();
module.exports = instance;