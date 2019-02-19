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

var availCalcItems = [
    new CalcItem("addition", '+',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 9) + 1);
            } else if (this.level <= 2) {
                n1 = Math.floor((Math.random() * 50) + 1);
                n2 = Math.floor((Math.random() * 50) + 1);
                if (n1 > n2) {
                    n1 = n1 - n2;
                } else {
                    n2 = n2 - n1;
                }
            } else if (this.level <= 3) {
                n1 = Math.floor((Math.random() * 99) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
                if (n1 > n2) {
                    n1 = n1 - n2;
                } else {
                    n2 = n2 - n1;
                }
            } else if (this.level <= 4) {
                n1 = Math.floor((Math.random() * 99) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
            } else if (this.level <= 5) {
                n1 = Math.floor((Math.random() * 500) + 1);
                n2 = Math.floor((Math.random() * 500) + 1);
                if (n1 > n2) {
                    n1 = n1 - n2;
                } else {
                    n2 = n2 - n1;
                }
            } else if (this.level <= 6) {
                n1 = Math.floor((Math.random() * 999) + 1);
                n2 = Math.floor((Math.random() * 999) + 1);
            } else {
                n1 = Math.floor((Math.random() * 9999) + 1);
                n2 = Math.floor((Math.random() * 9999) + 1);
                if (n1 > n2) {
                    n1 = n1 - n2;
                } else {
                    n2 = n2 - n1;
                }
            }

            return new QuestionItem(this, n1, n2, n1 + n2);
        }
    ),
    new CalcItem("subtraction", '-',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 9) + 1);
            } else if (this.level <= 2) {
                n1 = Math.floor((Math.random() * 50) + 1);
                n2 = Math.floor((Math.random() * 50) + 1);
            } else if (this.level <= 3) {
                n1 = Math.floor((Math.random() * 99) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
            } else if (this.level <= 4) {
                n1 = Math.floor((Math.random() * 199) + 1);
                n2 = Math.floor((Math.random() * 199) + 1);
            } else if (this.level <= 5) {
                n1 = Math.floor((Math.random() * 500) + 1);
                n2 = Math.floor((Math.random() * 500) + 1);
            } else {
                n1 = Math.floor((Math.random() * 999) + 1);
                n2 = Math.floor((Math.random() * 999) + 1);
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
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 9) + 1);
            } else if (this.level <= 2) {
                n1 = Math.floor((Math.random() * 49) + 1);
                n2 = Math.floor((Math.random() * 9) + 1);
            } else if (this.level <= 3) {
                n1 = Math.floor((Math.random() * 99) + 1);
                n2 = Math.floor((Math.random() * 9) + 1);
            } else if (this.level <= 4) {
                n1 = Math.floor((Math.random() * 99) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
            } else if (this.level <= 5) {
                n1 = Math.floor((Math.random() * 500) + 1);
                n2 = Math.floor((Math.random() * 500) + 1);
            } else {
                n1 = Math.floor((Math.random() * 999) + 1);
                n2 = Math.floor((Math.random() * 999) + 1);
            }

            return new QuestionItem(this, n1, n2, n1 * n2);
        }
    ),
    new CalcItem("division", '/',
        function () {
            var n1, n2;

            if (this.level <= 1) {
                n1 = Math.floor((Math.random() * 5) + 1);
                n2 = Math.floor((Math.random() * 5) + 1);
            } else if (this.level <= 2) {
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 5) + 1);
            } else if (this.level <= 3) {
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 9) + 1);
            } else if (this.level <= 4) {
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 49) + 1);
            } else if (this.level <= 5) {
                n1 = Math.floor((Math.random() * 9) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
            } else if (this.level <= 6) {
                n1 = Math.floor((Math.random() * 49) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
            } else if (this.level <= 7) {
                n1 = Math.floor((Math.random() * 99) + 1);
                n2 = Math.floor((Math.random() * 99) + 1);
            } else {
                n1 = Math.floor((Math.random() * 999) + 1);
                n2 = Math.floor((Math.random() * 999) + 1);
            }

            return new QuestionItem(this, n1 * n2, n1, n2);
        }
    )
];