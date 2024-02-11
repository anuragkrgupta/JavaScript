//change the name of the file in <script src="grading.js"></script> in index.html
//practice Q2: write a code which can give a grade to students according to their score:-
// 80-100=A
// 70-89=B
// 60-69=C
// 50-59=D
// 0-49-F

let score = prompt("Enter your score");
if (score >= 80 &&  score <= 100) {
    console.log('Grade A');
}
else if (score >= 70 &&  score < 80 ) {
    console.log('Grade B');
}
else if (score >= 60 &&  score < 70) {
    console.log('Grade C');
}
else if (score >= 50 &&  score < 60) {
    console.log('Grade D');
}
else {
    console.log('Failed');
}