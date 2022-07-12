import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <Head>
        <title>Movie Details</title>
        <meta name="title" content="Movie Details"/>
        <meta name="description" content="Click to movie and check details"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://movie-app-next-js-eight.vercel.app/"/>
        <meta property="og:title" content="Movie Details"/>
        <meta property="og:description" content="Click to movie and check details"/>
        <meta property="og:image" content="https://i.postimg.cc/8JxDLr49/dummy.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://movie-app-next-js-eight.vercel.app/"/>
        <meta property="twitter:title" content="Movie Details"/>
        <meta property="twitter:description" content="Click to movie and check details"/>
        <meta property="twitter:image" content="https://i.postimg.cc/8JxDLr49/dummy.jpg"/>
        </Head>
        <div className='container bg-dark'>
          <div className=''>
            <div className='row justify-content-center'>
              {data.results.map((defaultMovie) => {
                return (
                  <div key={defaultMovie.id} className="card bg-colore-card m-2 col-4 col-md-3 col-sm-4   "
                    style={{
                      backgroundRepeat: 'repeat',
                      backgroundSize: 'cover',
                      height: '500px',
                      backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${defaultMovie?.backdrop_path})`,
                    }}
                  >
                    <div className="card-body d-flex justify-content-end align-items-end">
                    </div>
                    <h5 className="card-title text-light text-p-overview-h">{defaultMovie.title}</h5>
                    <strong className="card-text text-light">{defaultMovie.release_date}</strong>
                    <Link href={`/Details/${defaultMovie.id}`}>
                      <button className='btn btn-outline-info m-4'>Chack Details</button>
                    </Link>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </>
    )
}


export async function getStaticProps(){
const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1&include_adult=false')
const data = await response.json()
return {
        props:{
        data
    }
  }
}