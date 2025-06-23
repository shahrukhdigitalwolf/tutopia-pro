'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Slider from "./TopCollageSlider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabData {
  label: string;
  data: { name: string; course: string; rating: string }[];
}

interface BasicTabsProps {
  topCollege: TabData[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs({ topCollege }: BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="college tabs">
          {topCollege.map((tab, idx) => (
            <Tab key={tab.label} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {topCollege.map((tab, idx) => (
        <CustomTabPanel value={value} index={idx} key={tab.label}>
          <Slider sliderData={tab.data} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}