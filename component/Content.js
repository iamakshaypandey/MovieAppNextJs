import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component'



function Content(props) {

    const [posts, setPosts] = useState(props.data.data1)
    const [hasMore, setHasmore] = useState(true)
    const [page, setPage] = useState(props.data.currentPage)



    const getMorePost = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=${page}&include_adult=false`);
        const newPosts = await res.json();
        const newPosts1 = newPosts.results
        setPosts((post) => [...post, ...newPosts1]);
        setPage(page + 1)
    };

    return (
        <>
            <InfiniteScroll
                dataLength={page}
                next={getMorePost}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                <div className='container'>
                    <div className="row pt-2  justify-content-center ">
                        {posts.map((defaultMovie, index) => {
                            return (
                                <div key={index} className="col-lg-3 card m-2 col-md-4 col-sm-10 px-2 mb-grid-gutter py-2 my-lg-3 py-sm-2 "
                                    style={{
                                        backgroundRepeat: 'repeat',
                                        backgroundSize: 'cover',
                                        height: '440px',
                                        backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${defaultMovie?.backdrop_path})`,
                                    }}
                                >
                                    <div className="card-body d-flex justify-content-end align-items-end">
                                    </div>
                                    <h5 className="card-title text-center text-light text-p-overview-h">{defaultMovie.title}</h5>
                                    <strong className="card-text text-center text-light">{defaultMovie.release_date}</strong>
                                    <Link href={`/Details/${defaultMovie.id}`}>
                                        <button className='btn btn-outline-info m-4'>Chack Details</button>
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Content