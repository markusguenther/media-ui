import * as React from 'react';

import { useMediaUi, createUseMediaUiStyles, useIntl } from '../../core';
import { MediaUiTheme, GridComponentProps } from '../../interfaces';
import { ListViewItem } from './index';

const useStyles = createUseMediaUiStyles((theme: MediaUiTheme) => ({
    listView: {
        gridArea: props => props.gridPosition,
        overflow: 'scroll',
        '& table': {
            borderSpacing: '0 1px',
            width: '100%',
            '& th': {
                textAlign: 'left',
                lineHeight: theme.spacing.goldenUnit,
                padding: `0 ${theme.spacing.half}`,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                userSelect: 'none',
                '&:first-child, &:last-child': {
                    padding: 0
                }
            }
        }
    }
}));

export default function ListView(props: GridComponentProps) {
    const classes = useStyles({ ...props });
    const { assets, selectedAsset } = useMediaUi();
    const { translate } = useIntl();

    return (
        <section className={classes.listView}>
            {assets.length ? (
                <table>
                    <thead>
                        <tr>
                            <th />
                            <th>{translate('thumbnailView.header.name', 'Name')}</th>
                            <th>{translate('thumbnailView.header.lastModified', 'Last Modified')}</th>
                            <th>{translate('thumbnailView.header.fileSize', 'File size')}</th>
                            <th>{translate('thumbnailView.header.mediaType', 'Type')}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map(asset => (
                            <ListViewItem key={asset.id} asset={asset} isSelected={selectedAsset?.id === asset.id} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>{translate('assetList', 'No assets found')}</div>
            )}
        </section>
    );
}
