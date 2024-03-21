import Profile from "./Profiles.jsx";

// creating main component
function Main() {
    return (
        <div>
            <Profile name="John" umur="21" pekerjaan="frontend" />
            <Profile name="Jack" umur="18" pekerjaan="backend" />
        </div>
    );
}

export default Main;
