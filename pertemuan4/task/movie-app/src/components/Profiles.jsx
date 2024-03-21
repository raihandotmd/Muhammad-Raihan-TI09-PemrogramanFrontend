// creating profile component
function Profile(props) {
    const { name, umur, pekerjaan } = props;
    return (
        <div>
            <h1>Profile</h1>
            <ul>
                <li>Nama: {name}</li>
                <li>Umur: {umur}</li>
                <li>Pekerjaan: {pekerjaan}</li>
            </ul>
        </div>
    );
}

export default Profile;
