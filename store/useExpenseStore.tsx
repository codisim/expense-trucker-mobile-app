import { create } from 'zustand';

export const useExpenseStore = create((set, get) => ({
    userExpenses: [],

    fetchExpenses: async () => {
        try {
            
            const expenses = (await fetch("/api/expense")).json();
            

        } catch (error) {
            console.log('Error fetching expenses:', error);
        }
    }
}))