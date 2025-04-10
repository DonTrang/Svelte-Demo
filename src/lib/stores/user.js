import { writable } from 'svelte/store';

// Lưu trạng thái người dùng hiện tại
export const currentUser = writable(null);
