import React from 'react';

const Text = ({
    fontSize,
    color,
    fontWeight,
    children,
    cssClass,
    otherStyles
}) => {

    const textStyle = {
        fontSize,
        color,
        fontWeight,
        ...otherStyles
    }

    return (
        <div style={textStyle} className={cssClass ?? ""}>
            {children}
        </div>
    );
}

export default Text;
