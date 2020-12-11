<template>
    <div>
        <h2>
            Todo List:
        </h2>
        <section>
            <input type="text" v-model="todoDescription" /> <button @click="addTodo" >Adicionar</button>
        </section>
        <section class="todo-list-section">
            <ul class="todo-list-ul">
                <TodoListItem 
                    v-for="(todo, index) in todos" 
                    :description="todo.description"
                    :isDone="todo.isDone"
                    :key="index"
                    @done="() => onItemClickDone(index)"
                    @edit="(description) => onItemClickEdit(description, index)"
                    @delete="() => onItemClickDelete(index)"
                >
                    <template slot="slot-filho">
                        Html do componente pai
                    </template>
                </TodoListItem>
            </ul>
        </section>
    </div>
</template>
<script>
import TodoListItem from '@components/generic/todoListItem'

export default {
    name: 'TodoList',
    components: {
        TodoListItem
    },
    data() {
        return {
           todos: [],
           todoDescription: ''
        }
    },
    methods: {
        addTodo() {
            if (this.todoDescription) {
                this.todos.push({ description: this.todoDescription })
                this.todoDescription = ''
            }
        },
        onItemClickEdit(description, index) {
            const todo = this.todos[index]
            todo.description = description
            this.todos.splice(index, 1, todo)
        },
        onItemClickDelete(index) {
            this.todos.splice(index, 1)
        },
        onItemClickDone(index) {
            const todo = this.todos[index]
            todo.isDone = !todo.isDone
            this.todos.splice(index, 1, todo)
        }
    }
}
</script>
<style lang="scss" scoped>
.todo-list-section {
    margin: 20px;

    .todo-list-ul {
        width: 600px;
        display: flex;
        flex-direction: column;
        margin: auto;
    }
}
</style>
