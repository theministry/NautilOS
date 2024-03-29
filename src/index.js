import { render } from 'preact';
import Finder from './finder/Finder';
import './data/app.css';

import base from './settings/themes/base';
import tempFinderMenu from './data/menus/tempFinderMenu'
import tempOSMenu from './data/menus/tempOSMenu'

// todo: make a dict of installed applications here

render(
    <Finder
        theme={base}
        finderMenu={tempFinderMenu}
        osMenu={tempOSMenu}
    />,
    document.body
);