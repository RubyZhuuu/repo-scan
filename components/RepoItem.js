import React, { Component } from 'react'
import styles from './repoItem.css'

class RepoItem extends Component {
    constructor(props) {
        super(props)
        this.handleRepoItemClick = this.handleRepoItemClick.bind(this)
    }

    handleRepoItemClick() {
        const p = this.props
        console.log("an item clicked")
        this.props.onClick(p.name, p.owner, p.github_url, p.default_branch)
    }

    render() {
        const { name, description, updated_at, owner, star_count, onClick, github_url, default_branch } = this.props

        return (
            <li onClick = { this.handleRepoItemClick } className = { styles.item }>
                <p>
                    <span className = { styles.name }>
                        { name }
                    </span>
                    { ` updated at ${updated_at} by ${owner}`}
                </p>
                <p className = { styles.res }>
                    { description }
                </p>
                <p>
                    <span className = { styles.star }>{ `${star_count} stars` }</span>
                </p>
            </li>
        )
    }
}

export default RepoItem