import React from 'react';
import { FC } from 'react';
import styles from './CountriesSelect.module.css';
import { countries } from '../../../utils/data';
import { Select } from './CountrySelector';

export const CountriesSelect: FC = () => {
  const [countrySelected, setCountrySeleted] = React.useState("");

  return (
    <div className={styles.wrapper}>
        <Select
          setPayloadSeleted={setCountrySeleted}
          payload={countrySelected}
          optionArr={countries}
          name='countries'
        />
    </div>
  );
};