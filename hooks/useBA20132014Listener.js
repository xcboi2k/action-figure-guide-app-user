import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';

import { db } from "../firebase";
import useBA20132014Store from "./useBA20132014Store";

const useBA20132014Listener = () => {
    let [figureData, setFigureData] = useState([]);
    const BA20132014ColRef = collection(db, "BA20132014");
    const figures = useBA20132014Store((state) => (state.figures));
    const setFigures = useBA20132014Store((state) => (state.setFigures));
    const BA20132014Query = query(BA20132014ColRef, orderBy("figure_number"));

    useEffect(() => {
        const unsubscribe = onSnapshot(BA20132014Query, (snapshotData) => {
            const figureList = [];
            snapshotData.forEach(doc => {
                figureList.push({
                    figure_number: doc.data().figure_number,
                    figure_name: doc.data().figure_name,
                    figure_version: doc.data().figure_version,
                    figure_stamp: doc.data().figure_stamp,
                    figure_release_date: doc.data().figure_release_date,
                    figure_joint_count: doc.data().figure_joint_count,
                    figure_accessory_count: doc.data().figure_accessory_count,
                    figure_accessory_details: doc.data().figure_accessory_details,
                });
            });
            console.log(figureList);
            setFigureData(figureList);
            setFigures(figureList);
        });
        return unsubscribe;
    }, []);

    return [figureData];
};

export default useBA20132014Listener;