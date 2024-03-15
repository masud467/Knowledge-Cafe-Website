import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className='w-1/3 bg-gray-400 p-8 my-10 rounded-2xl '>
            <h1 className="  text-2xl font-bold  bg-slate-200 rounded-2xl mb-6 text-[#6047EC] ">Spent time on read : {readingTime} min</h1>
            <hr/>
            <h1 className="  text-2xl font-bold text-center mt-4">Bookmarked Blogs: {bookmarks.length}</h1>
            
            {
                bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;