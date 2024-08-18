import * as Yup from "yup";


export const contactSchema = Yup.object({
  fullname: Yup.string().required("Full Name is required."),
  subject: Yup.string().required("Subject is required."),
  email: Yup.string().email("Not a valid email address").required("Email is required"),
  message_subject: Yup.string().notRequired(),
  message: Yup.string().required("Message is required."),
})

export const contactSecondVarientSchema = Yup.object({
  subject: Yup.string().required("Subject is required."),
  fullname: Yup.string().required("Full Name is required."),
  nationality: Yup.string().required("Nationality is required."),
  gender: Yup.string().required("gender is required."),
  email: Yup.string().email("Not a valid email address").required("Email is required"),
  phone: Yup.string().min(10).required("Phone number is required"),
}).shape({
  file: Yup.mixed().required('CV is required').test(
    'fileSize',
    'File too large',
    value => value && value.size <= 2000000 // 2MB
  ).test(
    'fileFormat',
    'Unsupported Format',
    value => ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type)
  ),
})