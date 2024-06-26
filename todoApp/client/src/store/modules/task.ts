import { ActionTree } from 'vuex';
import api from '../../api/tasks';

export interface Task
{
    id: Number,
    text: string,
    completed: boolean,
}

interface TasksState {
    tasks: Task[];
}

const state: TasksState = {
    tasks: [],
}

const mutations = {
    tasksLoaded(state: TasksState, tasks: Task[]): void {
        state.tasks = tasks.sort((a, b) => a.id < b.id ? 1 : -1);
    },
    addTask(state: TasksState, text: any): void {
        api.createTask(text.text).then(res => {
            state.tasks.push(res.data);
            state.tasks = state.tasks.sort((a, b) => a.id < b.id ? 1 : -1);
        })
    },
    deleteTask(state: TasksState, id: Number): void {
        api.deleteTask(id).then(() => {
            state.tasks = state.tasks.filter((a) => a.id != id);
        })
    },
    updateTask(state: TasksState, data: any): void {
        api.updateTask(data).then(() => {
        })
    },
    checkItem(state: TasksState, id: Number): void {
        api.checkItem(id).then(() => {
        })
    },
}

const actions: ActionTree<TasksState, any> = {
    fetchTasks({ commit }) {
        api.getTasks().then(res => {
            commit('tasksLoaded', res.data);
        });
    },
}

const getters = {
    allTasks(state: TasksState): Task[] {
        return state.tasks;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}