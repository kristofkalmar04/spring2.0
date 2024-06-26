<template>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Task</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in data" :value="row" :key="row.text">
                <td><input
                        class="checkbox"
                        type="checkbox"
                        :checked="row.completed"
                        @click="checkItem(row.id)" />
                </td>
                <td>
                    <input
                        class="textInput"
                        @change="updateText(row.id, $event)"
                        :value="row.text"/>
                </td>
                <td>
                    <button
                        class="trashButton"
                        @click="deleteItem(row.id)">
                        <object
                            class="trashIcon"
                            data="icons/trash.svg"/>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import store from '@/store';

export default {
    name: 'ItemsTable',
    props: [
        'data',
    ],
    methods: {
        deleteItem(id: Number) {
            store.commit('task/deleteTask', id);
        },
        updateText(id: Number, event: any) {
            store.commit('task/updateTask', {
                id,
                text: event.target.value,
            });
        },
        checkItem(id: Number) {
            store.commit('task/checkItem', id);
        },
    }
}
</script>

<style scoped>
.trashButton {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    margin: 0;
    max-height: 24px;
    display: block;
}

.trashIcon {
    height: 24px;
    width: 24px;
    margin: 0;
    padding: 0;
    pointer-events: none;
}

table {
    width: calc(100% - 64px);
    border-collapse: collapse;
    margin: 32px;
    max-width: 1280px;
    background-color: #fff;
    border-radius: 8px;
    text-align: left;
    overflow: hidden
}

.textInput {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    outline: none;
}

table thead tr th
{
    height: 48px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    padding: 0 16px;
    box-sizing: border-box;
    font-size: 16px;
    color: #777777;
}

table thead tr
{
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
}

table thead tr th:nth-child(1)
{
    width: 48px;
}

table thead tr th:last-child
{
    border-right: none;
    width: 48px;
}

table tbody tr td {
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: #363636;
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    max-height: 48px;
    margin: 0;
}

table tbody tr td:last-child
{
    border-right: none;
    max-width: 48px;
    padding: 12px;
}

table tbody tr td:last-child:hover
{
    background-color: red;
}

table tbody tr:last-child td
{
    border-bottom: none;
}

table tbody tr td:nth-child(1)
{
    padding: 0;
}

.checkbox {
    margin: 0 17px;
}
</style>