import SafeAreaView from "@/components/SafeAreaView";
import useSocialAuth from "@/hooks/useSocialAuth";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";


const SignInScreen = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { handleSocialAuth, loadingStrategy } = useSocialAuth();

    return (
        <SafeAreaView className="bg-magnolia dark:bg-cinder flex-1" >
            <View className="px-6 py-12">
                <Text className="text-5xl font-bold text-center tracking-tight text-gun-powder dark:text-athens-gray uppercase font-mono">Spenda</Text>
                <Text className="text-lg text-center text-gun-powder dark:text-athens-gray mt-4">Sign in to your account</Text>
            </View>


            <View>
                <Pressable className="" onPress={() => { }} />
            </View>

        </SafeAreaView>
    )
}


export default SignInScreen;