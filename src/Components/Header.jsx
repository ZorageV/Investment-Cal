import logo from '../assets/investment-calculator-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" />
                <h1>Investment Calculator</h1>
            </header>
        </div>
    )
}

export default Header