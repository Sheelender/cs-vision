import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const EnrollmentForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/; // Adjust as per your mobile number format
    return mobileRegex.test(mobile);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user changes the input
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newErrors = {};

  //   if (!formData.name) {
  //     newErrors.name = 'Name is required.';
  //   }

  //   if (!validateMobile(formData.mobile)) {
  //     newErrors.mobile = 'Mobile number must be 10 digits.';
  //   }

  //   if (!validateEmail(formData.email)) {
  //     newErrors.email = 'Email is invalid.';
  //   }

  //   if (!formData.course) {
  //     newErrors.course = 'Please select a course.';
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }



  //   setOpenSnackbar(true);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!validateMobile(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits.';
    if (!validateEmail(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.course) newErrors.course = 'Please select a course.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare the request body

    const formDataToSubmit = {
      'entry.1513138607': formData.name,  // Name
      'entry.1790052315': formData.mobile, // Mobile Number
      'entry.2051620611': formData.email,  // Email
      'entry.420857953': formData.course, // Interested Course
    };

    const formBody = new URLSearchParams(formDataToSubmit);

    try {
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScE0vfcR8Txo4Z1-lpBkSiyKrVvpKA0C-0ACEeaG1xrZPltjg/formResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });
    
      if (response.ok) {
        console.log('Form submitted successfully.');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Styles for the button with hover effect
  const buttonStyle = {
    backgroundColor: isHovered ? '#c9cad3' : '#3D48A6',
    color: isHovered ? '#3D48A6' : '#fff',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <Box
      style={{
        width: 400,
        margin: '0 auto',
        padding: 20,
        backgroundColor: '#fff',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        position: 'relative',
      }}
    >
      <IconButton
        onClick={closePopup}
        style={{
          position: 'absolute',
          right: 8,
          top: 0,
          color: '#fff',
          backgroundColor: '#3D48A6',
          transition: 'color 0.3s ease',
          '&:hover': { color: '#2c388e', backgroundColor: '#c9cad3' }, // Ensure this is inline for hover
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" gutterBottom style={{ color: '#3D48A6' }}>
        Enquire Now
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          style={{ marginBottom: 16 }}
        />
        <TextField
          fullWidth
          required
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={!!errors.mobile}
          helperText={errors.mobile}
          style={{ marginBottom: 16 }}
        />
        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          style={{ marginBottom: 16 }}
        />
        <FormControl fullWidth required style={{ marginBottom: 16 }}>
          <InputLabel id="course-select-label">Interested Course</InputLabel>
          <Select
            labelId="course-select-label"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{
              color: '#3D48A6',
              '& .MuiSelect-select': {
                paddingY: '12px', // Adjust padding if needed
              },
            }}
          >
            <MenuItem value="AI">Artificial Intelligence</MenuItem>
            <MenuItem value="DS">Data Science</MenuItem>
            <MenuItem value="ML">Machine Learning</MenuItem>
            <MenuItem value="WebDev">Web Development</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)} // Set hover state
          onMouseLeave={() => setIsHovered(false)} // Reset hover state
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Enrollment submitted!"
      />
    </Box>
  );
};

export default EnrollmentForm;
