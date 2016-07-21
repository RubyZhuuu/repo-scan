import React from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames/bind'

let isImageTag = function(str) {
    return str && str.startsWith('<img')
}

let getOriginalUri = function(str) {
    if(!str) return ''

    const reg = /src=('|")(.*?)('|")/
    return reg.exec(str, reg)[2]
}

let getAbsoluteUri = function(uri, node) {
    let absoluteUri = uri
    if(uri && (uri.startsWith("/") || !uri.startsWith('http'))) {
        const i = node.repoInfo
        absoluteUri = `https://raw.githubusercontent.com/${i.owner}/${i.name}/${i.default_branch}`;
        absoluteUri += uri.startsWith("/") ? uri : "/" + uri
    }
    return absoluteUri
}

const RepoReadme = ({ raw }) => {
    let classes = classNames("mask", { "hide": !raw.isLoading })

    return (
        <div className = "readme" >
            <div className = { classes }>
                <div className = "loading"></div>
            </div>
            <div className="markdown-wrapper">
                <ReactMarkdown source = { raw.text } transformImageUri = { (uri) => {
                    return getAbsoluteUri(uri, raw)
                }} allowNode = { (node) => {
                    //UGLY CODE

                    if(node && node.type === "HtmlBlock" && isImageTag(node.props.literal)) {
                        const uri = getOriginalUri(node.props.literal)

                        node.props.literal = node.props.literal.replace(/src=('|")(.*?)('|")/, `src="${getAbsoluteUri(uri, raw)}"`)
                    }

                    return true
                }}/>
            </div>
        </div>
    )
}

export default RepoReadme