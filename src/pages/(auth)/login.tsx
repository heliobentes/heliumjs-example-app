import { Link } from "heliumts/client";

import HeliumLogo from "../../components/Logo";
import { signIn } from "../../libs/better-auth/auth-client";

export default function LoginPage() {
    const loginWithGoogle = async () => {
        await signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
            errorCallbackURL: "/error",
            newUserCallbackURL: "/dashboard",
        });
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-6 border border-gray-300">
                <HeliumLogo />
                <h1 className="text-2xl font-bold mb-4">Login to Helium Example</h1>
                <button className="button primary" onClick={loginWithGoogle}>
                    Login with Google
                </button>
                <Link href="/" className="text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
