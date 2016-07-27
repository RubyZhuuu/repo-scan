import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames/bind'
import styles from './repoReadme.css'
import { RAW_USER_CONTENT_ROOT } from '../utils/constant'

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
        absoluteUri = `${RAW_USER_CONTENT_ROOT}/${i.owner}/${i.name}/${i.default_branch}`;
        absoluteUri += uri.startsWith("/") ? uri : "/" + uri
    }
    return absoluteUri
}

class RepoReadme extends Component {
    componentDidUpdate() {
        if(this._node)
            this._node.scrollTop = 0
    }

    render() {
        const { raw } = this.props
        let classes = classNames(styles.mask, { [styles.hide]: !raw.isLoading })

        return (
            <div className = { styles.readme }>
                <div className = { classes }>
                    <div className = { styles.loading}></div>
                </div>
                <div className = { styles.wrapper } ref = { (c) => this._node = c }>
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
}


export default RepoReadme