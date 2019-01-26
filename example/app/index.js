import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import DropperElement from 'react-dropper-element';
// var tD =  DropperElement;

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      draggedElements: []
    };
  }

  onLoadImg = (e) => {
    this.setState({ image: e.target.result });
  }

  onDrop = (e) => {
    const { files, items } = e.dataTransfer;

    if (files.length) {
      this.readFile(files[0]);
    }
    if (items.length && items[0].type === 'draganddropelemnt') {
      this.setState({
        draggedElements: [
          ...this.state.draggedElements, 
          <div style={ {
            backgroundColor: 'green',
            height: '40px',
            width: '40px',
            border: 'solid 1px #000000'
            } }/>
        ]
      });
    }
  };
  
  dropZoneLayout = () => (
    <div style={ {
      height: '500px',
      width: '500px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    } }>
      <div className="dropZoneLayoutContent">
        <div className="dropZoneLayoutIcon" />
        <div className="dropZoneLayoutText">
          Drop your photos here to upload
        </div>
      </div> 
    </div>
  );

  readFile = (file) => {
    const reader = new FileReader();

    reader.onload = this.onLoadImg;
    reader.readAsDataURL(file);
  }


  render() {
    return (
      <div style={ { height: '1800px', width: '100%' } }>
        <div style={ { color: '#0000000' } } >REACT-DROPPER</div>
        <br />
        <br />
        <div style={ { display: 'flex' } }>
          <DropperElement 
            isActive 
            dropZoneLayout={ this.dropZoneLayout() }
            onDrop={ this.onDrop }>
            <div style={ {
              height: '200px',
              width: '300px',
              border: 'solid 1px #000000',
              marginRight: '100px'
            } }>
              {
                !!(this.state.draggedElements.length) &&
                this.state.draggedElements.map((item) => (
                  item
                ))
              }
              <div className="noPhotosIcon"/>
              <div>Drag and drop a Photo</div>
              <div> or </div>
              <div> the green element here</div>
            </div>
          </DropperElement>
          {
            !!(this.state.image) && 
            <img src={ this.state.image } width="200px" height="200px" alt="imageDisplay"/>
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        <div 
          onDragStart={
            (e) => {
              e.dataTransfer.setData('draganddropelemnt', e.target);
            }
          }
          draggable
          style={ {
            backgroundColor: 'green',
            height: '100px',
            width: '100px',
            border: 'solid 1px #000000'
          } }>
          DRAG ME
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
