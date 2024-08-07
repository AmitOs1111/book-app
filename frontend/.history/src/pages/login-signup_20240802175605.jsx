import * as React from 'react'
import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { userService } from '../services/user.service'
import { useForm } from '../customHooks/useForm'
import { checkSignIn, checkLogin } from '../store/user.action'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const defaultTheme = createTheme()

export function LoginSignUp() {
  const navigate = useNavigate()
  const [credentials, setCredentials, handelChange] = useForm(
    userService.getEmptyCredentials()
  )
  let { user } = useSelector((state) => state.userModule)
  const [isSignIn, setIsSignIn] = useState(true)

  useEffect(() => {
    if (user) {
      console.log('user:', user)
      setCredentials(user)
      setIsSignIn(false)
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const checkUser = {
      fullname: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
    }
    console.log('checkUser:', checkUser)
    if (isSignIn) {
      checkSignIn(checkUser).then(() => navigate('/book'))
    } else {
      checkLogin(checkUser).then(() => navigate('/book'))
    }
  }

  function signInRequest() {
    // eslint - disable - next - line
    setIsSignIn((prevIsSignIn) => !prevIsSignIn)
    setCredentials(userService.getEmptyCredentials())
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={handelChange}
              margin="normal"
              required
              fullWidth
              id="fullname"
              label={credentials.fullname ? '' : 'Full Name'}
              name="fullname"
              autoComplete="fullname"
              autoFocus
              value={credentials.fullname}
            />
            <TextField
              onChange={handelChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label={credentials.password ? '' : 'password'}
              type="password"
              id="password"
              autoComplete="current-password"
              value={credentials.password}
            />
            {isSignIn && (
              <TextField
                onChange={handelChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label={credentials.email ? '' : 'Email Address'}
                name="email"
                autoComplete="email"
                autoFocus
                value={credentials.email}
              />
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {!isSignIn ? 'Log In' : 'Sign In'}
            </Button>
            <Button
              onClick={() => signInRequest()}
              type="submit"
              fullWidth
              // variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSignIn ? 'Log In' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
