import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from '../routeTree.gen';

import { ThemeProvider, Toaster } from '@components/ui';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <RouterProvider router={router} />
                <Toaster />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
