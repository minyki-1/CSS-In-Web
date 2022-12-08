import styled from 'styled-components'
import cssInWeb from 'css-in-web';
export default function Sample() {
  cssInWeb({ url: "http://localhost:9000/" });
  return (
    <Container>
      <h1>Sample Page</h1>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

// SSR
export const getServerSideProps = async ({ req }: any) => {
  // const originUrl = req.headers.host;
  // const fetchUrl = `${originUrl.search("http://") !== -1 ? originUrl : ("http://" + originUrl)}/api/hello`;
  // const fetchResult = await fetch(fetchUrl).then(response => response.json());

  return {
    props: {
      data: "data"
    }
  }
}

// No prerender
// export default dynamic(() => Promise.resolve(NoneSsr), { ssr: false });
