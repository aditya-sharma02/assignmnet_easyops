"use client"
import { useState } from "react";
import Navbar from "../componenets/Navbar";
import { useDispatch } from "react-redux";
import { addCustomer } from "../store/slice/dataSlice";
import styles from "../styles/addcust.module.css"
const Page = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        phoneno: ""
    })
    const dispatch = useDispatch();
    
    const handlechange = (e) => {
        setdata((preval) => {
            return {
                ...preval, [e.target.name]: e.target.value
            }
        })
    }
    const submit = (e) => {
        e.preventDefault();
        if (!data.email.includes("@") || data.email.length <= 5) {
            alert("Email Invalid !!!!")
        }
        else if (data.name.length < 5 || data.name.length == 0) {
            alert("Please Enter Full name")
        }
        else if (data.phoneno.length != 10) {
            alert("Phone Number must be of 10 digits")
        }
        else {
            dispatch(addCustomer(data));
            alert("Customer Added Successfully")
            setdata({
                name: "",
                email: "",
                phoneno: ""
            })
        }
    }
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <form>
                    <input className={styles.inp} type="text" placeholder="name" name="name" value={data.name} required onChange={handlechange}
                    />
                    <br />
                    <input className={styles.inp} type="email" placeholder="email" name="email" value={data.email} required onChange={handlechange}
                    />
                    <br />
                    <input className={styles.inp} type="text" placeholder="Phone Number" name="phoneno" required value={data.phoneno} onChange={handlechange}
                    />
                    <br />
                    <button className={styles.button} type="submit" onClick={submit}>Submit</button>
                </form>
            </div>
        </>
    )
}
export default Page;