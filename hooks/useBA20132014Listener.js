import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';

import { db } from "../firebase";
import useBA20132014Store from "./useBA20132014Store";

const useBA20132014Listener = () => {
    const BA20132014ColRef = collection(db, "BA20132014");
    const figures = useBA20132014Store((state) => (state.figures));
    const setFigures = useBA20132014Store((state) => (state.setFigures));
    const BA20132014Query = query(BA20132014ColRef, orderBy("figure_number"));

    useEffect(() => {
        const unsubscribe = onSnapshot(BA20132014Query, (snapshotData) => {
            const figureList = [];
            snapshotData.forEach(doc => {
                figureList.push({
                    figureNumber: doc.data().figure_number,
                    figureName: doc.data().figure_name,
                    figureVersion: doc.data().figure_version,
                    figureDateStamp: doc.data().figure_date_stamp,
                    figureReleaseDate: doc.data().figure_release_date,
                    figureJointCount: doc.data().figure_joint_count,
                    figureAccessoryCount: doc.data().figure_accessory_count,
                    figureAccessoryDetails: doc.data().figure_accessory_details,
                    figurePhotoUrl: doc.data().photoUrl,
                    id: doc.id
                });
            });

            setFigures(figureList);
        });
        return unsubscribe;
    }, []);

    return [];
};

export default useBA20132014Listener;