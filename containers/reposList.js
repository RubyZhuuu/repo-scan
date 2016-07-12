import { connect } from 'react-redux'
import { receivedList, selectRepo } from '../actions'
import ReposList from '../components/ReposList'

const mapStateToProps = (state) => {
  return {
    items: state.repos.items
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
