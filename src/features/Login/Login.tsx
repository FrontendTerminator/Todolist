import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {loginTC} from './auth-reducer'
import {AppRootStateType} from '../../app/store'
import {Redirect} from 'react-router-dom'

export const Login = () => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }

        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values));
        },
    })

    if (isLoggedIn) {
        return <Redirect to={"/"}/>
    }


    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        {/*<p>
                            To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                        target={'_blank'}>here</a>
                        </p>*/}
                        <p style={{color: '#2E3B55'}}>You can use test account credentials</p>
                        <p><span style={{color: '#2E3B55'}}> Email: </span>free@samuraijs.com</p>
                        <p><span  style={{color: '#2E3B55'}}>Password: </span>free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps("rememberMe")}
                                checked={formik.values.rememberMe}
                            />}
                        />
                        <Button type={'submit'} variant={'contained'}
                                style={{background: '#2E3B55', color: '#fff'}}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
           {/* <p style={{color: '#2E3B55'}}>Warning: The server may be temporarily overloaded. If you are unable to download the data, then try again.</p>*/}
        </Grid>
    </Grid>
}
