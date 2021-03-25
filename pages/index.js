import { connect } from 'react-redux'
import MainBody from '../Components/MainBody/MainBody';
import Footer from '../Components/Footer/Footer'
import Layout from '../Layout/Layout';
import { fetchBlogData } from '../Store/Actions/Actions'
import styles from '../styles/Home.module.css'

function Home({blogs, blogsData, fetchBlogData}) {
  fetchBlogData(blogs)
  return (
    <div>
      <Layout />
      <main className={styles.main}>
        <MainBody />
      </main>
      <Footer />
    </div>
  )
};

export async function getStaticProps() {
  const url = 'http://localhost:4200/blog';
  const res = await fetch(url);
  const blogs = await res.json();

  return {
    props: { blogs },
  }
}

const mapStateToProps = (state) => {
  return { 
    blogsData: state.posts
  }
}

const mapDispatchToProps = {
  fetchBlogData: fetchBlogData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

