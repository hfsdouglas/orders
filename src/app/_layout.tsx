import { SafeAreaView } from "react-native"
import { Slot } from "expo-router"

import {
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter"

export default function Layout() {
    const [fonts] = useFonts({
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold, 
        Inter_700Bold,
    })

    if (!fonts) {
        return
    }

    return (
        <SafeAreaView className="flex-1 bg-slate-900 pt-8">
            <Slot />
        </SafeAreaView>
    )
}