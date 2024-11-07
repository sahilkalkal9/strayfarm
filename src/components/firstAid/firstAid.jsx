import "../../global.scss"
import meds from "./meds.json"
import eqps from "./equips.json"

function FirstAid() {
    return (
        <div className="Home">
            <div className="home-box">
                {/* <p className="qoute" >
                    Har Waqt Ki Taiyaari: Aapka First Aid Kit
                </p> */}
                <div className="welcome-box">
                    <p className="welcome">
                        First Aid
                    </p>
                </div>
                <div className="content-box">
                    <p className="home-content" >This guide provides a comprehensive list of essential medicines and equipment to include in a dog first aid kit, ensuring you are prepared to handle common canine medical emergencies.</p>


                    <p className="headFA">Medicines</p>

                    {
                        meds.map((md) => (
                            <div className="home-content">
                                <p className="medName">{md.index}. {md.name} </p>

                                <div className="med-dets">
                                    <p className="med-det">
                                        <b>Use : </b>
                                        {md.use}
                                    </p>
                                    <p className="med-det">
                                        <b>Dosage : </b>
                                        {md.dosage}
                                    </p>
                                    <p className="med-det">
                                        <b>Instructions : </b>
                                        {md.instructions}
                                    </p>
                                </div>
                            </div>
                        ))
                    }


                    <p className="headFA ma5">Equipments</p>
                    {
                        eqps.map((md) => (
                            <div className="home-content">
                                <p className="medName">{md.index}. {md.name} </p>

                                <div className="med-dets">
                                    <p className="med-det">
                                        <b>Use : </b>
                                        {md.use}
                                    </p>
                                    <p className="med-det">
                                        <b>Instructions : </b>
                                        {md.instructions}
                                    </p>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default FirstAid