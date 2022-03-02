import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import Link from 'next/link';

function PageNav() {
    const pageSettings = useAppSelector((state: RootState) => state.pageSettings)
    const { pageNumber } = pageSettings; 
  return (
    <StyledPageNav className='PageNav'>
        {pageNumber > 1 ? <Link href={''}><a>{pageNumber - 1}</a></Link> : ''}
        <Link href={''}><a>{pageNumber}</a></Link>
        <Link href={''}><a>{pageNumber + 1}</a></Link>
    </StyledPageNav>
  )
}

const StyledPageNav = styled.nav`
    
`

export default PageNav