import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between py-5 mx-auto border-b-2 max-w-6xl'>
            <h1 className='text-4xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;