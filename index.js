"use strict";
// QUESTION 58:
function lotsOfScores(...scores) {
    let averagescore = scores.reduce((sum, score) => sum + score, 0);
    return averagescore / scores.length;
}
;
console.log(lotsOfScores(22, 70, 90, 40));
// QUESTION 59:
function creatAdder(value) {
    return function (number) {
        return value + number;
    };
}
let addervalue5 = creatAdder(20);
console.log(addervalue5(15));
console.log(addervalue5(5));
console.log(addervalue5(30));
console.log(addervalue5(2));
// QUESTION 60:
let userProfile = {
    name: "hooriya",
    age: 17,
    getProfile: function () {
        return `Name:${this.name}, \nage:${this.age}`;
    }
};
console.log(userProfile.getProfile());
