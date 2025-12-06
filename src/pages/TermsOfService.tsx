import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="min-h-screen">
      <Header onCTAClick={handleCTAClick} />

      <div className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>

          <div className="text-sm text-muted-foreground mb-8">
            Last Updated: December 6, 2025
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                Welcome to VetLedger. These Terms of Service ("Terms") govern your access to and use of VetLedger's SaaS platform, services, and website (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              <p className="leading-relaxed">
                If you are using the Service on behalf of an organization, you agree to these Terms on behalf of that organization and represent that you have the authority to do so. In that case, "you" and "your" refer to that organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                VetLedger provides a cloud-based practice management platform designed for veterinary practices. Our Service includes features for pricing optimization, workflow automation, practice analytics, and other veterinary practice management tools.
              </p>
              <p className="leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Security</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.1 Account Creation</h3>
              <p className="leading-relaxed mb-4">
                To use certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.2 Account Security</h3>
              <p className="leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use a strong password and keep it confidential</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Ensure that you log out from your account at the end of each session</li>
                <li>Not share your account credentials with others</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.3 Account Termination</h3>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, illegal, or abusive activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use Policy</h2>
              <p className="leading-relaxed mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon or violate intellectual property rights of others</li>
                <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
                <li>Upload viruses, malware, or any malicious code</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Scrape, data mine, or use automated tools to access the Service</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription and Payment</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.1 Subscription Plans</h3>
              <p className="leading-relaxed mb-4">
                Our Service is offered on a subscription basis with various pricing plans. Subscription details, including pricing and features, are available on our website.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.2 Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Subscription fees are billed in advance on a recurring basis (monthly or annually)</li>
                <li>You must provide valid payment information and authorize us to charge your payment method</li>
                <li>All fees are non-refundable except as required by law or stated in these Terms</li>
                <li>We may change our pricing with 30 days' notice to existing subscribers</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.3 Free Trials</h3>
              <p className="leading-relaxed mb-4">
                We may offer free trials for a limited period. At the end of the trial period, you will be charged the applicable subscription fee unless you cancel before the trial ends.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.4 Cancellation and Refunds</h3>
              <p className="leading-relaxed">
                You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. We do not provide refunds for partial subscription periods, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data and Privacy</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.1 Your Data</h3>
              <p className="leading-relaxed mb-4">
                You retain all rights to the data you submit to the Service ("Customer Data"). You grant us a limited license to use, store, and process Customer Data solely to provide and improve the Service.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.2 Data Security</h3>
              <p className="leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data. However, you acknowledge that no security system is impenetrable, and we cannot guarantee the absolute security of your data.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.3 Data Processing</h3>
              <p className="leading-relaxed mb-4">
                We process data in accordance with our Privacy Policy and applicable data protection laws. For enterprise customers, we may enter into a separate Data Processing Agreement (DPA).
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.4 Data Backup and Recovery</h3>
              <p className="leading-relaxed">
                We perform regular backups of Customer Data. However, you are responsible for maintaining your own backup copies of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.1 Our Rights</h3>
              <p className="leading-relaxed mb-4">
                The Service, including all content, features, functionality, software, and technology, is owned by VetLedger and is protected by copyright, trademark, patent, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.2 Limited License</h3>
              <p className="leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes, subject to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.3 Restrictions</h3>
              <p className="leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Services and Integrations</h2>
              <p className="leading-relaxed mb-4">
                Our Service may integrate with or contain links to third-party services, applications, or websites. We are not responsible for the content, functionality, or practices of these third parties. Your use of third-party services is subject to their own terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers and Warranties</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.1 "As Is" Basis</h3>
              <p className="leading-relaxed mb-4">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.2 No Guarantee</h3>
              <p className="leading-relaxed mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Service will meet your specific requirements</li>
                <li>The Service will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from using the Service will be accurate or reliable</li>
                <li>Any errors in the Service will be corrected</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.3 Professional Advice</h3>
              <p className="leading-relaxed">
                The Service is not a substitute for professional veterinary, legal, financial, or other professional advice. You should consult appropriate professionals for specific advice tailored to your situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VETLEDGER AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
              </p>
              <p className="leading-relaxed mb-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS RELATED TO THE SERVICE EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
              <p className="leading-relaxed">
                Some jurisdictions do not allow the exclusion or limitation of certain damages, so these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless VetLedger and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) your Customer Data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Service Level Agreement (SLA)</h2>
              <p className="leading-relaxed mb-4">
                We strive to maintain high availability of our Service. For enterprise customers, specific uptime guarantees and remedies may be outlined in a separate Service Level Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.1 Informal Resolution</h3>
              <p className="leading-relaxed mb-4">
                If you have any dispute with us, you agree to first contact us and attempt to resolve the dispute informally for at least 30 days before initiating any formal proceedings.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.2 Arbitration</h3>
              <p className="leading-relaxed mb-4">
                Any dispute that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in English and the seat of arbitration shall be determined by mutual agreement.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.3 Class Action Waiver</h3>
              <p className="leading-relaxed">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Changes to Terms</h2>
              <p className="leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending an email notification to your registered email address (for material changes)</li>
              </ul>
              <p className="leading-relaxed">
                Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Termination</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">16.1 Termination by You</h3>
              <p className="leading-relaxed mb-4">
                You may terminate your account at any time by following the cancellation process in your account settings or by contacting our support team.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">16.2 Termination by Us</h3>
              <p className="leading-relaxed mb-4">
                We may suspend or terminate your access to the Service immediately, without prior notice, if you breach these Terms or engage in any fraudulent or illegal activity.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">16.3 Effect of Termination</h3>
              <p className="leading-relaxed">
                Upon termination, your right to use the Service will immediately cease. We may delete your data within 30 days of termination unless required by law to retain it. You may request a copy of your data before termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">17. Export Compliance</h2>
              <p className="leading-relaxed">
                You agree to comply with all applicable export and import laws and regulations. You represent that you are not located in a country subject to U.S. government embargo or designated as a "terrorist supporting" country.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">18. Miscellaneous</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">18.1 Entire Agreement</h3>
              <p className="leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and VetLedger regarding the Service.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">18.2 Severability</h3>
              <p className="leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">18.3 Waiver</h3>
              <p className="leading-relaxed mb-4">
                No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">18.4 Assignment</h3>
              <p className="leading-relaxed">
                You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">19. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: legal@vetledger.com</li>
                <li>Website: www.vetledger.com</li>
              </ul>
            </section>

            <section className="mt-12 pt-8 border-t border-muted-foreground/20">
              <p className="text-sm leading-relaxed">
                By using VetLedger's Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
