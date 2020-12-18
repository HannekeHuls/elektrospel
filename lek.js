/**
 * display image
 */
const showImage = function() {
    var img = document.getElementById("lamp");
    img.style.visibility = "visible";
};
/**
 * hide image
 */
const hideImage = function() {
    var img = document.getElementById("lamp");
    img.style.visibility = "hidden";
};
/**
 * change textcolor electro items 
 * @param q index question list
 * @param a index answer list
 */
const changeColor = function(q,a) {
    document.getElementById("q" + q).style.color = "lightblue";
    document.getElementById("a" + a).style.color = "lightblue";
};
/**
 * execute 2 functions if correct answer 
 * @param q
 * @param a
 */
const answerCorrect = function(q,a){
    changeColor(q,a);
    showImage();
};
/**
 * find the right alternative for a given word/expression
 */
const getSynonym = function () {
    const question= document.querySelectorAll('input[name="questions"]');
    const answers = document.querySelectorAll('input[name="ans"]');
    
    for (let q =0; q < question.length; q++){
        for (let a = 0; a < answers.length; a++){
            if (question[q].checked && answers[a].checked){
                if (q== 0 && a == 5){
                    answerCorrect(q,a);
                }
                else if (q == 1 && a == 12){
                    answerCorrect(q,a);
                }
                else if (q == 2 && a == 0){
                    answerCorrect(q,a);
                }
                else if (q == 3 && a == 9){
                    answerCorrect(q,a);
                }
                else if (q == 4 && a == 7){
                    answerCorrect(q,a);
                }
                else if (q == 5 && a == 1){
                    answerCorrect(q,a);
                }
                else if (q == 6 && a == 11){
                    answerCorrect(q,a);
                }
                else if (q == 7 && a == 3){
                    answerCorrect(q,a);
                }
                else if (q == 8 && a == 10){
                    answerCorrect(q,a);
                }
                else if (q == 9 && a == 6){
                    answerCorrect(q,a);
                }
                else if (q == 10 && a == 8){
                    answerCorrect(q,a);
                }
                else if (q == 11 && a == 4){
                    answerCorrect(q,a);
                }
                else if (q == 12 && a == 2){
                    answerCorrect(q,a);
                }
                else  hideImage();
            }
        }
    }
};
