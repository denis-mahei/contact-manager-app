import { Formik, Form, Field } from 'formik';
import { addContact } from '../../redux/contacts/operations.js';
import { useDispatch } from 'react-redux';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { LuUserPlus } from 'react-icons/lu';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import toast from 'react-hot-toast';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
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
    resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
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
                  variant="filled"
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
                    },
                  }}
                />
              )}
            </Field>

            <Field name="number">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Number"
                  fullWidth
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                  variant="filled"
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
                    },
                  }}
                />
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
    </section>
  );
};
export default ContactForm;
