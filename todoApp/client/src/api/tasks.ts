import axios from "axios";
import { Task } from '../store/modules/task';

function getTasks(): Promise<any>
{
    return axios.get('http://localhost:8080/task');
}

function createTask(text: string): Promise<any>
{
    return axios.post('http://localhost:8080/task', null, {
        params: {
            text: text,
        }
    });
}

function deleteTask(id: Number): Promise<any>
{
    return axios.delete('http://localhost:8080/task', {
        params: {
            id,
        }
    });
}

function checkItem(id: Number): Promise<any>
{
    return axios.put('http://localhost:8080/task', null, {
        params: {
            id,
        }
    });
}

export default {
    getTasks,
    createTask,
    deleteTask,
    checkItem,
}