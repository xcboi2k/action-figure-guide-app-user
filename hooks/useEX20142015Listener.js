import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';

import { db } from "../firebase";
import useEX20142015Store from "./useEX20142015Store";

const useEX20142015Listener = () => {
    const EX20142015ColRef = collection(db, "EX20142015");
    const figures = useEX20142015Store((state) => (state.figures));
    const setFigures = useEX20142015Store((state) => (state.setFigures));
    const EX20142015Query = query(EX20142015ColRef, orderBy("figure_number"));

    useEffect(() => {
        const unsubscribe = onSnapshot(EX20142015Query, (snapshotData) => {
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

export default useEX20142015Listener;