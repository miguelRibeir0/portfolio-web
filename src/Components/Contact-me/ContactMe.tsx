import Nav from "../Nav/Nav";
import { Fade } from "react-awesome-reveal";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "../TypeWriting";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const service_id = import.meta.env.VITE_EMAIL_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(service_id, template_id, form.current, user_id).then(
        () => {
          console.log("SUCCESS!");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    }
  };

  const formSubmit = (e: FormEvent) => {
    sendEmail(e);
    toast(
      "📨 Email has been sent!, I'll get back to you as soon as possible!",
      {
        description: "Response time is usually within 24 hours.",
      },
    );
  };

  return (
    <div>
      <Nav variation={3} />
      <div className="h-32 w-full lg:h-24"></div> {/* nav filler */}
      <Fade>
        <div className="flex items-center justify-center text-slate-50 lg:mt-10">
          <Typewriter
            text="Want to get in touch?"
            className="text-2xl font-bold lg:text-3xl"
            speed={50}
          />
        </div>
        <div className="mt-14 lg:mt-20">
          <form
            ref={form}
            onSubmit={formSubmit}
            className="m-auto flex w-2/3 flex-col gap-y-5 rounded-lg text-white lg:w-1/2 lg:p-10"
          >
            <div className="flex flex-col items-center justify-between gap-x-10 gap-y-5 lg:flex-row">
              <div className="flex w-full flex-col gap-y-5">
                <label>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="p-3 text-black"
                  required
                />
              </div>
              <div className="flex w-full flex-col gap-y-5">
                <label>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="p-3 text-black"
                  required
                />
              </div>
            </div>
            <label>
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="user_subject"
              className="p-3 text-black"
              required
            />
            <label>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="p-3 pb-20 text-black"
              required
            />
            <input
              type="submit"
              value="Send"
              className="m-auto mb-10 mt-10 w-fit cursor-pointer rounded-lg border-2 border-slate-50 p-3 px-5 text-slate-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20"
            />
          </form>
          <Toaster />
        </div>
      </Fade>
    </div>
  );
};

export default ContactMe;
