import { graphql } from "@pezzo/graphql";

export const UPDATE_PROVIDER_API_KEY = graphql(/* GraphQL */ `
  mutation UpdateProviderAPIKey($data: CreateProviderApiKeyInput!) {
    updateProviderApiKey(data: $data) {
      provider
      value
    }
  }
`);
