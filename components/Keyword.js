import React from 'react'

const Keyword = ({ onClick, isCurrent, children }) => (
    <span
        onClick = { onClick }
        style = {{
            margin: '10px',
            color: isCurrent ? '#55acee' : '#444444'
        }}
    >
         { children }
    </span>
)

export default Keyword