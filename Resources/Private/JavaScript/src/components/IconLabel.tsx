import * as React from 'react';
import { Icon } from '@neos-project/react-ui-components';
import { createUseMediaUiStyles } from '../core';
import { MediaUiTheme } from '../interfaces';

const useStyles = createUseMediaUiStyles((theme: MediaUiTheme) => ({
    iconWrap: {
        width: theme.spacing.goldenUnit,
        display: 'inline-flex',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        lineHeight: theme.spacing.goldenUnit,
        paddingLeft: theme.spacing.half
    },
    imgIcon: {
        width: 'auto',
        height: '18px'
    }
}));

interface IconLabelProps {
    icon?: string;
    iconUri?: string;
    label?: string;
    className?: string;
    children?: React.ReactElement;
}

export default function IconLabel({
    icon = 'question',
    iconUri = '',
    label = '',
    className = '',
    children = null
}: IconLabelProps) {
    const classes = useStyles();

    return (
        <div className={className}>
            <span className={classes.iconWrap}>
                {iconUri ? <img src={iconUri} alt={label} className={classes.imgIcon} /> : <Icon icon={icon} />}
            </span>
            <span className={classes.label}>{children || label || ''}</span>
        </div>
    );
}
