import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaEye } from 'react-icons/fa';


const BlogCompnnent = (props) => {



    return (
        <>
            <NavLink to={`/Blog/${props.data.id}`} className='text-decoration-none' >
                <div className="d-flex flex-column h-100 cardShadow" onClick={() => props.Increment(props.data.Title)}>
                    <div style={{ flex: "1 1 auto" }}>
                        <img src={props.data.Image} alt="photo" className='w-100 mt-3' />
                        <div className='p-3'>
                            <div className='d-flex my-2'>
                                <small>
                                    Posted on October 6th 2021
                                </small>
                                <small className='ms-auto'><FaEye className='mx-3 fs-2' />563 views</small>
                            </div>
                            <h3 className='my-auto text-black my-2'>{props.data.Title}</h3>
                            <p className='text_darkGrey my-3'>{props.data.Article.length > 50
                                ? props.data.Article.substring(0, 60) + ' [...]'
                                : props.data.Article}
                                </p>
                        </div>
                    </div>
                </div>

            </NavLink>
        </>
    )
}




export default BlogCompnnent