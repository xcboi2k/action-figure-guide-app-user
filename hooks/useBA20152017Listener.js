import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';

import { db } from "../firebase";
import useBA20152017Store from "./useBA20152017Store";

const useBA20152017Listener = () => {
    const BA20152017ColRef = collection(db, "BA20152017");
    const figures = useBA20152017Store((state) => (state.figures));
    const setFigures = useBA20152017Store((state) => (state.setFigures));
    const BA20152017Query = query(BA20152017ColRef, orderBy("figure_number"));

    useEffect(() => {
        const unsubscribe = onSnapshot(BA20152017Query, (snapshotData) => {
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

export default useBA20152017Listener;