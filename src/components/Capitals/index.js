import {Component} from 'react'

import './index.css'

const statesAndCapitalsList = [
  {
    id: 'ANDHRA PRADESH',
    stateDisplayText: 'Andhra Pradesh',
    capital: 'Amaravathi',
    language: 'Telugu',
  },
  {
    id: 'ARUNACHAL PRADESH',
    stateDisplayText: 'Arunachal Pradesh',
    capital: 'Ita Nagar',
    language: 'English',
  },
  {
    id: 'ASSAM',
    stateDisplayText: 'Assam',
    capital: 'Dispur',
    language: 'Assamee',
  },
  {
    id: 'BIHAR',
    stateDisplayText: 'Bihar',
    capital: 'Patna',
    language: 'Hindi',
  },
  {
    id: 'UTTAR PRADESH',
    stateDisplayText: 'Uttar Pradesh',
    capital: 'Lucknow',
    language: 'Hindi',
  },
  {
    id: 'UTTARAKHAND',
    stateDisplayText: 'Uttarakhand',
    capital: 'Dehradun',
    language: 'Hindi',
  },
  {
    id: 'PUNJAB',
    stateDisplayText: 'Punjab',
    capital: 'Chandigarh',
    language: 'Punjabee',
  },
  {
    id: 'HIMACHAL PRADESH',
    stateDisplayText: 'Himachal Pradesh',
    capital: 'Shimla',
    language: 'Hindi',
  },
  {
    id: 'JAMMU & KASHMIR',
    stateDisplayText: 'Jammu & Kashmir',
    capital: 'Sri Nagar',
    language: 'Urdu',
  },
  {
    id: 'HARYANA',
    stateDisplayText: 'Haryana',
    capital: 'Chandigarh',
    language: 'Hindi',
  },
  {
    id: 'JARKHAND',
    stateDisplayText: 'Jarkhand',
    capital: 'Ranchi',
    language: 'Hindi',
  },
  {
    id: 'SIKKIM',
    stateDisplayText: 'Sikkim',
    capital: 'Gangtok',
    language: 'Nepali,English',
  },
  {
    id: 'TRIPURA',
    stateDisplayText: 'Tripura',
    capital: 'Agartala',
    language: 'Bengali',
  },
  {
    id: 'MANIPUR',
    stateDisplayText: 'Manipur',
    capital: 'Imphal',
    language: 'Manipuri',
  },
  {
    id: 'MIJORAM',
    stateDisplayText: 'Mijoram',
    capital: 'Aizwal',
    language: 'Mizo',
  },
  {
    id: 'MEGHALAYA',
    stateDisplayText: 'Meghalaya',
    capital: 'Shillong',
    language: 'Khasi',
  },
  {
    id: 'NAGALAND',
    stateDisplayText: 'Nagaland',
    capital: 'Kohima',
    language: 'English',
  },
  {
    id: 'WEST BENGAL',
    stateDisplayText: 'West Bengal',
    capital: 'Kolkata',
    language: 'Bengali & Hindi',
  },
  {
    id: 'MADHYA PRADESH',
    stateDisplayText: 'Madhya Pradesh',
    capital: 'Bhopal',
    language: 'Hindi',
  },
  {
    id: 'CHATTISGARH',
    stateDisplayText: 'Chattisgarh',
    capital: 'RaiPur',
    language: 'Hindi',
  },
  {
    id: 'RAJASTHAN',
    stateDisplayText: 'Rajasthan',
    capital: 'JaiPur',
    language: 'Rajasthani & Hindi',
  },
  {
    id: 'GUJARAT',
    stateDisplayText: 'Gujarat',
    capital: 'Ahmedabad',
    language: 'Gujarati',
  },
  {
    id: 'ODISHA',
    stateDisplayText: 'Odisha',
    capital: 'Bhubaneshwar',
    language: 'Oriya',
  },
  {
    id: 'TELANGANA',
    stateDisplayText: 'Telangana',
    capital: 'Hyderabad',
    language: 'Telugu,Urdu & Hindi',
  },
  {
    id: 'MAHARASHTRA',
    stateDisplayText: 'Maharashtra',
    capital: 'Mumbai',
    language: 'Marathi & Hindi',
  },
  {
    id: 'KARNATAKA',
    stateDisplayText: 'Karnataka',
    capital: 'Bengaluru',
    language: 'Kannada',
  },
  {
    id: 'TAMIL NADU',
    stateDisplayText: 'Tamil nadu',
    capital: 'Chennai',
    language: 'Tamil',
  },
  {
    id: 'KERALA',
    stateDisplayText: 'Kerala',
    capital: 'Trivendram',
    language: 'Malayalam',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeStateId: statesAndCapitalsList[0].id,
  }

  onChangeState = event => {
    this.setState({activeStateId: event.target.value})
  }

  getCapital = () => {
    const {activeStateId} = this.state

    const activeStateAndCapital = statesAndCapitalsList.find(
      eachState => eachState.id === activeStateId,
    )

    return activeStateAndCapital.capital
  }

  getLanguage = () => {
    const {activeStateId} = this.state

    const activeStateAndCapital = statesAndCapitalsList.find(
      eachState => eachState.id === activeStateId,
    )

    return activeStateAndCapital.language
  }

  render() {
    const {activeStateId} = this.state
    const capital = this.getCapital(activeStateId)
    const language = this.getLanguage(activeStateId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">States And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeState}
              value={activeStateId}
            >
              {statesAndCapitalsList.map(eachState => (
                <option
                  className="option"
                  key={eachState.id}
                  value={eachState.id}
                >
                  {eachState.stateDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is State of which Capital?</p>
          </div>
          <p className="country">{capital}</p>
          <p className="country">language : {language}</p>
          <div className="developer">
            <p className="developer-name">Developed By : Karthik Chary</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
