import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const Privacypolicy = () => {
  return (
    <div className="justify-center flex">
            <Helmet>
        <title>Brand-Shop | Privacypolicy</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="container space-y-6 sm:px-0 py-10 px-5">

        <Link to='/'><button className="btn btn-neutral">Back</button></Link>


        <h1>Brand-Shop Tech & Electronics Website - Privacy Policy

Last Updated: October 20, 2023

Introduction

Welcome to Brand-Shop! This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website. By using the Site, you agree to the terms of this Privacy Policy.

Information We Collect

    Personal Information: We may collect personal information that you provide when you use the Site, such as your name, email address, phone number, and shipping address. We collect this information when you make a purchase, create an account, or contact us.

    Usage Information: We may collect information about how you use the Site, including your browsing history, the pages you visit, and the products you view. This information helps us improve our services and understand your preferences.

    Cookies: We use cookies and similar tracking technologies to collect information about your interactions with the Site. You can control or disable cookies through your browser settings.

How We Use Your Information

    Order Fulfillment: We use your personal information to process and fulfill your orders, provide customer support, and deliver products to you.

    Communication: We may use your email address or phone number to communicate with you about your orders, promotions, and updates related to our products and services. You can opt out of promotional emails.

    Improvements: We use the information collected to enhance our Site, develop new features, and improve your user experience.

Information Sharing

We do not sell, trade, or share your personal information with third parties, except as described in this Privacy Policy or when required by law. We may share information with:

    Service Providers: We may share information with trusted service providers who assist us in delivering our services, such as payment processors or shipping companies.

    Legal Compliance: We may disclose your information if required by law, in response to a court order, or when necessary to protect our rights or the safety of others.

Data Security

We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of online data transmission or storage is entirely secure.

Your Choices

You can choose not to provide certain personal information, but it may limit your ability to use certain features of the Site. You can also opt out of receiving promotional emails by following the unsubscribe instructions in the email.

Childrens Privacy

Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take appropriate action.

Changes to this Policy

Brand-Shop reserves the right to update or modify this Privacy Policy at any time. We will notify you of significant changes. Your continued use of the Site after the changes constitutes your acceptance of the modified policy.

Contact Information

If you have any questions or concerns about this Privacy Policy, please contact us at:

Brand-Shop Tech & Electronics
Email: privacy@brandshop.com
Address: [Your Address]

</h1>
      </div>
    </div>
  )
}

export default Privacypolicy