import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";


//Configuração extra para tentar ajustar erro de cache e carregamento de vídeo - sem sucesso
const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
}

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nlpurp0c1u01xp3izp58ky/master',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})
