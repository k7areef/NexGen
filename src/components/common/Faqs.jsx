import SectionLayout from "@components/sections/common/SectionLayout";
import { faArrowRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import faqs from "@data/faqs.json";
import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";

function Faqs() {

    const [faqOpen, setFaqOpen] = React.useState(0);

    return (
        <section className="faqs-section py-5 md:py-10" id="faqs">
            <div className="container">
                <SectionLayout
                    title="Frequently Asked Questions"
                    className="p-0! border-0!"
                    headerChildren={<Link
                        to={'/'}
                        className="flex items-center gap-2 group w-fit"
                    >
                        <div className="text-orange-80 -rotate-45 w-12 h-12 rounded-full border border-dark-20 flex items-center justify-center shrink-0 transiiton duration-200 ease-in sm:group-hover:border-dark-35">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <p className="text-grey-70! transition duration-200 ease-in sm:group-hover:text-grey-80!">View All</p>
                    </Link>}
                >
                    <div className="content-wrapper flex lg:items-start gap-5 max-lg:flex-col-reverse">
                        <div className="faqs space-y-5 lg:w-[60%]">
                            {
                                faqs.map((faq, index) => (<div
                                    key={index}
                                    onClick={() => setFaqOpen(prev => prev === index ? null : index)}
                                    className="faq-card rounded-lg bg-dark-10 p-5 flex gap-5 md:gap-10 cursor-pointer select-none"
                                >
                                    <div className="text-wrapper w-full mt-2">
                                        <h3 className="font-medium text-lg sm:text-xl">{faq.question}</h3>
                                        <div className={`answer-wrapper transition-all duration-200 ease grid ${faqOpen === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                            <div className={`overflow-hidden transition-opacity duration-300 ease-in delay-75 ${faqOpen === index ? "opacity-100" : "opacity-0"}`}>
                                                <hr className="my-5 border-dark-15" />
                                                <p className="text-grey-70">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-status w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-dark-12 border border-dark-20 text-orange-80">
                                        <FontAwesomeIcon icon={faqOpen === index ? faMinus : faPlus} />
                                    </div>
                                </div>))
                            }
                        </div>
                        <div className="add-faq bg-dark-10 rounded-lg p-5 lg:w-[40%]">
                            <h3 className="font-medium text-lg sm:text-xl">Ask your question</h3>
                            <hr className="my-5 border-dark-15" />
                            <Formik
                                initialValues={{ name: '', email: '', question: '' }}
                                validationSchema={Yup.object({
                                    name: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required('Required'),
                                    email: Yup.string().email('Invalid email address').required('Required'),
                                    question: Yup.string().required('Required'),
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <FormikField
                                            {...{
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.name,
                                                errors: errors.name,
                                                touched: touched.name,
                                                label: "Name",
                                                typeField: "input",
                                                name: "name",
                                                id: "name",
                                                autoComplete: "on",
                                                parentClassName: "mb-5",
                                                placeholder: "Enter your name",
                                            }}
                                        />
                                        <FormikField
                                            {...{
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.email,
                                                errors: errors.email,
                                                touched: touched.email,
                                                label: "Email",
                                                autoComplete: "on",
                                                typeField: "input",
                                                name: "email",
                                                id: "email",
                                                parentClassName: "mb-5",
                                                placeholder: "Enter your email",
                                            }}
                                        />
                                        <FormikField
                                            {...{
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: values.question,
                                                errors: errors.question,
                                                touched: touched.question,
                                                label: "Question",
                                                typeField: "textarea",
                                                name: "question",
                                                id: "question",
                                                parentClassName: "mb-5",
                                                placeholder: "Enter your question",
                                            }}
                                        />
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full mt-5 uppercase"
                                            title={isSubmitting ? "Sending..." : "Send"}
                                            aria-label={isSubmitting ? "Sending..." : "Send"}
                                        >
                                            Send Your Question
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Faqs;