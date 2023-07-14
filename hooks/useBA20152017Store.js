import { create } from 'zustand';

const BA20152017Store = (set, get) => ({
    figures: [],
    isLoading: true,
    setFigures: (data) => set({ figures: data, isLoading: false }),
    figureList: () => {
        return get().figures;
    },
});

const useBA20152017Store = create(BA20152017Store);

export default useBA20152017Store;