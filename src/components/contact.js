import React from 'react';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NavbarV3 from './global-components/navbar-v3';
const ContactV1 = () => {
    return <div>
        <NavbarV3 CustomClass="ltn__header-transparent gradient-color-2" />
        <PageHeader headertitle="Contact Us" img='assets/img/slider/contact.jpg' subheader="Contact" />
        <ContactInfo />
        <ContactForm />
        {/* <Map /> */}
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ContactV1

