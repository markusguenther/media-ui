import * as React from 'react';
import { Headline } from '@neos-project/react-ui-components';
import { createUseMediaUiStyles, useIntl, useMediaUi } from '../../../core';
import { MediaUiTheme } from '../../../interfaces';
import { PropertyList, PropertyListItem } from './PropertyList';

const useStyles = createUseMediaUiStyles((theme: MediaUiTheme) => ({
    iptcData: {
        '& dl': {
            '& dt': {
                backgroundColor: theme.colors.alternatingBackground,
                fontWeight: 'bold',
                color: 'white',
                padding: '8px 8px 0'
            },
            '& dd': {
                backgroundColor: theme.colors.alternatingBackground,
                marginBottom: '1px',
                padding: '8px',
                color: theme.colors.inactive
            }
        }
    },
    headline: {
        fontWeight: 'bold',
        lineHeight: theme.spacing.goldenUnit
    }
}));

export default function IptcMetadataInspector() {
    const classes = useStyles();
    const { selectedAsset } = useMediaUi();
    const { translate } = useIntl();

    return (
        <>
            {selectedAsset?.iptcProperties.length ? (
                <div className={classes.iptcData}>
                    <Headline type="h2" className={classes.headline}>
                        {translate('inspector.iptcMetadata', 'IPTC Metadata')}
                    </Headline>
                    <PropertyList>
                        {selectedAsset.iptcProperties.map(iptcProperty => (
                            <PropertyListItem
                                key={iptcProperty.propertyName}
                                label={iptcProperty.propertyName}
                                value={iptcProperty.value}
                            />
                        ))}
                    </PropertyList>
                </div>
            ) : null}
        </>
    );
}
