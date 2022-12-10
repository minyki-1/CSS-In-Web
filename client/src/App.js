import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const Container = styled.div`
  width:100%;
  min-height:100%;
`

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  )
}

export default App
