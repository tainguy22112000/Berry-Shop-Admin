import React from 'react';
import { ButtonBase } from '@mui/material';
import config from '../../../config';
import { Link } from 'react-router-dom';
import Logo from '../../../ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath} sx={{ width: '100%' }}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
