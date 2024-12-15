import styled from 'styled-components'

import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  //1. Lataa kirjautunut käyttäjä
  const { isLoading, isAuthenticated } = useUser()

  //2. Jos kirjautunutta kayttajaa ei ole, ohjaa kirjautumis sivulle
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isAuthenticated, isLoading, navigate]
  )

  //3. Jos lataa, näytä spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  //4. Jos sisaankirjautunut kayttaja, render app
  if (isAuthenticated) return children
}

export default ProtectedRoute
