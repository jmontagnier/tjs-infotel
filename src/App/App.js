import React from 'react';
import PropTypes from 'prop-types';
import MyButton from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Title from './components/Title/Title';
import Editor from './components/Editor/Editor';
import Viewer from './components/Viewer/Viewer';
import MainView from './components/MainView/MainView';
import {Button as Button2} from 'react-bootstrap';
/*import REST_SRV_ADR from './config/config';
import {a} from './config/config';*/
const REST_SRV_ADR='http://localhost:5644';
const initialState={meme: {
    img: '',
    text: { x: 0, y: 0, value: '' },
  },
  imgs:['img1.jpg','img2.jpg'],
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount=()=>{
    fetch(REST_SRV_ADR+'/memes')
      .then(f=>f.json())
      .then(o=>this.setState({memes:o}))
    
    fetch(`${REST_SRV_ADR}/imgs`)
      .then(f=>f.json())
      .then(o=>this.setState({imgs:o}))
  }
  render() {
    return ( 
       <>
      {JSON.stringify(this.state)}
      <Button2 onClick={
        ()=>{
          this.setState({
            meme:{
              ...this.state.meme,
              text:{
                ...this.state.meme.text,
                value:'Hello'
              }
            }
          });
        }
      } >Ne pas clicker!!!</Button2>
      <div className="App">
        <Title />
        <Nav />
        <MainView>
          <Viewer meme={this.state.meme} />
          <Editor />
        </MainView>
        <Footer />
      </div>
      </>
    );
  }
}


App.propTypes = {

};


export default App;
