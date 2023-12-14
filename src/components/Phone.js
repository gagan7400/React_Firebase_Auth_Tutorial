import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Phone = () => {
    const [phone, setPhone] = useState("");
    const [otp, setotp] = useState("");
    const [verify, setverify] = useState(null);
    const sendotp = async (e) => {
        e.preventDefault()
        try {
            const recaptcha = new RecaptchaVerifier(auth, "rechaptach", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
            setverify(confirmation);
        } catch (error) {
            console.log("phone", error)
        }
    }
    let verifyotp = async (e) => {
        e.preventDefault()
        try {
            let data = await verify.confirm(otp)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className="w-50 m-auto p-5 ">
            <label htmlFor="ph"> phone number</label><br />

            <br />
            <PhoneInput country={'in'} id="i" value={phone} onChange={phone => setPhone("+" + phone)} />

            <br />
            <button type="button" className="btn  btn-primary" onClick={sendotp}> send otp </button>

            <br />
            <div id="rechaptach"></div>

            <br />
            <label htmlFor="otp"> otp </label><br />

            <br />
            <input type="number" id="id" value={otp} onChange={e => setotp(e.target.value)} />
            <br />
            <br />
            <button type="button" className="btn  btn-primary" onClick={verifyotp}> veryfiy otp  </button>
        </form>
    );
}

export default Phone;
