import Image from "next/image";
import style from '../../styles/Home.module.css'

import React, { Component } from 'react'

export default class Detailsid extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
    <>
        <div className=' container mt'>
            <div className='img-back m-auto' style={{
                backgroundRepeat: 'no-repeat',
                height: '100%',
            }}>
                <div className='d-flex justify-content-center align-item-center flex-wrap'>
                    <div className='p-4'>
                        <Image width={200} height={300} className="card-img-top movie-img-wh  " src={`https://image.tmdb.org/t/p/w220_and_h330_face${this.props.movieData?.poster_path}`} alt="DATAIMAGE NOT FOUND" />
                    </div>
                    <div className=' m-4 shadow details-background rounded  w-75'>
                        <div className='text-left'>
                            <strong className=''>Movie Name: </strong>
                            <h3 className={` font-weight-bold`}>{this.props.movieData?.original_title}({this.props.movieData?.release_date ? this.props.movieData?.release_date.slice(0, 4) : ''})</h3>
                            <p className='font-weight-bold '>Language:<span className='m-2 mb-0'>({this.props.movieData?.original_language})</span></p>
                            <strong className=''>Release Date: </strong>
                            <span className={` font-weight-bold`}>{this.props.movieData?.release_date}</span>
                            <br />
                            <strong className=' font-weight-bold'>Overview:</strong>
                            <p className={` font-weight-bold`}>{this.props.movieData?.overview}</p>
                            <strong className=''>popularity:</strong>
                            <span className={` font-weight-bold m-2`}>{this.props.movieData?.popularity}</span>
                            <br />
                            <strong className=''>Vote Average:</strong>
                            <span className={` font-weight-bold m-2`}>{this.props.movieData?.vote_average}</span>
                            <br />
                            <strong className=''>Vote count:</strong>
                            <span className={` font-weight-bold m-2`}>{this.props.movieData?.vote_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}




export async function getServerSideProps(context) {
    const { params } = context
    const { Detailsid } = params
    console.log(Detailsid, 'id rcicv', context);
    const response = await fetch(`https://api.themoviedb.org/3/movie/${Detailsid}?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US`)
    const data = await response.json()
    return {
        props: {
            movieData: data
        }
    }
}