import Cabec from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global'
import { Container } from './global'
import EstiloGlobal from './global'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabec />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
