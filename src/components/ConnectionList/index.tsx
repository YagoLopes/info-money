import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { useToggle } from 'react-use'

import NewConnectionModal from '../NewConnectionModal'
import { Container, Connections } from './styles'

const ConnectionList: React.FC = () => {
  const [isCreateModalOpen, toggleCreateModalOpen] = useToggle(false)

  return (
    <>
      <Container
        width={300}
        height={Infinity}
        minConstraints={[240, Infinity]}
        maxConstraints={[300, Infinity]}
        className="app-sidebar"
      >
        <Connections>
          <header>
            <div>
              <input type="radio" id="Compra" name="drone" value="C" />
              <label htmlFor="Compra">Compra</label>
            </div>
            <div>
              <input type="radio" id="Venda" name="drone" value="V" />
              <label htmlFor="Venda">Venda</label>
            </div>
            <button type="button" onClick={toggleCreateModalOpen}>
              <FiPlusCircle />
            </button>
          </header>
        </Connections>
      </Container>

      <NewConnectionModal
        visible={isCreateModalOpen}
        onRequestClose={toggleCreateModalOpen}
      />
    </>
  )
}

export default ConnectionList
