import React , { Component } from 'react';

class DogDesc extends Component {
  render(){
    let type = null;
    switch(this.props.breed){
        case('beagle'):
          type = <p>The beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare (beagling). With a great sense of smell and superior tracking instinct, the beagle is employed as detection dog for prohibited agricultural imports and foodstuffs in quarantine around the world. The beagle is intelligent but single-minded. It is a popular pet due to its size, good temper, and lack of inherited health problems.</p>;
          break;
        case('hound'):
          type = (
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
          break;
        case('terrier'):
          type =   <p>A terrier is a dog of any one of many breeds or landraces of the terrier type, which are typically small, wiry and fearless.Terrier breeds vary greatly in size from just 1 kg (2 lb) to over 32 kg (70 lb) and are usually categorized by size or function. There are five different groups, with each group having several different breeds.</p>;
          break;
        default:
          type = <h1>Which friend are you looking for?</h1>;
    }


    return (
      <div className='descContainer'>{type}</div>
    );
  }
}

export default DogDesc;
