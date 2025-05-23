import styled from '@emotion/styled';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';

import ResourcesIcon from '../assets/icons/loupe.svg?react';
import ContactsIcon from '../assets/icons/people_outline.svg?react';
import HomeIcon from '../assets/icons/roofing.svg?react';
import ProfileIcon from '../assets/icons/sentiment_satisfied_alt.svg?react';

interface NavItem {
  icon: React.ReactNode;
  selectedColor: string;
  route: string;
}

interface StyledNavActionProps {
  selected?: boolean;
  selectedColor?: string;
}

const StyledBottomNavAction = styled(BottomNavigationAction, {
  shouldForwardProp: (prop) => prop !== 'selectedColor',
})<StyledNavActionProps>(({ selectedColor }) => ({
  minWidth: 'auto',
  paddingBottom: '10px',
  color: '#ffffff',
  '&.Mui-selected': {
    color: selectedColor || '#ffffff',
    '& svg': {
      color: selectedColor || '#ffffff',
      '& path': {
        fill: selectedColor || '#ffffff',
      },
    },
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: 'inherit',
    marginTop: '2px',
    '&.Mui-selected': {
      fontSize: 'inherit',
    },
  },
  '& svg': {
    color: '#ffffff',
    '& path': {
      fill: '#ffffff',
    },
  },
  '&:hover': {
    background: 'transparent',
  },
  '&:focus': {
    outline: 'none',
  },
}));

const BottomNav: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme() as Theme;
  const screenSize = useScreenSize();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      icon: <HomeIcon width={24} height={24} />,
      selectedColor: theme.colors.pink,
      route: '/',
    },
    {
      icon: <ResourcesIcon width={24} height={24} />,
      selectedColor: theme.colors.lightBlue,
      route: '/resources',
    },
    {
      icon: <ContactsIcon width={24} height={24} />,
      selectedColor: theme.colors.yellow,
      route: '/contacts',
    },
    {
      icon: <ProfileIcon width={24} height={24} />,
      selectedColor: theme.colors.green,
      route: '/profile',
    },
  ];

  if (
    screenSize !== 'sm' ||
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/onboarding' ||
    location.pathname.startsWith('/reset-password')
  )
    return;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    navigate(navItems[newValue].route);
  };

  const currentIndex = navItems.findIndex((item) => item.route === location.pathname);

  return (
    <Paper
      component="nav"
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: `${theme.borders?.borderRadius} ${theme.borders?.borderRadius} 0 0`,
        height: '20vw',
        background: theme.gradients.gradientBlack,
        zIndex: 900,
      }}
    >
      <BottomNavigation
        value={currentIndex}
        onChange={handleChange}
        showLabels
        sx={{
          background: 'transparent',
          height: '100%',
          '& .MuiBottomNavigationAction-label': {
            fontSize: theme.typography.body3.fontSize,
            '&.Mui-selected': {
              fontSize: theme.typography.body3.fontSize,
            },
          },
        }}
      >
        {navItems.map((item, index) => (
          <StyledBottomNavAction
            key={t(`${item.route}.menu`)}
            label={t(`${item.route}.menu`)}
            icon={item.icon}
            selected={currentIndex === index}
            selectedColor={item.selectedColor}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default React.memo(BottomNav);
