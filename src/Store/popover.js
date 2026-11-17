import { create } from "zustand/react";
import { immer } from "zustand/middleware/immer";
import { POPOVER_CONFIG } from "#constants/index.js";

const closeAll = (state) => {
    Object.values(state.popovers).forEach((p) => {
        p.isOpen = false;
    });
};

const usePopoverStore = create(
    immer((set) => ({
        popovers: POPOVER_CONFIG,

        openPopover: (key) =>
            set((state) => {
                closeAll(state);
                state.popovers[key].isOpen = true;
            }),

        closePopover: (key) =>
            set((state) => {
                state.popovers[key].isOpen = false;
            }),

        togglePopover: (key) =>
            set((state) => {
                const wasOpen = state.popovers[key].isOpen;
                closeAll(state);
                state.popovers[key].isOpen = !wasOpen;
            }),
    })),
);

export default usePopoverStore;