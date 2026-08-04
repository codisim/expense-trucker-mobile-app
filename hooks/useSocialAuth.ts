import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
    const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
    const { startSSOFlow } = useSSO();

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_github") => {
        if (loadingStrategy) return;
        setLoadingStrategy(strategy)

        try {

            const { createdSessionId, setActive } = await startSSOFlow({ strategy });
            if (!createdSessionId || !setActive) {
                Alert.alert("Authentication Error", "Failed to create session or set active session. Please try again.");
                return;
            }

            await setActive({ session: createdSessionId });

        } catch (error) {
            console.log("Error during social auth:", error);
            Alert.alert("Authentication Error", "An error occurred during social authentication. Please try again.");
        }

    }
    return {
        handleSocialAuth,
        loadingStrategy
    }
}

export default useSocialAuth