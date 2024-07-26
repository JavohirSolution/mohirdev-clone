import { create } from "zustand";

const useZustand = create((set) => ({
    open: false,
    isOpen: () => set((state) => ({ open: !state.open })),
}))


export default useZustand