# Sentry Web Vitals

Since Sentry has an issue on trigger web vitals metrics performance tracking. This library is created for solving this by using `web-vitals` callback and perform the Sentry measurement.

## Installation

```
npm i sentry-web-vitals

yarn add sentry-web-vitals

pnpm add sentry-web-vitals
```

## Usage

```
import { measureWebVitalsMetrics } from 'sentry-web-vitals'

measureWebVitalsMetrics(Sentry.getCurrentHub())
```
