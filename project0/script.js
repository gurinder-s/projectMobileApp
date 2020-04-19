const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var counter = 0

function newTodo() {
  alert('Added new item')
  let item = document.createTextNode("New Item\n")
  let checkbox =document.createElement('input')
  checkbox.type = "checkbox"
  //checkbox.value = 1
  checkbox.name = "todo[]"
  list.appendChild(checkbox)
  list.appendChild(item)
  counter++
  itemCountSpan.textContent=counter.toString()

  
  }
