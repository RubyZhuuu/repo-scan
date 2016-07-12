import { connect } from 'react-redux'
import receivedRepoReadme from '../actions'
import RepoReadme from '../components/RepoReadme'

const mapStateToProps = (state) => {
    return {
        raw: state.readme
    }
}

const RepoReadmeContainer = connect(
    mapStateToProps
)(RepoReadme)

export default RepoReadmeContainer