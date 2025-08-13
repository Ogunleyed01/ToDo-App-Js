const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')

form.addEventListener('submit', (e) => {
    e.preventDefault();

   addTodo()
})

const addTodo = () => {
    const todo = input.value;

    if (todo) {
        const todoElement = document.createElement('li');
        todoElement.innerText = todo;

        //To show completion of Todo
        todoElement.addEventListener('click', () => {
            todoElement.classList.toggle('completed')

            localStorageUpdate()
        })

        //To delete a Todo
        todoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoElement.remove()

            localStorageUpdate()
        })

        todos.appendChild(todoElement)

        
       

        input.value = ''

        localStorageUpdate()
    } 
}

const localStorageUpdate = () => {
    const todoElement = document.querySelectorAll('li')

    const todos = []
    todoElement.forEach((todoElement) => {
        todos.push({
            text: todoElement.innerText,
            completed: todoElement.classList.contains('completed'),
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}