import React from 'react'
import RepoItem from './RepoItem'
import PageButtonContainer from '../containers/pageButton'
import classNames from 'classnames/bind'
import styles from './reposList.css'

const ReposList = ({ items, onRepoItemClick, isLoading }) => {
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

export default ReposList