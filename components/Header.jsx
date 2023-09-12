import '../styles/Header.css'

export default function Header({userInfo}) {
    return (
        <div className="header">
            <h1>{userInfo.fullName}</h1>
            <div className='contact-details'>
                <h2>E: {userInfo.email}</h2>
                <h2>M: {userInfo.phone}</h2>
                <h2>{userInfo.address}</h2>
            </div>
        </div>
    )
}