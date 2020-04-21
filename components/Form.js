import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import css from '../src/css/components/Form.module.scss'

export default function App() {
  const { register, handleSubmit, errors, setValue } = useForm()

  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  
  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const onSubmit = async function send(data) {
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('../api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
  
  const values = React.useState()

  const handleChange = (e) => {
    setValue("name", e.target.value)
    setValue("email", e.target.value)
    setValue("company", e.target.value)
    setValue("subject", e.target.value)
    setValue("message", e.target.value)
    setValue("phone", e.target.value)
  }

  React.useEffect(() => { 
    register(
      { name: "name" },
      { required: 'Name is required.' }
    )
    register(
      { name: "email" },
      { required: 'Email is required.' }
    )
    register(
      { name: "company" }
    )
    register(
      { name: "subject" },
      { required: 'Subject is required.' }
    )
    register(
      { name: "message" },
      { required: 'Message is required.' }
    )
    register(
      { name: "phone" },
      { required: 'Phone Number is required.' }
    )
  }, [register])

  

  const styles = css
  return (
      <Grid container xs={12}>
        <form className={styles.formClass} onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
                {status.info.error && (
                  <Alert severity="error">Error: {status.info.msg}</Alert>
                )}
                {!status.info.error && status.info.msg && (
                  <Alert severity="success">{status.info.msg}</Alert>
                )}
            </Grid>
            <TextField 
            id="outlined-full-width" 
            type="text" 
            className={styles.inputClass} 
            label="Name" 
            name="name"
            placeholder="Your name" 
            helperText={<ErrorMessage errors={errors} name="name" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register}
            />
      
            <TextField 
            id="outlined-full-width" 
            type="mail"  
            className={styles.inputClass} 
            label="Email" 
            name="email"
            placeholder="Your email" 
            helperText={<ErrorMessage errors={errors} name="email" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register}
            />

            <TextField 
            id="outlined-full-width" 
            type="text"  
            className={styles.inputClass} 
            label="Company" 
            name="company" 
            placeholder="Your company"  
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register}
            />

            <TextField 
            id="outlined-full-width" 
            type="text"  
            className={styles.inputClass} 
            label="Subject" 
            name="subject" 
            placeholder="Subject" 
            helperText={<ErrorMessage errors={errors} name="subject" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register}
            /> 
          
            <TextField 
            id="outlined-full-width" 
            type="text" 
            multiline
            rows="5" 
            className={styles.inputClass} 
            label="Message" 
            name="message"
            placeholder="Your message" 
            helperText={<ErrorMessage errors={errors} name="message" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register} 
            />
          
            <TextField 
            id="outlined-full-width" 
            type="number"  
            className={styles.inputClass} 
            label="Phone Number" 
            name="phone" 
            placeholder="Your phone mumber" 
            helperText={<ErrorMessage errors={errors} name="phone" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register} 
            />
            <Button type="submit" variant="contained" className={styles.inputBtnClass} color="primary">
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </Button>
        </form>
      </Grid>
      
  )
}