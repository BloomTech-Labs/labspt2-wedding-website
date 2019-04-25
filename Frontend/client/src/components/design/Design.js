import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const URL = 'http://localhost:3700'

class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteDesign: null,
      userUrl: '',
      story: '',
      proposalStory: '',
    }
  }

  handleSubmit = e => {
    console.log('submit Fire')
    e.preventDefault()
    axios
      .post(
        `http://localhost:3700/customSite/${this.props.user.id}`,
        this.state
      )
      .then(res => {
        console.log(res)
        this.setState({
          siteDesign: null,
          userUrl: '',
          story: '',
          proposalStory: '',
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    })
    console.log('input handled')
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <div>
            <Link to='/design1'>Design 1</Link>
          </div>
          <div>
            <Link to='/design2'>Design 2</Link>
          </div>
          <div>
            <Link to='/design3'>Design 3</Link>
          </div>
        </div>
<<<<<<< HEAD
        <button>Preview</button>
        <form>
          <input
            type='number'
            placeholder='Design'
            name='siteDesign'
            min='1'
            max='3'
            value={this.state.siteDesign}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Couple Story'
            name='story'
            value={this.state.story}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Proposal Story'
            name='proposalStory'
            value={this.state.proposalStory}
            onChange={this.inputHandler}
          />
          <input
            type='text'
            placeholder='Site Url'
            name='userUrl'
            value={this.state.userUrl}
            onChange={this.inputHandler}
          />
          <button onClick={this.handleSubmit}>Apply</button>
        </form>
=======
        <div>
          
        </div>
>>>>>>> 69257408c187ddaa25ae072ab5f3ab053b83d872
      </div>
    )
  }
}

export default Design

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// import Sidenav from '../sidenav/sidenav'

// export default class Design extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <Link to='/design1'>Design 1</Link>
//         </div>
//         <div>
//           <Link to='/design2'>Design 2</Link>
//         </div>
//         <div>
//           <Link to='/design3'>Design 3</Link>
//         </div>
//       </div>
//     )
//   }
// }
