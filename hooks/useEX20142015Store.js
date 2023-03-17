import { create } from 'zustand';

const EX20142015Store = (set, get) => ({
    figures: [],
    setFigures: (data) => set({ figures: data }),
    figureList: () => {
        return get().figures;
    },
});

const useEX20142015Store = create(EX20142015Store);

export default useEX20142015Store;