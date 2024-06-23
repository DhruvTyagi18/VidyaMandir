import { IconButton, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHref, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasicAvatars from "./components/avatar";
import logo from '../src/vm.png';  // Import your logo here

function Appbar() {
    
    const token = sessionStorage.getItem("token");
    const [Token, setToken] = useState(null);
    const username = sessionStorage.getItem("username");
    const navigate = useNavigate();

    useEffect(() => {
        setToken(token);
    }, [token]);

    return (
        <div style={{
            backgroundColor: "#001C30",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
            alignItems: "center"
        }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="VidyaMandir Logo" style={{ height: "40px", marginLeft: "30px" }} />
                <Typography variant="h4" style={{ fontFamily: "cursive", marginLeft: "10px", color: "#83c5be" }}>
                    VidyaMandir
                </Typography>
            </div>

            {Token ? (
                <div className="logedinbar" style={{ display: "flex", alignItems: "center" }}>
                    <Button variant="text" sx={{ color: "#83c5be", '&:hover': { backgroundColor: "black", color: "white" } }} onClick={() => { navigate('/yourcourses') }}>Your Courses</Button>
                    <Typography variant="body1" style={{ color: "#83c5be", marginTop: "7px", marginRight: "10px" }}>
                        {username}
                    </Typography>
                    <BasicAvatars image={username}></BasicAvatars>
                    <Button variant="contained" style={{ marginRight: 10 }} onClick={() => {
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('username');
                        window.location = '/';
                    }}>Logout</Button>
                </div>
            ) : (
                <div>
                    <Button variant="contained" style={{ marginRight: 10 }} onClick={() => { navigate('/signup') }}>Signup</Button>
                    <Button variant="contained" style={{ marginRight: 10 }} onClick={() => { navigate('/login') }}>Signin</Button>
                </div>
            )}

<Button variant="text" sx={{ color: "#FFD700", '&:hover': { backgroundColor: "blue", color: "white" } }} onClick={() => { window.location.href = 'https://dhruvtyagi18-portfolio.netlify.app/' }}>
                Contact Developer
            </Button>
        </div>
    );
}

export default Appbar;
