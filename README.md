# rune-stamp-sdk

TypeScript SDK for rune-style badge/stamp issuance on the Stacks blockchain — mint, verify, enumerate.

## Install

```bash
npm install rune-stamp-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId } from 'rune-stamp-sdk';

const contract = parseContractId('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.rune-stamp-a1');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-stamp' });
  console.log(url);
}
```

## What's inside

- `constants` — network endpoints, project-specific defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `Stamp` and related shapes

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
