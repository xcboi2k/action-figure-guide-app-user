import React from "react";
import { ICON_NAMES } from "constants/constant";

import BackIcon from "assets/icons/BackIcon";

const Icon = ({ name, size = 40, color }) => {
    if (name === ICON_NAMES.BACK) return <BackIcon color={color} size={size} />;
    return null;
};

export default Icon;