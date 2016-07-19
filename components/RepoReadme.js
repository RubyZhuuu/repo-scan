import React from 'react'
import ReactMarkdown from 'react-markdown'

const RepoReadme = ({ raw }) => {
    let hide = raw.isLoading ? "mask" : "mask hide"
    return (
        <div className = "readme" >
            <div className = { hide }>
                <div className = "loading"></div>
            </div>
            <div className="markdownWrapper">
                <ReactMarkdown source = { raw.text }/>
            </div>
        </div>
    )
}

export default RepoReadme