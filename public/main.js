// const thumbUp = document.getElementsByClassName("fa-thumbs-up");
// const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash-o");

const addCareBtn = document.getElementsByClassName('addCareBtn')
const seeCareBtn = document.getElementsByClassName('seeCareBtn')
const updateForm = document.getElementsByClassName('updateForm')
const plantMain = document.getElementsByClassName('plantMain')



// function showCareForm(e){
//   if(e.target.classList.contains('addCareBtn')){
//     updateForm.classList.toggle('hideForm')
//   }
//   // updateForm.classList.toggle('hideForm')
// }

// plantMain.addEventListener('click', showCareForm)

// Array.from
// Array.from(seeCareBtn).forEach(function(element) {
//   element.addEventListener('click', function(){
//     updateForm.classList.toggle('hideForm')
//   });
// });

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messagesTDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp':thumbUp
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        // const plantName = this.parentNode.parentNode.childNodes[1].innerText
        // const date = this.parentNode.parentNode.childNodes[3].innerText
        const theID = this.parentNode.parentNode.parentNode.id
        // console.log(plantName, date, theID)

        fetch('deletePlant', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'theID': theID
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
