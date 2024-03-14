import PropTypes from 'prop-types';
import {FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks }) => {
    const {title,cover_img,author_img,author_name, posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='rounded-2xl' src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex my-5'>
                    <img className=' w-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={handleBookmarks}
                        className='ml-2 text-red-600 text-2xl'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h1 className='text-4xl mb-5'>{title}</h1>
            <p className='space-x-2'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired ,
    handleBookmarks: PropTypes.func
}
export default Blog;