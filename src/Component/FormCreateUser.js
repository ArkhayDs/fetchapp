import { useState } from "react";
import useForm from "../Hook/useForm";

export default function FormCreateUser() {

    const { handleChange, values, handleSubmit } = useForm();

    return (
        <>
            <h1 className="text-center">Register</h1>
            <form action="" className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange}
                    ></input>
                </div>
                <button className="btn btn-primary">Register</button>
                <button className="btn btn-warning">Login instead ?</button>
            </form>



            <h1 className="text-center">Post article</h1>
            <form action="" className="container">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <input
                        type="text"
                        name="content"
                        className="form-control"
                        value={values.content}
                        onChange={handleChange}
                    ></input>
                </div>
                <button className="btn btn-primary">Add Article</button>
            </form>
        </>
    );
}