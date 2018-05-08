  class BanrisulCheckNumberCalculator{

    calculate(accountNumber) {
      var numbers = accountNumber.split("");
      var sumSeq = 0;
      
      for (var i = 0; i < numbers.length; i++) {
        var number = parseInt(numbers[i]);
        sumSeq += this.multiplyAccordingWeight(number, i);
      }

      return this.moduleEleven(sumSeq).toString();
    };

    multiplyAccordingWeight(number, index) {
      var weight = [3,2,4,7,6,5,4,3,2];
      return number * weight[index];
    };

    moduleEleven(sumSeq) {
      var module = sumSeq % 11;
      if (module === 0) {
        return 0;
      } else if (module == 1) {
        return 6;
      }
      return 11 - module;
    }
  };
var instance = new BanrisulCheckNumberCalculator ();
module.exports  = instance;