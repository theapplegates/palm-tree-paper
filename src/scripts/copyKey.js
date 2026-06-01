<section class="pgp-card" aria-labelledby="pgp-key-title">
	 <div class="pgp-card__header">
	   <div>
		 <p class="pgp-eyebrow">OpenPGP Public Key</p>
		 <h2 id="pgp-key-title" class="pgp-title">
		   Paul Applegate — Post-Quantum OpenPGP Public Key
		 </h2>
	   </div>
   
	   <button
		 id="copy-pgp-key"
		 class="pgp-copy-button"
		 type="button"
		 aria-label="Copy public key"
	   >
		 Copy Key
	   </button>
	 </div>
   
	 <dl class="pgp-meta" aria-label="Key details">
	   <div class="pgp-meta__row">
		 <dt>Primary Algorithm</dt>
		 <dd>SLH-DSA-SHAKE-256s</dd>
	   </div>
   
	   <div class="pgp-meta__row">
		 <dt>Encryption Subkey</dt>
		 <dd>ML-KEM-1024 + X448</dd>
	   </div>
   
	   <div class="pgp-meta__row">
		 <dt>Hash Algorithm</dt>
		 <dd>SHA3-512</dd>
	   </div>
   
	   <div class="pgp-meta__row">
		 <dt>Profile</dt>
		 <dd>RFC 9580 (OpenPGP v6)</dd>
	   </div>
   
	   <div class="pgp-meta__row pgp-meta__row--full">
		 <dt>Fingerprint (v6)</dt>
		 <dd class="pgp-fingerprint">
		   <span>4228 5716 2140 5200 005C E752 352C 0377</span>
		   <span>F8E6 93F2 1EE1 6114 35BA AA9E F236 DD77</span>
		 </dd>
	   </div>
   
	   <div class="pgp-meta__row pgp-meta__row--full">
		 <dt>Compatibility</dt>
		 <dd>
		   Experimental post-quantum key; requires modern OpenPGP implementations.
		 </dd>
	   </div>
	 </dl>
   
	 <div class="pgp-key-wrap">
	   <div class="pgp-key-toolbar">
		 <span class="pgp-key-label">ASCII-armored public key</span>
		 <span id="pgp-copy-status" class="pgp-copy-status" aria-live="polite"></span>
	   </div>
   
	   <pre id="pgp-public-key" class="pgp-key-block"><code>-----BEGIN PGP PUBLIC KEY BLOCK-----
   
   xkoGaZPIVCIAAABAYqEo6a54ijxmXFsAn7KFr4jKveBULBJaORAJ5wbkeZjEFqoN
   
   -----END PGP PUBLIC KEY BLOCK-----</code></pre>
	 </div>
   </section>
   
   
   <style>
	 :root {
	   --pgp-bg: #0f1115;
	   --pgp-panel: #151922;
	   --pgp-panel-2: #0c0f15;
	   --pgp-text: #e8edf5;
	   --pgp-muted: #a6b0c3;
	   --pgp-border: rgba(255, 255, 255, 0.12);
	   --pgp-border-strong: rgba(255, 255, 255, 0.18);
	   --pgp-accent: #8ab4ff;
	   --pgp-accent-2: #c9dcff;
	   --pgp-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
	   --pgp-radius: 20px;
	   --pgp-radius-sm: 12px;
	   --pgp-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
	   --pgp-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	 }
   
	 .pgp-card {
	   font-family: var(--pgp-sans);
	   color: var(--pgp-text);
	   background:
		 radial-gradient(circle at top right, rgba(138, 180, 255, 0.12), transparent 28%),
		 linear-gradient(180deg, var(--pgp-panel), var(--pgp-panel-2));
	   border: 1px solid var(--pgp-border);
	   border-radius: var(--pgp-radius);
	   box-shadow: var(--pgp-shadow);
	   padding: 1.5rem;
	   max-width: 860px;
	   margin: 2rem auto;
	 }
   
	 .pgp-card__header {
	   display: flex;
	   align-items: flex-start;
	   justify-content: space-between;
	   gap: 1rem;
	   margin-bottom: 1.25rem;
	 }
   
	 .pgp-eyebrow {
	   margin: 0 0 0.35rem;
	   color: var(--pgp-accent);
	   font-size: 0.8rem;
	   letter-spacing: 0.08em;
	   text-transform: uppercase;
	 }
   
	 .pgp-title {
	   margin: 0;
	   font-size: clamp(1.25rem, 1rem + 1vw, 1.85rem);
	   line-height: 1.2;
	   letter-spacing: -0.02em;
	   text-wrap: balance;
	 }
   
	 .pgp-copy-button {
	   appearance: none;
	   border: 1px solid var(--pgp-border-strong);
	   background: rgba(255, 255, 255, 0.04);
	   color: var(--pgp-text);
	   padding: 0.72rem 1rem;
	   border-radius: 999px;
	   font: inherit;
	   font-weight: 600;
	   cursor: pointer;
	   transition:
		 transform 120ms ease,
		 background 120ms ease,
		 border-color 120ms ease,
		 color 120ms ease;
	   white-space: nowrap;
	 }
   
	 .pgp-copy-button:hover {
	   background: rgba(138, 180, 255, 0.12);
	   border-color: rgba(138, 180, 255, 0.45);
	   color: var(--pgp-accent-2);
	 }
   
	 .pgp-copy-button:active {
	   transform: translateY(1px);
	 }
   
	 .pgp-copy-button:focus-visible {
	   outline: 2px solid var(--pgp-accent);
	   outline-offset: 2px;
	 }
   
	 .pgp-meta {
	   display: grid;
	   grid-template-columns: repeat(2, minmax(0, 1fr));
	   gap: 0.9rem 1rem;
	   margin: 0 0 1.4rem;
	 }
   
	 .pgp-meta__row {
	   margin: 0;
	   padding: 0.95rem 1rem;
	   border: 1px solid var(--pgp-border);
	   border-radius: 16px;
	   background: rgba(255, 255, 255, 0.025);
	 }
   
	 .pgp-meta__row--full {
	   grid-column: 1 / -1;
	 }
   
	 .pgp-meta dt {
	   margin: 0 0 0.35rem;
	   color: var(--pgp-muted);
	   font-size: 0.92rem;
	   font-weight: 600;
	 }
   
	 .pgp-meta dd {
	   margin: 0;
	   font-size: 1rem;
	   line-height: 1.55;
	 }
   
	 .pgp-fingerprint {
	   font-family: var(--pgp-mono);
	   font-size: 0.98rem;
	   line-height: 1.75;
	   letter-spacing: 0.03em;
	   word-break: break-word;
	 }
   
	 .pgp-fingerprint span {
	   display: block;
	 }
   
	 .pgp-key-wrap {
	   border: 1px solid var(--pgp-border);
	   border-radius: 18px;
	   overflow: hidden;
	   background: rgba(0, 0, 0, 0.22);
	 }
   
	 .pgp-key-toolbar {
	   display: flex;
	   align-items: center;
	   justify-content: space-between;
	   gap: 1rem;
	   padding: 0.8rem 1rem;
	   border-bottom: 1px solid var(--pgp-border);
	   background: rgba(255, 255, 255, 0.03);
	 }
   
	 .pgp-key-label {
	   color: var(--pgp-muted);
	   font-size: 0.92rem;
	   font-weight: 600;
	 }
   
	 .pgp-copy-status {
	   color: var(--pgp-accent-2);
	   font-size: 0.88rem;
	   min-height: 1.2em;
	   text-align: right;
	 }
   
	 .pgp-key-block {
	   margin: 0;
	   padding: 1.15rem 1rem 1.25rem;
	   font-family: var(--pgp-mono);
	   font-size: 0.95rem;
	   line-height: 1.65;
	   white-space: pre-wrap;
	   word-break: break-word;
	   overflow-x: auto;
	   color: #edf2ff;
	 }
   
	 .pgp-key-block code {
	   font-family: inherit;
	 }
   
	 @media (max-width: 700px) {
	   .pgp-card {
		 padding: 1rem;
		 border-radius: 16px;
	   }
   
	   .pgp-card__header {
		 flex-direction: column;
		 align-items: stretch;
	   }
   
	   .pgp-copy-button {
		 width: 100%;
		 justify-content: center;
	   }
   
	   .pgp-meta {
		 grid-template-columns: 1fr;
	   }
   
	   .pgp-key-toolbar {
		 flex-direction: column;
		 align-items: flex-start;
	   }
   
	   .pgp-copy-status {
		 text-align: left;
	   }
	 }
   </style>