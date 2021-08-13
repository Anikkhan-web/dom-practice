


document.getElementById('submit-comment').addEventListener('click',function(){

   const commentBox = document.getElementById('new-comment');
//    get user comment
//    const user = commentBox.value;


//   
// creat comment pragraph
  const newComment = document.createElement('p');
  newComment.innerText = commentBox.value;

  const commentContainer = document.getElementById('comment-container');

  commentContainer.appendChild(newComment);
  commentBox.value=''

})