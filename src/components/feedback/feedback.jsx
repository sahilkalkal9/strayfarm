import { Link } from "react-router-dom";
import "../../global.scss"
import { useState } from "react";
import user from "./user.png"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import del from "./delete.png";



firebase.initializeApp({
    apiKey: "AIzaSyDf6dWO1MwWW54sYmtDSp37oiLgXCVN8kY",
    authDomain: "strayfarm-7a2d3.firebaseapp.com",
    projectId: "strayfarm-7a2d3",
    storageBucket: "strayfarm-7a2d3.appspot.com",
    messagingSenderId: "174853494319",
    appId: "1:174853494319:web:32cf7addd40bc12aabd8da"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function Feedback() {

    const reviewsRef = firestore.collection("reviews").orderBy("createdAt", "desc")
    const [reviews] = useCollectionData(reviewsRef)

    const docId = firestore.collection("reviews").doc().id;
    const [orev, setOrev] = useState(true)
    const [rating, setRating] = useState(0);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    const [clientIp, setClientIp] = useState("")

    console.log(rating)

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        // You can now send the selectedRating value to your server or perform any other action.
        console.log('Selected stars:', selectedRating);
    };

    const checkIp = async () => {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        await setClientIp(data.ip)

    }

    checkIp()

    const saveReview = async (e) => {
        e.preventDefault();




        document.getElementById("submitBR").innerHTML = "Submitting.."

        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const clientIp = data.ip;

        await firestore.collection("reviews").doc(docId).set({
            content: content,
            id: docId,
            name: name,
            ip: clientIp,
            email: email,
            rating: rating,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        document.getElementById("submitBR").innerHTML = "Submit"
        setName("")
        setEmail("")
        setContent("")
        setRating(0)
    }

    const deleteRev = (x) => {
        firestore.collection("reviews").doc(x).delete()
    }

    return (
        <div className="Home">
            <div className="home-box">

                {/* <p className="qoute" >
                    Animals are a divine gift of God
                </p> */}
                <div className="welcome-box">
                    <p className="welcome">
                        Review Us
                    </p>
                </div>
                <div className="content-box">
                    <center>
                        <p className="home-content">
                            Please leave your true reviews below, your reviews means a lot for us.

                            <div className="star-box">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${star <= rating ? 'selected' : ''}`}
                                        onClick={() => handleStarClick(star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <form onSubmit={saveReview} className="contact-form">


                                <div className="name-box">
                                    <input
                                        type="text"
                                        placeholder="Full Name"

                                        required
                                        name="name"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        className="contact-inputs namee"

                                    />



                                    <input
                                        id="email_address"
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={email}
                                        autoComplete="false"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        required
                                        className="contact-inputs namee"

                                    />
                                </div>



                                <textarea
                                    name="message"
                                    placeholder="Write review"
                                    required
                                    value={content}
                                    onChange={(e) => { setContent(e.target.value) }}
                                    className="contact-inputs textareaC"

                                />


                                <div className='buttonssss'>
                                    <button
                                        type="submit"
                                        id="submitBR"
                                        className="hd"

                                    >
                                        Submit

                                    </button>
                                </div>
                            </form>
                        </p>

                        <br /><br/>


                        <p className="welcome">
                            Reviews
                        </p>
                        <div className="cats">
                            <p className={`home-content seld ${orev == true ? 'selR' : ''}`} onClick={() => { setOrev(true) }} >All</p>
                            <p className={`home-content seld ${orev == false ? 'selR' : ''}`} onClick={() => { setOrev(false) }}>Yours</p>
                        </div>
                    </center>


                    {
                        orev
                            ? (
                                <div className="reviews-box">

                                    {
                                        reviews == 0
                                            ? <center><p className="home-content">No reviews found</p></center>
                                            : (
                                                reviews && reviews.map((r) => (
                                                    <div className="revieww">
                                                        <div className="rname-section">
                                                            {/* <img className="userP" src={user} /> */}
                                                            <div className="date-box">
                                                                <p className="home-content">{r.name}</p>
                                                                <p className="date" >
                                                                    {r.createdAt &&
                                                                        new Date(r.createdAt.toDate()).toLocaleDateString('en-GB')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="star-boxR">
                                                            {[1, 2, 3, 4, 5].map((str) => (
                                                                <span
                                                                    key={str}
                                                                    className={`starR ${str <= parseInt(r.rating) ? 'selected' : ''}`}

                                                                >
                                                                    ★
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <p className="home-content rc" >
                                                            {r.content}
                                                        </p>
                                                    </div>
                                                ))
                                            )
                                    }





                                </div>
                            )
                            : (
                                <div className="reviews-box">

                                    {
                                        reviews == 0
                                            ? <center><p className="home-content">No reviews found</p></center>
                                            : (
                                                reviews && reviews.map((r) => (
                                                    r.ip == clientIp
                                                        ? (
                                                            <div className="revieww">
                                                                <div className="rname-section">
                                                                    {/* <img className="userP" src={user} /> */}
                                                                    <div className="date-box">
                                                                        <p className="home-content">{r.name}</p>
                                                                        <p className="date" >
                                                                            {r.createdAt &&
                                                                                new Date(r.createdAt.toDate()).toLocaleDateString('en-GB')}
                                                                        </p>
                                                                    </div>
                                                                    <img className="del" src={del} onClick={() => { deleteRev(r.id) }} />
                                                                </div>
                                                                <div className="star-boxR">
                                                                    {[1, 2, 3, 4, 5].map((str) => (
                                                                        <span
                                                                            key={str}
                                                                            className={`starR ${str <= parseInt(r.rating) ? 'selected' : ''}`}

                                                                        >
                                                                            ★
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                <p className="home-content rc" >
                                                                    {r.content}
                                                                </p>
                                                            </div>
                                                        )
                                                        : null
                                                ))
                                            )
                                    }





                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default Feedback;