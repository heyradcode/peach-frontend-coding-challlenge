import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import TrashMenu from './TrashMenu'
import TrashModal from './TrashModal'

const Header = styled.header`
  background: var(--color-secondary-100);
  padding: var(--space-md) 0;
  margin: 0 0 var(--space-xl);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
`

const Brand = styled.h1`
  display: flex;
  color: var(--color-black-100);
  font-size: var(--text-2xl);
  margin: 0;
  justify-content: space-between;
  align-items: center;

  a {
    background: var(--color-secondary-200);
    border-radius: var(--radius-md);
    padding: var(--space-sm) var(--space-lg);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-weight: 600;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: var(--color-brand);
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: 2px solid var(--color-brand);
      outline-offset: 2px;
    }
  }
`

const Main = styled.main`
  display: grid;
  gap: var(--space-2xl);
  flex: 1;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 var(--space-lg);
  }
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpenModal = useCallback(() => {
    setOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div>
      <Header>
        <Container>
          <Brand>
            <Link href='/'>🍑 PeachyTask</Link>
            <TrashMenu onClick={handleOpenModal} />
          </Brand>
        </Container>
      </Header>

      <main>
        <Container>
          <Main>{children}</Main>
        </Container>
      </main>
      <TrashModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default Layout
