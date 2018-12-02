import './index.css';
import Card from './Card'

export default () => (
  <div className="App">
    <header className="App-header">
      <img className="static-logo" src="/static/logo.png" alt="logo"/>
    </header>
    <div className="Grid">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
)
