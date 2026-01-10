import { validateEmail } from "../../utils/validate-form";
import { submitForm } from "../../utils/form-submit";
import { errorMessage } from "../../utils/input-message";
import { errorBorder } from "../../utils/input-message";

const ContactHeading = () => (
  <>
    <p className="text-center text-[var(--neutral-grey-50)] text-sm uppercase tracking-[.3rem]">
      35.000+ Already Joined
    </p>
    <h2 className="text-center text-[var(--neutral-grey-50)] mt-2 text-2xl font-semibold">
      Stay up-to-date with what we're doing
    </h2>
  </>
);

const Form = ({ isValid, setIsValid }) => (
  <form
    className="flex flex-col gap-4 md:flex-row md:justify-between"
    onSubmit={(e) => submitForm(e, isValid, setIsValid)}
  >
    <button
      className="bg-[var(--primary-red-400)] rounded py-3 text-[var(--neutral-grey-50)] cursor-pointer w-full"
      type="submit"
    >
      Contact Us
    </button>
  </form>
);

function Contact({ isValid, setIsValid }) {
  return (
    <section className="bg-[var(--primary-blue-600)]">
      <div className=" px-6 py-12 max-w-130 flex flex-col gap-10 mx-auto mt-10">
        <div>
          <ContactHeading />
        </div>
        <Form isValid={isValid} setIsValid={setIsValid} />
      </div>
    </section>
  );
}

export default Contact;
