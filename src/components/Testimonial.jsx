import React from "react";
import LineTitle from "./LineTitle";
import TestimonialPerson from "../assets/testimonial-person.jpg";

const Testimonial = () => {
    return (
        <div className="flex sm:my-[30px] sm:py-[60px] lg:flex-col space-x-[140px] lg:space-x-0  items-center bg-[#FAFBFC]">
            <img src={TestimonialPerson} alt="testimonial person" />
            <div className="pr-8 lg:pl-8 lg:mt-8">
                <LineTitle>testimonials</LineTitle>
                <h5 className="text-[29px] leading-[53px] tracking-[0.01em]  font-normal font-manrope text-dark mt-[50px] mb-[24px]">
                    “Lorem ipsum dolor sit amet, elit consectetur adipiscing.
                    Odio tincidunt et, massa, turpis nec dolor posuere tempus.
                    Nulla congue et dolor sit amet, elit consectetur
                    adipiscing.”
                </h5>
                <div>
                    <h6 className="text-[21px] font-medium leading-[47px] tracking-[0.02em] font-manrope capitalize text-dark">
                        Lucas wolfer
                    </h6>
                    <p className="text-[14px] font-medium leading-[24px] tracking-[0.05em] font-manrope uppercase text-[##737373]">
                        ceo - raisins
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
