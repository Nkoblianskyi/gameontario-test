import Footer from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[hsl(var(--casino-darker))]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-[hsl(var(--casino-gold))] hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p>
              GamesOntario.com ("we," "our," or "us") is committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website and use our services. By accessing or using our website, you
              agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Demographic information (age, location, preferences)</li>
              <li>Communication preferences and feedback</li>
              <li>Any other information you choose to provide through contact forms or surveys</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we automatically collect certain information about your device and browsing
              behavior:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website and search terms used</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and maintaining our website and services</li>
              <li>Improving user experience and website functionality</li>
              <li>Analyzing website traffic and user behavior patterns</li>
              <li>Personalizing content and casino recommendations</li>
              <li>Communicating with you about updates, promotions, and relevant information</li>
              <li>Complying with legal obligations and AGCO regulatory requirements</li>
              <li>Preventing fraud and ensuring website security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small
              data files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website performance and user engagement</li>
              <li>Provide personalized content and advertisements</li>
              <li>Ensure website security and prevent fraud</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences. However, disabling cookies may affect
              website functionality and your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Google Analytics</h2>
            <p>
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects
              information anonymously and reports website trends without identifying individual visitors. This service
              helps us improve our content, user experience, and website performance. You can opt-out of Google
              Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With trusted service providers who assist in website operations and services</li>
              <li>When required by law, legal process, or government request</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
              <li>In connection with a business transfer, merger, or acquisition</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access: Request information about the personal data we hold about you</li>
              <li>Correction: Request correction of inaccurate or incomplete information</li>
              <li>Deletion: Request deletion of your personal information</li>
              <li>Portability: Request a copy of your data in a structured, machine-readable format</li>
              <li>Objection: Object to certain processing of your personal information</li>
              <li>Withdrawal of consent: Withdraw consent for specific data processing activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When
              information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under the age of 19. We do not knowingly collect personal
              information from children under 19. If we become aware that we have collected personal information from a
              child under 19, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ontario Gambling Regulations</h2>
            <p>
              As a website focused on Ontario online casinos, we comply with all applicable Ontario gambling regulations
              and AGCO requirements. We only feature licensed operators and promote responsible gaming practices in
              accordance with provincial standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. We will notify you of any material changes by posting the updated policy
              on our website with a new effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us through our website contact form. We will respond to your inquiry within a reasonable
              timeframe.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
