import { connect } from 'react-redux'
import { receivedList } from '../actions'
import ReposList from '../components/ReposList'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const ReposListContainer = connect(
  mapStateToProps
)(ReposList)

export default ReposListContainer
