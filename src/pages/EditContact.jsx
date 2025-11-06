import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom"


export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()


    let [data, setData] = useState({
        name: "", email: "", phone: "", address: ""
    })

    const navigate = useNavigate()
    const { contact_id } = useParams()


    return (
        <div className='container'>
            <h2>Edit  Contact</h2>

            <h2>Edit Contact ID: {contact_id} </h2>

        </div>
    )
}
