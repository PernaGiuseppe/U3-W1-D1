import { Component } from 'react'
class Immagine extends Component {
  render() {
    return (
      <img className="margin" src={this.props.src} alt={this.props.alt}></img>
    )
  }
}
export default Immagine
