# Radici-UI

Radici-UI is a CLI-based UI component library that allows you to easily add pre-built components to your project.

## Installation

First, install the package:

```
npm install radici-ui
```

## Add Tailwind and its configuration

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

## Add Components

You can add components to your project using the following command:

```css
npx radici-ui [component]
```

### Example

For example, to add a button component:

```csharp
npx radici-ui add button
```

## Tailwind CSS Configuration

This library requires Tailwind CSS to be set up in your project. Make sure Tailwind CSS is installed and configured in your project for the components to work properly.
