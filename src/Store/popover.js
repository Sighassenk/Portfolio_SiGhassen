import { create } from "zustand";

const usePopoverStore = create((set) => ({
    active: null,
    toggle: (name) => set((s) => ({ active: s.active === name ? null : name })),
    close: () => set({ active: null }),
}));

export default usePopoverStore;