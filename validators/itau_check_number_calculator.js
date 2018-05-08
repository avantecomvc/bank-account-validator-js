  class ItauCheckNumberCalculator {

    calculate(agencyNumber, accountNumber) {
      var numbers = (agencyNumber+accountNumber).split("");
      var sumSeq = 0;
      var sequence = 0;
      for (var i = 0; i < numbers.length; i++) {
        var number = parseInt(numbers[i]);
        sequence = this.multiplyAccordingParity(number, i);
        sequence = this.adjustAccordingLength(sequence);
        sumSeq += sequence;
      }
      return this.module(sumSeq);
    };

    multiplyAccordingParity(number, index) {
      return number * (index % 2 === 0 ? 2 : 1);
    };

    adjustAccordingLength(sequence) {
      if(sequence > 9) {
        var numbers = sequence.toString().split("");
        sequence = 0;
        for (var i = 0; i < numbers.length; i++) {
          sequence += parseInt(numbers[i]);
        }
      }
      return sequence;
    };

    module(sumSeq) {
      var module = sumSeq % 10;
      if(module === 0) {
        return "0";
      } else {
        return (10 - module).toString();
      }
    }
  };

var instance =  new ItauCheckNumberCalculator();
module.exports = instance;