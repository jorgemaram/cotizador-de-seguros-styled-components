import React from 'react';
import PropTypes from 'prop-types'

import styled from '@emotion/styled';
import { mayuscula} from '../Helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color:#00838F;
    color: #FFF;
    margin-top: 1rem;
`



const Resumen = ({ datos }) => {

    //extraer datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {mayuscula(marca)}</li>
                <li>Plan: {mayuscula(plan)}</li>
                <li>Año del coche: {year}</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;