import React from 'react'

const Loader = ({mode}) => {
    return (
        <div className={(mode === "daytime") ? ("sun") : ("moon")}>
            <div className={(mode === "daytime") ?  ("") : ("star-1")}></div>
            <div className={(mode === "daytime") ?  ("") : ("star-2")}></div>
            <div className={(mode === "daytime") ?  ("") : ("star-3")}></div>
        </div>
    )
}

export default Loader