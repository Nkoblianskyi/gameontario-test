import Footer from "@/components/footer"
import Link from "next/link"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[hsl(var(--casino-darker))]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-[hsl(var(--casino-gold))] hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to website owners.
              GamesOntario.com uses cookies to enhance your browsing experience and provide personalized content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
            <p className="mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To remember your preferences and settings</li>
              <li>To understand how you use our website and improve functionality</li>
              <li>To provide personalized casino recommendations</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To ensure website security and prevent fraud</li>
              <li>To deliver relevant advertisements and promotions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page
              navigation, access to secure areas, and remembering your cookie preferences. The website cannot function
              properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              We use analytics cookies to understand how visitors interact with our website. These cookies help us
              improve our content and user experience by collecting anonymous information about page visits, time spent
              on pages, and navigation patterns. We use Google Analytics for this purpose.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Functionality Cookies</h3>
            <p className="mb-4">
              These cookies allow the website to remember choices you make (such as your preferred language or region)
              and provide enhanced, personalized features. They may also be used to provide services you have requested,
              such as watching a video or commenting on content.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Advertising Cookies</h3>
            <p className="mb-4">
              These cookies are used to deliver advertisements that are relevant to you and your interests. They are
              also used to limit the number of times you see an advertisement and help measure the effectiveness of
              advertising campaigns. These cookies remember that you have visited a website and this information may be
              shared with other organizations such as advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
              deliver advertisements, and provide enhanced functionality. These third parties include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google Analytics - for website analytics and performance tracking</li>
              <li>Advertising networks - for delivering relevant casino promotions</li>
              <li>Social media platforms - for social sharing functionality</li>
              <li>Content delivery networks - for improved website performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by adjusting your browser settings. Most web browsers automatically accept cookies, but you can usually
              modify your browser settings to decline cookies if you prefer.
            </p>
            <p className="mb-4">Here's how to manage cookies in popular browsers:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
              <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
            <p>
              Please note that if you choose to block or delete cookies, some features of our website may not function
              properly, and your user experience may be affected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Duration</h2>
            <p className="mb-4">Cookies can be either session cookies or persistent cookies:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.
                They help us track your activities during a single browsing session.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you
                manually delete them. They help us remember your preferences and provide a personalized experience on
                return visits.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
              business practices. We encourage you to review this policy periodically to stay informed about how we use
              cookies. The "Last Updated" date at the top of this page indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us through our
              website contact form. We are committed to addressing your concerns and providing transparency about our
              data practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Consent</h2>
            <p>
              By continuing to use GamesOntario.com, you consent to our use of cookies as described in this Cookie
              Policy. If you do not agree with our use of cookies, please adjust your browser settings or discontinue
              use of our website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
