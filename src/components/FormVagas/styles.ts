import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${variaveis.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${variaveis.corPrincipal};
`

export const Botao = styled.button`
  background-color: ${variaveis.corPrincipal};
  border: 1px solid ${variaveis.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${variaveis.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
