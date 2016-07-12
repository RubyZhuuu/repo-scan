import React from 'react'
import ReactMarkdown from 'react-markdown'

const RepoReadme = ({ raw }) => {
    return (
        <div
            style = {{
                float: 'left',
                width: '600px',
                marginLeft: '20px'
            }}
        >
            <ReactMarkdown source = { raw }/>
        </div>
    )
}

export default RepoReadme