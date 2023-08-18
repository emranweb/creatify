import React from "react";

const Footer = () => {
    return (
        <div className="py-[200px]">
            <div className="container">
                <div className="flex lg:flex-col flex-1 items-end">
                    <div>
                        <h3 className="text-[90px] sm:text-[40px] sm:leading-[60px] font-semibold font-manrope leading-[103px] tracking-[0.04em]">
                            Wanna be starting something ?
                        </h3>
                        <p>
                            Just feel free to contact if you wanna collaborate
                            with me, or simply have a conversation.
                        </p>
                        <div>
                            <ul className="flex space-x-4">
                                <li className="underline underline-offset-2">
                                    Facebook
                                </li>
                                <li className="underline underline-offset-2">
                                    Twitter
                                </li>
                                <li className="underline underline-offset-2">
                                    Linkedin
                                </li>
                                <li className="underline underline-offset-2">
                                    Youtube
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-[60px] sm:text-[40px] sm:mt-7 font-medium font-manrope tracking-[0.01em text-dark underline underline-offset-8">
                            Creatify@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
