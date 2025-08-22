import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Privacy</span>
            <span className="text-foreground"> Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground"><strong>Effective Date:</strong> August 21, 2025</p>

          <h3>1. Introduction</h3>
          <p>
            Welcome to CLUSTER-VSET ("we," "our," "us"). We are a student-led organization committed to advancing research and education in data science. This Privacy Policy explains how we handle information in connection with our website (the "Service"). As a non-commercial, informational entity, our data collection is minimal and purposeful.
          </p>

          <h3>2. Information We Collect</h3>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Personal Information You Provide:</strong> When you contact us via email, you provide us with your email address and any other information you choose to include in your message. This is the only personally identifiable information we actively collect.
            </li>
            <li>
              <strong>Anonymous Usage Data:</strong> We may collect non-personally identifiable information automatically when you visit our website. This may include your browser type, the pages you visit, the time and date of your visit, and the time spent on those pages. This data is aggregated and cannot be used to identify you personally. We do not use tracking cookies.
            </li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>We use the information we collect for the following limited purposes:</p>
          <ul>
            <li><strong>To Respond to You:</strong> We use the contact information you provide to respond to your questions, inquiries, or collaboration requests.</li>
            <li><strong>To Improve Our Service:</strong> Anonymous usage data helps us understand how visitors interact with our website, allowing us to improve its content, structure, and performance.</li>
            <li><strong>To Communicate with You:</strong> If you are a member or have explicitly requested to join a mailing list, we may use your email to send updates about our events, projects, and activities.</li>
          </ul>

          <h3>4. Data Retention and Sharing</h3>
          <p>
            We retain your personal information (such as email correspondence) only for as long as necessary to fulfill the purposes for which it was collected or as required by university policy or law.
          </p>
          <p>
            <strong>We do not sell, trade, rent, or share your personal information with third parties for marketing purposes.</strong>
          </p>
          
          <h3>5. Data Security</h3>
          <p>
            We are committed to protecting your information. We implement reasonable administrative and technical safeguards to prevent unauthorized access, use, or disclosure of the information we collect. However, no internet transmission is ever 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h3>6. Children's Privacy</h3>
          <p>
            Our Service is not directed to individuals under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
          </p>

          <h3>7. Third-Party Links</h3>
          <p>
            Our website contains links to external sites (e.g., GitHub, LinkedIn, Twitter). This Privacy Policy does not apply to those third-party sites. We encourage you to review the privacy policies of any external sites you visit.
          </p>

          <h3>8. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.
          </p>

          <h3>9. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:dsclub.cluster@vips.edu" className="text-primary">dsclub.cluster@vips.edu</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;