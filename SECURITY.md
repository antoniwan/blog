# Security

## Current Vulnerabilities

### High Severity (3 vulnerabilities)

**Issue**: `path-to-regexp` vulnerability in `@astrojs/vercel` adapter

- **CVE**: GHSA-9wv6-86v2-598j
- **Description**: Backtracking regular expressions vulnerability
- **Affected**: `@astrojs/vercel` → `@vercel/routing-utils` → `path-to-regexp`
- **Status**: Waiting for upstream fix

### Resolution Plan

1. **Monitor Updates**: Check for `@astrojs/vercel` updates regularly
2. **Alternative**: Consider switching to static adapter if Vercel deployment isn't required
3. **Temporary**: Accept risk until upstream packages are updated

### Dependencies to Watch

```bash
# Check for updates
npm outdated

# Update specific packages
npm update @astrojs/vercel

# Check security status
npm audit
```

### Recommended Actions

1. **Immediate**: Document the issue (✅ Done)
2. **Short-term**: Monitor for updates weekly
3. **Long-term**: Consider alternative deployment strategies if needed

## Security Best Practices

- ✅ **Dependencies**: Regular security audits
- ✅ **Content**: No sensitive data in public repository
- ✅ **Build**: Static site generation (no server-side vulnerabilities)
- ✅ **Deployment**: HTTPS enforced via Vercel

## Reporting Security Issues

For security concerns, please contact: antoniwan@antoniwan.online

---

_Last updated: January 2025_
