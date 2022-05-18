document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('#new-task-description').value 
    buildToDo(input)
    form.reset()
  })
});

function buildToDo(todo) {
  let p = document.createElement('p')
  p.textContent = `${todo} `
  document.querySelector('#tasks').appendChild(p)
}