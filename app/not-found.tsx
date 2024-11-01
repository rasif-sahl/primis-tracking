import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-brand-secondary">404</h1>
                    <p className="mb-6 text-xl text-gray-600">Oops! Page not found</p>
                    <Image
                        src="/images/notFound.jpg"
                        alt="Lost dog illustration"
                        width={200}
                        height={200}
                        className="mx-auto mb-6"
                    />
                    <p className="mb-8 text-gray-600">
                        It seems like we can't fetch the page you're looking for.
                    </p>
                    <Link
                        href="/"
                        className="inline-block rounded bg-brand-secondary px-6 py-3 font-bold text-white transition-colors hover:bg-brand-tertiary"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-600">
                <p>Developed By Rasif Sahl.</p>
            </div>
        </div>
    </div>
  )
}