import Iframe from "react-iframe"
import "../../global.scss"
import qr1 from "./qr1s.png"
import qr2 from "./qr2s.png"
import qr3 from "./qr3s.png"
import qr4 from "./qr4s.png"
import { useState } from "react"


function Donate() {

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        amount: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault()

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const options = {
                key: 'rzp_live_3frBQsgHwPkf7c', // Replace with your Razorpay Key ID
                amount: formData.amount * 100, // amount in paisa
                currency: 'INR',
                name: 'Stray Farm',
                description: 'Donation amount',
                prefill: {
                    email: formData.email,
                    contact: formData.phone
                },
                handler: function (response) {
                    setFormData({
                        "amount": "",
                        "email": "",
                        "phone": ""
                    })
                    alert('Payment successful!');

                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        };
    };

    return (
        <div className="Home">
            <div className="home-box">
                {/* <p className="qoute" >
                    Dost kharide nahi, banaaye jaate hain
                </p> */}
                <div className="welcome-box">
                    <p className="welcome">
                        Donate Us
                    </p>
                </div>
                {/* <div className="content-box">
                    <p className="home-content" >
                        You can donate us to help us in this noble work. Even a little amount will be a great deal.
                    </p>

                    <div className="bank-dets">
                        <p className="home-content">
                            <b><u>Our Donation Page</u></b>
                        </p>

                        <div className="acc-dets rz">
                            <a className="rzplink" href="https://rzp.io/l/strayfarm9" target="blank">
                                <div className="rzp-box">
                                    <p className="rzp" >Donate now</p>
                                </div>
                            </a>
                            <p className="home-content">Click on the above button to donate us using Debit/Credit Card, allet, UPI or Netbanking and you will get a receipt for the donated amount</p>
                        </div>
                    </div>

                    <div className="img-box">
                        <p className="home-content">
                            <b> <u>QR Codes</u></b>
                        </p>

                        <div className="donate-images">
                            <img className="qr" src={qr1} />
                            <img className="qr" src={qr2} />
                            <img className="qr" src={qr3} />
                            <img className="qr" src={qr4} />
                        </div>
                    </div>

                    
                    <div className="bank-dets">
                        <p className="home-content">
                            <b><u>UPI Handles</u></b>
                        </p>

                        <div className="acc-dets">

                            <p className="home-content" >
                                GPay / Paytm / PhonePe - <span className="accno">+91 9958613736</span>
                            </p>

                            <div className="acc-dets">
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@paytm</span>
                                </p>
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@oksbi</span>
                                </p>
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@okicici</span>
                                </p>
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@okhdfcbank</span>
                                </p>
                            </div>



                        </div>
                    </div>


                    <div className="thank-box">
                        <p className="home-content" >

                            It is guaranteed that your donations will be used for animals like medicines, on street treatmnet, feeding stray animals, etc. You can trust us!
                            <br />


                        </p>
                        <p className="home-content thanks">Thank You💜</p>
                    </div>








                </div> */}

                {/* <div className="content-box">
                    <Iframe url="https://rzp.io/l/strayfarm9" className="ifrs"></Iframe>
                </div> */}

                <div className="content-box">
                    <p className="home-content" >
                        You can donate us to help us in this noble work. Even a little amount will be a great deal.
                    </p>

                    {/* <div className="bank-dets ">
                        <p className="medName">
                            <u>Debit Card/UPI/Wallet</u>
                        </p>
                        <form onSubmit={handlePayment} className=" acc-dets payment-sec">
                            <input className="contact-inputs " type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            <input className="contact-inputs " type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                            <input className="contact-inputs " type="number" name="amount" placeholder="Amount in Rupees" value={formData.amount} onChange={handleChange} required />
                            <input type="submit" className="hd" value="Donate Now" />
                        </form>
                    </div> */}


                    <div className="img-box ma5">
                        <p className="medName">
                            <b> <u>QR Codes</u></b>
                        </p>

                        <div className="donate-images">
                            <img className="qr" src={qr1} />
                            <img className="qr" src={qr2} />
                            <img className="qr" src={qr3} />
                            <img className="qr" src={qr4} />
                        </div>
                    </div>

                    <div className="bank-dets ma5">
                        <p className="medName">
                            <b><u>UPI Handles</u></b>
                        </p>

                        <div className="acc-dets">

                            <p className="home-content" >
                                GPay / Paytm / PhonePe - <span className="accno">+91 9958613736</span>
                            </p>

                            <div className="acc-dets">
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@paytm</span>
                                </p>
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@oksbi</span>
                                </p>
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@okicici</span>
                                </p>
                                <p className="home-content" >
                                    <span className="accno">strayfarm9@okhdfcbank</span>
                                </p>
                            </div>



                        </div>
                    </div>

                    <div className="thank-box">
                        <p className="home-content" >

                            It is guaranteed that your donations will be used for animals like medicines, on street treatmnet, feeding stray animals, etc. You can trust us!
                            <br />


                        </p>
                        <p className="home-content thanks">Thank You💜</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Donate;