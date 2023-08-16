"use client"
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../componenets/Navbar";
import Link from "next/link";
import { deleteCustomer } from "../store/slice/dataSlice";
import styles from "../styles/veiwcust.module.css"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"

const Page = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.customer)
    const deleteCust = (id) => {
        dispatch(deleteCustomer(id))
    }
    if (state.length === 0) {
        return (
            <>
                <Navbar />
                <div className={styles.main}>
                    <div className={styles.sorry}>Sorry !!!</div>
                    <div className={styles.mess}>Nothing to Show Here</div>
                </div>
            </>
        )
    }
    else
        return (
            <>
                <Navbar />

                <div className={styles.cards}>
                    {state && state.map((elem, id) => {
                        return (
                            <div className={styles.card} key={id}>
                                <div className={styles.name}>{elem.name}</div>
                                <div className={styles.email}>{elem.email}</div>
                                <div className={styles.email}>{elem.phoneno}</div>
                                <Link  href={`/viewcustomer/${id}`}><button className={styles.editbtn}><AiFillEdit/></button></Link>
                                <button className={styles.delbtn} onClick={() => deleteCust(id)}><AiFillDelete/></button>
                            </div>
                        )
                    })}
                </div>

            </>
        )
}

export default Page;