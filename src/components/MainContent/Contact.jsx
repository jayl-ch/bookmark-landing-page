import { validateEmail } from "../../utils/validate-form";
import { submitForm } from "../../utils/form-submit";
import { errorMessage } from "../../utils/input-error";
import { errorBorder } from "../../utils/input-error";
import { errorIcon } from "../../utils/input-error";
import iconError from "../../assets/images/icon-error.svg";

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

const Form = ({ isValid, setIsValid, setIsFormSubmitted }) => (
  <form
    className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start"
    onSubmit={(e) => submitForm(e, isValid, setIsValid, setIsFormSubmitted)}
  >
    <div className="relative grow-1 md:self-stretch rounded bg-[var(--primary-red-400)]">
      <input
        onChange={(e) => validateEmail(e, setIsValid)}
        type="email"
        className={`bg-[var(--neutral-grey-50)] placeholder:text-gray-400 px-5 h-[3rem] py-2 w-full rounded outline-0 ${errorBorder(isValid)}`}
        placeholder="Enter your email address"
      />
      <img
        src={iconError}
        alt=""
        className={`absolute top-[.9125rem] right-3 ${errorIcon(isValid)}`}
      />
      <div
        className={`transition-[bottom,max-height] bg-[var(--primary-red-400)] rounded-bl rounded-br overflow-hidden w-full flex items-end ${errorMessage(isValid)}`}
      >
        <p className="text-[var(--neutral-grey-50)] py-2 px-3 italic text-[.8rem]">
          Whoops. make sure it's an email
        </p>
      </div>
    </div>
    <button
      className="bg-[var(--primary-red-400)] rounded py-3 px-5 text-[var(--neutral-grey-50)] cursor-pointer hover:text-[var(--primary-red-400)] hover:bg-[var(--neutral-grey-50)] hover:outline-[var(--primary-red-400)] hover:outline-2"
      type="submit"
    >
      Contact Us
    </button>
  </form>
);

function Contact({ isValid, setIsValid, setIsFormSubmitted }) {
  return (
    <section className="bg-[var(--primary-blue-600)]">
      <div className=" px-6 py-12 max-w-130 flex flex-col gap-10 mx-auto mt-10">
        <div>
          <ContactHeading />
        </div>
        <Form
          isValid={isValid}
          setIsValid={setIsValid}
          setIsFormSubmitted={setIsFormSubmitted}
        />
      </div>
    </section>
  );
}

export default Contact;
