## Contributing to stubs

The Stub App facilitates the creation and management of stubbed data for development, testing, and demos. It provides a structured approach to mocking APIs, ensuring consistency and reliability across different environments. It is built using `next-js` api routes alongside [LowDB](https://github.com/typicode/lowdb) for data storage.

### Key Features

- **Controller-Service-Repository Pattern**: The app follows this pattern to organize code, making it easier to maintain and extend.
- **Session Management**: Sessions are managed through cookies, allowing for isolated and repeatable test scenarios.
- **Data Cleanup**: Automatic cleanup of old sessions and associated data ensures that the system remains performant and free of clutter.

### Adding New Stubs

1. **Create a Route**: Add a new route in `src/app/api/mocks/` to handle the API endpoint.
1. **Create a Controller**: Add a new controller in `src/app/api/stubApp/controllers/` to handle requests and return appropriate responses.
1. **Implement the Service**: Develop any business logic in a service file located in `src/app/api/stubApp/services/`.
1. **Set Up the Repository**: Define the data access methods in a repository file within `src/app/api/stubApp/repositories/`.
1. **Create datasets**: Add new datasets in `src/app/api/stubApp/database/[new-api-type]`
1. **Add stub to the dashboard**: Add a new dropdown field to the flags dashboard in `src/flags.ts`

### Example

To add a new stub for a `product-api` endpoint:

1. **Create a Route**: `src/app/api/mocks/product-api/route.js`
1. **Controller**: `src/app/api/stubApp/controllers/productController.js`
1. **Service**: `src/app/api/stubApp/services/productService.js`
1. **Repository**: `src/app/api/stubApp/repositories/productRepository.js`
1. **Create datasets**: `src/app/api/stubApp/database/product/datasets/productdata.ts`
1. **Add stub to the dashboard**: Add a new dropdown field to the flags dashboard in `src/flags.ts`

By following this structure, you ensure that your stubs are well-organized and easy to manage.

## Session Management

Session management in the Stub App is crucial for maintaining isolated and repeatable test scenarios. Here's how it works:

1. **Session Creation**: When a new session is initiated, a unique cookie is generated and sent to the client. This cookie follows the format `stub-cookie=stub[timestamp]`.

2. **Session Identification**: Each request made by the client includes this cookie, allowing the server to identify and associate it with the corresponding json files stored in the `/database` folder.

3. **Data Isolation**: The session cookie ensures that data created or modified during a session is isolated from other sessions. This isolation helps in creating consistent and reliable test environments.

4. **Automatic Cleanup**: To prevent clutter and maintain performance, the Stub App automatically cleans up old sessions. Any session older than 5 days is considered expired. The associated `stub-cookie` and its corresponding JSON files in the `/database` folder are deleted.

By managing sessions in this way, the Stub App ensures that test data remains organized and that the system performs efficiently.

## Updating stubs using URL params

We can update the stub response by using URL parameters that map to Vercel flags. For example:

- `?__flags=%7B%22wishlist-stub%22%3A%22Has%20items%22%2C%22has-flag-updates%22%3A%22true%22%7D` sets a stub with a full wishlist.
- `?__flags=%7B%22wishlist-stub%22%3A%22Empty%22%2C%22has-flag-updates%22%3A%22true%22%7D` sets a stub with an empty wishlist.

This approach is particularly useful for testing with Playwright, as it eliminates the need to configure special stub handlers.
