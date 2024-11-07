import { Link } from "react-router-dom";
import "../../global.scss"
import { TwitterTweetEmbed } from 'react-twitter-embed';

function Home() {

    return (
        <div className="Home">
            <div className="home-box">

                {/* <p className="qoute" >
                    Big or small, we love them all
                </p> */}
                <div className="welcome-box">
                    <p className="welcome">
                        Welcome
                    </p>
                </div>
                <div className="content-box">



                    <p className="home-content" >
                        Currently, we are working on helping stray animals in any way possible.<br /> We are in contact with some of the rescuers who rescue animals and takes care of them and then release them back safely.
                        <br />We are aiming to having our own clinic and shelter so we can serve animals the love they deserve.
                    </p>
                    <div className="home-buttons">
                        <div className="buttonH">
                            <p className="emerg" >Any Emergency?</p>
                            <a target="blank" href='tel:+919958613736' name="Call Us" className="call">Call Us</a>
                        </div>
                        <div className="buttonH">
                            <p className="emerg" >Wanna help us?</p>

                            <Link to="/donate">
                                <p className="call">Donate</p>
                            </Link>
                        </div>
                    </div>


                    <p className="home-content ma5">
                        <p className="medName" >Our Vaccination Drive</p>

                       
                        {/* Join our mission to keep stray dogs healthy and safe through our vaccination drive! We provide two essential vaccines: the 9-in-1 vaccine, which protects against parvo, distemper, and seven other common diseases, and the anti-rabies vaccine, which prevents rabies, a serious threat to both dogs and humans. If you know stray dogs in need of vaccination, please contact us, and we'll arrange for them to receive their shots. If you can't bring in strays but still want to help, consider making a donation. Your generosity will enable us to vaccinate more stray dogs and keep our community safe. Every bit of help makes a difference. Thank you for supporting our cause and helping protect our furry friends! */}

                        Join our mission to keep stray dogs healthy and safe through our vaccination drive! We are a group of dedicated students providing two essential vaccines: the 9-in-1 vaccine, which protects against parvo, distemper, and seven other common diseases, and the anti-rabies vaccine, which prevents rabies, a serious threat to both dogs and humans.
                        <br />
                        Since we rely on donations to fund this drive, your support is crucial. If you know stray dogs in need of vaccination, please contact us, and we'll arrange for them to receive their shots. If our funds run low, we may ask for a small fee to cover the vaccination costs.
                        <br />
                        If you can't bring in strays but still want to help, consider making a donation. Your generosity will enable us to vaccinate more stray dogs and keep our community safe.  Every bit of help makes a difference. Thank you for supporting our cause and helping protect our furry friends!
                    </p>

                

                    <p className="home-content">
                        You can find us on Google Maps, you can review us.
                        <br />
                        Please leave your true reviews.

                        <br /><br />
                        <a target="blank" className="review" href="https://g.page/r/CfRsoDYQrlvkEAI/review">Review Us</a>
                    </p>


                    {/* <p className="home-content" >
                        One thing we want to share with you,<br/>
                        Mostly we take help from Sonadi Charitable Trust. We want to add one thing that many people say that Sonadi is bad, they will kill your dog, they will not treat your dog well, etc. People say very bad things about Sonadi but let me tell you the truth, first of all they give their best for the treatment of dogs , secondly they don't ask you for money, We know there is infection in their shelter but infection is common in every shelter and at current they are taking care of more than 300 dogs. We always send our rescues to Sonadi for treatment and they always do their best. People call us and say "vhan mat bhejo, vhan maar dengee isko", please stop saying this, if you can't appreciate it then please don't spread hate about Sonadi.
                        <br />

                        If you are a student or you don't have enough money for the treatment then Sonadi will help you in the treatment.
                    </p> */}




                </div>
            </div>
        </div>
    )
}

export default Home;