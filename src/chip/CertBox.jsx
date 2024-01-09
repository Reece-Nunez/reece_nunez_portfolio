import React from "react";

const CertBox = ({ image, certName }) => {
    return (
        <div className="cert-box flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm">
        <img src={image} alt={certName} className="h-16 w-16 mb-2" /> {/* Adjust size as needed */}
        <div className="name text-lg font-medium">{certName}</div>
        </div>
    );
};

export default CertBox;
