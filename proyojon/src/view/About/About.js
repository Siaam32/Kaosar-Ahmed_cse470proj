import React from 'react';
import './About.css'
const About = () => {
    const handleSubmit = () => {
        alert('submitted');
    }
    return (

        <div className='about-css'>
            <h1>Submit Your Complain</h1>
            <form >
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input  type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Your Complain</label>
                        <input  type="text" name="name" id=""  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="contact number">Submit Contact Number</label>
                        <input  type="number" name="" id="" />
                    </div>
                    
                    <input onClick={handleSubmit} className='form-submit' type="submit" value="Submit"  required/>
                </form>

                <p>Contact Information: dundermufflin@gmail.com</p>
                <p>Emergency Services: 01999999999,01888888888 </p>
        </div>

        
    );
};

export default About;