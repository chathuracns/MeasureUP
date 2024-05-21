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
    width: "55%",
    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
  }));

  const ContentSection = styled(Box)(({ theme }) => ({
    width: "45%",
    marginLeft: "10%",
    marginTop: "5%",
    [theme.breakpoints.down("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "10% 10% 5% 10%",
    },
  }));

  const Fields = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const ImageRight = styled("img")(({ theme }) => ({
    marginLeft: "10%",
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },

    width: "70%",
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

  const serviceId = "service_s3dj6dx";
  const templateId = "template_b6kg0x9";
  const publicKey = "qjVRyG0WJeGWJwh6g";
  const toEmail = "chathuranirmalweerasinghe@gmail.com";

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("In sending mail");
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          
          console.log(result.text);
          console.log("Send successful before toast");
          alert("Thank you for your interest in trying MeasureUp. Our team will contact you soon!");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };


  return (
    <>
      <ContentBox
        sx={{ display: "flex", flexDirection: "row", scrollMarginTop: "20px" }}
        id="support"
      >
        <ToastContainer />
        <ContentSection>
          <Text variant="h5" sx={{ fontWeight: 650 }} gutterBottom>
            Interested in trying MeasureUP?
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
                <Fields
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
                <Fields
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
              <Box sx={{ mt: "5%", ml: "35%" }}>
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

        <PictureSection>
          <ImageRight src={SupportImage} />
        </PictureSection>
      </ContentBox>
    </>
  );
};

export default SupportSection;
