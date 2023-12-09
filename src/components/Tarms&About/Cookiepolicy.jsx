import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"


const Cookiepolicy = () => {
  return (
    <div className="justify-center flex">
            <Helmet>
        <title>Brand-Shop | Cookiepolicy</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="container space-y-6 sm:px-0 py-10 px-5">

        <Link to='/'><button className="btn btn-neutral">Back</button></Link>

            <h1>
            Brand-Shop Tech & Electronics Website - Cookie Policy

Last Updated: October 20, 2023

Introduction

Welcome to Brand-Shop! This Cookie Policy explains how we use cookies and similar tracking technologies on our website. By using the Site, you consent to the use of cookies as described in this policy.

What Are Cookies?

Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, settings, and improve your user experience.

Types of Cookies We Use

    Essential Cookies: These cookies are necessary for the basic functionality of the Site. They enable you to navigate the site, use essential features, and access secure areas.

    Analytics Cookies: We use these cookies to collect information about how you use the Site, such as which pages you visit and how long you spend on the Site. This helps us understand and improve our websites performance.

    Marketing Cookies: These cookies are used to deliver relevant advertisements to you based on your interests and online behavior. We may share this information with third-party advertising partners.

Managing Cookies

You can control and manage your cookie preferences by adjusting your browser settings. You can block or delete cookies from your device, and you can also set your browser to notify you when a website attempts to place a cookie on your device.

Please note that blocking or deleting cookies may affect your experience on the Site. You may need to re-enter certain settings and preferences each time you visit.

Third-Party Cookies

Some cookies on our Site may be placed by third-party services, such as Google Analytics, to help us analyze site traffic. These third parties may also use cookies for advertising purposes. You can manage your preferences for these third-party cookies through their respective privacy and cookie policies.

Updates to This Policy

Brand-Shop reserves the right to update or modify this Cookie Policy at any time. We will notify you of significant changes. Your continued use of the Site after the changes constitutes your acceptance of the modified policy.

Contact Information

If you have any questions or concerns about this Cookie Policy, please contact us at:

Brand-Shop Tech & Electronics
Email: privacy@brandshop.com
Address: [Your Address]


            </h1>
        </div>
    </div>
  )
}

export default Cookiepolicy