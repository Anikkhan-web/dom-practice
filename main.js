function makered(){

 document.body.style.backgroundColor='red';

}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick= makeBlue;

function makeBlue(){
    document.body.style.backgroundColor="blue"
}

const grayButton = document.getElementById('make-gray-button');
grayButton.onclick= function(){
    document.body.style.backgroundColor="gray"
}

const goldenButton = document.getElementById('make-golden-button');
goldenButton.addEventListener('click',makeGoldenrod);


function makeGoldenrod(){
    document.body.style.backgroundColor='goldenrod';

}

const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click',function(){
    document.body.style.backgroundColor='hotpink'
})


function lastButton(){
  const clicking =   document.getElementById('click-me');
  clicking.innerText= ' i am last button';
}


document.getElementById('handle').addEventListener('click',function(){
    const p = document.getElementById('click-me');
    p.innerText='Lorem ipsum dolor sit amet consectetur adipisicing';


})

document.getElementById('update-name').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const p = document.getElementById('click-me');
    p.innerText=nameField.value;
    nameField.value = '';



})