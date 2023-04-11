<template>

<div v-for=" todo in todoList" :key="todo.id" class="item"> 
    <div class="content">
        <span>
            {{ todo.item }}
        </span>
    </div>
</div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '../stores/TodoList';


const store = useTodoListStore()

const { todoList } = storeToRefs(store);

</script>