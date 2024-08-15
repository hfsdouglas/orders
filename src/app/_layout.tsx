import { SafeAreaView, StatusBar } from "react-native"
import { Slot } from "expo-router"

import {
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter"

import { Loading } from "@/components/loading"

export default function Layout() {
    const [fonts] = useFonts({
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold, 
        Inter_700Bold,
    })

    if (!fonts) {
        return <Loading />
    }

    return (
        <SafeAreaView className="flex-1 bg-slate-900 pt-8">
            <StatusBar barStyle={"light-content"} translucent />
            <Slot />
        </SafeAreaView>
    )
}