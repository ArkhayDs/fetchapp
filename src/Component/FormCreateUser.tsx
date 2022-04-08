import { useState } from "react";
import useForm from '../Hook/useForm'

export default function FormCreateUser() {

    const { handleChange, values, handleSubmit } = useForm();

    return (
        <>
            <h1>Please Login</h1>

            <form action="" className="container">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"></label>
                    <input type="text" className="form-control" value={values.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"></label>
                    <input type="text" name="password" className="form-control" value={values.password} onChange={handleChange} />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </>
    )
}