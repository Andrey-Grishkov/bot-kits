import React from 'react';
import { FC } from 'react';
import styles from './CountriesSelect.module.scss';
import { countries } from '../../../utils/countries';
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