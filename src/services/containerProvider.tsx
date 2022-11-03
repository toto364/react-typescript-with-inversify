import { createContext, ReactNode, useContext } from "react"
import type { Container } from "inversify"
import container from "./inversify.config"

const ContainerContext = createContext<Container | undefined>(undefined)

interface IContainerProviderProps {
    children: ReactNode
}

export const ContainerProvider = ({ children }: IContainerProviderProps): JSX.Element => {
    return <ContainerContext.Provider value={container}>{children}</ContainerContext.Provider>
}

export const useContainer = (): Container => {
    const container = useContext(ContainerContext)
    if (!container) {
        throw new Error("useContainer must be use within a ContainerProvider.")
    }
    return container
}
