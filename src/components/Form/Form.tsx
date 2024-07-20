import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from "../Form/Form.module.css"
import { Search } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
    fetchWeather: (search: Search) => Promise<void>

}

export default function Form({ fetchWeather }: FormProps) {

    const [search, setSearch] = useState<Search>({
        city: "",
        country: ""
    })
    const [alert, setAlert] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setSearch({
            ...search,
            [e.target.id]: e.target.value
        })


    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(search).includes("")) {
            setAlert("Todos los Campos son obligatorios")
            return
        }
        fetchWeather(search)

    }


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Pais:</label>
                <select
                    id="country"
                    name="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccionar País --</option>
                    {
                        countries.map((country) => (
                            <option
                                value={country.code}
                                key={country.code}
                            >{country.name}</option>
                        ))
                    }
                </select>

            </div>
            <input className={styles.submit} type="submit" value={"Consultar Clima"} />

        </form>
    )
}
