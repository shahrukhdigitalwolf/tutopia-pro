"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DegreeCourseSlider from './DegreeCourseSlider';

interface DegreeTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface tabData {
    label: string,
    data: {img:string; title:string; duration:string; sessionHours:string; description:string; price:string}[]
}

interface degreeTab{
    degreeCourse: tabData[]
}

function DegreeTabPanel(props: DegreeTabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DegreeCourseTab({degreeCourse} : degreeTab) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {
                degreeCourse.map((tab, i)=>{
                    return(
                        <Tab label={tab.label} key={tab.label} />
                    )
                })
            }
        </Tabs>
      </Box>
        {degreeCourse.map((ele, i)=>{
            return(
      <DegreeTabPanel value={value} index={i} key={ele.label}>
        <DegreeCourseSlider
            sliderData={ele.data}
        />
      </DegreeTabPanel>
            )
        })}
    </Box>
  );
}