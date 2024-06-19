import React from "react";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

interface ProgressCircleProps {
    progress?: number; // Progress value between 0 and 1 (default: 0.70)
    size?: number; // Size of the circle in pixels (default: 40)
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress = 0.70, size = 40 }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const angle = progress * 360;

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                            ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default ProgressCircle;
