'use client'
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Tooltip } from '@mui/material';

export default function ToggleReviewButtons() {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <Tooltip title="Like" placement="top-start">
                <ToggleButton
                    value="left"
                    aria-label="left aligned"
                    sx={{
                        bgcolor: 'grey.800',
                        color: 'common.white',
                        '&:hover': { bgcolor: 'grey.700' },

                        // 👇  selected styles
                        '&.Mui-selected': {
                            bgcolor: 'success.main',
                            color: 'common.white',
                            '&:hover': { bgcolor: 'success.dark' },
                        },
                    }}
                >
                    <ThumbUpOffAltIcon className='text-white' />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Dislike" placement="top-start">
                <ToggleButton
                    value="center"
                    aria-label="centered"
                    sx={{
                        bgcolor: 'grey.800',
                        color: 'common.white',
                        '&:hover': { bgcolor: 'grey.700' },

                        '&.Mui-selected': {
                            bgcolor: 'error.main',
                            color: 'common.white',
                            '&:hover': { bgcolor: 'error.dark' },
                        },
                    }}
                >
                    <ThumbDownOffAltIcon className='text-white' />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    );
}