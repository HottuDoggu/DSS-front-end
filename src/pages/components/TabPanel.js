import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TabPanel({children, value, index, other}) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 10 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }