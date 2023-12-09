import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const Termsofuse = () => {
  return (
    <div className="justify-center flex">
         <Helmet>
        <title>Brand-Shop | Termsofuse</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="container space-y-6 sm:px-0 py-10 px-5">
        <Link to='/'><button className="btn btn-neutral">Back</button></Link>
            <h1>
            Brand-Shop Tech & Electronics Website - Terms of Use

Last Updated: October 20, 2023

Acceptance of Terms

Welcome to Brand-Shop! By accessing or using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use our Site.

User Eligibility

By using this Site, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a contract. If you are accessing the Site on behalf of a company or other entity, you represent and warrant that you have the authority to bind that entity to these Terms.

Privacy Policy

Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms of Use. Please review our Privacy Policy to understand how we collect, use, and disclose information.

Use of the Site

    License: Brand-Shop grants you a limited, non-exclusive, and non-transferable license to access and use the Site for personal and non-commercial purposes only.

    Prohibited Activities: You agree not to:
        Use the Site for any illegal or unauthorized purpose.
        Attempt to gain unauthorized access to the Site or its systems.
        Disrupt or interfere with the Sites operation.
        Upload or distribute viruses, malware, or any other harmful code.
        Violate any applicable laws, rules, or regulations.

    Intellectual Property: The Site and its content, including but not limited to text, graphics, images, and logos, are owned by Brand-Shop and are protected by intellectual property laws. You may not use, reproduce, or distribute our content without our written permission.

Disclaimer

The content on the Site is provided for general informational purposes only. Brand-Shop does not warrant the accuracy, completeness, or reliability of any content. Your use of the Site and its content is at your own risk.

Limitation of Liability

Brand-Shop and its affiliates will not be liable for any direct, indirect, special, incidental, consequential, or punitive damages arising out of your use of or inability to use the Site.

Changes to Terms

Brand-Shop reserves the right to modify or replace these Terms of Use at any time. We will notify you of significant changes. Your continued use of the Site after the changes constitutes your acceptance of the modified Terms.

Termination

Brand-Shop may terminate your access to the Site at any time, with or without cause. Upon termination, your right to use the Site will cease immediately.

Contact Information

If you have any questions about these Terms of Use, please contact us at:

Brand-Shop Tech & Electronics


Thank you for using Brand-Shop!

            </h1>
        </div>
    </div>
  )
}

export default Termsofuse