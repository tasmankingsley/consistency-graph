/* eslint-disable */
import { writable } from 'svelte/store';

let init_days = [];
let current_date = new Date().getTime();

for (let index = 0; index < 49; index++) {
    // days = [...days, {number: index},{opacity: index / 100}];
    init_days[index] = {done: false};
}

export let last_date = writable(localStorage.getItem('date_store') || current_date);
last_date.subscribe((value) => localStorage.date_store = value);

export let title = writable(localStorage.getItem('title_store') || 'days');
title.subscribe((value) => localStorage.title_store = value);

export let days = writable(JSON.parse(localStorage.getItem('days_store')) || init_days);
days.subscribe((value) => localStorage.days_store = JSON.stringify(value));