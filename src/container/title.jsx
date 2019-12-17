import TitleComponent from './../component/title.jsx';
import { connect } from 'react-redux';
import { updateTitle } from './../actions/title.jsx';

const mapStateToProps = (state) => ({
    title: state.title,
})

const mapDispatchToProps = {
    updateTitle, 
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleComponent);