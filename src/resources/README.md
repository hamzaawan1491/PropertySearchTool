# Frontend development challenge

For this exercise, you're going to implement a web page according to the
attached design. The purpose of the page is to allow users to search for
properties matching a given address search-string, and select some of the
resulting records to appear in the "Selected properties" section at the top of
the page.

## User journey

- The user should be able to enter an address (or address fragment) in the
  address search field, and the search-results should update with the results of
  the provided "API" module upon pressing the "Search" button.

- The sidebar can be used to further filter the results by property type. A list
  of all available property types can be retrieved from the `api.js` module
  using `getAvailablePropertyTypes`.

- Property records should appear in the "Selected properties" section if the
  corresponding checkbox in the search-results table is checked.

- Changing the property-type filter or address search-string should not have any
  effect on the selected properties.

## API

The `api.js` module exposes three endpoints:

- `fetchProperties` takes an object with an `address` string and an optional
  `propertyType` string. If provided, the `propertyType` should be the `value` of
  one of the objects returned by `getAvailablePropertyTypes`. The function will
  return a `Promise` wrapping an object with the following shape:

  ```js
  { properties: [PropertiesListEntry, ...] }
  ```

  where each `PropertiesListEntry` contains these attributes:

  - `id`
  - `address`
  - `postcode`
  - `propertyType`

  This endpoint will take up to 0.5s to complete.

- `fetchPropertyDetails` takes a property ID and will return a
  `Promise` wrapping an object of the following shape:

  ```js
  { property: PropertyDetails }
  ```

  where each `PropertyDetails` object contains these attributes:

  - `id`
  - `address`
  - `postcode`
  - `propertyType`
  - `numberOfRooms`
  - `floorArea`

  This endpoint will also take up to 0.5s to complete.

- `getAvailablePropertyTypes` will return a collection of all property
  types available to filter by. It returns a `Promise` wrapping an object 
  with the following shape:
  
  ```js
  { propertyTypes: [ PropertyType ] }
  ```
  
  where each `PropertyType` object contains these attributes:

  - `label`
  - `value`

Keep in mind that it is always possible for unexpected errors to appear when
working with external APIs.

Please import the API module unmodified in your completed solution.

## Responsive design

In this hypothetical scenario, there was no time to create a dedicated design
for small screens, but we expect a portion of the users to be on a phone. It's
up to you to come up with a responsive implementation of the design.

## Frameworks and libraries

At IMMO we're currently transitioning from [Ember][ember] (and JavaScript) to [React][react]
(and TypeScript) to build our websites. You can submit your solution using any 
frontend framework - such as Ember, React, Vue, or even Vanilla JS - and either 
JavaScript
 or TypeScript as you prefer. Just be sure to include a README file
telling us how to run it!

## Markup and styling

To the extent possible, please structure your markup and styles such that the
markup is concerned only with semantics, and all styling and layout is defined
in your stylesheets.

If you use a CSS framework (like Tailwind, Bulma, Foundation, etc) please demonstrate
an ability to keep the markup as clean and readable as possible. Ideally we would
like to see _your own CSS_, but we understand the benefits of CSS frameworks
so if you use them, please make full use of them to make code clean and
easy-to-read.

[ember]: https://emberjs.com
[react]: https://reactjs.com