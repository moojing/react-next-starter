import Head from 'next/head';
import Router from 'next/router';


function IndexPage() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
IndexPage.getInitialProps= ({res})=>{
 
} 
export default IndexPage;