import React from 'react'
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='container'>
        <h1>Connect With Us</h1>
        <p>We would love to respond to your quries and help you succeed. <br /> Feel free to get in touch with us</p>
        <div className="contact-box">
            <div className="contact-left">
                <h3>Send Your Requests</h3>
                <form>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input className='input-text' type="text" placeholder='Fasih ul Hassan' />
                        </div>

                        <div className="input-group">
                            <label>Phone</label>
                            <input className='input-text' type="number" placeholder='+92 317 4426674' />
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Email</label>
                            <input className='input-text' type="email" placeholder='fasihmughal11@gmail.com' />
                        </div>

                        <div className="input-group">
                            <label>Subject</label>
                            <input className='input-text' type="text" placeholder='Enter The Subject' />
                        </div>
                    </div>


                <label>Message</label>
                <textarea rows="5" placeholder='Enter Your Message'></textarea>
                <button type='submit' className='contact-btn'>SEND</button>
                </form>

            </div>
            <div className="contact-right">
            <h3>Reach Us</h3>

            <table>
                <tr>
                    <td>Email</td>
                    <td>fasihmughal11@gmail.com</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>+92 317 4426674</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>Govt Islamia College Civil Lines
                    <br /> Lahore, Pakistan 54000</td>
                </tr>

            </table>



            </div>

        </div>

    </div>
  )
}

export default Contact