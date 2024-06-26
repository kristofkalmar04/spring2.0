<template>
    <div class="inputContainer">
        <input
            class="inputField"
            v-model="text"
            value="{{ text }}"
            placeholder="Task" />
        <button
            class="createButton"
            @click="onClickButton(text)">
            Create
        </button>
    </div>
</template>

<script lang="ts">
import store from '@/store';

export default {
    name: 'InputField',
    props: {
    },
    methods: {
        onClickButton(text: string) {
            store.commit('task/addTask', {text: text});
        }
    }
}
</script>

<style scoped>
.inputContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 1280px;
}

.inputField {
    height: 48px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    outline: none;
    box-sizing: border-box;
    padding: 0 32px;
    font-size: 18px;
}

.createButton {
    height: 48px;
    width: 128px;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32px;
    border-radius: 8px;
    border: 1px solid #112641;
    background-color: #365885;
    color: white;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: background-color 0.15s linear, border 0.15s linear;
}

.createButton:hover {
    border: 1px solid #000;
    background-color: #284161;
}
</style>