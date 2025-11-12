import React from 'react';
import { Link } from 'react-router-dom';

/*
  policy_pages.jsx
  Exports three React components using Tailwind CSS:
   - ReturnsPolicy
   - PrivacyPolicy
   - TermsAndConditions
*/

export const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">Refund Policy</h1>
          <p className="mt-3 text-gray-600">Clear, fair and simple — our promise to customers.</p>
        </header>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At INI we design experiences and products with care. If you are not fully satisfied with a purchase, our refunds process is built to be as transparent and hassle-free as our learning experiences are transformational.
          </p>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">Eligibility for Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Physical products are eligible for refund within <strong>14 days</strong> of delivery, provided they are unused and in original packaging.</li>
              <li>Digital products, online courses, and access-based services (including subscriptions) are non-refundable once access has been granted or course material has been downloaded, except where required by law.</li>
              <li>If a product arrives damaged or defective, please contact us within <strong>7 days</strong> so we can resolve the issue promptly.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">How to Request a Refund</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our support team via the <Link to="/contact" className="text-[#8C52FF] underline">Contact page</Link> with your order number and a brief description.</li>
              <li>Hold on to your original packaging and proof of purchase.</li>
              <li>Once your refund is approved we will provide next steps and a refund timeline.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">Refund Timeline</h2>
            <p>
              Approved refunds are processed within <strong>7–10 business days</strong>. The exact time to reflect in your account depends on your bank or payment provider.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">Contact Us</h2>
            <p>
              If you have questions or need help with a refund, please reach out via our <Link to="/contact" className="text-[#8C52FF] underline">Contact page</Link>. We aim to respond to all requests within 48 hours.
            </p>
          </div>

          <p className="text-sm text-gray-500">This policy is subject to change; the most recent version will always appear here.</p>
        </section>
      </div>
    </div>
  );
};

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">Privacy Policy</h1>
          <p className="mt-3 text-gray-600">How we collect, use, and safeguard your information.</p>
        </header>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website and services. We are committed to protecting the privacy of our visitors and users.
          </p>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided during registration or inquiry. Educational details or preferences shared while using our services.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, IP address, device information, and other technical data collected through cookies and similar technologies.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on our website, and other analytics to improve user experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">2. How We Use Your Information</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>To provide and improve our educational services.</li>
              <li>To respond to inquiries and support requests.</li>
              <li>To send updates, newsletters, and other relevant communication.</li>
              <li>To ensure compliance with legal obligations and secure our platform.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">3. Sharing Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. However, we may share information with trusted service providers who assist us in operating our website and services, and with legal authorities if required by law or to protect our rights and property.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">4. Data Security</h2>
            <p>
              We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure. Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">5. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">6. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies to collect information and enhance user experience. Cookies help us remember your preferences, track usage and performance, and deliver personalized content. You can manage or disable cookies through browser settings; however, doing so may limit functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">7. Children’s Privacy</h2>
            <p>
              INI Varsity does not knowingly collect personal information from children under 13 without parental consent. If we discover such information has been collected, we will take immediate steps to delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">8. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of receiving marketing communications.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:info@inivarsity.com" className="text-[#8C52FF] underline">info@inivarsity.com</a>.</p>
          </div>

                 <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">9. Changes to This Privacy Policy</h2>
           
            <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with
the updated effective date. We encourage you to review this policy regularly.
</p>
          </div>


                 <div>
            <h2 className="text-2xl font-medium mt-4 mb-2">10. Contact Us</h2>
         
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please
contact us at <a href="mailto:info@inivarsity.com" className="text-[#8C52FF] underline">info@inivarsity.com</a>.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">Terms & Conditions</h1>
          <p className="mt-3 text-gray-600">The terms that govern your use of our website and services.</p>
        </header>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to these Terms. If you do not agree, please refrain from using our services.
          </p>

          <h2 className="text-2xl font-medium mt-4 mb-2">1. Acceptance of Terms</h2>
          <p>By accessing or using INI Varsity’s website and services, you confirm that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">2. Eligibility</h2>
          <p>You must be at least 13 years old to use our services. If you are under 18, parental or guardian consent is required.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">3. Use of Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the platform solely for lawful, personal, and non-commercial purposes.</li>
            <li>Avoid engaging in activities that disrupt or damage the platform or its functionality.</li>
            <li>Provide accurate and truthful information when registering or interacting with the platform.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-4 mb-2">4. Prohibited Activities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Post or share content that is illegal, harmful, or offensive.</li>
            <li>Engage in unauthorized access, hacking, or data mining.</li>
            <li>Misrepresent your identity or affiliation with any individual or entity.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-4 mb-2">5. Intellectual Property</h2>
          <p>All content and materials on the INI Varsity platform are owned by INI Varsity or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">6. User Content</h2>
          <p>By submitting any content to INI Varsity, you grant us a non-exclusive, royalty-free license to use, modify, and display your content for educational and promotional purposes.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">7. Payment and Refunds</h2>
          <p>Certain services may require payment. Fees will be clearly stated at the time of purchase. Refunds, if applicable, will follow the terms outlined during the transaction.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">8. Third-Party Links</h2>
          <p>We are not responsible for the content or privacy practices of third-party websites linked from our platform. Accessing them is at your own risk.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">9. Limitation of Liability</h2>
          <p>INI Varsity is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. We do not guarantee uninterrupted or error-free access.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">10. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to our services at any time, without notice, for violation of these Terms or other harmful conduct.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">11. Changes to Terms</h2>
          <p>INI Varsity may update these Terms periodically. Continued use of our services constitutes acceptance of the revised Terms.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">12. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes will be resolved under the jurisdiction of the courts in Chennai, Tamil Nadu, India.</p>

          <h2 className="text-2xl font-medium mt-4 mb-2">13. Contact Us</h2>
          <p>
            For questions or concerns regarding these Terms, please contact us at{" "}
            <a href="mailto:info@inivarsity.com" className="text-[#8C52FF] underline">
              info@inivarsity.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default { ReturnsPolicy, PrivacyPolicy, TermsAndConditions };
