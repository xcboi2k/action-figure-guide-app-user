import { create } from 'zustand';

const EX20142015Store = (set, get) => ({
    figures: [],
    isLoading: true,
    setFigures: (data) => set({ figures: data, isLoading: false }),
    figureList: () => {
        return get().figures;
    },
});

const useEX20142015Store = create(EX20142015Store);

export default useEX20142015Store;