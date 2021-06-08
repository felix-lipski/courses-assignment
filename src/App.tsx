import { QueryClient, QueryClientProvider } from "react-query";

import StatsList from "./components/StatsList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatsList />
    </QueryClientProvider>
  );
}

export default App;
