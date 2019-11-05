class CalcItem {
    constructor(name, operator, generateQuestion) {
        this.name = name;
        this.operator = operator;
        this.level = 0;

        this.generateQuestion = generateQuestion; // function
    }
}

class QuestionItem {
    constructor(calcItem, n1, n2, r) {
        this.calcItem = calcItem;
        this.num1 = n1;
        this.num2 = n2;
        this.answer = r;
    }
}

// generate a random between min and max [min, max)
function getMinMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var availCalcItems = [
    new CalcItem("addition", '+',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = getMinMax(1, 10);
                n2 = getMinMax(1, 10);
            } else if (this.level <= 2) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(1, 10);
            } else if (this.level <= 3) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 4) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 5) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(100, 1000);
            } else if (this.level <= 6) {
                n1 = getMinMax(1000, 10000);
                n2 = getMinMax(100, 1000);
            } else {
                n1 = getMinMax(1000, 10000);
                n2 = getMinMax(1000, 10000);
            }

            return new QuestionItem(this, n1, n2, n1 + n2);
        }
    ),
    new CalcItem("subtraction", '-',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = getMinMax(1, 10);
                n2 = getMinMax(1, 10);
            } else if (this.level <= 2) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(1, 10);
            } else if (this.level <= 3) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 4) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 5) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(100, 1000);
            } else if (this.level <= 6) {
                n1 = getMinMax(1000, 10000);
                n2 = getMinMax(100, 1000);
            } else {
                n1 = getMinMax(1000, 10000);
                n2 = getMinMax(1000, 10000);
            }

            if (n1 < n2) {
                var t = n1; n1 = n2; n2 = t;
            }

            return new QuestionItem(this, n1, n2, n1 - n2);
        }
    ),
    new CalcItem("multiplication", '*',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = getMinMax(2, 10);
                n2 = getMinMax(2, 10);
            } else if (this.level <= 2) {
                n1 = getMinMax(10, 50);
                n2 = getMinMax(2, 10);
            } else if (this.level <= 3) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(2, 10);
            } else if (this.level <= 4) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(2, 10);
            } else if (this.level <= 5) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 6) {
                n1 = getMinMax(100, 500);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 7) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 8) {
                n1 = getMinMax(100, 1000);
                n2 = getMinMax(10, 100);
            } else {
                n1 = getMinMax(1000, 10000);
                n2 = getMinMax(100, 1000);
            }

            return new QuestionItem(this, n1, n2, n1 * n2);
        }
    ),
    new CalcItem("division", '/',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = getMinMax(2, 6);
                n2 = getMinMax(2, 6);
            } else if (this.level <= 2) {
                n1 = getMinMax(2, 10);
                n2 = getMinMax(2, 6);
            } else if (this.level <= 3) {
                n1 = getMinMax(2, 10);
                n2 = getMinMax(2, 10);
            } else if (this.level <= 4) {
                n1 = getMinMax(2, 10);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 5) {
                n1 = getMinMax(2, 10);
                n2 = getMinMax(100, 1000);
            } else if (this.level <= 6) {
                n1 = getMinMax(2, 10);
                n2 = getMinMax(1000, 10000);
            } else if (this.level <= 7) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(10, 100);
            } else if (this.level <= 8) {
                n1 = getMinMax(10, 100);
                n2 = getMinMax(100, 1000);
            } else {
                n1 = getMinMax(50, 100);
                n2 = getMinMax(100, 1000);
            } 

            return new QuestionItem(this, n1 * n2, n1, n2);
        }
    )
];