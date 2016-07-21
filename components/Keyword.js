import React from 'react'
import classNames from 'classnames/bind'

const Keyword = ({ clickHandler, isCurrent, children, search }) => {
    let classes =classNames("keyword", { current: isCurrent })

    return (
        <span
            onClick = { () => clickHandler(search) }
            className = { classes }
        >
             { children }
        </span>
    )
}



export default Keyword