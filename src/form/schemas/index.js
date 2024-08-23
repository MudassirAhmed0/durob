import * as Yup from "yup";
const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const contactSchema = Yup.object({
  fullname: Yup.string().required("Full Name is required."),
  subject: Yup.string().required("Subject is required."),
  email: Yup.string()
    .matches(emailRegx, "Not a valid email address")
    .required("Email is required"),
  message_subject: Yup.string().notRequired(),
  message: Yup.string().required("Message is required."),
});

export const contactSecondVarientSchema = Yup.object({
  subject: Yup.string().required("Subject is required."),
  fullname: Yup.string().required("Full Name is required."),
  nationality: Yup.string().required("Nationality is required."),
  gender: Yup.string().required("gender is required."),
  email: Yup.string()
    .matches(emailRegx, "Not a valid email address")
    .required("Email is required"),
  phone: Yup.string().min(10).required("Phone number is required"),
}).shape({
  file: Yup.mixed()
    .required("CV is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= 2000000 // 2MB
    )
    .test("fileFormat", "Unsupported Format", (value) =>
      ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
    ),
});

export const getValidationSchema = (formData) => {
  const shape = {};

  formData?.forEach((field) => {
    let schema = Yup.string(); // default to string type

    if (field.required) {
      schema = schema.required(`${field.placeholder} is required`);
    }

    switch (field.type) {
      case "select":
        // Handle select case, might need further customization based on options, etc.
        // schema = schema.oneOf(field.options.map(option => option.value));
        schema = schema.required(`${field.placeholder} is required`);
        break;
      case "textarea":
        // textarea is treated similarly to text
        break;
      case "text":
        // additional validation for email or other patterns can be added here
        if (
          field.id === "email" ||
          field.placeholder.toLowerCase().includes("email")
        ) {
          schema = schema.matches(emailRegx, "Invalid email format");
        }
        break;
      case "number":
        // additional validation for email or other patterns can be added here
        schema = schema.min(10);
        break;
      case "files":
        schema = Yup.mixed()
          .required(`${field.placeholder} is required`)
          .test("fileSize", "File too large, Max 2MB ", (value) => {
            // Ensure the value is defined and not null before checking the size
            return value && value.size <= 2000000; // 2MB
          })
          .test("fileFormat", "Unsupported Format", (value) => {
            // Ensure the value is defined and not null before checking the type
            return (
              value &&
              ["image/jpeg", "image/jpg", "image/png", "application/pdf"].includes(
                value.type
              )
            );
          });
        break;
      // Add more cases here for other input types
    }

    shape[field.id] = schema;
  });

  return Yup.object().shape(shape);
};
