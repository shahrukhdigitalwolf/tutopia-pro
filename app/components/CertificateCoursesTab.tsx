"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CertificateCoursesSlider from './CertificateCoursesSlider';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type CertificateCourseType = {
  label: string;
  data: {
    img: string;
    title: string;
    iconList: string[];
    duration: string;
    courseType: string;
    description: string;
    price: string;
  }[];
};

interface CertificateCoursesTabProps {
  certificateCourse: CertificateCourseType[];
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

export default function CertificateCoursesTab({certificateCourse}: CertificateCoursesTabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            certificateCourse.map((itm,idx)=>{
              return(
                <Tab key={idx} label={itm.label} />
              )
            })
          }
        </Tabs>
      </Box>
      {
        certificateCourse.map((ele, i)=>{
          return(
            <CustomTabPanel value={value} index={i} key={i}>
              <CertificateCoursesSlider sliderData={ele.data} />
            </CustomTabPanel>
          )
        })
      }
    </Box>
  );
}

