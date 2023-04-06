import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Li = styled.li`
  border: 1px solid ${variaveis.corPrincipal};
  background-color: ${variaveis.corSecundaria};
  color: ${variaveis.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${variaveis.corPrincipal};
    color: ${variaveis.corSecundaria};

    a {
      border-color: ${variaveis.corPrincipal};
      background-color: ${variaveis.corSecundaria};
      color: ${variaveis.corPrincipal};
    }
  }
`
export const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
  font-family: Lato, sans-serif;
`
export const VagaLink = styled.a`
  border-color: ${variaveis.corSecundaria};
  background-color: ${variaveis.corPrincipal};
  color: ${variaveis.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
