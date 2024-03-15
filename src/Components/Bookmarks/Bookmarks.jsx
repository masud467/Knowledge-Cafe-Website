import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
    
        <div className='w-1/3 bg-gray-400 p-8 my-10 rounded-2xl '>
            <div>
                <h2>Spent time on read : {readingTime}</h2>
            </div>
            <h1 className="  text-2xl font-bold text-center">Bookmarked Blogs: {bookmarks.length}</h1>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;