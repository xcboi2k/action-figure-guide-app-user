import { create } from 'zustand';

const BA20152017Store = (set, get) => ({
    figures: [],
    setFigures: (data) => set({ figures: data }),
    figureList: () => {
        return get().figures;
    },
});

const useBA20152017Store = create(BA20152017Store);

export default useBA20152017Store;