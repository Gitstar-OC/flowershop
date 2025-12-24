"use client"
import { useState } from "react";

const Services = () => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

    function handleServiceClick(index: number) {
        setSelectedServiceIndex(index); 
    }

    return (
        <div>
            <div>
                {services.map((service, index) => (
                    <div key={index} onClick={() => handleServiceClick(index)}>     
                    {service.title}
                    </div>
                ))}
            </div>

            <div>
                {services[selectedServiceIndex].title}    
                {services[selectedServiceIndex].description}    
                {services[selectedServiceIndex].image}  
            </div>
        </div>
    );
}

export default Services;

const services = [
    {
        title: "Video", 
        description: "", 
        image: ''
    }, 
    {
        title: "Audio",
        description: "",    
        image: ''   
    },
    {   
        title: "CTV", 
        description: "",    
        image: ''
    }, 
    {
        title: "Display",   
        description: "",    
        image: ''
    }, 
    {
        title: "Native", 
        description: "",
        image: ''
    }, 
    {
        title: "Shop", 
        description: "",
        image: ''           
    }
]