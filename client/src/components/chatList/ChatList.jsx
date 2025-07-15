import { Link } from 'react-router'
import './chatList.css'

const chatList = () => {
    return (
        <div className="chatList">
            <span className="title">DASHBOARD</span>
            <Link to = "/dashboard">Create a new Chat</Link>
            <Link to = "/">Contact</Link>
            <hr/>
            <div className="list">
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 1</Link>
            </div>
            <hr/>
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className="texts">
                    <span>Upgrade to Lama AI Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default chatList