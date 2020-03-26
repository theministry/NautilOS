import styled, { css } from 'styled-components'

/*

    The box is the primitive object on which most other objects in NautilOS are built.
    It is a marginless flexbox with border-box styling.

    It accepts a couple of properties:
    - vertical: true/false sets the flex-direction to column (for veritcal layouts)
    - floating: true/false absolute styling and special shadow
    - border: "style"           sets all borders to theme.borders["style"], border: true sets all borders to theme.borders.default

        You can choose to set a single border using [t, r, b, l] like so:
        border-t: "style"       sets only top border to theme.borders["style"], and the rest to clear (true sets the border to default)

        Or combine any of those as follows:
        border-trbl: "style"    sets top, right, bottom, left border to "style", and the rest to clear (true sets the border to default)

*/

function returnBorder(props, pattern) {
    // check if there's a specific match for our current border property
    let match = Object.keys(props).filter(key => pattern.test(key))[0]
    if (typeof props[match] === "string") return props[match]
    if (props[match]) return "default"

    // check if there's a match for the generic border
    if (typeof props.border === "string") return props.border
    if (props.border) return "default"
    // return "none"
    return "none";
}


export const Box = styled.div`
    display: flex;
    flex-direction: ${({vertical}) => vertical ? "column" : "row"};
    flex-grow: ${({grow}) => grow ? 1 : 0 };

    margin: 0;
    min-width: 0;
    min-height: 0;

    width: ${({width}) => width ? width : "auto" };
    height: ${({height}) => height ? height : "auto" };

    cursor: ${({handle, button}) => handle ? "grab" : button ? "pointer" : "auto" };
    :active { cursor: ${({handle, button}) => handle ? "grabbing" : button ? "pointer" : "auto" }; }

    color: ${({theme}) => theme.colours.foreground };
    background-color: ${({theme}) => theme.colours.background };

    border-top: ${ props => props.theme.borders[returnBorder(props, /border-[a-z]*t[a-z]*/)]};
    border-left: ${ props => props.theme.borders[returnBorder(props, /border-[a-z]*l[a-z]*/)]};
    border-bottom: ${ props => props.theme.borders[returnBorder(props, /border-[a-z]*b[a-z]*/)]};
    border-right: ${ props => props.theme.borders[returnBorder(props, /border-[a-z]*r[a-z]*/)]};

    box-shadow: ${({theme}) => theme.shadows.default };
    ${({floating}) => floating && css`
        position: absolute;
        box-shadow: ${({theme}) => theme.shadows.floating };
    `}
`

export default Box