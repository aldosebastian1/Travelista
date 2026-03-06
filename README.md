# Travelista

Aplikasi travel agency berbasis Next.js App Router dengan fokus pada pengalaman premium, maintainability, dan kesiapan scaling bertahap.

## Arsitektur Mini: UI -> Service -> Repository

Struktur data layer saat ini mengikuti pola bertahap:

1. `UI layer` (page/component) hanya memanggil fungsi service.
2. `Service layer` (`travelService`) menjadi facade yang stabil untuk UI.
3. `Repository layer` menyediakan kontrak data source (`getList`, `getById`, `getCategories`).
4. `Adapter` saat ini memakai constants (`constantsTravelRepository`) sebagai implementasi awal.

Diagram alur:

```text
UI (pages/components)
  -> travelService
    -> travelRepository contract
      -> constantsTravelRepository adapter
        -> src/constants/index.js
```

## File Kunci

- `src/services/travelService.js`
- `src/services/travelRepository.js`
- `src/services/constantsTravelRepository.js`
- `src/constants/index.js`

## Kontrak Repository

Kontrak repository divalidasi melalui `assertTravelRepositoryContract`.
Method wajib:

- `getList()`
- `getById(id)`
- `getCategories()`

Jika salah satu method tidak ada, service akan melempar error contract violation.

## Cara Kerja Default Saat Ini

`travelService` menggunakan `createConstantsTravelRepository()` sebagai default adapter, sehingga behavior aplikasi tetap sama seperti sebelumnya, hanya layering-nya lebih modular.

## Titik Ekstensi (Next Step)

Untuk migrasi ke API/CMS di fase berikutnya:

1. Buat adapter baru (misalnya `apiTravelRepository.js`) dengan method kontrak yang sama.
2. Set adapter tersebut via `setTravelRepository()`.
3. UI tidak perlu diubah karena tetap konsumsi `travelService`.

Contoh pola injeksi:

```js
import { setTravelRepository } from "./src/services/travelService";
import { createApiTravelRepository } from "./src/services/apiTravelRepository";

setTravelRepository(createApiTravelRepository());
```

## Validasi Dasar

Gunakan quality gate standar sebelum merge:

- `npm run lint`
- `npm test`
- `npm run format:check`
