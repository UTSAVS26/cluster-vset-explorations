import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12">
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Terms of</span>
            <span className="text-foreground"> Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Please read these terms carefully before using our website and resources.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground"><strong>Effective Date:</strong> August 21, 2025</p>

          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing or using the CLUSTER-VSET website (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h3>2. Use of the Service and Content</h3>
          <p>
            Our Service provides information about our student organization, our projects, events, and educational resources. This content is for personal, non-commercial, and informational purposes only.
          </p>
          <ul>
            <li><strong>Permitted Use:</strong> You are permitted to view and access the content for educational and academic purposes, in line with the principles of academic integrity.</li>
            <li><strong>Prohibited Use:</strong> You agree not to use the Service for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to harass, abuse, or harm another person.</li>
          </ul>

          <h3>3. Intellectual Property Rights</h3>
          <p>
            The Service and its original content (excluding content from third parties), features, and functionality are and will remain the exclusive property of CLUSTER-VSET. The content is protected by copyright and other intellectual property laws. Unless otherwise noted, our resources are shared under a license that permits educational and non-commercial use with proper attribution.
          </p>
          
          <h3>4. Links To Other Websites</h3>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by CLUSTER-VSET. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that CLUSTER-VSET shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with the use of any such content or services available on or through any such websites.
          </p>

          <h3>5. Disclaimer of Warranties; Limitation of Liability</h3>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the content is accurate, complete, reliable, or correct; that the Service will meet your requirements; or that the site will be available at any particular time or location, uninterrupted or secure.
          </p>
          <p>
            In no event shall CLUSTER-VSET, nor its members or advisors, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the Service.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These Terms shall be governed in accordance with the policies and regulations of our affiliated academic institution and the laws of the jurisdiction in which it resides, without regard to its conflict of law provisions.
          </p>
          
          <h3>7. Changes to These Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of changes by posting the new Terms on this page. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:dsclub.cluster@vips.edu" className="text-primary">dsclub.cluster@vips.edu</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;