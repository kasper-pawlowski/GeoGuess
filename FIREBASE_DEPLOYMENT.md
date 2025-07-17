# Firebase Hosting Setup

## Instrukcje wdrożenia

### 1. Zaloguj się do Firebase

```bash
firebase login
```

### 2. Utwórz nowy projekt Firebase (jeśli jeszcze nie masz)

```bash
firebase projects:create geoguess-quiz
```

### 3. Zbuduj aplikację

```bash
npm run build
```

### 4. Wdróż na Firebase Hosting

```bash
firebase deploy
```

### 5. Lub użyj skrótu

```bash
npm run deploy
```

## Konfiguracja

-   **Folder publiczny**: `dist` (folder budowania Vite)
-   **SPA Routing**: Skonfigurowane przekierowania dla React Router
-   **Cache**: Optymalizacja cache dla zasobów statycznych
-   **Projekt**: `geoguess-quiz`

## Zmienne środowiskowe Firebase

Upewnij się, że w Firebase Console masz skonfigurowane:

-   `VITE_FIREBASE_API_KEY`
-   `VITE_FIREBASE_AUTH_DOMAIN`
-   `VITE_FIREBASE_PROJECT_ID`
-   `VITE_FIREBASE_STORAGE_BUCKET`
-   `VITE_FIREBASE_MESSAGING_SENDER_ID`
-   `VITE_FIREBASE_APP_ID`

## Automatyczne wdrożenie

Po każdej zmianie:

```bash
npm run deploy
```

Aplikacja będzie dostępna pod adresem: `https://geoguess-quiz.web.app`
