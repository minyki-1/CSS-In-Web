import { useEffect } from 'react';
import styled from 'styled-components'
import SvgHeart from '../svg/heart.svg';
export default function Home() {
  const getGo = async () => {
    await fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  return (
    <Container>
      {/* <button onClick={getGo}>데이터 가져오기</button> */}
      <h1>My Next WebApp</h1>
      <SvgHeart width="24" height="24" fill="white" />
      <div className='test'>12345</div>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
