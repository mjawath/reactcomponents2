import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GridCellTemplateUI extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return<div>
            <span>{ this.props.path ? this.props.data[this.props.path]:this.props.data}</span>
        </div>
    }
}

GridCellTemplateUI.propTypes = {
    data: PropTypes.object.isRequired,
    path: PropTypes.string,
    onSelectEvent: PropTypes.func

}
export default GridCellTemplateUI;