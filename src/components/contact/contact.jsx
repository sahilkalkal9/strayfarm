import "../../global.scss"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import twitter from "./twitter.png"
import whatsapp from "./whatsapp.png"
import insta from "./instagram.png"
import phone from "./phone.png"


function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);



    // Please update the Access Key in the .env
    const apiKey = process.env.PUBLIC_ACCESS_KEY || "ba31adea-e9a9-4b4b-b21f-d343ed996b46";
    const [isSubmittingForm, setIsSubmitting] = useState(false);

    const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
            from_name: "SF",
            subject: "New Message",
        },

        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
            setIsSubmitting(false)
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setMessage(msg);
            setIsSubmitting(false)
        },
    });
    const handleFormSubmit = async () => {
        setIsSubmitting(true); // Set the state to indicate that submission is in progress
        await onSubmit(); // Trigger the form submission
    };
    const clearMsg = () => {
        setTimeout(() => {
            document.getElementById("sent-message-one").style.display = "none";
        }, 5000)
    }
    const clearMsgTwo = () => {
        setTimeout(() => {
            document.getElementById("sent-message-two").style.display = "none";
        }, 5000)
    }


    return (
        <div className="Home">
            <div className="home-box">

                {/* <p className="qoute" >
                    Happiness is a warm puppy
                </p> */}

                <div className="welcome-box">
                    <p className="welcome">
                        Contact Us
                    </p>
                </div>

                <p className="content-box cf">

                    <center>
                        <p className="home-content" >
                            Thank you for your interest in the Stray Farm, where we are dedicated to rescuing animals in need.<br /> Your support and inquiries are invaluable to our cause.<br /> Please feel free to reach out to us using the form below or connect with us through our social media channels.
                        </p>
                    </center>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="contact-form">


                        <div className="name-box">
                            <input
                                type="text"
                                placeholder="Full Name"
                                autoComplete="false"
                                required
                                className="contact-inputs namee"
                                {...register("name")}
                            />



                            <input
                                id="email_address"
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                autoComplete="false"
                                required
                                className="contact-inputs namee"
                                {...register("email")}
                            />
                        </div>



                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="contact-inputs textareaC"
                            {...register("message")}
                        />


                        <div className='buttonssss'>
                            <button
                                type="submit"
                                id="submitB"
                                className="hd"
                                disabled={isSubmitting}
                            >
                                {
                                    isSubmittingForm ? "Submitting" : " Submit"
                                }

                            </button>
                        </div>
                    </form>

                    {isSubmitSuccessful && isSuccess && (
                        <>
                            <p className="sub-search" id="sent-message-one">
                                Message sent successfully
                            </p>
                            {
                                clearMsg()

                            }

                        </>

                    )}
                    {isSubmitSuccessful && !isSuccess && (
                        <>
                            <p className="sub-search" id="sent-message-two">
                                Something went wrong. Please try again.
                            </p>
                            {
                                clearMsgTwo()

                            }
                        </>
                    )}

                    <p className="home-content" >OR</p>
                    <div className="socials">
                        <a href="tel:+919958613736" target="blank" className="si-box">
                            <img className="si" src={phone} />
                        </a>
                        <a href="https://instagram.com/strayfarm" target="blank" className="si-box">
                            <img className="si" src={insta} />
                        </a>
                        <a href="https://twitter.com/stray_farm" target="blank" className="si-box">
                            <img className="si" src={twitter} />
                        </a>
                        <a href="https://chat.whatsapp.com/BvZJk4O96sZDs72r62rH6y" target="blank" className="si-box">
                            <img className="si" src={whatsapp} />
                        </a>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default Contact;