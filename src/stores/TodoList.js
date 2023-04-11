import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id:0
    }),
    actions: {
        addTodo(item){
            this.todoList.push({item, id: this.id++, completed: false})
        },

        // filter method create a new array eleminating the todo item which I passed in the parameteres 

        deleteTodo(itemId){
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemId
            })
        }
    }
})