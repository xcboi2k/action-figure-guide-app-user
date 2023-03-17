import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';

import { db } from "../firebase";
import useMU20152017Store from "./useMU20152017Store";

const useMU20152017Listener = () => {
    const MU20152017ColRef = collection(db, "MU20152017");
    const figures = useMU20152017Store((state) => (state.figures));
    const setFigures = useMU20152017Store((state) => (state.setFigures));
    const MU20152017Query = query(MU20152017ColRef, orderBy("figure_number"));

    useEffect(() => {
        const unsubscribe = onSnapshot(MU20152017Query, (snapshotData) => {
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

export default useMU20152017Listener;