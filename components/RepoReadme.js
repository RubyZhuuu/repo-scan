import React from 'react'
import ReactMarkdown from 'react-markdown'

const RepoReadme = ({ raw }) => {
    return (
        <div className = "readme" >
            <ReactMarkdown source = { raw }/>
        </div>
    )
}

export default RepoReadme