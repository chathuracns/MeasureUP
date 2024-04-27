import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useRef, useState } from "react";
import background from "./../Resources/background_support_2.png";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SupportImage from "./../Resources/MeasureUP png_5.jpg";

const SupportSection = () => {
  const PictureSection = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const ContentSection = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginLeft: "20%",
      marginBottom: "10%",
      width: "70%",
    },
  }));

  const ContentBox = styled(Box)({
    fontFamily: "Poppins",
    marginTop: "3%",
  });

  const Text = styled(Typography)({
    fontFamily: "Poppins",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const form = useRef();

  const serviceId = "service_p2llj2x";
  const templateId = "template_48kndik";
  const publicKey = "HwlELZzZrVSeQmZsd";
  const toEmail = "bsamw996@gmail.com";

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("In sending mail");
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          toast("Email sent successfully!");
          console.log(result.text);
          console.log("Send successful before toast");
          toast("Email sent successfully!");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
    toast("Email sent successfully!");
  };

  return (
    <>
      <ContentBox sx={{ display: "flex", flexDirection: "row" }} id="support">
        <ToastContainer />
        <ContentSection sx={{ width: "60%", ml: "10%", mt: "10%" }}>
          <Text variant="h5" sx={{ fontWeight: 650 }} gutterBottom>
            Interested in trying Measure Up?
          </Text>
          <Text variant="body1" sx={{ fontWeight: 300 }} gutterBottom>
            If you'd like to show support for MeasureUP, please share your
            details, and our support team will be in touch. Thank you for
            considering us!
          </Text>
          <Box className="form_section">
            <form onSubmit={sendEmail} ref={form}>
              <Box>
                <Text
                  variant="body1"
                  display="block"
                  sx={{ ml: "1%", fontWeight: 500 }}
                  gutterBottom
                >
                  Name:
                </Text>
                <TextField
                  required
                  id="name"
                  size="small"
                  sx={{ width: "70%", mt: "0px" }}
                  name="name"
                  type="text"
                  defaultValue=""
                />
              </Box>
              <Box sx={{ mt: "2%" }}>
                <Text
                  variant="body1"
                  display="block"
                  sx={{ ml: "1%", fontWeight: 500 }}
                  gutterBottom
                >
                  Email:
                </Text>
                <TextField
                  required
                  id="email"
                  size="small"
                  sx={{ width: "70%", mt: "0px" }}
                  name="email"
                  type="email"
                  defaultValue=""
                />
              </Box>
              <TextField
                required
                id="to_email"
                name="to_email"
                type="email"
                defaultValue={toEmail}
                sx={{
                  display: "none",
                }}
              />
              <Box sx={{ mt: "5%" }}>
                <LoadingButton
                  loading={loading}
                  variant="contained"
                  type="submit"
                  value="Send"
                  size="large"
                >
                  Submit
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </ContentSection>

        <PictureSection sx={{ ml: "10%" }}>
          <Box
            sx={{
              background: `url('${SupportImage}') #ffffff 54% / cover no-repeat`,
              width: "525px",
              height: "550px",
              
            }}
          ></Box>
        </PictureSection>
      </ContentBox>
    </>
  );
};

export default SupportSection;
