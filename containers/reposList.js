import { connect } from 'react-redux'
import { receivedList, selectRepo } from '../actions'
import ReposList from '../components/ReposList'

const mapStateToProps = (state) => {
    return {
        isLoading: state.search.isLoading,
        //items: getItems(state.repos.items) 
        items: state.repos.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRepoItemClick: (name, owner, github_url, default_branch) => {
            dispatch(selectRepo(name, owner, github_url, default_branch))
        }
    }
}

const ReposListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReposList)

export default ReposListContainer
