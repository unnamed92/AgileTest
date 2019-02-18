import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeStyle } from '../store/actions/changeStyle.action';
import { changeWeight } from '../store/actions/changeWeight.action';
import { changeUnderline } from '../store/actions/changeUnderline.action';
import  ControlPanel  from './ControlPanel';

const mapStateToProps = (state) => ({
    style: state.style,
    weight: state.weight,
    underline: state.underline,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    changeStyle,
    changeUnderline,
    changeWeight
  }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(ControlPanel);
