import { create } from 'zustand';

const BA20132014Store = (set, get) => ({
    figures: [],
    setFigures: (data) => set({ figures: data }),
    figureList: () => {
        return get().figures;
    },
});

const useBA20132014Store = create(BA20132014Store);

export default useBA20132014Store;