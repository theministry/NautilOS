import { toChildArray } from 'preact'
import styled from 'styled-components';
import { Base, borderBuilder } from '../helpers';

import DropDownItem from './DropDownItem'

/*
    Drop Downs are spawned from Menu Items.
*/

const StyledDropDown = styled(Base)`
    position: absolute;
    padding: 8px 0 8px 0;
    margin-left: -8px;
    top: ${({theme}) => theme.sizes.menuBar };
    ${borderBuilder("rlb")}
`

const DropDown = ({
    items,
    actionHandler,
    children,
    ...props
}) => {
    return(
        <StyledDropDown {...props}>
            { items && items.map(item => <DropDownItem item={item} actionHandler={actionHandler} {...props} />) }
            { children && toChildArray(children).map(item => <DropDownItem item={item} actionHandler={actionHandler} {...props} />) }
        </StyledDropDown>
    )
}

export default DropDown