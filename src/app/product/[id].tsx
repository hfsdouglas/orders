import { Image, Text, View } from "react-native"
import { useLocalSearchParams, useNavigation, Redirect } from "expo-router"
import { Feather } from "@expo/vector-icons"

import { useCartStore } from "@/stores/cart-store"

import { PRODUCTS } from "@/utils/data/products"
import { formatCurrency } from "@/utils/functions/format-currency"
import { Button } from "@/components/button"
import { LinkButton } from "@/components/link-button"

export default function Product() {
    const cartStore = useCartStore()
    const navigation = useNavigation()
    const { id } = useLocalSearchParams()

    const product = PRODUCTS.find((item) => item.id === id)

    if (!product) {
        return <Redirect href="/" />
    }

    function handleAddToCart() {
        if (product) {
            cartStore.add(product)
            navigation.goBack()
        }
    }

    return (
        <View className="flex-1">
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />

            <View className="p-5 mt-8 flex-1">
                <Text className="text-white text-xl font-heading">{product.title}</Text>
                
                <Text className="text-lime-400 text-2xl font-heading my-2">{formatCurrency(product.price)}</Text>

                <Text className="text-slate-400 font-body text-base leading-6 mb-6">{product.description}</Text>

                {product.ingredients.map((ingredient, index) => (
                    <Text className="text-slate-400 font-body text-base leading-6" key={index}>{"\u2022"} {ingredient}</Text>
                ))}
            </View>

            <View className="p-5 pb-8 gap-5">
                <Button onPress={handleAddToCart}>
                    <Button.Title>Adicionar ao Pedido</Button.Title>
                    <Button.Icon><Feather name="plus-circle" size={20}/></Button.Icon>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    )
}