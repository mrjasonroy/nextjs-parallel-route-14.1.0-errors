# Dynamic Parallel Route Bug

This is a simple example showing how dynamic parallel routes are not working as expected when a loading.tsx is missing from the parallel route folder but is present in the main route.

This is not an issue on 14.0.4 but is an issue on 14.1.0 and was in 13.X.X as well.

## Steps to reproduce

1. Clone and run the app
2. Navigate using the lefthand menu
3. On your second page it will fail