import { Box, Container, Grid, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Image from "../../assets/contactus.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import emailjs from "@emailjs/browser";
import { EMAIL_CONSTANTS_ENUM } from "../../configs/applicationConstants";
import LoadingButton from "@mui/lab/LoadingButton";
import { enqueueSnackbar } from "notistack";

const validate = (data) => {
  let errors = {};
  if (!data.user_name) {
    errors.user_name = "Please enter name";
  }
  if (!data.user_email) {
    errors.user_email = "Please enter email";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.user_email)
  ) {
    errors.user_email = "Please enter valid email";
  }

  if (!data.message) {
    errors.message = "Please enter your message";
  }
  return errors;
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    data: {
      user_name: "",
      user_email: "",
      message: "",
    },
    errors: {},
  });

  const handleChange = ({ target }) => {
    const { data, errors } = state;

    data[target.name] = target.value;
    errors[target.name] = "";
    setState({ data: data, errors: errors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorsFound = validate(state.data);

    if (Object.keys(errorsFound).length > 0) {
      setState({
        ...state,
        errors: errorsFound,
      });
      return;
    }
    setIsLoading(true);
    emailjs
      .send(
        EMAIL_CONSTANTS_ENUM.SERVICE_ID,
        EMAIL_CONSTANTS_ENUM.TEMPLATE_ID,
        {
          user_name: state.data.user_name,
          user_email: state.data.user_email,
          message: state.data.message,
        },
        EMAIL_CONSTANTS_ENUM.PUBLIC_KEY
      )
      .then(
        (result) => {
          enqueueSnackbar("Your message has been delivered!", {
            variant: "success",
          });
          setState({
            data: {
              user_name: "",
              user_email: "",
              message: "",
            },
            errors: {},
          });
        },
        (error) => {
          enqueueSnackbar(error?.text, {
            variant: "error",
          });
          console.log(error?.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box className="section" id="Contact">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={5} sm={5}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <img src={Image} alt="about us" className="responsive-img" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <SectionHeading
                label="Contact Me"
                heading="Seems to be Interesting"
                description="Got my portfolio seen, than feel free to contact me for your future projects"
              />
              <br />
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  className="form-container"
                >
                  <Grid item xs={12} sm={10}>
                    <TextField
                      label="Name"
                      name="user_name"
                      variant="outlined"
                      fullWidth
                      error={!!state.errors?.user_name}
                      helperText={state.errors.user_name}
                      value={state.data.user_name}
                      onChange={handleChange}
                      InputLabelProps={{
                        classes: {
                          root: "form-label",
                        },
                      }}
                      inputProps={{
                        autoComplete: "off",
                        form: {
                          autoComplete: "off",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField
                      label="Email"
                      name="user_email"
                      variant="outlined"
                      fullWidth
                      value={state.data.user_email}
                      error={!!state.errors.user_email}
                      helperText={state.errors.user_email}
                      onChange={handleChange}
                      InputLabelProps={{
                        classes: {
                          root: "form-label",
                        },
                      }}
                      inputProps={{
                        autoComplete: "off",
                        form: {
                          autoComplete: "off",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField
                      label="Message"
                      name="message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                      value={state.data.message}
                      error={!!state.errors.message}
                      helperText={state.errors.message}
                      onChange={handleChange}
                      InputLabelProps={{
                        classes: {
                          root: "form-label",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <LoadingButton
                      loading={isLoading}
                      variant="text"
                      type="submit"
                      fullWidth
                      className="submit-btn"
                    >
                      Submit
                    </LoadingButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default Contact;
