import React from 'react';
import styled from '@emotion/styled'

const Campo = styled.div`
 display:flex;
 margin-bottom: 1rem;
 align-items: center;
`;




const Formulario = () => {
    return ( 
        <form>
            <Campo>
                <label>Marca</label>
                <select>
                    <option value="">---Seleccione---</option>
                    <option value="americano">Americano</option>
                    <option value="asiatico">Asiático</option>
                    <option value="europeo">Europeo</option>
                </select>
            </Campo>
            <Campo>
                <label>Año</label>
                <select>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </Campo>
            <Campo>
                <label>Plan</label>
                <input 
                    type='radio'
                    name='plan'
                    value='basico'
                />Básico
                <input
                    type='radio'
                    name='plan'
                    value='completo'
                />Completo
            </Campo>
        </form>
     );
}
 
export default Formulario;