

document.getElementById('second-item').addEventListener('click',function(event){


    console.log('second item clicked');
    event.stopPropagation();
})


document.getElementById('list-container').addEventListener('click',function(){


    console.log('ul clickd');
})

document.getElementById('section-container').addEventListener('click',function(){


    console.log('section clickd');
})