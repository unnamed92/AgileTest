import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeStyle } from '../store/actions/changeStyle.action'
import  FileZone  from './FileZone';

const mapStateToProps = (state) => ({
    style: state.style,
    weight: state.weight,
    underline: state.underline,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    changeStyle
  }, dispatch);

export default connect( 
    mapStateToProps,
     mapDispatchToProps)(FileZone);
