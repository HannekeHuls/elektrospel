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
 * @param {*} querySel 
 * @param {*} nameList 
 */
const makeList = function(querySel, nameList){
    for (const word of querySel) {
        nameList.push(word.value);
    }
};
/**
 * find the right alternative for a given word/expression
 */
const getSynonym = function () {
    const question= document.querySelectorAll('input[name="questions"]');
    const answers = document.querySelectorAll('input[name="ans"]');
        
    const qList = [];
    const aList = [];
    
    makeList(question, qList);
    makeList(answers, aList);
    
    for (const q of question){
        for (const a of answers){
            if (q.checked && a.checked){
                switch (q.value == qList[0] && a.value == aList[0]){
                    case q.value == qList[0] && a.value == aList[5]:
                        showImage();
                        break;
                    case q.value == qList[1] && a.value == aList[12]:
                        showImage();
                        break;
                    case q.value == qList[2] && a.value == aList[0]:
                        showImage();
                        break;
                    case q.value == qList[3] && a.value == aList[9]:
                        showImage();
                        break;
                    case q.value == qList[4] && a.value == aList[7]:
                        showImage();
                        break; 
                    case q.value == qList[5] && a.value == aList[1]:
                        showImage();
                        break;
                    case q.value == qList[6] && a.value == aList[11]:
                        showImage();
                        break;
                    case q.value == qList[7] && a.value == aList[3]:
                        showImage();
                        break;
                    case q.value == qList[8] && a.value == aList[10]:
                        showImage();
                        break;
                    case q.value == qList[9] && a.value == aList[6]:
                        showImage();
                        break;
                    case q.value == qList[10] && a.value == aList[8]:
                        showImage();
                        break;
                    case q.value == qList[11] && a.value == aList[4]:
                        showImage();
                        break;
                    case q.value == qList[12] && a.value == aList[2]:
                        showImage();
                        break;
                    default: 
                        hideImage();
                }
            }
        }    
    }
};