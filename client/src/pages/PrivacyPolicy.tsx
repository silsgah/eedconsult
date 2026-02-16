import { Link } from "wouter";
import { ArrowLeft, Shield, Camera, MapPin, Wifi, Calendar } from "lucide-react";
import logo from "@assets/EddLogo_1764621333195.jpeg";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            {/* Header */}
            <header className="bg-gray-900 text-white py-6 border-b border-gray-800">
                <div className="container mx-auto px-6">
                    <Link href="/">
                        <a className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4">
                            <ArrowLeft size={18} />
                            <span className="text-sm font-medium">Back to Home</span>
                        </a>
                    </Link>
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="EED Consult" className="h-10 w-auto object-contain bg-white rounded-md p-1" />
                        <div>
                            <h1 className="text-2xl md:text-3xl font-heading font-bold">Privacy Policy</h1>
                            <p className="text-gray-400 text-sm mt-1">EED Consult / Adamani AI Systems</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Effective Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-10">
                    <Calendar size={16} />
                    <span>Last Updated: February 16, 2026</span>
                </div>

                {/* Introduction */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        EED Consult ("we," "our," or "us") operates the EED Consult mobile application (the "App").
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                        you use our App. We are committed to protecting your privacy and handling your data with
                        transparency and care.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-3">
                        Please read this privacy policy carefully. By using the App, you agree to the collection and
                        use of information in accordance with this policy. If you do not agree with the terms of this
                        privacy policy, please do not access the App.
                    </p>
                </section>

                {/* Permissions Overview */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-6">Information We Collect</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Our App requests certain device permissions to provide core functionality. Below is a detailed
                        explanation of each permission and how the data is used.
                    </p>

                    {/* Camera */}
                    <div className="glass-card rounded-xl p-6 mb-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 rounded-lg shrink-0">
                                <Camera className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Camera Access</h3>
                                <p className="text-gray-600 leading-relaxed mb-3">
                                    We request access to your device's camera to allow you to:
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Capture photos and documents for submission within the App</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Scan QR codes or barcodes if applicable</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Upload profile pictures or other visual content</span>
                                    </li>
                                </ul>
                                <p className="text-gray-500 text-sm mt-3 italic">
                                    Camera data is only accessed when you actively use a camera-related feature. We do not
                                    access your camera in the background.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Geolocation */}
                    <div className="glass-card rounded-xl p-6 mb-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
                                <MapPin className="text-emerald-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Location Services (Geolocation)</h3>
                                <p className="text-gray-600 leading-relaxed mb-3">
                                    We request access to your device's location to provide location-based features, including:
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-600 mt-1">•</span>
                                        <span>Providing location-aware services and content relevant to your area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-600 mt-1">•</span>
                                        <span>Tagging submissions, reports, or service requests with geographic context</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-600 mt-1">•</span>
                                        <span>Displaying maps and directions for navigating to relevant locations</span>
                                    </li>
                                </ul>
                                <p className="text-gray-500 text-sm mt-3 italic">
                                    Location data is collected only while the App is actively in use. You can disable location
                                    access at any time through your device settings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Internet */}
                    <div className="glass-card rounded-xl p-6 mb-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-violet-50 rounded-lg shrink-0">
                                <Wifi className="text-violet-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Internet Access</h3>
                                <p className="text-gray-600 leading-relaxed mb-3">
                                    The App requires internet access to function. This is used for:
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-violet-600 mt-1">•</span>
                                        <span>Communicating with our servers to sync your data and deliver services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-violet-600 mt-1">•</span>
                                        <span>Sending and receiving real-time notifications</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-violet-600 mt-1">•</span>
                                        <span>Downloading updates and content</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-violet-600 mt-1">•</span>
                                        <span>Authenticating your identity securely</span>
                                    </li>
                                </ul>
                                <p className="text-gray-500 text-sm mt-3 italic">
                                    All data transmitted over the internet is encrypted using industry-standard TLS/SSL protocols.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Security */}
                <section className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="text-primary" size={22} />
                        <h2 className="text-xl font-heading font-bold text-foreground">Data Security</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Encrypted data transmission (TLS/SSL)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Secure server infrastructure with access controls</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Regular security audits and vulnerability assessments</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Data minimization — we only collect what is necessary</span>
                        </li>
                    </ul>
                </section>

                {/* Data Retention */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Data Retention</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We retain your personal information only for as long as necessary to fulfill the purposes for which
                        it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When
                        data is no longer needed, it is securely deleted or anonymized.
                    </p>
                </section>

                {/* Third-Party Services */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Third-Party Services</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our App may use third-party services that collect information used to identify you. These may include
                        analytics providers, cloud hosting services, and mapping services. Each third-party service has its
                        own privacy policy governing the use of your information.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-3">
                        We do not sell, trade, or rent your personal information to third parties.
                    </p>
                </section>

                {/* Children's Privacy */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Children's Privacy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our App is not intended for use by children under the age of 13. We do not knowingly collect
                        personal information from children under 13. If we become aware that we have collected personal
                        data from a child under 13, we will take steps to delete such information promptly.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Your Rights</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Depending on your jurisdiction, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span><strong>Access:</strong> Request a copy of the personal data we hold about you</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span><strong>Correction:</strong> Request correction of inaccurate or incomplete data</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span><strong>Deletion:</strong> Request deletion of your personal data</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span><strong>Data Portability:</strong> Request a machine-readable copy of your data</span>
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-3">
                        To exercise any of these rights, please contact us using the information provided below.
                    </p>
                </section>

                {/* Changes to Policy */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review
                        this Privacy Policy periodically for any changes.
                    </p>
                </section>

                {/* Contact */}
                <section className="mb-10">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="glass-card rounded-xl p-6">
                        <div className="space-y-3 text-gray-600">
                            <p><strong className="text-foreground">Company:</strong> EED Consult / Adamani AI Systems</p>
                            <p>
                                <strong className="text-foreground">Email:</strong>{" "}
                                <a href="mailto:info@eedconsult.com" className="text-primary hover:underline">
                                    info@eedconsult.com
                                </a>
                            </p>
                            <p>
                                <strong className="text-foreground">Phone:</strong>{" "}
                                <a href="tel:+233558075023" className="text-primary hover:underline">
                                    +233 558 075 023
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
                <div className="container mx-auto px-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Adamani AI Systems. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-3">
                        <Link href="/">
                            <a className="hover:text-gray-300">Home</a>
                        </Link>
                        <Link href="/privacy-policy">
                            <a className="hover:text-gray-300">Privacy Policy</a>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
