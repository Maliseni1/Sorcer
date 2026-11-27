import React from 'react'
import { theme } from '../styles/theme'

const Section = ({ title, children }) => (
    <section className="mb-8">
        <h2 className={`text-xl font-semibold mb-3 ${theme.text.heading}`}>{title}</h2>
        <div className={`space-y-3 leading-relaxed ${theme.text.body}`}>{children}</div>
    </section>
)

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${theme.text.heading}`}>Privacy Policy</h1>
            <p className={`text-sm mb-10 ${theme.text.subtle}`}>Last updated: November 2026</p>

            <Section title="Overview">
                <p>
                    Sorcer ("we", "us", "our") is an AI image generation service operated by Chiza Labs.
                    This Privacy Policy explains what information we collect when you use Sorcer, how we
                    use it, and the choices you have.
                </p>
            </Section>

            <Section title="Information We Collect">
                <p><strong>Account information:</strong> when you register, we collect your name, email address, and a securely hashed password. If you sign in with Google, we receive your name, email, and profile picture from Google.</p>
                <p><strong>Content you provide:</strong> the text prompts you submit to generate images.</p>
                <p><strong>Usage information:</strong> your credit balance and transaction history, and general usage analytics (pages visited, approximate device/browser type) collected via Vercel Analytics.</p>
            </Section>

            <Section title="How We Use Your Information">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Create and authenticate your account</li>
                    <li>Generate images from the prompts you submit</li>
                    <li>Track and apply your credit balance, and process credit purchases</li>
                    <li>Respond to support requests sent to our contact email</li>
                    <li>Understand overall usage of Sorcer so we can improve it</li>
                </ul>
            </Section>

            <Section title="Third-Party Services">
                <p>Sorcer relies on a small number of third-party services to work, each of which processes a limited slice of your data under its own privacy policy:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Google OAuth</strong> — for sign-in, if you choose that option</li>
                    <li><strong>ClipDrop (Stability AI)</strong> — receives your text prompts in order to generate images</li>
                    <li><strong>Coinbase OnchainKit</strong> — processes cryptocurrency payments when you purchase credits</li>
                    <li><strong>MongoDB Atlas</strong> — hosts our application database</li>
                    <li><strong>Vercel Analytics</strong> — provides anonymized usage analytics</li>
                </ul>
            </Section>

            <Section title="Data Storage & Security">
                <p>
                    Your account data is stored in our MongoDB database. Passwords are hashed before storage —
                    we never store them in plain text. Your session token is stored in your browser's local
                    storage to keep you signed in. We take reasonable measures to protect your data, but no
                    method of storage or transmission is completely secure.
                </p>
            </Section>

            <Section title="Your Choices & Rights">
                <p>
                    You can update your account details or request deletion of your account and associated
                    data at any time by emailing us at{' '}
                    <a href="mailto:chizalabs@gmail.com" className="underline">chizalabs@gmail.com</a>.
                    Your theme preference (light/dark) is stored only in your browser and is never sent to us.
                </p>
            </Section>

            <Section title="Children's Privacy">
                <p>
                    Sorcer is not directed at children under 13, and we do not knowingly collect personal
                    information from children under that age.
                </p>
            </Section>

            <Section title="Data Retention">
                <p>
                    We retain your account information for as long as your account is active. If you request
                    deletion, we will remove your account data within a reasonable time, except where we are
                    required to retain certain records by law.
                </p>
            </Section>

            <Section title="Changes to This Policy">
                <p>
                    We may update this Privacy Policy from time to time. We'll update the "Last updated" date
                    above when we do. Continuing to use Sorcer after a change means you accept the updated policy.
                </p>
            </Section>

            <Section title="Contact Us">
                <p>
                    Questions about this policy? Reach us at{' '}
                    <a href="mailto:chizalabs@gmail.com" className="underline">chizalabs@gmail.com</a>.
                </p>
            </Section>
        </div>
    )
}

export default PrivacyPolicy
