import styled from 'styled-components'
import SvgHeart from '../svg/heart.svg';
import cssInWeb from 'css-in-web';
export default function Home() {
  // cssInWeb({ url: "http://localhost:9000/" });
  return (
    <Container>
      <h1>My Next WebApp</h1>
      <SvgHeart width="24" height="24" fill="white" />
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
