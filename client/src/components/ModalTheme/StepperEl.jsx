import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Tooltip, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const QontoConnector = styled(StepConnector)(({ theme, selectedColor, selectedLightColor }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 12px)',
    right: 'calc(50% + 12px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: selectedColor,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: selectedColor,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : selectedLightColor,
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#aed7ff',
  display: 'flex',
  height: ownerState.isMobile ? 12 : 22, // Уменьшение высоты степпера для мобильной версии
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#0080ff',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#0080ff',
    fontSize: ownerState.isMobile ? 8 : 18, // Уменьшение размера иконки для мобильной версии
  },
  '& .QontoStepIcon-circle': {
    width: ownerState.isMobile ? 4 : 8, // Уменьшение размера круга для мобильной версии
    height: ownerState.isMobile ? 4 : 8, // Уменьшение размера круга для мобильной версии
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className, selectedColor, isMobile } = props;

  return (
    <QontoStepIconRoot ownerState={{ active, isMobile }}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" style={{ color: selectedColor }} />
      ) : (
        <div className="QontoStepIcon-circle" style={{ backgroundColor: selectedColor }} />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  selectedColor: PropTypes.string,
  isMobile: PropTypes.bool,
};

const steps = ['Extra small', 'Small', 'Default', 'Large', 'Extra large'];

export default function CustomizedSteppers({ selectedColor, selectedLightColor }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Stepper alternativeLabel activeStep={2} connector={<QontoConnector selectedColor={selectedColor} selectedLightColor={selectedLightColor} />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={(props) => <QontoStepIcon {...props} selectedColor={selectedColor} isMobile={isMobile} />}>

              <Tooltip title={label}>
                <Box sx={{ marginTop: '-40px',
                  marginLeft: '12px',
                  color: 'transparent',
                  cursor: 'pointer' }}>aa</Box>
              </Tooltip></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
