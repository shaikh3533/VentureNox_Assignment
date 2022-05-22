import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEye, FaSpinner } from 'react-icons/fa';
import GetData from "../../Api/GetData";
import classes from '../../UI/Blogs.module.css'

const BlogDetail = (props) => {
    let { id } = useParams();
    const [SingleBlog, setSingleBlog] = useState("")

    useEffect(() => {

        GetData.BlogDetail(parseInt(id)).then(res => {
            setSingleBlog(res.data)
        })
    }, [id])



    return (
        <div className='mini_container my-5 mx-auto'>
            {SingleBlog ?
                <div className="d-flex flex-column h-100 cardShadow p-5">
                    <div className='d-flex'>
                        <small className=''>
                            Posted on October 6th 2021
                            <span className="ms-4"><FaEye className='mx-3 fs-2' />563 views</span>
                        </small>
                    </div>
                    <div style={{ flex: "1 1 auto" }}>
                        <div className="my-3">
                            <h3 className='my-5 text-black my-2'>{SingleBlog.Title}</h3>
                            <p className='text_darkGrey my-3'>{SingleBlog.Article}</p>
                            <img src={SingleBlog.Image} alt="photo" className='w-100 mt-3' />
                        </div>
                        <div className="my-3">
                            <h3 className='my-5 text-black my-2'>{SingleBlog.Title}</h3>
                            <p className='text_darkGrey my-3'>{SingleBlog.Article}</p>
                            <img src={SingleBlog.Image} alt="photo" className='w-100 mt-3' />
                        </div>
                        <div className="my-3">
                            <h3 className='my-5 text-black my-2'>{SingleBlog.Title}</h3>
                            <p className='text_darkGrey my-3'>{SingleBlog.Article}</p>
                            <img src={SingleBlog.Image} alt="photo" className='w-100 mt-3' />
                        </div>
                    </div>
                </div> :
                <div className="d-flex flex-column h-100">
                    <div className="my-auto mx-auto">
                        <FaSpinner className={`fs-1 fw-1 ${classes.colorRed}`} />
                    </div>
                </div>
            }
        </div>
    );
}

export default BlogDetail;