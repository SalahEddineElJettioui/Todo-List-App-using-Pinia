<template>

<div v-for=" todo in todoList" :key="todo.id" class="item"> 
    <div class="content">
        <span :class="{ completed: todo.completed }" >
            {{ todo.item }}
        </span>
        <span @click.stop="toggleCompleted(todo.id)" >&#10004; </span>
        <span @click.stop="deleteTodo(todo.id)" >&#10060; </span>
    </div>
</div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '../stores/TodoList';


const store = useTodoListStore()

const { todoList } = storeToRefs(store);

const { toggleCompleted } = store;
const { deleteTodo } = store;

</script>

<style>
.completed {
    text-decoration: line-through;
}
</style>