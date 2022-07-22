import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Content from '../component/Content';

import React, { Component } from 'react'
import { AddMovieToRedux } from '../redux/content/contentAction';
import { connect } from 'react-redux';

class index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    AddMovieToRedux(this.props.data1)(this.props.dispatch)
  }

  render() {
    return (
      <>
        <Head>
          <title>Movie Details</title>
          <meta name="title" content="Movie Details" />
          <meta name="description" content="Click to movie and check details" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://movie-app-next-js-eight.vercel.app/" />
          <meta property="og:title" content="Movie Details" />
          <meta property="og:description" content="Click to movie and check details" />
          <meta property="og:image" content="https://i.postimg.cc/8JxDLr49/dummy.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://movie-app-next-js-eight.vercel.app/" />
          <meta property="twitter:title" content="Movie Details" />
          <meta property="twitter:description" content="Click to movie and check details" />
          <meta property="twitter:image" content="https://i.postimg.cc/8JxDLr49/dummy.jpg" />
        </Head>
        <Content data={this.props} />
      </>
    )
  }
}


export async function getStaticProps() {
  const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1&include_adult=false')
  const data = await response.json()
  const data1 = data.results
  return {
    props: {
      data1,
      currentPage: data.page + 1
    }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}

export default connect(mapDispatchToProps)(index)