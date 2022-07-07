import React, { useEffect, useState } from "react";
import axios from "axios";
// import React from "react";

function MissionEditForm() {
    const [errors, setErrors] = useState(null);

    const [values, setValues] = useState({
        name: "",
        year: "",
    });

    const handleChange = (event) => {
        setValues((values) => {
            return {
                ...values,
                [event.target.name]: event.target.value,
                [event.target.year]: event.target.value,
            };
        });
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(values);

        const sendData = async () => {
            try {
                const response = await axios({
                    url: "/missions",
                    method: "post",
                    data: values,
                });
            } catch (error) {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
            }
        };
        sendData();
    };

    return (
        <>
            {errors &&
                Object.values(errors).map((error) => {
                    console.log(error);
                    return <p>{error[0]}</p>;
                })}

            <form action="" method="post" onSubmit={handleSumbit}>
                Type the name:{" "}
                <input
                    type="text"
                    name="name"
                    // value={name}
                    onChange={handleChange}
                />
                <br />
                <br />
                Type the name:{" "}
                <input
                    type="text"
                    name="year"
                    // value="Llalala"
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Sumbit</button>
            </form>
        </>
    );
}

export default MissionEditForm;
