import * as React from 'react';
import { useMemo } from 'react';
import { fromString as getMediaTypeFromString } from 'media-type';

import { Headline, SelectBox } from '@neos-project/react-ui-components';

import { createUseMediaUiStyles, useIntl, useMediaUi } from '../../core';
import { MediaUiTheme } from '../../interfaces';

const useStyles = createUseMediaUiStyles((theme: MediaUiTheme) => ({
    currentSelection: {
        marginBottom: theme.spacing.full
    },
    headline: {
        fontWeight: 'bold',
        lineHeight: theme.spacing.goldenUnit
    }
}));

export default function CurrentSelection() {
    const classes = useStyles();
    const { selectedAsset } = useMediaUi();
    const { translate } = useIntl();

    const assetIcon = useMemo(() => {
        if (selectedAsset?.file.mediaType) {
            const mainMediaType = getMediaTypeFromString(selectedAsset.file.mediaType);
            if (mainMediaType.type === 'audio') return 'file-audio';
            if (mainMediaType.type === 'video') return 'file-video';
            if (mainMediaType.type === 'image') return 'file-image';
        }
        return 'file';
    }, [selectedAsset?.file.mediaType]);

    return (
        <>
            {selectedAsset && (
                <div className={classes.currentSelection}>
                    <Headline type="h2" className={classes.headline}>
                        {translate('currentSelection.headline', 'Selected asset')}
                    </Headline>
                    <SelectBox
                        options={[{ value: selectedAsset.filename, label: selectedAsset.label, icon: assetIcon }]}
                        onValueChange={() => null}
                        value={selectedAsset.filename}
                    />
                </div>
            )}
        </>
    );
}
