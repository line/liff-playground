/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIFF_ID: string;
  readonly VITE_LIFF_ID_MINI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
