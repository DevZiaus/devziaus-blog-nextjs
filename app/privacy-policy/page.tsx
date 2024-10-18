
import Link from "next/link";
import "../../styles/globals.css";

export const metadata = {
  title: "Privacy Policy | DevZiaus's Blog",
  description: "Learn how DevZiaus's Blog collects, uses, and protects your personal information with our privacy policy."
};

export default function Component() {
  return (

    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground">
          At our NextJS app, we are committed to protecting the privacy and security of our users. This privacy policy
          outlines how we collect, use, and safeguard your personal information.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold">Data Collection</h2>
            <p className="text-muted-foreground">
              We collect certain personal information from you, such as your name, email address, and any other
              information you provide when you use our app.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Data Usage</h2>
            <p className="text-muted-foreground">
              We use your personal information to provide and improve our services, to communicate with you, and to
              comply with legal obligations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Data Sharing</h2>
            <p className="text-muted-foreground">
              We may share your personal information with third-party service providers who assist us in operating our
              app, but we do not sell or rent your personal information to any third parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">User Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal information, and to opt-out of certain data
              processing activities. You can exercise these rights by contacting us.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="https://devziaus.xyz/#contact"
            className="inline-flex items-center rounded-md bg-[#0095da] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#e68324] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
            target='_blank'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}