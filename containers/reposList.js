import { connect } from 'react-redux'
import { receivedList, selectRepo } from '../actions'
import ReposList from '../components/ReposList'

function _formatUpdatedAt(updateTime) {
    const now = Date.now()
    const diff = now - (new Date(updateTime)).getTime()
    const diffDays = diff / (3600 * 1000 * 24) >> 0

    if(diffDays == 0)
        return "today"
    else if(diffDays == 1)
        return "yesterday"
    else
        return diffDays + "days ago"
}

function getItems(repos) {
    if(repos === undefined)
        return
    return repos.map(repo => {
        return {
            updated_at: _formatUpdatedAt(repo.updated_at),
            owner: repo.owner.login,
            full_name: repo.full_name,
            name: repo.name,
            description: repo.description,
            star_count: repo.stargazers_count
        }
    })
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.search.isLoading,
        items: getItems(state.repos.items) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRepoItemClick: (name, owner) => {
            dispatch(selectRepo(name, owner))
        }
    }
}

const ReposListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReposList)

export default ReposListContainer
