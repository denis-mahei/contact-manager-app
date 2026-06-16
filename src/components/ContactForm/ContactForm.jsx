import { Field, Form, Formik } from 'formik';
import { addContact } from '../../redux/contacts/operations.js';
import { useDispatch } from 'react-redux';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { LuUserPlus } from 'react-icons/lu';
import { Box, Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import MenuItem from '@mui/material/MenuItem';

const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,
        phoneNumber: values.phoneNumber,
        contactType: values.contactType,
        isFavourite: values.isFavourite,
      })
    );

    toast(`${values.name} was added to your contacts!`, {
      icon: (
        <LuUserPlus
          style={{
            color: 'green',
            fontSize: '1.2rem',
          }}
        />
      ),
    });
    onClose();
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
        contactType: '',
      }}
      onSubmit={handleSubmit}
      // validationSchema={addContactValidationSchema}
    >
      <Form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: 400,
            mx: 'auto',
          }}
        >
          <Field name="name">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                variant="standard"
                sx={{
                  input: {
                    color: 'white',
                  },
                  '& .MuiInput-underline::after': {
                    borderColor: '#fff',
                  },
                  '& .MuiSelect-select': {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#fff',
                  },
                  label: {
                    color: '#fff',
                    '&.Mui-focused': {
                      color: '#fff',
                    },
                  },
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#fff',
                    borderRadius: 1,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'border 0.3s ease, box-shadow 0.3s ease',
                    '&:before': {
                      borderBottom: 'none',
                    },
                    '&:after': {
                      borderBottom: 'none',
                    },
                  },
                  '& .MuiFilledInput-root.Mui-focused': {
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                  },
                }}
              />
            )}
          </Field>

          <Field name="phoneNumber">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Number"
                fullWidth
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                variant="standard"
                sx={{
                  input: {
                    color: '#fff',
                  },
                  '& .MuiInput-underline::after': {
                    borderColor: '#fff',
                  },
                  label: {
                    color: '#fff',
                    '&.Mui-focused': {
                      color: '#fff',
                      borderColor: 'rgb(255 255 255 / 0.79)',
                    },
                  },
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: 1,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'border 0.3s ease, box-shadow 0.3s ease',
                    '&:before': {
                      borderBottom: 'none',
                    },
                    '&:after': {
                      borderBottom: 'none',
                    },
                  },
                  '& .MuiFilledInput-root.Mui-focused': {
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              />
            )}
          </Field>
          <Field name="contactType">
            {({ field, meta }) => (
              <TextField
                {...field}
                select
                label="Contact Type"
                fullWidth
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                variant="standard"
                sx={{
                  input: {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#fff',
                  },
                  label: {
                    color: '#fff',
                    '&.Mui-focused': {
                      color: '#fff',
                    },
                  },
                  '& .MuiInput-underline::after': {
                    borderColor: '#fff',
                  },
                  '& .MuiSelect-select': {
                    color: '#fff',
                  },
                  '& .MuiFilledInput-root': {
                    color: '#fff',
                  },
                }}
              >
                <MenuItem value="work">Work</MenuItem>
                <MenuItem value="home">Home</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
              </TextField>
            )}
          </Field>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<MdOutlinePersonAddAlt />}
            sx={{ textTransform: 'none' }}
          >
            Add
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
export default ContactForm;
