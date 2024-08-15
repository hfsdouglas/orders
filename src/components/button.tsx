import { ReactNode } from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonTitleProps = {
    children: ReactNode
}

type ButtonIconProps = {
    children: ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row" {...rest} activeOpacity={0.7}>{children}</TouchableOpacity>
    )
}

function Title({ children }: ButtonTitleProps) {
    return (
        <Text className="text-black font-heading text-base mx-2">{children}</Text>
    )
}

function Icon({ children }: ButtonIconProps) {
    return children
}

Button.Title = Title
Button.Icon = Icon

export { Button }