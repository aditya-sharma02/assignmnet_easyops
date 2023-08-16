"use client"
import Navbar from "@/app/componenets/Navbar";
import { updateCustomer } from "@/app/store/slice/dataSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/addcust.module.css"


const Page = ({ params }) => {
    const state = useSelector((state) => state.customer)
    F
    const [data, setdata] = useState({
        name: state[params.id].name,
        email: state[params.id].email,
        phoneno: state[params.id].phoneno
    })
    const dispatch = useDispatch();
    const { push } = useRouter();
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
            const id = params.id;
            dispatch(updateCustomer({ data, id }));
            setdata({
                name: "",
                email: "",
                phoneno: ""
            })
            push('/viewcustomer');
        }
    }
    const handlechange = (e) => {
        setdata((preval) => {
            return {
                ...preval, [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <Navbar />
            {/* <form>
                <input type="text" placeholder="name" name="name" value={data.name} onChange={handlechange}
                />
                <input type="email" placeholder="email" name="email" value={data.email} onChange={handlechange}
                />
                <input type="text" placeholder="Phone Number" name="phoneno" value={data.phoneno} onChange={handlechange}
                />
                <button type="submit" onClick={submit}>Submit</button>
            </form> */}

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