import React from "react";

const withClass = (Component, className) => {
    return (
        <div className={className}>
            <Component {...this.props} />
        </div>
    )
}

export default withClass