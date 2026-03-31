import { Authenticator } from '@aws-amplify/ui-react';
import { StorageBrowser } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-storage/styles.css';

export default function App() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Authenticator>
                {({ signOut, user }) => (
                    <div className="flex flex-col min-h-screen w-full">
                        <header className="flex items-center justify-between px-8 py-4 bg-[#232f3e] text-white shadow-md">
                            <h1 className="text-xl font-semibold tracking-wide">S3 File Manager</h1>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-300">{user?.signInDetails?.loginId}</span>
                                <button
                                    onClick={signOut}
                                    className="px-3 py-1.5 text-sm border border-gray-300 rounded text-white hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    Sign out
                                </button>
                            </div>
                        </header>
                        <main className="flex-1 p-6">
                            <StorageBrowser />
                        </main>
                    </div>
                )}
            </Authenticator>
        </div>
    );
}
