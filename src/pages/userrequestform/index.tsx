import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import * as yup from 'yup';
import { Formik } from 'formik';

interface Requestdata{
    bookTitle : string;
    author : string;
    gener : string;
}

const Userequestform = () => {
    //const theme = useTheme();
    //const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const initialValues: Requestdata = {
        bookTitle: '',
        author: '',
        gener: ''
    };
    const handleFormSubmit = (values: Requestdata) => {
        console.log(values);
    };
    const checkoutSchema = yup.object().shape({
        bookTitle: yup.string().required('Required'),
        author: yup.string().required('Required'),
    });
    return (
        <Box m="20px">
            <Header title="REQUEST FORM" subtitle="Create a New Book Request" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Book Title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.bookTitle}
                                name="bookTitle"
                                error={!!touched.bookTitle && !!errors.bookTitle}
                                helperText={touched.bookTitle && errors.bookTitle}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Author"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.author}
                                name="author"
                                error={!!touched.author && !!errors.author}
                                helperText={touched.author && errors.author}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Gener"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gener}
                                name="gener"
                                error={!!touched.gener && !!errors.gener}
                                helperText={touched.gener && errors.gener}
                                sx={{ gridColumn: 'span 2' }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="center" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};
export default Userequestform;