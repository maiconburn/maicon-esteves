import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import css from '../src/css/components/Form.module.scss'

export default function App() {
  const { register, handleSubmit, errors, setValue } = useForm()
  const onSubmit = data => console.log(data)
  const values = React.useState()

  const handleChange = (e) => {
    setValue("Name", e.target.value)
    setValue("Email", e.target.value)
    setValue("Message", e.target.value)
    setValue("Phone Number", e.target.value)
  }

  React.useEffect(() => { 
    register(
      { name: "Name" },
      { required: 'Name is required.' }
    )
    register(
      { name: "Email" },
      { required: 'Email is required.' }
    )
    register(
      { name: "Company" }
    )
    register(
      { name: "Message" },
      { required: 'Message is required.' }
    )
    register(
      { name: "Phone Number" },
      { required: 'Phone Number is required.' }
    )
  }, [register])
  const styles = css
  return (
      <Grid container xs={12}>
        <form className={styles.formClass} onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <TextField 
            id="outlined-full-width" 
            type="text" 
            className={styles.inputClass} 
            label="Name" 
            name="Name" 
            placeholder="Your name" 
            helperText={<ErrorMessage errors={errors} name="Name" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register}
            />
          </Grid>
      
            <TextField 
            id="outlined-full-width" 
            type="mail"  
            className={styles.inputClass} 
            label="Email" 
            name="Email" 
            placeholder="Your email" 
            helperText={<ErrorMessage errors={errors} name="Email" />} 
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
            name="Company" 
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
            multiline
            rows="5" 
            className={styles.inputClass} 
            label="Message" 
            name="Message" 
            placeholder="Your message" 
            helperText={<ErrorMessage errors={errors} name="Message" />} 
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
            name="Phone Number" 
            placeholder="Your phone mumber" 
            helperText={<ErrorMessage errors={errors} name="Phone Number" />} 
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            inputRef={register} 
            />
          
          <Button type="submit" variant="contained" className={styles.inputBtnClass} color="primary">
            Primary
          </Button>
        </form>
      </Grid>
      
  )
}