import { QueryClient, QueryClientProvider } from "react-query";

import CoursesList from "./components/CoursesList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CoursesList />
    </QueryClientProvider>
  );
}

export default App;
