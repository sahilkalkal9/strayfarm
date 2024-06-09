import { MemoryRouter } from "react-router-dom"
import "../../global.scss"
import chhutki from "./dog.webp"

function Memories() {
    return (
        <div className="Home">
            <div className="home-box">
                {/* <p className="qoute" >
                    Healing Hearts, Honoring Memories Forever
                </p> */}
                <div className="welcome-box">
                    <p className="welcome">Memories</p>
                </div>
                <div className="content-box">
                    <div className="cardsbox">
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                        <div className="photocard">
                            <img className="cardimg" src={chhutki} />
                            <p className="home-content">Chhutki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memories