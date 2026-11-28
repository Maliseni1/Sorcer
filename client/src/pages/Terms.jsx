import React from 'react'
import { theme } from '../styles/theme'

const Section = ({ title, children }) => (
    <section className="mb-8">
        <h2 className={`text-xl font-semibold mb-3 ${theme.text.heading}`}>{title}</h2>
        <div className={`space-y-3 leading-relaxed ${theme.text.body}`}>{children}</div>
    </section>
)

const Terms = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${theme.text.heading}`}>Terms &amp; Conditions</h1>
            <p className={`text-sm mb-10 ${theme.text.subtle}`}>Last updated: November 2026</p>

            <Section title="1. Acceptance of Terms">
                <p>
                    By creating an account or using Sorcer, you agree to these Terms &amp; Conditions and to
                    our <a href="/privacy-policy" className="underline">Privacy Policy</a>. If you don't agree,
                    please don't use the service.
                </p>
            </Section>

            <Section title="2. Description of Service">
                <p>
                    Sorcer is an AI-powered text-to-image generation service operated by Chiza Labs. You
                    describe an image in words, and Sorcer generates a corresponding image using a
                    third-party AI model.
                </p>
            </Section>

            <Section title="3. Accounts">
                <p>
                    You must provide accurate information when creating an account and are responsible for
                    keeping your login credentials secure. You're responsible for all activity that happens
                    under your account.
                </p>
            </Section>

            <Section title="4. Credits & Payments">
                <p>
                    Generating images consumes credits from your account balance. Additional credits may be
                    purchased using cryptocurrency through Coinbase OnchainKit. Cryptocurrency transactions
                    are irreversible — once a payment is confirmed on-chain, we cannot reverse it.
                </p>
                <p>
                    Purchased credits are non-refundable except where required by applicable law. We are not
                    responsible for network fees, wallet errors, or cryptocurrency price volatility.
                </p>
            </Section>

            <Section title="5. Acceptable Use">
                <p>You agree not to use Sorcer to generate, or attempt to generate, content that is:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Illegal, or that infringes someone else's rights</li>
                    <li>Sexually explicit content involving minors, or non-consensual intimate imagery</li>
                    <li>Intended to harass, defame, or impersonate a real person without consent</li>
                    <li>In violation of our AI provider's own content policies</li>
                </ul>
                <p>
                    We may suspend or terminate accounts that violate this policy, and may also decline to
                    generate specific prompts at our discretion.
                </p>
            </Section>

            <Section title="6. Intellectual Property">
                <p>
                    You retain the rights to images you generate through Sorcer, subject to the underlying
                    terms of the AI models we use to generate them. The Sorcer name, logo, and underlying
                    software belong to Chiza Labs and may not be used without permission.
                </p>
            </Section>

            <Section title="7. Third-Party Services">
                <p>
                    Sorcer depends on third-party services — including Google (sign-in), ClipDrop (image
                    generation), Coinbase OnchainKit (payments), and MongoDB Atlas (data storage) — each
                    governed by its own terms. We aren't responsible for the availability or conduct of
                    these third parties.
                </p>
            </Section>

            <Section title="8. Service Availability">
                <p>
                    Sorcer is provided "as is" and "as available," without warranties of any kind. AI-generated
                    output can be inaccurate, unexpected, or occasionally fail to generate — we don't guarantee
                    uninterrupted or error-free service.
                </p>
            </Section>

            <Section title="9. Limitation of Liability">
                <p>
                    To the fullest extent permitted by law, Chiza Labs is not liable for any indirect,
                    incidental, or consequential damages arising from your use of Sorcer, including loss of
                    data, credits, or cryptocurrency.
                </p>
            </Section>

            <Section title="10. Termination">
                <p>
                    You may stop using Sorcer and request deletion of your account at any time. We may
                    suspend or terminate accounts that violate these Terms.
                </p>
            </Section>

            <Section title="11. Changes to These Terms">
                <p>
                    We may update these Terms from time to time. We'll update the "Last updated" date above
                    when we do. Continuing to use Sorcer after a change means you accept the updated Terms.
                </p>
            </Section>

            <Section title="12. Contact">
                <p>
                    Questions about these Terms? Reach us at{' '}
                    <a href="mailto:chizalabs@gmail.com" className="underline">chizalabs@gmail.com</a>.
                </p>
            </Section>
        </div>
    )
}

export default Terms
