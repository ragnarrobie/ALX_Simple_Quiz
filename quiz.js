function checkanswer(){
const correctAnswer='4';

const selectedOption = document.querySelector('input[name="quiz"]:checked');
let userAnswer=selectedOption ? selectedOption.value:null;

const feedBackElement= document.queryElementById('feedback');

if(userAnswer=correcAanswer){
    feedBackElement.textContent="Correct! Well done."
    feedBackElement.style="green";
}
else{
    feedBackElement.textcontent="That's incorrect. Try again!";
    feedBackElement.style="red";
}

}
const submitButton=document.getElementById('submit-answer');
submitButton.addEventListener('click',(event)=>{
event.preventDefault();
console.log(checkanswer);
});