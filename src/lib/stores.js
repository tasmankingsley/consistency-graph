/* eslint-disable */
import { writable } from 'svelte/store';

let init_days = [];

for (let index = 0; index < 49; index++) {
    // days = [...days, {number: index},{opacity: index / 100}];
    init_days[index] = {done: false};
}

// export let title = writable(localStorage.getItem('title_store') || 'days')

// export object "todo_list" as writable store, either get stored object or create new empty one
export let days = writable(JSON.parse(localStorage.getItem('days_store')) || init_days);

// Update on change to stored value (todo_list)
days.subscribe((value) => localStorage.days_store = JSON.stringify(value));