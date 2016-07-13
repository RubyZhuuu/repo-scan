import { connect } from 'react-redux'
import { selectKeyword, fetchRepos } from '../actions'
import Keyword from '../components/Keyword'

const mapStateToProps = (state, ownProps) => {
    return {
        isCurrent: ownProps.keyword === state.keyword
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(selectKeyword(ownProps.keyword))
            dispatch(fetchRepos(ownProps.keyword))
        }
    }
}

const KeywordContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Keyword)

export default KeywordContainer