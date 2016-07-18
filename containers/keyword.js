import { connect } from 'react-redux'
import { selectKeyword, fetchRepos } from '../actions'
import Keyword from '../components/Keyword'

const mapStateToProps = (state, ownProps) => {
    return {
        isCurrent: ownProps.keyword === state.search.keyword,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickHandler: (search) => {
            console.log(search)
            dispatch(selectKeyword(ownProps.keyword))
            dispatch(fetchRepos(ownProps.keyword, ownProps.pageNum))
        }
    }
}

const KeywordContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Keyword)

export default KeywordContainer