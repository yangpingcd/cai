class CalcItem {
    constructor(name, operator, initNumber, isRight) {
        this.name = name;
        this.operator = operator;
        this.level = -1;

        this.initNumber = initNumber; // function
        this.isRight = isRight; // function
    }
}

class QuestionItem {
    constructor(num, item) {
        this.num = num;
        this.item = item;
    }
}

var availCalcItems = [
    new CalcItem("addition", '+',
        function () {
            var m = 10;
            if (this.level >= 2)
                m = 1000;
            else if (this.level >= 1)
                m = 100;
            else
                m = 10;

            var n1 = Math.floor((Math.random() * m) + 1);
            var n2 = Math.floor((Math.random() * m) + 1);
            return [n1, n2];
        },
        function (n1, n2, r) {
            return (n1 + n2) == r;
        }
    ),
    new CalcItem("subtraction", '-',
        function () {

            var n1 = Math.floor((Math.random() * 9) + 1);
            var n2 = Math.floor((Math.random() * 9) + 1);
            return [n1, n2];
        },
        function (n1, n2, r) {
            return (n1 - n2) == r;
        }
    ),
    new CalcItem("multiplication", '*',
        function () {
            var num1, num2;
            num1 = Math.floor((Math.random() * 9) + 1);
            num2 = Math.floor((Math.random() * 9) + 1);
            return [num1, num2];
        },
        function (n1, n2, r) {
            return (n1 * n2) == r;
        }
    ),
    new CalcItem("division", '/',
        function () {
            var num1, num2;
            num1 = Math.floor((Math.random() * 9) + 1);
            num2 = Math.floor((Math.random() * 9) + 1);
            return [num1, num2];
        },
        function (n1, n2, r) {
            return (n1 / n2) == r;
        }
    )
];