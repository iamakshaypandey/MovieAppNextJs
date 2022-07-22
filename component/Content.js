import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { fetchUser, IncrementPage } from '../redux/content/contentAction'
import { connect } from 'react-redux';


import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props)
    }


    handleScroll = (e) => {
        const TotleHight = e.target.scrollTop + e.target.clientHeight + 10
        if (TotleHight >= e.target.scrollHeight) {
            IncrementPage(this.props.page)(this.props.dispatch)

            fetchUser(this.props.page)(this.props.dispatch)

        }
    }

    componentDidMount() {
        const elm = document.querySelector('#scrolling')
        elm.addEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <>
                <div className='container' id='scrolling' style={{ height: '100vh', overflowY: 'scroll' }}>
                    <div className="row pt-2  justify-content-center ">
                        {this.props.movieList && this.props.movieList.map((defaultMovie, index) => {
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
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        movieList: state.movieData.movies,
        page: state.movieData.page
    }
}


export default connect(mapStateToProps)(Content)