# Security Policy

## Reporting Security Issues

If you discover a security vulnerability in this project, please report it to our security team at security@bosch.com.

## Security Measures

- All external images are loaded through Next.js Image optimization
- Content Security Policy is implemented
- All forms include CSRF protection
- User input is sanitized and validated
- Dependencies are regularly updated for security patches

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Headers

This application implements the following security headers:

- Content-Security-Policy
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Strict-Transport-Security
- Referrer-Policy

## Third-party Dependencies

We regularly audit and update third-party dependencies to ensure they don't contain known security vulnerabilities.
