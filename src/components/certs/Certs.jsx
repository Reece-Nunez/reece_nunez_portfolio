import React from "react";
import CertBox from "../../chip/CertBox";

// Importing certification images
import itilImage from '../../assets/itil.png'; // Replace with your actual image path
import awsImage from '../../assets/aws.png'; // Replace with your actual image path
import comptiaImage from '../../assets/comptia.png'; // Replace with your actual image path

const Certs = ({ darkMode }) => {
    return (
        <div id="certs">
        <div className="container m-auto mt-16">
            {/* heading */}
            <div data-aos="fade-up" className="relative mb-5">
                <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
                    My Certifications
                </h3>
                <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
                <div data-aos="fade-up" className="left flex-1 w-full">
                    <p className=" text-gray-700 font-medium w-[100%]">
                        Here are some of my certifications.
                    </p>
                </div>
            </div>
            {/* content */}
            <div className="flex flex-wrap justify-center gap-10">
            <CertBox image={itilImage} certName="ITIL 4 Foundation" />
            <CertBox image={awsImage} certName="AWS Cloud Practitioner" />
            <CertBox image={comptiaImage} certName="CompTIA Project+" />
            </div>
        </div>
        </div>
    );
};

export default Certs;