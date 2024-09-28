import React, { useState, useCallback } from 'react';
import { TextField, MenuItem, Button, Container, Typography, Autocomplete } from '@mui/material';
import Grid from '@mui/material/Grid';
import { debounce } from 'lodash';
import departmentsProgramsMap from '../data/DepartmentPrograms';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PrivacyConsentDialog from './PrivacyConsentDialogBox.jsx';
import '../styles/RegForm.css';
import Title from "./Title";


const firebaseConfig = {
    apiKey: "AIzaSyADtsnaWmpHzQ1zIcIBwtyqANuUldMRf_8",
    authDomain: "gdsc-arw.firebaseapp.com",
    projectId: "gdsc-arw",
    storageBucket: "gdsc-arw.appspot.com",
    messagingSenderId: "352676839422",
    appId: "1:352676839422:web:76a8f05cd1650221368aaf",
    measurementId: "G-309HR2L7KC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const departments = [
    'GCOE', 'COS', 'RVRCOB', 'SOE', 'CLA', 'BAGCED', 'CCS'
];

const RegForm = () => {
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        department: '',
        program: '',
        idNumber: '',
        birthday: '',
        email: '',
        contactNumber: ''
    });

    const [errors, setErrors] = useState({});
    const [availablePrograms, setAvailablePrograms] = useState([]);
    const [isConsentDialogOpen, setIsConsentDialogOpen] = useState(false);

    const validateEmail = (email) => {
        const re = /^[A-Za-z]+_[A-Za-z]+@([A-Za-z0-9]+(\.[A-Za-z0-9]+)+)$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhoneNumber = (number) => {
        const re = /^(09|\+639)\d{9}$/;
        return re.test(number);
    };

    const validateIdNumber = (number) => {
        const weights = [8, 7, 6, 5, 4, 3, 2, 1];
        let sum = 0;
        let digit;
        for (let i = weights.length - 1; i >= 0; i--) {
            digit = number % 10;
            sum += digit * weights[i];
            number = Math.floor(number / 10);
        }
        return sum % 11 === 0;
    };

    const debouncedValidation = useCallback(
        debounce((name, value) => {
            let error = '';
            if (name === 'email' && !validateEmail(value)) {
                error = 'Invalid email format, use your DLSU email';
            } else if (name === 'contactNumber' && !validatePhoneNumber(value)) {
                error = 'Invalid phone number format';
            } else if (name === 'idNumber' && !validateIdNumber(value)) {
                error = 'Invalid ID number';
            }
            setErrors(prev => ({ ...prev, [name]: error }));
        }, 300),
        []
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (name === 'department') {
            setAvailablePrograms(departmentsProgramsMap[value] || []);
            setFormData(prev => ({
                ...prev,
                department: value,
                program: ''
            }));
        }

        if (['email', 'contactNumber', 'idNumber'].includes(name)) {
            debouncedValidation(name, value);
        }
    };

    const handleProgramChange = (event, newValue) => {
        setFormData(prevData => ({
            ...prevData,
            program: newValue
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        try {
            if (!image) {
                alert('Please upload an image.');
                return;
            }

            // Create a reference to the location where we want to store the file
            const imageRef = ref(storage, `receipts/${formData.idNumber}_${image.name}`);

            // Upload the file to Firebase Storage
            const snapshot = await uploadBytes(imageRef, image);

            // Get the download URL
            const imageUrl = await getDownloadURL(snapshot.ref);

            // Create a document in Firestore
            const { firstName, lastName } = formData;
            const customDocId = `${firstName} ${lastName}`;
            const docRef = doc(collection(db, "applicants"), customDocId);

            // Add image URL to formData
            const dataToSave = { ...formData, receiptUrl: imageUrl };
            await setDoc(docRef, dataToSave);

            console.log("Document written with ID: ", docRef.id);
            alert("Registration successful!");

            // Reset form after submission
            setFormData({
                firstName: '',
                lastName: '',
                department: '',
                program: '',
                idNumber: '',
                birthday: '',
                email: '',
                contactNumber: ''
            });
            setImage(null);
        } catch (e) {
            console.error("Error during registration: ", e);
            alert("Registration failed. Please try again.");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(field => field !== '') && Object.values(errors).every(error => error === '')) {
            setIsConsentDialogOpen(true);
        } else {
            alert("Please fill all fields correctly before submitting.");
        }
    };

    const handleAgree = () => {
        setIsConsentDialogOpen(false);
        handleSubmit();
    };

    const handleDialogClose = () => {
        setIsConsentDialogOpen(false); 
    };

    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{
                my: 4,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}
            id='reg-form'
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Title subTitle="Register" title="Join Us" />
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        GDSC Membership Registration Form
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    name="department"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="College"
                                    value={formData.department}
                                    onChange={handleChange}
                                >
                                    {departments.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    options={availablePrograms}
                                    getOptionLabel={(option) => option}
                                    value={formData.program}
                                    onChange={handleProgramChange}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Program" variant="outlined" required fullWidth />
                                    )}
                                    isOptionEqualToValue={(option, value) => option === value}
                                    disableClearable
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="idNumber"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="ID Number"
                                    value={formData.idNumber}
                                    onChange={handleChange}
                                    error={!!errors.idNumber}
                                    helperText={errors.idNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="birthday"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Birthday"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={formData.birthday}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="DLSU Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="contactNumber"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Contact Number (09xxxxxxxxx)"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    error={!!errors.contactNumber}
                                    helperText={errors.contactNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    name="Upload GCash receipt"
                                    className='image-submit'
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className='btn dark-btn'
                                    disabled={Object.values(formData).some(field => field === '') || Object.values(errors).some(error => error !== '')}
                                >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            
            <PrivacyConsentDialog 
                open={isConsentDialogOpen} 
                onAgree={handleAgree} 
                onClose={handleDialogClose} 
            />
        </Container>
    );
};

export default RegForm;