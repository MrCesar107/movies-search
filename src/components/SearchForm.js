import React, { Component } from 'react'

const KEY = "73e29494"

export class SearchForm extends Component {
  state = {
    inputMovie: '',
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${this.state.inputMovie}`).then(res => res.json())
      .then(results => {
        const { Search, totalResults } = results
        console.log({Search, totalResults})
        this.props.onResults(Search)
      })
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input className="input" onChange={this._handleChange} type="text" placeholder="Search" />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    )
  }
}
