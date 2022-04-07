import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useRouter} from 'next/router';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgb(255,255,255)',
  '&.Mui-selected': {
    color: '#ffffff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgb(100, 95, 228, 0.32)',
  },
}));

export default function Title() {

  const router = useRouter();

  const routes = ['unlimited', 'player-selection']

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    router.push(`/${routes[value]}`);
  }, [value])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#000000' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="unlimited" />
          <StyledTab label="vs. friends" />
          {/* <StyledTab label="daily" /> */}
          {/* <StyledTab label="about" /> */}
        </StyledTabs>
        <Box sx={{ p: 1 }} />
      </Box>
    </Box>
  );
}



 // <div className='bg-slate-900 flex justify-center'>

        //     <Link href='/'><a className='text-3xl text-white my-5'>Waddle</a></Link>
        //     <div className='mr-2'></div>
        // </div>