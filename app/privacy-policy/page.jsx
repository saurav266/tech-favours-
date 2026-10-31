
export const metadata = {
  title: "Privacy Policy | TechFavours",
  description:
    "Read the TechFavours Privacy Policy to understand how we collect, use, and protect personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-20 text-slate-800">
      <article className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          TechFavours
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-950">
          Privacy Policy
        </h1>

        <p className="mb-10 text-sm text-slate-500">
          Last Updated: 31 October 2026
        </p>

        <div className="space-y-8 leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Introduction
            </h2>
            <p>
              TechFavours respects your privacy and is committed
              to protecting your personal information. This policy
              explains how we collect, use, store and protect
              information when you visit our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Information We Collect
            </h2>
            <p>
              We may collect your name, email address, phone number,
              business name, project requirements, budget and
              timeline, along with technical information such as
              browser and device details.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to enquiries,
              understand project requirements, prepare proposals,
              provide services, communicate with customers and
              meet applicable legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Meta Lead Forms and WhatsApp
            </h2>
            <p>
              If you submit an enquiry through Facebook, Instagram
              or WhatsApp, we may receive your contact information
              and project details to respond to your request.
              These platforms also process information under
              their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Data Sharing and Security
            </h2>
            <p>
              We do not sell personal information. We may share
              necessary information with service providers or
              authorities where legally required. We take
              reasonable measures to protect information against
              unauthorised access, loss and misuse.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Your Privacy Rights
            </h2>
            <p>
              Subject to applicable law, you may request access,
              correction or deletion of your personal information,
              or withdraw consent where applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Contact Us
            </h2>
            <p>
              TechFavours
              <br />
              Website:{" "}
              <a
                href="https://techfavours.com"
                className="text-blue-600 underline"
              >
                techfavours.com
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:hello@techfavours.com"
                className="text-blue-600 underline"
              >
                hello@techfavours.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-16 border-t pt-6 text-sm text-slate-500">
          © 2026 TechFavours. All rights reserved.
        </footer>
      </article>
    </main>
  );
}
