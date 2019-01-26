import React from 'react';
import PropTypes from 'prop-types';

const dropZoneLayoutWrpStyle = {
  position: 'absolute',
  top: '0',
  left: '0'
};

export class DropperElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false
    };
  }

  onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ isDragging: false });
    this.props.onDrop(e);
  }

  renderDropLayout = () => {
    return (
      <div 
        className="dropZoneLayoutWrp" 
        style={ dropZoneLayoutWrpStyle }
        onDrop={ this.onDrop } 
        onDragLeave={ () => { this.setState({ isDragging: false }); } }>
        { this.props.dropZoneLayout }
      </div>
    );
  }

  render() {
    const { isActive } = this.props;

    if (!isActive) {
      return (
        <div className="noStyleDiv">
          { this.props.children }
        </div> 
      );
    }

    return (
      <div className="drop-zone-wrp"
        style={ { position: 'relative' } }
        onDragEnter={ () => { this.setState({ isDragging: true }); } }>
        { this.state.isDragging && this.renderDropLayout() }
        {this.props.children}
      </div>
    );
  }
}

DropperElement.defaultProps = {
  onDrop: () => {},
  isActive: true,
  dropZoneLayout: <div />
};

DropperElement.propTypes = {
  children: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onDrop: PropTypes.func,
  dropZoneLayout: PropTypes.element
};

export default DropperElement;
