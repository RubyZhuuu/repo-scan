import React, { Component } from 'react'
import RepoItem from './RepoItem'
import PageButtonContainer from '../containers/pageButton'
import classNames from 'classnames/bind'
import styles from './reposList.css'

class ReposList extends Component {
    constructor(props) {
        super(props)
        //this.handleRepoItemClick = this.handleRepoItemClick.bind(this)
    }

    componentWillUpdate() {
        console.log("repos list refresh")
    }

    componentDidUpdate() {
        if(this._node)
            this._node.scrollTop = 0
    }

    render() {
        const { items, onRepoItemClick, isLoading } = this.props
        let hide = classNames(styles.mask, { [styles.hide]: !isLoading })

        if(!items)
            return (
                <div className = { styles.repos_list }>
                    <div className = { styles.mask }>
                        <div className = { styles.loading }></div>
                    </div>
                </div>
            )

        return (
            <div className = { styles.repos_list }>
                <div className = { hide }>
                    <div className = { styles.loading }></div>
                </div>
                <div className = { styles.repos_wrapper } ref = { (c) => this._node = c }>
                    <ul>
                    {
                        items.map((item, index) =>
                            <RepoItem
                                key = { index }
                                { ...item }
                                onClick = { onRepoItemClick }
                            />
                        )
                    }
                    </ul>
                </div>
                <PageButtonContainer/>
            </div>
        )
    }
}

export default ReposList