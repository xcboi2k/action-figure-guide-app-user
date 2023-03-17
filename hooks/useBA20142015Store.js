import { create } from 'zustand';

const BA20142015Store = (set, get) => ({
    figures: [],
    setFigures: (data) => set({ figures: data }),
    figureList: () => {
        return get().figures;
    },
});

const useBA20132014Store = create(BA20142015Store);

export default useBA20142015Store;