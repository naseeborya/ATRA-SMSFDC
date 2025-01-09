import { useTranslations } from "next-intl";
import {
  FiEdit3,
  FiCheckSquare,
  FiThumbsUp,
  FiSend,
  FiMail,
} from "react-icons/fi";

export default function Instructions() {
  const t = useTranslations("landing-page");
  const steps = [
    {
      title: "Fill Out the Form",
      description:
        "Begin by entering all required information into the form fields, such as your name, email, and address. Ensure that each mandatory field marked with an asterisk (*) is completed. Be mindful of any auto-filled or pre-selected data and update it as necessary to ensure everything is accurate.",
      icon: <FiEdit3 size={116} />,
    },
    {
      title: "Review the Information",
      description:
        "Once you’ve filled out the form, take a moment to review all the details you’ve entered. Carefully check for any mistakes, missing data, or discrepancies. It’s essential to confirm that everything is correct before proceeding to the next step.",
      icon: <FiCheckSquare size={116} />,
    },
    {
      title: "Agree to Terms and Conditions",
      description:
        "If the form includes a checkbox for agreeing to the terms and conditions or privacy policy, take the time to read through them thoroughly. Once you’ve reviewed the policies, tick the checkbox to confirm your agreement.",
      icon: <FiThumbsUp size={116} />,
    },
    {
      title: "Submit the Form",
      description:
        "Once you’re confident that all the information is correct and you’ve agreed to any necessary terms, click the 'Submit' button to send your form. Wait for a confirmation message or a new page to appear, indicating that your form has been successfully submitted.",
      icon: <FiSend size={116} />,
    },
    {
      title: "Confirmation",
      description:
        "After submission, some forms may send you a confirmation email or display a reference number for your records. It’s a good idea to keep this confirmation in case you need to follow up or verify your submission later.",
      icon: <FiMail size={116} />,
    },
  ];

  return (
    <section dir="ltr" className=" px-[256px] py-12  ">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold text-brand-primary my-20 text-center">
          Instructions for Submitting the Form
        </h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={` py-14 flex items-end justify-between  ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Icon Section */}
              <div className="flex-shrink-0 rounded-md bg-white py-10 px-32 text-brand-primary ">
                {step.icon}
              </div>
              {/* Content Section */}

              {/* my changes */}
              <div
                className={`w-2/3 p-4  ${
                  index % 2 === 0 ? "text-left" : "text-left"
                }`}
              >
                <h3 className=" text-3xl font-bold text-brand-primary mb-4 ">
                  {index + 1}. {step.title}
                </h3>
                <p className=" text-brand-primary text-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
