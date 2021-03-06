import * as React from 'react';
import { useState } from 'react';

import { TextInput } from '@neos-project/react-ui-components';

import { createUseMediaUiStyles, useIntl, useMediaUi } from '../../core';

const useStyles = createUseMediaUiStyles({
    searchBox: {
        '& input': {
            width: '100%'
        }
    }
});

export default function SearchBox() {
    const classes = useStyles();
    const { searchTerm, setSearchTerm } = useMediaUi();
    const [searchValue, setSearchValue] = useState(searchTerm);
    const { translate } = useIntl();

    return (
        <div className={classes.searchBox}>
            <TextInput
                value={searchValue}
                type="search"
                onChange={value => setSearchValue(value)}
                onEnterKey={() => setSearchTerm(searchValue)}
                placeholder={translate('searchBox.placeholder', 'Search')}
            />
        </div>
    );
}
