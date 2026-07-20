import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free For Charity Donation Policy - The Technology Monastery',
  description: 'Free For Charity Donation Policy - Learn about our donation policies.',
};

// This page documents Free For Charity's OWN donation policy (The Technology
// Monastery is a program of FFC), so the organization name throughout is
// intentionally "Free For Charity".
export default function FreeForCharityDonationPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free For Charity Donation Policy
            </h1>
            <p className="text-xl text-gray-300">
              Legal Donation Policy for Free For Charity
              <br />
              <em>Effective Date: 11-20-2024</em>
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Introduction</h2>
              <p className="leading-relaxed">
                Free For Charity, a US 501(c)(3) non-profit organization, is dedicated to improving
                our support to other charitable entities through our various programs and
                initiatives. This donation policy outlines the guidelines and principles governing
                the acceptance, management, and acknowledgment of donations to ensure transparency,
                accountability, and compliance with applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Scope and Purpose</h2>
              <p className="leading-relaxed">
                The purpose of this policy is to provide clarity and guidance on the types of
                donations Free For Charity will accept, the process for evaluating and accepting
                donations, and the responsibilities of both the donor and the organization. This
                policy applies to all forms of donations, including cash, securities, real estate,
                personal property, and in-kind contributions. By adhering to this policy, Free For
                Charity aims to maintain the trust and confidence of our donors while advancing our
                mission to improve the services for our supported nonprofits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Types of Acceptable Donations</h2>
              <p className="leading-relaxed mb-4">
                Free For Charity accepts a wide range of donations, subject to the following
                criteria:
              </p>

              <h3 className="text-xl font-bold text-white mb-2">1. Cash Donations</h3>
              <p className="leading-relaxed mb-4">
                Cash donations, including checks and electronic transfers, are accepted and
                encouraged. Donors may make contributions through our online platform, by mail, or
                in person. These donations provide immediate support for our various programs and
                initiatives, allowing us to respond quickly to emerging needs.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">2. Securities</h3>
              <p className="leading-relaxed mb-4">
                Free For Charity accepts publicly traded securities and other forms of marketable
                securities. Donations of securities will be liquidated promptly upon receipt unless
                otherwise directed by the Board of Directors. This ensures that the value of the
                donation can be utilized effectively to support our mission. Donors are encouraged
                to consult with their financial advisors to understand the potential tax benefits
                of donating securities.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">3. Real Estate</h3>
              <p className="leading-relaxed mb-4">
                Donations of real estate will be considered on a case-by-case basis. The
                organization will conduct a thorough evaluation, including environmental
                assessments, title searches, and market analyses, to determine the suitability and
                potential liabilities associated with the property. Real estate donations can
                provide significant support for our long-term sustainability and growth, but it is
                essential to ensure that the property aligns with our mission and does not pose
                undue financial or legal risks.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">4. Personal Property</h3>
              <p className="leading-relaxed mb-4">
                Tangible personal property, such as art, antiques, and vehicles, may be accepted if
                deemed useful to the organization&rsquo;s mission or if the property can be sold
                for financial gain. Donors are encouraged to provide a detailed description and
                valuation of the property to facilitate the acceptance process. Personal property
                donations can enhance our fundraising efforts and provide unique opportunities for
                donor engagement.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">5. In-Kind Contributions</h3>
              <p className="leading-relaxed">
                In-kind contributions, including goods and services, are accepted if they fulfill
                the needs of the organization and align with our mission. Donors are encouraged to
                contact us in advance to discuss the specifics of their in-kind donation. These
                contributions can help reduce operational costs and provide essential resources for
                our programs. Examples of in-kind donations include office supplies, technology,
                professional services, and event sponsorships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Donor Responsibilities</h2>
              <p className="leading-relaxed">
                Donors are responsible for ensuring that their contributions comply with all
                applicable laws and regulations. Free For Charity recommends that donors consult
                with their financial advisors or legal counsel to understand the potential tax
                implications and legal requirements associated with their donations. It is crucial
                for donors to provide accurate and complete information about their contributions
                to facilitate proper acknowledgment and reporting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Evaluation and Acceptance of Donations
              </h2>
              <p className="leading-relaxed mb-4">
                All donations are subject to a review process to ensure they align with Free For
                Charity&rsquo;s mission and values. The evaluation process includes:
              </p>

              <h3 className="text-xl font-bold text-white mb-2">1. Initial Review</h3>
              <p className="leading-relaxed mb-4">
                The Executive Director or designated staff member will conduct an initial review of
                the donation offer, considering the type of donation, its value, and its potential
                impact on the organization. This initial assessment helps determine whether the
                donation meets our acceptance criteria and aligns with our strategic goals.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">2. Due Diligence</h3>
              <p className="leading-relaxed mb-4">
                For donations of real estate, securities, and personal property, Free For Charity
                will perform due diligence to assess any potential liabilities or obligations. This
                may include environmental assessments, legal reviews, and market analyses. Due
                diligence ensures that the organization fully understands the implications of
                accepting the donation and can make informed decisions in the best interest of our
                mission.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">3. Board Approval</h3>
              <p className="leading-relaxed">
                Donations that require significant resources to manage or present potential risks
                will be presented to the Board of Directors for approval. The Board has the
                authority to accept or decline donations based on the best interests of the
                organization. This approval process ensures that all major donations receive
                appropriate oversight and consideration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Donor Acknowledgment and Recognition
              </h2>
              <p className="leading-relaxed mb-4">
                Free For Charity is committed to recognizing and appreciating the generosity of our
                donors. Upon receipt of a donation, donors will receive:
              </p>

              <h3 className="text-xl font-bold text-white mb-2">
                1. Acknowledgment Letter or Email
              </h3>
              <p className="leading-relaxed mb-4">
                An acknowledgment letter will be sent to the donor, confirming the receipt of the
                donation and providing the necessary information for tax purposes. This letter
                serves as an official record of the donation and expresses our gratitude for the
                donor&rsquo;s support.
              </p>

              <h3 className="text-xl font-bold text-white mb-2">2. Public Recognition</h3>
              <p className="leading-relaxed">
                With the donor&rsquo;s consent, Free For Charity will recognize significant
                contributions through various channels, including our website, annual reports,
                newsletters, and events. Donors may also choose to remain anonymous if they prefer.
                Public recognition helps celebrate the impact of our donors&rsquo; generosity and
                inspires others to contribute to our cause.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Confidentiality and Privacy</h2>
              <p className="leading-relaxed mb-3">
                Free For Charity respects the privacy and confidentiality of our donors. Personal
                information collected during the donation process will be used solely for the
                purpose of processing and acknowledging the donation and will not be shared with
                third parties without the donor&rsquo;s consent. Our commitment to donor privacy
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Securely storing donor information to prevent unauthorized access</li>
                <li>
                  Providing donors with the option to receive communications according to their
                  preferences
                </li>
                <li>Ensuring transparency in how donor information is used and protected</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Conflict of Interest</h2>
              <p className="leading-relaxed">
                Free For Charity is committed to maintaining the highest ethical standards. All
                individuals involved in the donation process are required to disclose any potential
                conflicts of interest and recuse themselves from decisions where a conflict may
                exist. This policy helps prevent undue influence and ensures that all decisions are
                made in the best interest of the organization and our beneficiaries.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Policy Review and Updates</h2>
              <p className="leading-relaxed">
                This donation policy will be reviewed as needed by the Board of Directors to ensure
                it remains current and effective. Any changes or updates to the policy will be
                communicated to donors and made available on our website. Regular review and
                updates help us adapt to evolving legal requirements and best practices in the
                non-profit sector.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Conclusion</h2>
              <p className="leading-relaxed mb-3">
                Free For Charity deeply values the support of our donors and is committed to
                ensuring that their contributions make a meaningful impact. By adhering to this
                donation policy, we aim to maintain the trust and confidence of our donors while
                advancing our mission to improve the quality of life for those in need. We are
                grateful for the generosity of our donors and look forward to working together to
                achieve our goals.
              </p>
              <p className="leading-relaxed">
                For any questions or further information about our donation policy, please contact
                us at{' '}
                <a
                  href="mailto:clarkemoyer@freeforcharity.org"
                  className="text-purple-400 underline hover:text-purple-300 break-words"
                >
                  clarkemoyer@freeforcharity.org
                </a>{' '}
                520-222-8104
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
