import React, { Component,  } from 'react'
import RepoItem from './RepoItem'
import PageButtonContainer from '../containers/pageButton'
import classNames from 'classnames/bind'
import styles from './reposList.css'
import { $ } from '../utils/constant'

class ReposList extends Component {

    componentWillUpdate() {
        //UGLY CODE
        if(!$(`.${styles.repos_wrapper}`))
            return
        //$(`.${styles.repos_wrapper}`).scrollTop = 0
        console.log("repos list refresh")
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
                <div className = { styles.repos_wrapper }>
                    <ul>
                    {
                        items.map((item, index) =>
                            <RepoItem
                                key = { index }
                                { ...item }
                                onClick = { () => onRepoItemClick(item.name, item.owner, item.github_url, item.default_branch) }
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