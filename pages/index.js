import Head from 'next/head';
import Router from 'next/router';


function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Home Page</p>
    </div>
  );
}
IndexPage.getInitialProps= ({res})=>{
  if (res) {
    res.writeHead(302, {
      Location: '/member'
    })
    res.end()
  } else {
    Router.push('/member')
  }
} 
export default IndexPage;