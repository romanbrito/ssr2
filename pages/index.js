import Link from 'next/link';
import './index.css';
import Card from './Card'

export default () => (
  <div className="App">
    <header className="App-header">
      <Link href="/page2"><img className="static-logo" src="/static/logo.png" alt="logo"/></Link>
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
