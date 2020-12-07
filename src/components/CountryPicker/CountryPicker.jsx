import React, { useState , useEffect } from "react";
import { NativeSelect , FormControl } from "@material-ui/core"

import styles from "./CountryPicker.module.css"

import { fetchCountries } from "../../api"

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries , setFechedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFechedCountries(await fetchCountries())
        }

        fetchAPI();
    }, [setFechedCountries]);


    return(
        <FormControl styles={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value) }>
                <option value=''>Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
        )
} 

export default CountryPicker;