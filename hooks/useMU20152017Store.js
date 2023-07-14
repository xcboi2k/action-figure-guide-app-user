import { create } from 'zustand';

const MU20152017Store = (set, get) => ({
    figures: [],
    isLoading: true,
    setFigures: (data) => set({ figures: data, isLoading: false }),
    figureList: () => {
        return get().figures;
    },
});

const useMU20152017Store = create(MU20152017Store);

export default useMU20152017Store;