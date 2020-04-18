const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let counter = 0


function newTodo() {
  alert('Added new item')
  let item = document.createTextNode("New Item\n")
  list.appendChild(item)
  counter +=1
  itemCountSpan.value = counter
  
  
  }
