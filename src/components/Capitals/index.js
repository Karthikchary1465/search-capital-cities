import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
  {
    id: 'Moscow',
    capitalDisplayText: 'Moscow',
    country: 'Russia',
  },
  {
    id: 'Brasilia',
    capitalDisplayText: 'Brasilia',
    country: 'Brazil',
  },
  {
    id: 'Mexico City',
    capitalDisplayText: 'Mexico City',
    country: 'Mexico',
  },
  {
    id: 'Ottawa',
    capitalDisplayText: 'Ottawa',
    country: 'Canada',
  },
  {
    id: 'Washington D.C.',
    capitalDisplayText: 'Washimgton D.C.',
    country: 'United States of America',
  },
  {
    id: 'Kiev',
    capitalDisplayText: 'Kiev',
    country: 'Ukraine',
  },
  {
    id: 'Buenos Aires',
    capitalDisplayText: 'Buenos Aires',
    country: 'Argentina',
  },
  {
    id: 'Bogota',
    capitalDisplayText: 'Bogota',
    country: 'Colombia',
  },
  {
    id: 'Caracas',
    capitalDisplayText: 'Caracas',
    country: 'Venezuela',
  },
  {
    id: 'Warsaw',
    capitalDisplayText: 'Warsaw',
    country: 'Poland',
  },
  {
    id: 'Berlin',
    capitalDisplayText: 'Berlin',
    country: 'Germany',
  },
  {
    id: 'Amsterdam',
    capitalDisplayText: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    id: 'Copenhagen',
    capitalDisplayText: 'Copenhagen',
    country: 'Denmark',
  },
  {
    id: 'Stockholm',
    capitalDisplayText: 'Stockholm',
    country: 'Sweden',
  },
  {
    id: 'Madrid',
    capitalDisplayText: 'Madrid',
    country: 'Spain',
  },
  {
    id: 'Brussels',
    capitalDisplayText: 'Brussels',
    country: 'Belgium',
  },
  {
    id: 'Vienna',
    capitalDisplayText: 'Vienna',
    country: 'Austria',
  },
  {
    id: 'Rome',
    capitalDisplayText: 'Rome',
    country: 'Italy',
  },
  {
    id: 'Bern',
    capitalDisplayText: 'Bern',
    country: 'Switzerland',
  },
  {
    id: 'Lisbon',
    capitalDisplayText: 'Lisbon',
    country: 'Portugal',
  },
  {
    id: 'Jerusalem',
    capitalDisplayText: 'Jerusalem',
    country: 'Israel',
  },
  {
    id: 'Tbilisi',
    capitalDisplayText: 'Tbilisi',
    country: 'Georgia',
  },
  {
    id: 'Canberra',
    capitalDisplayText: 'Canberra',
    country: 'Australia',
  },
  {
    id: 'Wellington',
    capitalDisplayText: 'Wellington',
    country: 'New zealand',
  },
  {
    id: 'Seoul',
    capitalDisplayText: 'Seoul',
    country: 'South Korea',
  },
  {
    id: 'Tokyo',
    capitalDisplayText: 'Tokyo',
    country: 'Japan',
  },
  {
    id: 'Santiago',
    capitalDisplayText: 'Santiago',
    country: 'Chile',
  },
  {
    id: 'Lima',
    capitalDisplayText: 'Lima',
    country: 'Peru',
  },
  {
    id: 'La Paz',
    capitalDisplayText: 'La Paz',
    country: 'Bolivia',
  },
  {
    id: 'Ankara',
    capitalDisplayText: 'Ankara',
    country: 'Turkey',
  },
  {
    id: 'Minsk',
    capitalDisplayText: 'Minsk',
    country: 'Belarus',
  },
  {
    id: 'Belgrade',
    capitalDisplayText: 'Belgrade',
    country: 'Serbia',
  },
  {
    id: 'Athens',
    capitalDisplayText: 'Athens',
    country: 'Greece',
  },
  {
    id: 'Kuala Lumpur',
    capitalDisplayText: 'Kuala Lumpur',
    country: 'Malaysia',
  },
  {
    id: 'Singapore',
    capitalDisplayText: 'Singapore',
    country: 'Singapore',
  },
  {
    id: 'Manila',
    capitalDisplayText: 'Manila',
    country: 'Philippines',
  },
  {
    id: 'Jakarta',
    capitalDisplayText: 'Jakarta',
    country: 'Indonesia',
  },
  {
    id: 'Tehran',
    capitalDisplayText: 'Tehran',
    country: 'Iran',
  },
  {
    id: 'Abu Dhabi',
    capitalDisplayText: 'Abu Dhabi',
    country: 'United Arab Emirates',
  },
  {
    id: 'Riyadh',
    capitalDisplayText: 'Riyadh',
    country: 'Saudi Arabia',
  },
  {
    id: 'Luxembourg',
    capitalDisplayText: 'Luxembourg',
    country: 'Luxembourg',
  },
  {
    id: 'Dublin',
    capitalDisplayText: 'Dublin',
    country: 'Ireland',
  },
  {
    id: 'Taipei',
    capitalDisplayText: 'Taipei',
    country: 'Taiwan',
  },
  {
    id: 'Bucharest',
    capitalDisplayText: 'Bucharest',
    country: 'Romania',
  },
  {
    id: 'Quito',
    capitalDisplayText: 'Quito',
    country: 'Ecuador',
  },
  {
    id: 'Havana',
    capitalDisplayText: 'Havana',
    country: 'Cuba',
  },
  {
    id: 'Beijing',
    capitalDisplayText: 'Beijing',
    country: 'China',
  },
  {
    id: 'Nur Sultan',
    capitalDisplayText: 'Nur Sultan',
    country: 'Kazakhsthan',
  },
  {
    id: 'Manama',
    capitalDisplayText: 'Manama',
    country: 'Bahrain',
  },
  {
    id: 'Doha',
    capitalDisplayText: 'Doha',
    country: 'Qatar',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is Capital of which Country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
