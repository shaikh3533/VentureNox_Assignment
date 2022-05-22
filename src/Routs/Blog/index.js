import React, { useEffect, useState } from 'react'
import img2 from '../../Images/img2.svg'
import classes from '../../UI/Blogs.module.css'
import { FaEye } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import BlogCompnnent from '../../Components/BlogComponent';
import { connect } from 'react-redux';
import GetData from '../../Api/GetData';

function Blogs(props) {

    const [blogsList, setBlogsList] = useState([])
    const [blogsVisible, setBlogsVisible] = useState(6)

    useEffect(() => {
        GetData.BLogData().then(res => {
            console.log({ res })
            setBlogsList(res.data)
        })
    }, [])


    const Increment = (id) => {
        props.dispatch({ type: 'INCREMENT', id: id })
    }


    return (
        <>
            <div className="row">
                <div className="col-md-6 col-sm-12 p-0">
                    <div className={`${classes.blog_img} ${classes.centered}`}>
                        <h1 className={`text-nowrap text-white`}>Our Blog</h1>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 p-0">
                    <div className={` ${classes.bg_theme} ${classes.centered}`}>
                        <h4 className={`w-75 text-white`}>Diagnose Car Problems If You Don&#39;t Know Much About Cars</h4>
                        <p className={`w-75 text-white`}>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
                    </div>
                </div>
            </div>
            <div className={`row ${classes.bg_lightGrey}`}>
                <div className='main_container mx-auto bg-white my-5'>
                    <div className='d-md-flex'>
                        <div className='m-3'>
                            <img src={img2} className='w-100' />
                        </div>
                        <div className='m-4 position-relative'>
                            <div className='d-flex'>
                                <small className=''>
                                    Posted on October 6th 2021
                                    <span><FaEye className='mx-3 fs-2' />563 views</span>
                                </small>
                                <small className={`ms-auto ${classes.colorRed}`}>FEATURED</small>
                            </div>
                            <>
                                <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
                                <small>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</small>
                            </>
                            <div className='position-absolute bottom-0'>
                                <p>Read more<FaLongArrowAltRight className='ms-3 fs-2' /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_container mx-auto bg-white my-5'>
                <div className='row gy-3'>
                    {blogsList.slice(0, blogsVisible).map(each => {
                        return (
                            <div className='col-md-6 col-lg-4'>
                                <BlogCompnnent data={each} Increment={Increment} />
                            </div>
                        )
                    })}
                    <div className="text-center my-5">
                        {blogsList.length > 3 && (
                            blogsVisible < blogsList.length ? (
                                <button className="text-white" onClick={(() => setBlogsVisible(blogsVisible + 6))} style={{ cursor: "pointer" }}>
                                    load More
                                </button>
                            ) : (
                                <button className="text-white" onClick={(() => setBlogsVisible(9))} style={{ cursor: "pointer" }}>
                                    Show Less
                                </button>
                            )
                        )}
                    </div>

                    {
                        Object.keys(props.state).map((each, i) => {
                            console.log({i})
                            return (
                                <>
                                    {i !== 0 && i !== 1 && <p key={i}>{each}{props.state[each]}</p>}
                                </>
                            )
                        })
                    }
                    {console.log(props, 'curent sttttate')}
                </div>
            </div>
        </>
    )
}


function mapStateToProps(state) {
    console.log(state);
    return {
        BlogNo: state.BlogNo,
        state: state
    }
}

export default connect(mapStateToProps)(Blogs)