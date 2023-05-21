import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Tooltip, Box } from '@mui/material';


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
    [`& .${stepConnectorClasses.line}`]:{
      borderColor: selectedColor,
    }
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
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#0080ff',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#0080ff',
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {

  const { active, completed, className, selectedColor } = props;

  return (
    <QontoStepIconRoot ownerState={{ active, selectedColor }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" style={{ color: selectedColor }} />
      ) : (
        <div className="QontoStepIcon-circle" style={{ backgroundColor: selectedColor }} />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  selectedColor: PropTypes.string,
  selectedLightColor: PropTypes.string
};

const steps = ['Extra small', 'Small', 'Default', 'Large', 'Extra large'];

export default function CustomizedSteppers({selectedColor, selectedLightColor}) {

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={2} connector={<QontoConnector selectedColor={selectedColor} selectedLightColor={selectedLightColor}/>}>
        {steps.map((label) => (
          <Step key={label}>

            <StepLabel  StepIconComponent={(props) => <QontoStepIcon {...props} selectedColor={selectedColor} selectedLightColor={selectedLightColor} />}>
            
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