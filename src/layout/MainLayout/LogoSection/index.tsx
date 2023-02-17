import { ButtonBase } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../../config';
import Logo from '../../../ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath} sx={{ width: '100%' }}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
