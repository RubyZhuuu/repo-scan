import React from 'react'

const Keyword = ({ clickHandler, isCurrent, children, search }) => (
    <span
        onClick = { () => clickHandler(search) }
        style = {{
            margin: '10px',
            color: isCurrent ? '#55acee' : '#444444'
        }}
    >
         { children }
    </span>
)

export default Keyword