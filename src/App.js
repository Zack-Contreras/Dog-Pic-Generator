import React, { Component } from 'react';
import './App.css';
import DogDesc from './component/DogDesc.js';
import {Button} from 'react-mdl';
import Form from './component/Form.js';

//import axios from 'axios';

class App extends Component {
  state = {
    breed: null,
    dogPic: 'https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_400x400.jpg'
  }


//  componentDidMount() {
  //  axios.get(`https://dog.ceo/api/breed/beagle/images/random`).then(res=>{
  //    this.setState({dogPic: res.data.message})
  //  })
//  }

  breedHandler = async(e) => {
    e.preventDefault();
    const breed = e.target.elements.breed.value;
    const api_call = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await api_call.json();
    console.log(data);
    if (data.status === 'success') {
        this.setState({dogPic: data.message, breed: breed });
        console.log(this.state)
    } else if (data.status === 'error') {
      this.setState({dogPic: 'https://mytebox.com/Photos/p17/funny-puppy.jpg', breed: 'Try a different name'})
      //this.setState({dogPic: 'https://dogbreedcartoon.com/wp-content/uploads/2016/12/Estrela-Mountain-Dog-Linear.png'})
    }

  }
/*
  toggleDesc = () => {
    if (this.state.breed === 'beagle') {
      return (
        <p>The beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare (beagling). With a great sense of smell and superior tracking instinct, the beagle is employed as detection dog for prohibited agricultural imports and foodstuffs in quarantine around the world. The beagle is intelligent but single-minded. It is a popular pet due to its size, good temper, and lack of inherited health problems.</p>
      );
    }else if(this.state.breed === 'terrier'){
      return (
        <p>A terrier is a dog of any one of many breeds or landraces of the terrier type, which are typically small, wiry and fearless.Terrier breeds vary greatly in size from just 1 kg (2 lb) to over 32 kg (70 lb) and are usually categorized by size or function. There are five different groups, with each group having several different breeds.</p>
      );
    } else if(this.state.breed === 'hound'){
      return (
        <div>
          <p>Hounds can be contrasted with gundogs, that assist hunters by identifying the location of prey and/or recovering shot quarry. The hound breeds were the first hunting dogs. They have either a powerful sense of smell or great speed.</p>
          <p>There are three types of hound, with several breeds within each type:</p>
          <ul>
            <li>Sighthounds (also called gazehounds), that follow prey predominantly by speed, keeping it in sight. These dogs are fast and assist hunters in catching game—fox, hare, deer and elk.</li>
            <li>Scenthounds, that follow prey or others (like missing people) by tracking its scent. These dogs have endurance but are not fast runners.</li>
            <li>The remaining breeds of hound follow their prey using both sight and scent; they are difficult to classify as they are neither sighthound nor scent hound.</li>
          </ul>
        </div>
      );
    } else {
      return(
        <h1>Which friend are you looking for?</h1>
      );
    }

  }
*/
  //  var token = "8023416b-9cf8-4aa8-90a3-ebb85a02e87d";
  //  axios.defaults.headers.common['Authorization'] = "8023416b-9cf8-4aa8-90a3-ebb85a02e87d" ;
  //  var headers = {
    //  'Access-Control-Allow-Origin': 'http://localhost:3000/?gamertag=',
    //  'Access-Control-Allow-Methods': 'GET',
    //  'Access-Control-Allow-Headers': "8023416b-9cf8-4aa8-90a3-ebb85a02e87d"
  //  }
  //  axios.get('http://cod-api.tracker.gg/v1/standard/bo4/profile/1/xTHKxDarkEcho',
   //{headers: headers} ).then(res => {
  //    console.log(res);
  //  });

//  }


  shouldComponentUpdate() {
    return true;
}


  render() {
    return (
      <div className="App">
      <img className='dogpic' src={this.state.dogPic} alt='random dog pic' />
        <p>If searching for specific breed use dash -- Example: retriever-curly || terrier-yorkshire</p>
        <Form breedHandler={this.breedHandler} />
        <h1 className='txtChange'>{this.state.breed}</h1>
        {/*{this.toggleDesc()}*/}
        <DogDesc breed={this.state.breed} />
      </div>
    );
  }
}

export default App;
