import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

import AuthService from '../../../services/auth.service';

// ----------------------------------------------------------------------

export default function RegisterForm() {
    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        AuthService.register(username, email, password);
    };

    return (
        <>
            <Stack spacing={3}>
                <TextField 
                    name="username" 
                    label="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField 
                    name="email" 
                    label="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    name="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <Checkbox name="remember" label="Remember me" />
                <Link variant="subtitle2" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Register
            </LoadingButton>
        </>
    );
}
